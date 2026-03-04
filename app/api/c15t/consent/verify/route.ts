import { NextRequest, NextResponse } from 'next/server';

/**
 * C15t API route: consent/verify
 * 
 * Verifies if a user has given consent for specific categories.
 * This endpoint checks the current consent status.
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');
    const category = searchParams.get('category');
    
    // In a real implementation, you would:
    // 1. Look up the user's consent in your database
    // 2. Check if consent exists for the requested category
    // 3. Return the consent status
    
    // For now, return a default response
    return NextResponse.json({
      success: true,
      data: {
        userId: userId || 'anonymous',
        category: category || 'all',
        consented: false, // Default to false - user needs to give consent
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('C15t consent/verify error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

