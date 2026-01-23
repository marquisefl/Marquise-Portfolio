import { Project, Experience } from './types';

const BASE_PATH = import.meta.env.BASE_URL || '/Marquise-Portfolio/';

export const PROJECTS: Project[] = [
  {
    id: 'kaiser-permanente',
    title: 'Kaiser Permanente',
    subtitle: 'Becoming one of America\'s most trusted medical brand',
    category: 'Healthcare Design',
    description: 'Becoming one of America\'s most trusted medical brand.',
    imageUrl: `${BASE_PATH}images/kaiser_permanente_project.png`,
    heroImage: `${BASE_PATH}images/kaiser_01_hero.webp`,
    tags: ['Healthcare', 'Personalization', 'Mobile UI'],
    client: 'Kaiser Permanente',
    services: 'User Experience and Interface Design',
    industries: 'Medical',
    date: 'June 2022',
    sections: [
      {
        type: 'text',
        number: '01',
        title: 'Discovery',
        subtitle: 'About',
        content: 'Kaiser Permanente partnered with YML to craft a vision for a unified experience that will boost brand awareness, and influence digital-first, health content seekers to return to KP.org as their trusted source of health content, ultimately increasing membership. Internally, our goal was even loftier: Help KP become one of America\'s trusted brands. As one of three designers on this project, I collaborated daily with KP design leadership and strategists, conducted and synthesized research, defined a new visual language and delivered prototypes, a digital playbook and a UI kit. Our recommendations are expected to be rolled out gradually over the next few years.'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/kaiser_03_doctor.webp`,
        alt: 'Doctor with child patient'
      },
      {
        type: 'text',
        number: '02',
        title: 'Research',
        subtitle: 'Knowledge Learning',
        content: 'During our discovery, I collaborated closely with a KP researcher, a content strategist and our product manager. I wanted to understand our users\' goals and desired outcomes, their content preferences, and how they currently engage with competitor sites and best-in-class content destinations.',
        stats: [
          { value: '12', label: 'User Interviews' },
          { value: '2', label: 'User Group Types' },
          { value: '9', label: 'Stakeholder Interviews' },
          { value: '6', label: 'Competitors Audited' }
        ]
      },
      {
        type: 'text',
        content: 'During our research, we also examined the unique challenges presented by COVID-19. Remote interviews and surveys revealed a growing reliance on digital healthcare solutions, but we discovered a critical gap in how users accessed telehealth services and fulfilled prescriptions online. Many members found the experience fragmented—navigating between separate platforms for appointments, medication refills, and follow-ups. These insights highlighted an urgent need to design more seamless, integrated digital touchpoints that could support members\' healthcare journeys end-to-end.'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/kaiser_04_ui_screens.webp`,
        alt: 'Kaiser UI screens showing doctor profile and health articles'
      },
      {
        type: 'challenge',
        number: '03',
        title: '#TheChallenge',
        content: 'We faced the challenge of redesigning an outdated, complex design system into a calming and inviting experience that could adapt across different regions without relying on red. At the same time, we needed to ensure users could seamlessly connect with doctors, refill prescriptions, and track their medication fulfillment in one integrated platform.'
      },
      {
        type: 'text',
        number: '04',
        title: 'Our Approach',
        subtitle: 'Human-centered',
        content: 'We are committed to building a safer Twitter community for everyone. Thank you for taking action and helping us keep this space welcoming for all. Reporting harmful content is crucial, and we\'re here to support you in making Twitter a better place. Our team is actively working to address violations and will keep you informed with real-time updates.'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/kaiser_05_website.webp`,
        alt: 'Kaiser Permanente website design'
      },
      {
        type: 'principles',
        number: '05',
        title: 'Perspective',
        items: [
          { title: 'Community', description: 'This design style fosters community by creating a unified, accessible experience that connects members to care and to each other.' },
          { title: 'Inviting', description: 'The calming visuals and approachable interface make healthcare feel more welcoming and less intimidating for Kaiser members.' },
          { title: 'Reassuring', description: 'By providing clarity, consistency, and ease of use, the design style reassures members that their health needs are supported with trust and reliability.' }
        ]
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/kaiser_06_articles.webp`,
        alt: 'Kaiser Latest articles UI mockup'
      },
      {
        type: 'text',
        number: '06',
        title: 'Design Show Case'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/kaiser_07_tasks.webp`,
        alt: 'Kaiser task dashboard'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/kaiser_08_dashboard.webp`,
        alt: 'Kaiser dashboard showing Care Team, Pharmacy, Membership ID'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/kaiser_09_health.webp`,
        alt: 'Kaiser Your health Our cause section'
      },
      {
        type: 'reflection',
        number: '07',
        title: 'Reflection',
        subtitle: 'What we learned',
        items: [
          'Trust is Built Through Transparency and Consistency',
          'Empathy is Key to Shaping User Perceptions',
          'A Unified Identity Drives Engagement and Recognition'
        ]
      }
    ]
  },
  {
    id: 'twitter-health',
    title: 'Twitter Health',
    subtitle: 'Rethink how the Twitter community interacts with Twitter Health',
    category: 'Social Media Safety',
    description: 'Rethink how the Twitter community interacts with Twitter Health and how it supports them.',
    imageUrl: `${BASE_PATH}images/twitter_health_project.jpg`,
    heroImage: `${BASE_PATH}images/twitter_01_hero.webp`,
    tags: ['Social Media', 'Brand Identity', 'UX Strategy'],
    client: 'Twitter',
    services: 'User Experience and Interface Design',
    industries: 'Social Media',
    date: 'June 2022',
    sections: [
      {
        type: 'text',
        number: '01',
        title: 'Discovery',
        subtitle: 'Knowledge Learning',
        content: 'Twitter partnered with YML to explore ways to improve the health of conversations on the platform. Our goal was to create features that would help users feel safer and more supported when engaging with content and other users. As a lead designer on this project, I worked closely with Twitter\'s trust and safety team to understand the challenges users face and develop solutions that would make Twitter a more welcoming place for everyone.'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/twitter_02_fastcompany.webp`,
        alt: 'Fast Company article about Twitter Health'
      },
      {
        type: 'text',
        number: '02',
        title: 'Research',
        subtitle: 'Knowledge Learning',
        content: 'During our discovery, I collaborated closely with Twitter researchers and product managers to understand the current state of conversations on the platform. We conducted extensive user research to identify pain points and opportunities for improvement.',
        stats: [
          { value: '25', label: 'User Interviews' },
          { value: '30+', label: 'User Group Types' },
          { value: '5', label: 'Stakeholder Interviews' },
          { value: '100', label: 'Data points analyzed' }
        ]
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/twitter_03_user.webp`,
        alt: 'Twitter user at computer'
      },
      {
        type: 'challenge',
        number: '03',
        title: '#TheChallenge',
        content: 'We faced the challenge of creating a system that could identify and address harmful content while still preserving the open nature of conversations on Twitter. We needed to balance user safety with freedom of expression, and create tools that would empower users to take control of their own experience.'
      },
      {
        type: 'text',
        number: '04',
        title: 'Insights & Opportunities',
        subtitle: 'Synthesis',
        bullets: [
          'Users Feel Unsafe When Engaging with Controversial Topics',
          'There\'s a Strong Desire for More Control Over Who Can Reply',
          'Transparency About Moderation Builds Trust',
          'Community Support Features Are Highly Valued'
        ]
      },
      {
        type: 'text',
        number: '05',
        title: 'Our Approach',
        subtitle: 'Empathetic, Human, Transparent',
        content: 'We are committed to building a safer Twitter community for everyone. Thank you for taking action and helping us keep this space welcoming for all. Reporting harmful content is crucial, and we\'re here to support you in making Twitter a better place. Our team is actively working to address violations and will keep you informed with real-time updates.'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/twitter_04_culture.webp`,
        alt: 'Creating Culture'
      },
      {
        type: 'principles',
        number: '06',
        title: 'How we create the culture',
        items: [
          { title: 'Community', description: 'Building features that foster positive interactions and support among users.' },
          { title: 'Stakeholders', description: 'Working closely with trust and safety teams to ensure our solutions are effective.' },
          { title: 'Company', description: 'Aligning our design decisions with Twitter\'s mission to serve the public conversation.' }
        ]
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/twitter_05_personas.webp`,
        alt: 'User Personas'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/twitter_06_personas2.webp`,
        alt: 'User Personas continued'
      },
      {
        type: 'text',
        number: '07',
        title: 'Defining a design language',
        subtitle: 'Supportive'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/twitter_07_mobile_ui.webp`,
        alt: 'Twitter mobile UI'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/twitter_08_supportive.webp`,
        alt: 'Supportive section'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/twitter_09_fair.webp`,
        alt: 'Fair section'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/twitter_10_strength.webp`,
        alt: 'Strength in Numbers'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/twitter_11_bold.webp`,
        alt: 'Bold section'
      },
      {
        type: 'reflection',
        number: '09',
        title: 'Reflection',
        subtitle: 'What we learned',
        items: [
          'Simplifying Complexity is a Powerful Skill',
          'Empathy Drives Design',
          'Collaboration is Key to Innovation'
        ]
      }
    ]
  },
  {
    id: 'elevate',
    title: 'Elevate',
    subtitle: 'Delivering tailored financial solutions for non-prime users',
    category: 'Fintech',
    description: 'Delivering tailored financial solutions for non-prime users.',
    imageUrl: `${BASE_PATH}images/elevate_project.jpg`,
    heroImage: `${BASE_PATH}images/elevate_01_hero.webp`,
    tags: ['Fintech', 'Mobile', 'Financial Wellness'],
    client: 'Elevate',
    services: 'Visual Design, UI & UX Design',
    industries: 'Financial',
    date: 'August 2022',
    sections: [
      {
        type: 'text',
        number: '01',
        title: 'Discovery',
        subtitle: 'About',
        content: 'During the discovery phase, we explored Elevate\'s vision to create a financial savings plan that empowers users to pay down debt effectively. This innovative experience would enable users to connect their bank accounts and upload their credit reports, providing a holistic view of their financial situation. With these insights, users could select personalized plans tailored to their unique needs and goals.'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/elevate_02_userflow.webp`,
        alt: 'Elevate user flow diagrams'
      },
      {
        type: 'text',
        number: '02',
        title: 'Research',
        subtitle: 'Asking the right people the right questions',
        content: 'In the research phase, we conducted in-depth interviews with both users and stakeholders to gain a comprehensive understanding of their needs and expectations. We also analyzed Elevate\'s competitors, performing a detailed competitive analysis to identify opportunities for differentiation. Through this process, we discovered how Elevate\'s in-person meetings with users play a crucial role in fulfilling their financial journey. These insights allowed us to align our design strategy with Elevate\'s mission to create impactful, user-centered solutions.'
      },
      {
        type: 'text',
        number: '03',
        title: 'Insights & Opportunities',
        subtitle: 'Synthesis',
        content: 'After multiple client workshops and alignment sessions with our internal team, it became clear where we needed to focus our attention heading into design.',
        bullets: [
          'Users Feel Overwhelmed by the Complexity of Their Financial Situation',
          'There\'s a Strong Desire for Tailored Guidance',
          'Small Wins Motivate Users to Stay Committed'
        ]
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/elevate_03_journey.webp`,
        alt: 'Elevate user journey diagram'
      },
      {
        type: 'text',
        content: 'In the first step of defining our user flow, we designed a tailored sign-up experience that gathered key insights about our users. By understanding their specific financial needs and challenges, we were able to recommend personalized solutions that aligned with their goals. This approach ensured that each user received the most relevant tools and resources to support their journey toward financial stability.'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/elevate_04_signup.webp`,
        alt: 'Elevate sign up flow mobile screens'
      },
      {
        type: 'text',
        content: 'We carefully listened to these user insights and used them as the foundation for brainstorming solutions that directly address their needs. By focusing on their challenges, motivations, and emotional barriers, we developed strategies to simplify complex processes, provide personalized guidance, and deliver small wins that keep users motivated. This collaborative approach ensured that our solutions were not only practical but also empathetic to the unique struggles users face.'
      },
      {
        type: 'text',
        number: '04',
        title: 'Synthesizing the Data',
        subtitle: 'To Create Financial Plans'
      },
      {
        type: 'principles',
        items: [
          { title: 'Snowball Plan', description: 'The Snowball method prioritizes tackling your smallest debts first, progressing to larger ones over time. This approach allows you to see quick wins as you pay off accounts, though it may result in higher overall interest costs.' },
          { title: 'Avalanche Plan', description: 'The Avalanche method prioritizes paying off debts with the highest interest rates first, saving you money on interest over time. While it may take longer to see accounts fully paid off, this approach minimizes total costs.' }
        ]
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/elevate_05_plans.webp`,
        alt: 'Elevate financial plans UI'
      },
      {
        type: 'text',
        number: '05',
        title: 'Communicating through design',
        content: 'We explored a variety of design languages to create a clear and intuitive experience that helps users easily understand how we plan to address their debt and achieve their financial goals. By prioritizing simplicity and clarity, we ensured the design communicated actionable solutions tailored to their unique needs.'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/elevate_06_debt.webp`,
        alt: 'Elevate tackle your debt UI screens'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/elevate_07_dashboard.webp`,
        alt: 'Elevate dashboard and mobile screens'
      },
      {
        type: 'text',
        number: '06',
        title: 'Your Guide to Building a Stronger Score',
        content: 'Experience designed to empower users with actionable insights to improve their credit scores. We crafted this program to not only educate users on effective credit-building strategies but also to celebrate their accomplishments along the way. Each milestone reached is met with personalized rewards and recognition, keeping users motivated on their journey. By combining guidance with encouragement, Credit Boost makes the path to financial wellness both achievable and rewarding.'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/elevate_08_payoff.webp`,
        alt: 'Elevate payoff tracking dashboard'
      },
      {
        type: 'reflection',
        number: '07',
        title: 'Reflection',
        subtitle: 'What we learned',
        items: [
          'Simplifying Complexity is a Powerful Skill',
          'Empathy Drives Design',
          'Collaboration is Key to Innovation'
        ]
      }
    ]
  },
  {
    id: 'under-armour',
    title: 'Under Armour',
    subtitle: 'Reimagined the athletic shopping experience',
    category: 'E-commerce',
    description: 'Reimagined the athletic shopping experience with bold, dynamic, and competitive design solutions.',
    imageUrl: `${BASE_PATH}images/under_armour_project.jpg`,
    heroImage: `${BASE_PATH}images/ua_01_hero.webp`,
    tags: ['E-commerce', 'Retail', 'Mobile'],
    client: 'Under Armour',
    services: 'Visual Design, UI & UX Design',
    industries: 'E-commerce',
    date: 'August 2022',
    sections: [
      {
        type: 'text',
        number: '01',
        title: 'Discovery',
        subtitle: 'Knowledge Learning',
        content: 'Under Armour partnered with YML to redesign and reimagine their online shopping experience, aligning it with their bold and athletic brand identity. The collaboration aimed to create a seamless, user-centric interface that embodied the energy and competitive spirit of the Under Armour brand. Together, we focused on enhancing the customer journey by integrating modern design elements and intuitive functionality. This partnership helped position Under Armour to compete more effectively with top industry players while delivering an elevated digital experience.'
      },
      {
        type: 'text',
        content: 'During the discovery phase, we uncovered key insights that shaped our approach to the redesign. Users felt that Under Armour\'s existing digital experience was outdated and lacked the advanced features offered by other leading athletic brands, such as personalized recommendations and robust community engagement tools. Stakeholders emphasized the need for a design that not only showcased athletic performance but also highlighted lifestyle elements to resonate with a broader audience. Additionally, there was a strong desire to create a sense of community within the platform, fostering connections among customers and aligning with the brand\'s commitment to empowering athletes at every level. These findings laid the foundation for a user-centered, modern redesign.'
      },
      {
        type: 'text',
        number: '02',
        title: 'Research',
        subtitle: 'Asking the right people the right questions',
        content: 'To inform the redesign, we conducted in-depth interviews with both consumers and stakeholders, uncovering valuable perspectives that shaped our approach. Consumers expressed a strong desire for an immersive shopping experience that combines engaging visuals with intuitive features, making the platform seamless and enjoyable to navigate. Stakeholders emphasized the importance of integrating lifestyle-driven elements into the design, aiming to align the shopping experience with consumers\' daily routines and inspire more frequent purchases. Additionally, we ran a competitive analysis on the top three leaders in the athletic industry, identifying key features and design strategies that set them apart. These insights guided our efforts to craft a user experience that not only meets but exceeds current industry standards.',
        stats: [
          { value: '7', label: 'User Interviews' },
          { value: '4', label: 'Stakeholder Interviews' },
          { value: '3', label: 'Competitors Audited' },
          { value: '3', label: 'Data points analyzed' }
        ]
      },
      {
        type: 'text',
        number: '03',
        title: 'Insights & Opportunities',
        subtitle: 'Synthesis',
        content: 'After multiple client workshops and alignment sessions with our internal team, it became clear where we needed to focus our attention heading into design.',
        bullets: [
          'Consumers Crave Immersion and Ease of Use',
          'Lifestyle Integration Drives Engagement',
          'Competitors Set High Expectations',
          'Community is a Key Opportunity'
        ]
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/ua_02_shoes.webp`,
        alt: 'Under Armour Project Rock shoes product card'
      },
      {
        type: 'text',
        number: '04',
        title: 'Starting Fresh',
        subtitle: 'Design System',
        content: 'We explored a bold design language that seamlessly blended athleticism with lifestyle elements, creating a dynamic and visually engaging experience. This approach emphasized Under Armour\'s energetic brand identity while showcasing how their products integrate into both performance and everyday life.'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/ua_03_figma.webp`,
        alt: 'Under Armour Figma design system'
      },
      {
        type: 'text',
        number: '05',
        title: 'Elevation',
        content: 'We aimed to explore innovative ways to highlight key pieces within each collection, ensuring they captured the user\'s attention. By incorporating bold visuals and strategic layouts, we brought focus to standout items, making them irresistible focal points. On the collection pages, we amplified this approach by designing elements that made these items pop even more, creating a sense of exclusivity and allure. This intentional emphasis encouraged users to engage deeply with the collections and feel naturally drawn to explore and purchase.'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/ua_04_products.webp`,
        alt: 'Under Armour product grid'
      },
      {
        type: 'text',
        number: '06',
        title: 'Design',
        subtitle: 'We listened',
        content: 'We explored a variety of design languages to create a clear and intuitive experience that helps users easily understand how we plan to address their debt and achieve their financial goals. By prioritizing simplicity and clarity, we ensured the design communicated actionable solutions tailored to their unique needs.'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/ua_05_mobile.webp`,
        alt: 'Under Armour mobile screens'
      },
      {
        type: 'text',
        number: '07',
        title: 'Where we landed',
        subtitle: 'Our Approach',
        content: 'We explored a variety of design languages to create a clear and intuitive experience that helps users easily understand how we plan to address their debt and achieve their financial goals. By prioritizing simplicity and clarity, we ensured the design communicated actionable solutions tailored to their unique needs.'
      },
      {
        type: 'image',
        src: `${BASE_PATH}images/ua_06_phones.webp`,
        alt: 'Under Armour mobile phone mockups'
      },
      {
        type: 'reflection',
        number: '09',
        title: 'Reflection',
        subtitle: 'What we learned',
        items: [
          'Simplifying Complexity is a Powerful Skill',
          'Empathy Drives Design',
          'Collaboration is Key to Innovation'
        ]
      }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Kaiser Permanente',
    role: 'Lead Product Designer',
    period: '2022 — Present',
    description: 'Spearheaded the design strategy for the Maternity and Women\'s Health digital experience. Led cross-functional teams to deliver a unified, member-centric platform serving millions.'
  },
  {
    company: 'YML',
    role: 'Senior Product Designer',
    period: '2020 — 2022',
    description: 'Worked on high-profile clients including Under Armour and Elevate. Established design systems and reduced time-to-market by 25% through advanced prototyping frameworks.'
  },
  {
    company: 'Twitter',
    role: 'Product Designer',
    period: '2018 — 2020',
    description: 'Led the Twitter Health initiative, creating a cohesive brand identity focused on platform safety and user trust. Conducted extensive user research across diverse communities.'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Apple', logo: 'apple' },
  { name: 'Google', logo: 'google' },
  { name: 'Groupon', logo: 'groupon' },
  { name: 'Albertsons', logo: 'albertsons' },
  { name: 'Kaiser Permanente', logo: 'kaiser' }
];
