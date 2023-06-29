import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  return NextResponse.json(
    {
      hero: {
        image: '/assets/images/hero.jpg',
        title: 'Building dev team, Quickly and Affordably',
        description:
          'We specialize in helping you build a team of expert developers, testers, and leaders. We are setup to deliver long term solutions, or scale to different needs quickly.',
      },
      solutions: {
        title: 'Solutions',
        mainTitle: 'Software Solutions, with expert software engineering teams',
        description:
          'We specialize in helping you build a team of expert developers, testers, and leaders.',
        data: [
          {
            image: '/assets/images/solution01.png',
            title: 'Architect your Solution',
            description:
              'Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your business. We design a strategic roadmap to guide your result-oriented goals.',
          },
          {
            image: '/assets/images/solution02.png',
            title: 'Engineer your Solution',
            description:
              'We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and industry-specific experience.',
          },
          {
            image: '/assets/images/solution03.png',
            title: 'ReEngineer your Business Process',
            description:
              'Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This process places the foundation for a more efficient and strong business that can meet demands at scale.',
          },
        ],
      },
      processes: {
        title: 'How to Start',
        mainTitle: 'Easy Process',
        description:
          'We specialize in helping you build a team of expert developers, testers, and leaders.',
        data: [
          {
            number: '01',
            image: '/assets/images/Process01.png',
            title: 'you ask',
          },
          {
            number: '02',
            image: '/assets/images/Process02.png',
            title: 'we proceed',
          },
          {
            number: '03',
            image: '/assets/images/Process03.png',
            title: 'negotiate',
          },
          {
            number: '04',
            image: '/assets/images/Process04.png',
            title: 'you get',
          },
        ],
      },
      expertise: {
        title: 'Expertise',
        mainTitle: 'Hire Permanent and Remote Developers',
        description:
          'From full-time remote engineering teams to hourly contractors, work with remote devs as needed.',
        data: [
          {
            image: '/assets/images/expertise01.png',
            title: 'Dedicated Teams',
            description: 'Find your next team member',
          },
          {
            image: '/assets/images/expertise02.png',
            title: 'Staff Augmentation',
            description: 'Build a distributed development team',
          },
          {
            image: '/assets/images/expertise03.png',
            title: 'Software Outsourcing',
            description:
              'End-to-End Software Development Outsourcing Solutions',
          },
          {
            image: '/assets/images/expertise04.png',
            title: 'Remote Office',
            description:
              'Open your own remote development center and grow your business',
          },
        ],
      },
      specialized: {
        title: 'Specialized',
        mainTitle: 'Specialized Staff We Provide',
        data: [
          {
            items: [
              {
                image: '/assets/images/spec01.png',
                title: 'Frontend Engineers',
              },
              {
                image: '/assets/images/spec02.png',
                title: 'Fullstack Engineers',
              },
              {
                image: '/assets/images/spec03.png',
                title: 'UI/UX Engineers',
              },
              {
                image: '/assets/images/spec04.png',
                title: 'QA Engineers',
              },
              {
                image: '/assets/images/spec05.png',
                title: 'Product Designer',
              },
              {
                image: '/assets/images/spec06.png',
                title: 'Database Admin',
              },
            ],
          },
          {
            items: [
              {
                image: '/assets/images/spec07.png',
                title: 'Angular Developers',
              },
              {
                image: '/assets/images/spec08.png',
                title: 'DevOps + DevSecOps Engineers',
              },
              {
                image: '/assets/images/spec09.png',
                title: 'PHP Developers',
              },
              {
                image: '/assets/images/spec10.png',
                title: 'Wordpress CMS Developers',
              },
              {
                image: '/assets/images/spec11.png',
                title: 'Mobile App Developers',
              },
            ],
          },
          {
            items: [
              {
                image: '/assets/images/spec12.png',
                title: 'AI and ML Engineers Deep Learning/Machine Vision/NLP',
              },
              {
                image: '/assets/images/spec13.png',
                title: 'Data Scientist / Data Engineers',
              },
              {
                image: '/assets/images/spec14.png',
                title: 'Project Managers',
              },
              {
                image: '/assets/images/spec15.png',
                title: 'Business Analyst',
              },
              {
                image: '/assets/images/spec16.png',
                title: 'Information Security Engineers',
              },
            ],
          },
          {
            items: [
              {
                image: '/assets/images/spec17.png',
                title: 'Application Security Engineers',
              },
              {
                image: '/assets/images/spec18.png',
                title: 'IOS and Android Developers',
              },
              {
                image: '/assets/images/spec19.png',
                title: 'Solution Architects',
              },
              {
                image: '/assets/images/spec20.png',
                title: 'Tech Leads / Team Leads',
              },
              {
                image: '/assets/images/spec21.png',
                title: 'Golang Dev',
              },
            ],
          },
        ],
      },
      technologies: {
        title: 'Specialized',
        mainTitle: 'Technologies',
        logos: [
          '/assets/images/express-original.svg',
          '/assets/images/mongodb-original.svg',
          '/assets/images/nestjs-plain.svg',
          '/assets/images/nextjs-original.svg',
          '/assets/images/nodejs-original.svg',
          '/assets/images/npm-original-wordmark.svg',
          '/assets/images/react-original.svg',
        ],
      },
      clients: {
        title: 'Clients',
        mainTitle: 'Amazing clients who trust us',
        logos: [
          '/assets/images/client01.png',
          '/assets/images/client02.png',
          '/assets/images/client03.png',
          '/assets/images/client04.png',
          '/assets/images/client05.png',
          '/assets/images/client06.png',
          '/assets/images/client07.png',
        ],
      },
    },
    { status: 200 }
  );
};
