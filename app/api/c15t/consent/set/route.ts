import { NextRequest, NextResponse } from 'next/server';

/**
 * C15t API route: consent/set
 * 
 * Sets or updates user consent preferences.
 * This endpoint stores the user's consent choices.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, consent, categories } = body;
    
    // In a real implementation, you would:
    // 1. Validate the consent data
    // 2. Store it in your database
    // 3. Log the consent event for audit purposes
    
    return NextResponse.json({
      success: true,
      data: {
        userId: userId || 'anonymous',
        consent: consent || {},
        categories: categories || ['necessary', 'marketing'],
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('C15t consent/set error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

