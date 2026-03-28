import { NextResponse } from 'next/server';
import { ADMIN_USER, ADMIN_PASS, VALID_TOKEN } from '@/lib/auth';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      const response = NextResponse.json({ success: true });
      // Set httpOnly cookie for 7 days
      response.cookies.set('admin_token', VALID_TOKEN, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });
      return response;
    }

    return NextResponse.json(
      { success: false, error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
