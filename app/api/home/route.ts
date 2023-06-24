import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  return NextResponse.json({ message: 'Hello Next.js API!' }, { status: 200 });
};
