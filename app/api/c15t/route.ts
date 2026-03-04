import { NextRequest, NextResponse } from 'next/server';
import { withRateLimit, validateOrigin, addSecurityHeaders } from '@/lib/api-security';

/**
 * C15t API route handler for consent management
 * 
 * This route handles all consent-related requests from the c15t consent manager.
 * For the 'c15t' mode, this should proxy to a hosted c15t instance or use a local backend.
 * 
 * ⚠️ PRODUCTION NOTE: This is a basic implementation. For production, you should:
 * 1. Use a hosted c15t instance (consent.io) and proxy to it, OR
 * 2. Set up a self-hosted c15t backend with database storage, OR
 * 3. Use 'offline' mode instead of 'c15t' mode for localStorage-only
 * 
 * @see https://c15t.com/docs/self-host/v2
 */
async function handleGET(request: NextRequest) {
  // Validate origin
  if (!validateOrigin(request)) {
    return NextResponse.json(
      { error: 'Forbidden' },
      { status: 403 }
    );
  }

  try {
    // Handle GET requests (e.g., fetching consent status)
    const searchParams = request.nextUrl.searchParams;
    
    // Return a basic response structure
    const response = NextResponse.json({
      success: true,
      data: {
        consent: null,
        categories: ['necessary', 'marketing'],
      },
    });
    
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('C15t API error:', error);
    const errorResponse = NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
    return addSecurityHeaders(errorResponse);
  }
}

async function handlePOST(request: NextRequest) {
  // Validate origin
  if (!validateOrigin(request)) {
    return NextResponse.json(
      { error: 'Forbidden' },
      { status: 403 }
    );
  }

  try {
    // Handle POST requests (e.g., setting consent)
    const body = await request.json();
    
    // Basic validation
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }
    
    // In a real implementation, you would:
    // 1. Validate the consent data with Zod or similar
    // 2. Store it in your database or backend
    // 3. Log the consent event for audit purposes
    // 4. Return the stored consent
    
    const response = NextResponse.json({
      success: true,
      data: {
        consent: body.consent || {},
        timestamp: new Date().toISOString(),
      },
    });
    
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('C15t API error:', error);
    const errorResponse = NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
    return addSecurityHeaders(errorResponse);
  }
}

async function handlePUT(request: NextRequest) {
  // Validate origin
  if (!validateOrigin(request)) {
    return NextResponse.json(
      { error: 'Forbidden' },
      { status: 403 }
    );
  }

  try {
    // Handle PUT requests (e.g., updating consent)
    const body = await request.json();
    
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }
    
    const response = NextResponse.json({
      success: true,
      data: {
        consent: body.consent || {},
        timestamp: new Date().toISOString(),
      },
    });
    
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('C15t API error:', error);
    const errorResponse = NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
    return addSecurityHeaders(errorResponse);
  }
}

async function handleDELETE(request: NextRequest) {
  // Validate origin
  if (!validateOrigin(request)) {
    return NextResponse.json(
      { error: 'Forbidden' },
      { status: 403 }
    );
  }

  try {
    // Handle DELETE requests (e.g., revoking consent)
    const response = NextResponse.json({
      success: true,
      message: 'Consent revoked',
    });
    
    return addSecurityHeaders(response);
  } catch (error) {
    console.error('C15t API error:', error);
    const errorResponse = NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
    return addSecurityHeaders(errorResponse);
  }
}

// Export with rate limiting applied
export const GET = withRateLimit(handleGET, { windowMs: 60000, maxRequests: 100 });
export const POST = withRateLimit(handlePOST, { windowMs: 60000, maxRequests: 50 });
export const PUT = withRateLimit(handlePUT, { windowMs: 60000, maxRequests: 50 });
export const DELETE = withRateLimit(handleDELETE, { windowMs: 60000, maxRequests: 50 });




