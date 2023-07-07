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
      footer: {
        logo: '/assets/images/logo.png',
        description:
          'Expertly trained, battle-tested, elite software developers on demand',
        tel: {
          title: '094713249222',
          icon: '/assets/images/Phone.svg',
        },
        email: {
          title: 'hello@courtney.lk',
          icon: '/assets/images/Email.svg',
        },
        address: {
          title:
            'Courtney Lanka (Private) LimitedLevel 35World Trade CenterColombo 01',
          icon: '/assets/images/Location.svg',
        },
        links: [
          {
            title: 'Company',
            children: [
              {
                title: 'About Us',
                href: '#',
              },
              {
                title: 'Success Stories',
                href: '#',
              },
              {
                title: 'Privacy policy',
                href: '#',
              },
              {
                title: 'Terms & Conditions',
                href: '#',
              },
              {
                title: 'Contact Us',
                href: '#',
              },
            ],
          },
          {
            title: 'Services',
            children: [
              {
                title: 'Hire Permanent Staff',
                href: '#',
              },
              {
                title: 'Staff Augmentation',
                href: '#',
              },
              {
                title: 'Software Outsourcing',
                href: '#',
              },
              {
                title: 'Build Remote Office',
                href: '#',
              },
            ],
          },
          {
            title: 'How to Start',
            children: [
              {
                title: 'You Asked',
                href: '#',
              },
              {
                title: 'We Proceed',
                href: '#',
              },
              {
                title: 'Negotiate',
                href: '#',
              },
              {
                title: 'You Get',
                href: '#',
              },
            ],
          },
        ],
        socials: [
          {
            link: '#',
            icon: '/assets/images/Linkedin.svg',
          },
          {
            link: '#',
            icon: '/assets/images/Facebook.svg',
          },
          {
            link: '#',
            icon: '/assets/images/Instagram.svg',
          },
          {
            link: '#',
            icon: '/assets/images/Twitter.svg',
          },
          {
            link: '#',
            icon: '/assets/images/Youtube.svg',
          },
        ],
      },
    },
    { status: 200 }
  );
};
