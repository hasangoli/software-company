import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  return NextResponse.json(
    {
      header: {
        logo: '/assets/images/logo.png',
        data: [
          {
            title: 'How to start',
            href: '/',
            hasBg: true,
          },
          {
            title: 'Services',
            href: '/',
            children: [
              {
                title: 'Test 1',
                href: '/',
              },
              {
                title: 'Test 2',
                href: '/',
              },
            ],
          },
          {
            title: 'Technologies',
            href: '/',
            children: [
              {
                title: 'Test 1',
                href: '/',
              },
              {
                title: 'Test 2',
                href: '/',
              },
            ],
          },
          {
            title: 'Careers',
            href: '/',
          },
        ],
      },
    },
    { status: 200 }
  );
};
