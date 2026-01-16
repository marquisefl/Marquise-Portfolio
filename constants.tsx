
import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'kp-2024',
    title: 'Kaiser Permanente',
    category: 'Maternity Experience',
    description: 'Transforming the maternity journey for 12.5M members into a personalized, milestone-driven digital companion.',
    imageUrl: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=2000&auto=format&fit=crop', 
    tags: ['Healthcare', 'Personalization', 'Mobile UI'],
    role: 'Lead Product Designer',
    duration: '2022 — 2024',
    tools: ['Figma', 'Principle', 'Data Analytics', 'UserTesting'],
    longDescription: 'At Kaiser Permanente, I led the product design strategy for the next generation of the Maternity Experience. We shifted from a static medical portal to a human-centered, week-by-week journey that celebrates milestones while providing critical clinical guidance.',
    research: {
      title: "Research",
      subtitle: "Knowledge Learning",
      description: "During our discovery, I collaborated closely with a KP researcher, a content strategist and our product manager. I wanted to understand our users' goals and desired outcomes, their content preferences, and how they currently engage with competitor sites and best-in-class content destinations.",
      stats: [
        { value: "12", label: "User Interviews" },
        { value: "2", label: "User Group Types" },
        { value: "9", label: "Stakeholder Interviews" },
        { value: "6", label: "Competitors Audited" }
      ],
      conclusion: "During our research, we also examined the unique challenges presented by COVID-19. Remote interviews and surveys revealed a growing reliance on digital healthcare solutions, but we discovered a critical gap in how users accessed telehealth services and fulfilled prescriptions online. Many members found the experience fragmented—navigating between separate platforms for appointments, medication refills, and follow-ups. These insights highlighted an urgent need to design more seamless, integrated digital touchpoints that could support members’ healthcare journeys end-to-end."
    },
    sections: [
      {
        title: 'The "Blueberry" Strategy',
        content: 'To humanize the clinical experience, we introduced relatable milestones. By week 7, we tell the user their baby is the size of a blueberry. This emotional hook drives a 40% higher engagement rate with the accompanying clinical tasks like "What is Insulin?" education and lab work reminders.'
      },
      {
        title: 'Personalized Care Pathways',
        content: 'Every pregnancy is unique. We built a dynamic content engine that surfaces specific education cards based on the mother’s health profile, due date, and previous interactions, ensuring "Ready for Motherhood?" isn’t just a question, but a guided reality.'
      },
      {
        title: 'Simplified Workflows',
        content: 'We consolidated fragmented clinical data—lab results, appointment scheduling, and nutritionist advice—into a single, cohesive feed. This reduced cognitive load for expecting parents during one of the most high-stakes periods of their lives.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: '1',
    title: 'Nexus Fintech',
    category: 'Institutional Finance',
    description: 'A comprehensive wealth management platform for high-net-worth individuals, focusing on real-time data visualization and intuitive asset allocation.',
    imageUrl: 'https://images.unsplash.com/photo-1611974714151-6c84bb2a41c1?q=80&w=2070&auto=format&fit=crop',
    tags: ['Fintech', 'SaaS', 'High-Scale']
  },
  {
    id: '2',
    title: 'Echo Ecosystem',
    category: 'Integrated Health',
    description: 'An AI-driven healthcare ecosystem connecting patients with specialists through tele-health and smart symptom tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop',
    tags: ['Mobile', 'AI-Logic', 'UX Architecture']
  },
  {
    id: '3',
    title: 'Vanguard Retail',
    category: 'E-commerce Optimization',
    description: 'Redesigning the digital storefront for a luxury fashion house, focusing on cognitive load reduction and high-velocity conversion.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    tags: ['Retail', 'Mobile Web', 'Optimization']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Kaiser Permanente',
    role: 'Lead Product Designer',
    period: '2022 — 2024',
    description: 'Spearheaded the design strategy for the Maternity and Women’s Health digital experience. Led cross-functional teams to deliver a unified, member-centric platform serving millions.'
  },
  {
    company: 'InnovateX Global',
    role: 'Senior Product Designer',
    period: '2020 — 2022',
    description: 'Established the global design system and reduced time-to-market by 25% through advanced prototyping frameworks and systemic design thinking.'
  },
  {
    company: 'Skyline Solutions',
    role: 'UI/UX Designer',
    period: '2016 — 2020',
    description: 'Headed the redesign of flagship enterprise applications. Conducted over 100+ user research sessions to drive data-informed decisions for Fortune 500 clients.'
  }
];
