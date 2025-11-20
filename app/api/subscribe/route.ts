import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log for now - you'll connect Google Sheets here later
    console.log('New signup:', email, new Date().toISOString());

    // TODO: Add Google Sheets integration here
    // For now, emails are logged to console

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing signup:', error);
    return NextResponse.json(
      { error: 'Failed to process signup' },
      { status: 500 }
    );
  }
}
