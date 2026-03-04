/**
 * Simple in-memory rate limiter for API routes
 * 
 * ⚠️ For production, consider using:
 * - Redis-based rate limiting
 * - Vercel Edge Config
 * - Upstash Rate Limit
 * - Or a dedicated rate limiting service
 */

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

interface RateLimitOptions {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per window
}

export function rateLimit(
  identifier: string,
  options: RateLimitOptions = { windowMs: 60000, maxRequests: 100 }
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const key = identifier;
  
  // Clean up expired entries (simple cleanup)
  if (Object.keys(store).length > 10000) {
    Object.keys(store).forEach((k) => {
      if (store[k].resetTime < now) {
        delete store[k];
      }
    });
  }
  
  const record = store[key];
  
  if (!record || record.resetTime < now) {
    // Create new record or reset expired one
    store[key] = {
      count: 1,
      resetTime: now + options.windowMs,
    };
    return {
      allowed: true,
      remaining: options.maxRequests - 1,
      resetTime: store[key].resetTime,
    };
  }
  
  if (record.count >= options.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }
  
  record.count++;
  return {
    allowed: true,
    remaining: options.maxRequests - record.count,
    resetTime: record.resetTime,
  };
}

/**
 * Get client identifier from request
 */
export function getClientIdentifier(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 
             request.headers.get('x-real-ip') || 
             'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';
  
  // Combine IP and user agent for better identification
  return `${ip}-${userAgent.slice(0, 50)}`;
}

