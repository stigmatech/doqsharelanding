import { NextRequest, NextResponse } from 'next/server';

/**
 * C15t API route: status
 * 
 * Returns the status of the c15t service.
 * This endpoint is used for health checks and service status.
 */
export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      status: 'operational',
      version: '1.8.1',
      timestamp: new Date().toISOString(),
      features: {
        consentManagement: true,
        geoLocation: false, // Set to true if you implement geo-location
        auditLogging: false, // Set to true if you implement audit logging
      },
    });
  } catch (error) {
    console.error('C15t status error:', error);
    return NextResponse.json(
      { 
        success: false,
        status: 'error',
        error: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

