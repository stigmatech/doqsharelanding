import { NextRequest, NextResponse } from 'next/server';

/**
 * C15t API route: show-consent-banner
 * 
 * This endpoint determines whether the consent banner should be shown to the user.
 * It checks if the user has already given consent or if consent is required.
 * 
 * @see https://c15t.com/docs/self-host/v2
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userAgent = request.headers.get('user-agent') || '';
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check if user has already given consent (in a real implementation, 
    // this would check a database or cookie)
    // For now, we'll always return true to show the banner
    // In production, you should check if consent already exists
    
    const shouldShowBanner = true; // Always show banner for now
    
    return NextResponse.json({
      show: shouldShowBanner,
      categories: ['necessary', 'marketing'],
      // Optional: Include geo-location logic here
      // ignoreGeoLocation is set to true in consent-manager.tsx for development
    });
  } catch (error) {
    console.error('C15t show-consent-banner error:', error);
    return NextResponse.json(
      { 
        show: true, // Default to showing banner on error
        error: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

