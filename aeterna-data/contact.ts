export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Process your data here...
    
    // Return response using native Web API
    return Response.json({
      success: true,
      message: 'Contact form submitted successfully',
      data,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: 'Invalid request data',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 400 }
    );
  }
}
