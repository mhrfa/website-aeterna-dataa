export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const data = await request.json();
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
