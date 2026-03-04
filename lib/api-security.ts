import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getClientIdentifier } from './rate-limit';

/**
 * Middleware for API route security
 */

/**
 * Apply rate limiting to API routes
 */
export function withRateLimit(
  handler: (request: NextRequest) => Promise<NextResponse>,
  options?: { windowMs?: number; maxRequests?: number }
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    const identifier = getClientIdentifier(request);
    const limit = rateLimit(identifier, {
      windowMs: options?.windowMs || 60000, // 1 minute
      maxRequests: options?.maxRequests || 100,
    });

    if (!limit.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests',
          message: 'Rate limit exceeded. Please try again later.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((limit.resetTime - Date.now()) / 1000)),
            'X-RateLimit-Limit': String(options?.maxRequests || 100),
            'X-RateLimit-Remaining': String(limit.remaining),
            'X-RateLimit-Reset': String(limit.resetTime),
          },
        }
      );
    }

    const response = await handler(request);
    
    // Add rate limit headers to response
    response.headers.set('X-RateLimit-Limit', String(options?.maxRequests || 100));
    response.headers.set('X-RateLimit-Remaining', String(limit.remaining));
    response.headers.set('X-RateLimit-Reset', String(limit.resetTime));

    return response;
  };
}

/**
 * Validate request origin (CORS)
 */
export function validateOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const allowedOrigins = [
    process.env.NEXT_PUBLIC_BASE_URL,
    'https://doqshare.com',
    'https://www.doqshare.com',
  ].filter(Boolean);

  // Allow same-origin requests
  if (!origin) {
    return true;
  }

  // In development, allow localhost
  if (process.env.NODE_ENV === 'development') {
    return true;
  }

  return allowedOrigins.some(allowed => allowed && origin.startsWith(allowed));
}

/**
 * Add security headers to response
 */
export function addSecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
}

