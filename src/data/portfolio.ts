/**
 * Central portfolio data — generated from Mohamed Elghamry's CV (Mohamed_Elghamry_CV.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the CV.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Mohamed Elghamry',
  displayName: 'Elghamry',
  firstName: 'ELGHAMRY',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ELGHAMRY ORIGINAL',
  role: 'AI & ML · Data Engineering · Computer Vision',
  tagline: ['AI / ML', 'Data Engineering', 'Computer Vision'],
  intro:
    'A Computer Engineering graduate with hands-on experience in deep learning and computer vision, data engineering / BI and network engineering and a strong track record of student leadership and large-scale event management. Gold Award achiever at iNVENTX 2026.',
  location: 'Doha',
  email: 'mksghamry20@gmail.com',
  phone: '+974 3335 5035',
  links: {
    linkedin: 'https://www.linkedin.com/in/mohamed-ahmed-elghamry-0aa671155/',
    // No GitHub profile appears on the CV. Add one here (and hide/remove the GitHub button) if you create one.
    github: 'https://github.com/MKSJGhamry',
  },
  resumePdf: '/assets/Mohamed_Elghamry_CV.pdf',
  portrait: {
       src: '/assets/Me.jpeg',
       srcSet: '/assets/Me.jpeg',
    alt: 'Portrait of Mohamed Elghamry',
  },
  interests: ['AI / Machine Learning', 'Data / BI', 'Networking', 'Leadership', 'Event Management', 'IoT / Embedded Systems'],
};

export const education = [
  {
    school: 'Multimedia University (MMU)',
    place: 'Cyberjaya, Malaysia',
    degree: 'Bachelor’s degree in Computer Engineering',
    period: '2021 – 2026',
    score: '3.14',
  },
];

export const experience = [
  {
    company: 'Aventra Group',
    role: 'Intern — PMO Data Engineering Officer',
    place: '',
    period: 'July 2025 – October 2025',
    points: [
      'Developed and maintained Power BI dashboards to support PMO reporting and data-driven decision-making.',
      'Cleaned, transformed, and prepared raw data for analysis; built DAX calculations and worked with Power BI semantic models.',
      'Used pivot tables and core BI techniques to analyze and summarize project and business data for stakeholders.',
      'Completed structured training in Power BI, project management fundamentals, cloud basics, GDPR, and information security.',
    ],
  },
  {
    company: 'IEEE Power & Energy Society (PES), MMU Student Branch',
    role: 'Chair (2025–2026) · Head of Logistics (2023–2024)',
    place: 'MMU',
    period: '2023 – 2026',
    points: [
      'Led the student chapter’s committee and operations as Chair, planning and delivering technical, professional, and student-focused activities and coordinating with external organizations and industry partners.',
      'Previously managed venue booking, transportation, and event-logistics planning as Head of Logistics across multiple chapter events.',
    ],
  },
  {
    company: 'IEEE Multimedia University Student Branch',
    role: 'Secretary',
    place: 'MMU',
    period: '2023 – 2024',
    points: [
      'Managed the Secretarial Department: event planners, the term planner, event proposals/reports, and IEEE VTools submissions.',
      'Served as primary point of contact for the Secretarial Department, guiding the Assistant Secretary and Secretarial Officers.',
    ],
  },
  {
    company: 'International Student Society (ISS), MMU',
    role: 'Administration Officer (2025–Present) · Vice President (2024–2025) · Secretary (2023–2024)',
    place: 'MMU',
    period: '2023 – Present',
    points: [
      'Serve as Administration Officer, managing administrative documentation, proposals, and committee communication, and contributing to the planning and execution of large-scale ISS events.',
      'Previously served as Vice President, supporting society-wide leadership and coordinating across Marketing, Media, Logistics, Sponsorship, Protocol, Communications, and Student Welfare divisions.',
    ],
  },
  {
    company: 'iEXPO — International Cultural Expo, MMU',
    role: 'Secretary (2024) · Assistant Director (2025) · Advisor (2026)',
    place: 'MMU',
    period: '2024 – Present',
    points: [
      'Served as Secretary for iEXPO 2024, supporting event planning, documentation, and committee communication.',
      'Served as Assistant Director for iEXPO 2025, co-leading planning across embassy/ministry invitations, ~25 country representatives, ticketing, and marketing logistics.',
      'Advising the iEXPO 2026 organizing team, sharing institutional knowledge from 2025 while supporting the new leadership.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'tomatoleafai',
    title: 'TomatoLeafAI',
    year: '2025 – 2026',
    genre: 'Deep Learning • Computer Vision • Explainable AI',
    logline: 'Deep-learning classification of tomato leaf diseases for precision agriculture — Gold Award at iNVENTX 2026.',
    stack: ['EfficientNet-B2', 'MobileNetV2', 'DenseNet121', 'Grad-CAM', 'Google Colab'],
    build: [
      'Designed and trained a deep-learning image classifier on ~16,000+ images across 10 disease classes, implementing and comparing EfficientNet-B2, MobileNetV2, and DenseNet121, and exploring ensemble learning to improve accuracy.',
      'Trained and tuned models on Google Colab GPU (learning rate 0.0001, batch size 16, across multiple epochs), reaching a reported 99.25% test accuracy.',
      'Applied Explainable AI (Grad-CAM) to visualize the leaf regions driving each prediction, improving model interpretability for agricultural end users.',
      'Authored a research paper associated with MECON 2026 / AIP Proceedings; presented a 25-slide capstone defense, a condensed 5-minute technical pitch and a project poster; exhibited the project at iNVENTX 2026.',
    ],
    features: [
      'Image classifier across 10 disease classes',
      'Comparison of EfficientNet-B2, MobileNetV2 and DenseNet121',
      'Ensemble learning exploration',
      'Grad-CAM explainability for end users',
      'Final Year Project at MMU — Supervisor: Assoc. Prof. Dr. Hezerul Abdul Karim',
    ],
    metrics: [
      { value: '99.25%', label: 'reported test accuracy' },
      { value: '~16,000+', label: 'images' },
      { value: '10', label: 'disease classes' },
      { value: '3', label: 'architectures compared' },
      { value: 'Gold', label: 'award at iNVENTX 2026' },
    ],
    // No public repository is listed on the CV. Add `github: '...'` here once one exists.
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
  {
    id: 'fall-detection-belt',
    title: 'Wearable Fall Detection Belt',
    year: '2024 - 2025',
    genre: 'Embedded • IoT • Healthcare',
    logline: 'A wearable belt for the elderly with real-time monitoring and caregiver alerts.',
    stack: ['ESP32', 'MPU6050 IMU', 'Blynk'],
    build: [
      'Built a wearable fall detection belt for the elderly using an ESP32 and an MPU6050 IMU, with Blynk app integration for real-time monitoring and caregiver alerts.',
    ],
    features: [
      'ESP32 + MPU6050 IMU sensing',
      'Blynk app integration',
      'Real-time monitoring',
      'Caregiver alerts',
    ],
    metrics: [
      { value: 'ESP32', label: 'microcontroller' },
      { value: 'MPU6050', label: 'IMU sensor' },
      { value: 'Real-time', label: 'monitoring & caregiver alerts' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'packet-tracer-network',
    title: 'Cisco Packet Tracer Network Project',
    year: '2023 - 2024',
    genre: 'Networking • Security',
    logline: 'A multi-VLAN network topology with inter-VLAN routing and ACL security policies.',
    stack: ['Cisco Packet Tracer', 'VLANs', 'Inter-VLAN Routing', 'ACLs'],
    build: [
      'Designed a multi-VLAN topology with inter-VLAN routing and standard/extended ACL security policies.',
      'Documented troubleshooting and verification.',
    ],
    features: [
      'Multi-VLAN topology',
      'Inter-VLAN routing',
      'Standard & extended ACL security policies',
      'Documented troubleshooting and verification',
    ],
    metrics: [
      { value: 'Multi-VLAN', label: 'topology' },
      { value: 'Inter-VLAN', label: 'routing' },
      { value: 'ACL', label: 'standard & extended policies' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'inventx-gold',
    title: 'Gold Award',
    org: 'iNVENTX 2026',
    detail: 'Awarded for TomatoLeafAI, the Final Year Project - exhibited and demonstrated to judges and attendees.',
    laurel: 'Gold Award',
  },
  {
    id: 'research-paper',
    title: 'Research Paper',
    org: 'MECON 2026 / AIP Proceedings',
    detail: 'Authored a research paper associated with MECON 2026 / AIP Proceedings on deep-learning tomato leaf disease classification.',
    laurel: 'Published Research',
  },
  {
    id: 'ieee-pes-chair',
    title: 'Chair',
    org: 'IEEE PES, MMU Student Branch',
    detail: 'Led the chapter’s committee and operations (2025–2026).',
    laurel: 'Chapter Leadership',
  },
  {
    id: 'iss-vp',
    title: 'Vice President',
    org: 'International Student Society (ISS), MMU',
    detail: 'Supported society-wide leadership (2024–2025), coordinating across Marketing, Media, Logistics, Sponsorship, Protocol, Communications, and Student Welfare divisions.',
    laurel: 'Society Leadership',
  },
  {
    id: 'iexpo-advisor',
    title: 'Advisor',
    org: 'iEXPO 2026',
    detail: 'Advising the iEXPO 2026 organizing team with institutional knowledge from 2025.',
    laurel: 'Event Leadership',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'AIGPE™', name: 'Certified Six Sigma White Belt (Sep 2025)' },
  { issuer: 'Udemy', name: 'Microsoft Power BI for Advanced Data Transformations (Sep 2025)' },
  { issuer: 'Udemy', name: 'Data Analysis Real World Use-Cases – Hands on Python (Sep 2025)' },
  { issuer: 'Udemy', name: 'Cloud Basics for Data Professionals (Aug 2025)' },
  { issuer: 'Aventra Group', name: 'Project Management Fundamentals (internship training)' },
  { issuer: 'Aventra Group', name: 'GDPR Training (internship training)' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming',
    subtitle: 'Python, C and Java',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'Java', mono: 'Jv' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI / Machine Learning',
    subtitle: 'Vision, models & explainability',
    skills: [
      { name: 'Deep Learning', mono: 'Dl' },
      { name: 'Computer Vision', mono: 'Cv' },
      { name: 'Image Classification', mono: 'Ic' },
      { name: 'Transfer & Ensemble Learning', mono: 'Te' },
      { name: 'Explainable AI (Grad-CAM)', mono: 'Xa' },
      { name: 'Model Evaluation', mono: 'Me' },
    ],
  },
  {
    id: 'data-bi',
    title: 'Data / BI',
    subtitle: 'Reporting & analysis',
    skills: [
      { name: 'Power BI', mono: 'Pb' },
      { name: 'DAX', mono: 'Dx' },
      { name: 'Data Cleaning & Analysis', mono: 'Da' },
      { name: 'Data Visualization', mono: 'Dv' },
      { name: 'Pivot Tables', mono: 'Pt' },
      { name: 'Semantic Models', mono: 'Sm' },
      { name: 'Dashboarding', mono: 'Db' },
    ],
  },
  {
    id: 'networking',
    title: 'Networking',
    subtitle: 'Design, security & troubleshooting',
    skills: [
      { name: 'Cisco Packet Tracer', mono: 'Cp' },
      { name: 'VLAN & Inter-VLAN Routing', mono: 'Vl' },
      { name: 'ACL Security', mono: 'Ac' },
      { name: 'Network Troubleshooting', mono: 'Nt' },
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded / IoT',
    subtitle: 'Sensors & real-time systems',
    skills: [
      { name: 'ESP32', mono: 'Es' },
      { name: 'MPU6050', mono: 'Mp' },
      { name: 'Blynk', mono: 'Bl' },
      { name: 'Sensor Integration', mono: 'Si' },
      { name: 'Real-Time Monitoring', mono: 'Rm' },
    ],
  },
  {
    id: 'professional',
    title: 'Professional',
    subtitle: 'Leading people & events',
    skills: [
      { name: 'Leadership', mono: 'Ld' },
      { name: 'Project & Event Management', mono: 'Pe' },
      { name: 'Stakeholder Coordination', mono: 'Sc' },
      { name: 'Public Speaking', mono: 'Ps' },
      { name: 'Documentation', mono: 'Dc' },
    ],
  },
  {
    id: 'spoken',
    title: 'Languages',
    subtitle: 'Spoken',
    skills: [
      { name: 'Arabic', mono: 'Ar', note: 'Native' },
      { name: 'English', mono: 'En', note: 'Fluent' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, experience, certifications or achievements on the CV.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Udemy Data Analysis – Hands on Python'],
     C: ['University course', 'Personal project'],
   Java: ['University course'],
  'Deep Learning': ['TomatoLeafAI', 'Gold Award · iNVENTX 2026'],
  'Computer Vision': ['TomatoLeafAI'],
  'Image Classification': ['TomatoLeafAI'],
  'Transfer & Ensemble Learning': ['TomatoLeafAI'],
  'Explainable AI (Grad-CAM)': ['TomatoLeafAI'],
  'Model Evaluation': ['TomatoLeafAI — 99.25% reported test accuracy'],
  'Power BI': ['Aventra Group internship', 'Udemy Power BI for Advanced Data Transformations'],
  DAX: ['Aventra Group internship'],
  'Data Cleaning & Analysis': ['Aventra Group internship', 'Udemy Data Analysis – Hands on Python'],
  'Data Visualization': ['Aventra Group internship'],
  'Pivot Tables': ['Aventra Group internship'],
  'Semantic Models': ['Aventra Group internship'],
  Dashboarding: ['Aventra Group internship'],
  'Cisco Packet Tracer': ['Cisco Packet Tracer Network Project'],
  'VLAN & Inter-VLAN Routing': ['Cisco Packet Tracer Network Project'],
  'ACL Security': ['Cisco Packet Tracer Network Project'],
  'Network Troubleshooting': ['Cisco Packet Tracer Network Project'],
  ESP32: ['Wearable Fall Detection Belt'],
  MPU6050: ['Wearable Fall Detection Belt'],
  Blynk: ['Wearable Fall Detection Belt'],
  'Sensor Integration': ['Wearable Fall Detection Belt'],
  'Real-Time Monitoring': ['Wearable Fall Detection Belt'],
  Leadership: ['IEEE PES Chair', 'ISS Vice President', 'UNITEN Benchmarking Initiative  & Director'],
  'Project & Event Management': ['iEXPO 2025 Assistant Director', 'UNITEN Benchmarking Initiative'],
  'Stakeholder Coordination': ['IEEE PES Chair', 'iEXPO 2025'],
  'Public Speaking': ['iNVENTX 2026 exhibition', '25-slide capstone defense & 5-minute pitch'],
  Documentation: ['IEEE MMU Student Branch Secretary', 'ISS Administration Officer'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Enter: Computer Engineering',
    period: '2021 – 2026',
    synopsis: 'Bachelor’s degree in Computer Engineering at Multimedia University (MMU), Cyberjaya, Malaysia.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'Bachelor’s degree in Computer Engineering at Multimedia University (MMU), Cyberjaya, Malaysia.',
        tags: ['Computer Engineering', 'MMU'],
        runtime: '2021 – 2026',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Tinkerer',
        description: 'A wearable fall detection belt built on ESP32 + MPU6050, and a multi-VLAN Cisco Packet Tracer network with ACL security.',
        tags: ['ESP32', 'MPU6050', 'Packet Tracer', 'VLAN'],
        runtime: 'Technical projects',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'The Organizer',
    period: '2023 – Present',
    synopsis: 'Student leadership across IEEE, the International Student Society and iEXPO.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Secretary',
        description: 'Secretary of the IEEE MMU Student Branch and of the International Student Society (2023–2024) — planners, proposals, reports and IEEE VTools submissions.',
        tags: ['IEEE', 'ISS', 'Documentation'],
        runtime: '2023 – 2024',
        palette: amber,
      },
      {
        code: 'S02 E02',
        title: 'The Chair',
        description: 'Chair (2025–2026) of the IEEE Power & Energy Society, MMU Student Branch.',
        tags: ['IEEE PES', 'Chair'],
        runtime: '2025 – 2026',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Vice President',
        description: 'ISS Vice President (2024–2025), coordinating across Marketing, Media, Logistics, Sponsorship, Protocol, Communications and Student Welfare; now Administration Officer.',
        tags: ['ISS', 'Vice President', 'Administration Officer'],
        runtime: '2023 – Present',
        palette: jade,
      },
      {
        code: 'S02 E04',
        title: 'The Showrunner',
        description: 'iEXPO Secretary (2024), Assistant Director (2025) with ~25 country representatives, and Advisor for iEXPO 2026.',
        tags: ['iEXPO', 'Assistant Director', 'Advisor'],
        runtime: '2024 – Present',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Data Takes the Stage',
    period: '2025',
    synopsis: 'An internship as PMO Data Engineering Officer at Aventra Group.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Intern',
        description: 'Intern, PMO Data Engineering Officer at Aventra Group.',
        tags: ['Aventra Group', 'PMO'],
        runtime: 'Jul 2025 – Oct 2025',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Analyst',
        description: 'Power BI dashboards, DAX calculations, semantic models and pivot-table analysis for PMO reporting.',
        tags: ['Power BI', 'DAX', 'Dashboards'],
        runtime: 'Aventra Group',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Trainee',
        description: 'Structured training in Power BI, project management fundamentals, cloud basics, GDPR and information security.',
        tags: ['Project Management', 'Cloud Basics', 'GDPR', 'InfoSec'],
        runtime: 'Aventra Group',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2025 – 2026',
    synopsis: 'TomatoLeafAI — from classifier to research paper to Gold Award.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Researcher',
        description: 'TomatoLeafAI — an image classifier trained on ~16,000+ images across 10 disease classes, comparing EfficientNet-B2, MobileNetV2 and DenseNet121.',
        tags: ['Deep Learning', 'Computer Vision', 'Ensemble Learning'],
        runtime: '2025 – 2026',
        palette: jade,
      },
      {
        code: 'S04 E02',
        title: 'The Explainer',
        description: 'A reported 99.25% test accuracy, Grad-CAM explainability, and a research paper associated with MECON 2026 / AIP Proceedings.',
        tags: ['99.25%', 'Grad-CAM', 'MECON 2026'],
        runtime: 'Final Year Project',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'The Champion',
        description: 'Exhibited TomatoLeafAI to judges and attendees at iNVENTX 2026 and was awarded the Gold Award.',
        tags: ['iNVENTX 2026', 'Gold Award'],
        runtime: '2026',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: 'Beyond the Classroom',
    period: '2023 – 2026',
    synopsis: 'Volunteering, industry visits and initiatives led outside the degree.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Volunteer',
        description: 'MOHE Career Fair 2025, IEEE GLOBECOMM (Dec 2023), Pertandingan Robotik Kebangsaan as Mentor & Time Keeping (Sep 2024), and the MUST MMU smart-farming IoT outreach (Nov 2023).',
        tags: ['Volunteering', 'IEEE GLOBECOMM', 'Robotics', 'IoT'],
        runtime: '2023 – 2025',
        palette: ocean,
      },
        {
     code: 'S05 E02',
     title: 'The President',
     description: 'President of IEEE PES (Jan 2026); Vice President of the International Student Society (Jan 2025).',
     tags: ['IEEE PES', 'ISS'],
     runtime: 'Jan 2025 – Jan 2026',
     palette: crimson,
   },
    {
     code: 'S05 E03',
     title: 'The Advisor',
     description: 'Advisor for MMU World Cup 2026 (May 2026); Advisor of iEXPO 2026 (Oct 2026).',
     tags: ['MMU World Cup 2026', 'iEXPO 2026'],
     runtime: 'May – Oct 2026',
     palette: amber,
    },
     {
     code: 'S05 E04',
     title: 'The Director',
     description: 'Director of the UNITEN Benchmarking Initiative (Jun 2026); Director for the Tesla Cyber HQ industrial visit (Apr 2026).',
     tags: ['UNITEN', 'Tesla Visit'],
     runtime: 'Apr – Jun 2026',
     palette: violet,
   },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Biggest stage', title: 'iNVENTX 2026', detail: 'Gold Award • TomatoLeafAI', palette: amber },
  { label: 'The AI Original', title: 'TomatoLeafAI', detail: '99.25% reported test accuracy • 10 classes', palette: jade },
  { label: 'Published research', title: 'MECON 2026', detail: 'Paper associated with AIP Proceedings', palette: violet },
  { label: 'Top leadership role', title: 'IEEE PES Chair', detail: 'MMU Student Branch • 2025–2026', palette: crimson },
  { label: 'The ', title: 'UNITEN Benchmarking', detail: ' & Director • Jun 2026', palette: ocean },
  { label: 'The industry arc', title: 'Aventra Group', detail: 'PMO Data Engineering Intern • Power BI & DAX', palette: amber },
  { label: 'Explainability', title: 'Grad-CAM', detail: 'Visualizing what the model sees', palette: jade },
  { label: 'Biggest event', title: 'iEXPO 2025', detail: 'Assistant Director • ~25 country representatives', palette: violet },
  { label: 'Hardware build', title: 'Fall Detection Belt', detail: 'ESP32 + MPU6050 • Blynk alerts', palette: crimson },
  { label: 'Network build', title: 'Multi-VLAN Design', detail: 'Inter-VLAN routing • ACL security', palette: ocean },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Eng · Computer Engineering',
    lines: ['Multimedia University (MMU), Cyberjaya, Malaysia', '2021 – 2026'],
    chips: ['Gold Award · iNVENTX 2026'],
  },
  {
    kicker: 'Skills',
    title: 'AI first. Data close behind.',
    lines: ['Deep Learning · Computer Vision · Explainable AI', 'Power BI · DAX · Networking · Embedded / IoT'],
    chips: ['Python', 'Deep Learning', 'Power BI', 'DAX', 'Packet Tracer', 'ESP32'],
  },
  {
    kicker: 'Experience',
    title: 'The Internship',
    lines: ['Intern, PMO Data Engineering Officer · Aventra Group', 'Jul 2025 – Oct 2025', 'Power BI dashboards · DAX · Semantic models'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['TomatoLeafAI — 99.25% reported test accuracy,  10 classes', 'Wearable Fall Detection Belt — ESP32 + MPU6050', 'Cisco Packet Tracer Network — multi-VLAN with ACLs'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Gold Award — iNVENTX 2026', 'Research paper — MECON 2026 / AIP Proceedings', 'Chair — IEEE PES, MMU Student Branch'],
  },
  {
    kicker: 'Leadership',
    title: 'The Organizer',
    lines: ['IEEE PES · IEEE MMU · International Student Society · iEXPO', ' & Director — UNITEN Benchmarking Initiative'],
  },
  {
    kicker: 'Certified',
    title: `${certifications.length} Certifications & Trainings`,
    lines: ['AIGPE™ · Udemy · Aventra Group'],
  },
  {
    kicker: 'Languages',
    title: 'Arabic & English',
    lines: ['Arabic (Native) · English (Fluent)', 'Based in Doha'],
  },
];

/**
 * NOTE: the ids below ('elghamry' etc.) are kept consistent with the visible profile names.
 * Update the id here if you want to rename a profile anywhere in the app.
 */
export type ProfileId = 'elghamry' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'elghamry',
    name: 'Elghamry',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & skills first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025 – 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the CV', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'CV • View & download', palette: violet },
};