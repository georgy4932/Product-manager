import type {
  NavLink,
  ExperienceEntry,
  FeaturedProduct,
  WorkSample,
  CaseStudy,
  SkillCategory,
  Certification,
  EducationEntry,
  ContactInfo,
} from "@/types";

export const personal = {
  name: "Emmanuela Odoh",
  role: "Product Manager",
  initials: "EO",
  tagline:
    "Turns early-stage product ideas into clear requirements, structured roadmaps, and go-to-market plans, in close partnership with cross-functional engineering and design teams.",
  profileImage: "/images/profile/headshot.jpg",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Product", href: "#product" },
  { label: "Work Samples", href: "#work-samples" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  title: "About Me",
  paragraphs: [
    "Emmanuela Odoh is a Product Manager with hands-on experience leading product initiatives through HNG Internship Cohort 14, one of Africa's most rigorous product and engineering programmes, one where participants are assessed and eliminated at every stage based on output quality.",
    "At HNG, she served as Product Manager for MeetMind AI Interviewer, an AI agent that joins live interview calls and generates structured candidate scorecards. She led a cross-functional team of backend, frontend, DevOps, and product design engineers, translating product strategy into a roadmap the team could execute against.",
  ],
  highlights: [
    "Product Discovery",
    "Requirements Definition",
    "Sprint Planning",
    "Stakeholder Communication",
    "Prioritization",
    "Product Strategy",
    "Go-to-Market Planning",
  ],
};

export const experience: ExperienceEntry = {
  organization: "HNG Internship, Cohort 14",
  role: "Product Manager, MeetMind AI Interviewer",
  product: "MeetMind AI Interviewer",
  duration: "April 2026 – June 2026",
  summary:
    "As Product Manager on the Product Management track, Emmanuela was responsible for MeetMind's roadmap, requirements documentation, cross-functional delivery, and go-to-market plan. She also conducted formal product management assessments of an external healthtech product and a fintech product.",
  responsibilities: [
    "Led end-to-end product development for MeetMind AI Interviewer, an AI agent that joins Zoom and Google Meet interview calls, participates in real time, and generates structured candidate scorecards.",
    "Defined and managed the product roadmap across 4 milestones and a GTM phase, covering authentication, session setup, SDK integration, and scorecard generation.",
    "Wrote the Product Requirements Document (PRD), Functional Requirements Document (FRD), Technical Requirements Document (TRD), and MVP Milestones documentation.",
    "Broke milestones into ClickUp-ready ticket spreadsheets covering Ticket ID, Track, Description, Problem Statement, User Story, Acceptance Criteria, Edge Cases, Requirements, Assignee, Priority, Dependencies, and Status.",
    "Applied the RICE prioritization framework to a live backlog crisis, producing a data-backed sprint plan, a stakeholder pushback memo, and a video defence of the prioritization decisions.",
    "Managed stakeholder communications across Backend, Frontend, DevOps, and Product Design tracks, resolving conflicts, unblocking engineers, and aligning the team on scope decisions under deadline pressure.",
    "Produced a full Go-To-Market strategy, including market analysis, ICP definition, pricing strategy, GTM phases, acquisition channels, and a pilot validation plan for 15 pilot recruiters.",
    "Conducted formal Product Manager assessments of two external products, a healthtech product and a fintech product, applying repository analysis, product audits, prioritization reviews, and a leadership risk framework.",
  ],
  timeline: [
    {
      title: "Discovery & Requirements",
      description:
        "Defined the MeetMind product vision and participation model, and authored the PRD, FRD, and TRD from scratch.",
    },
    {
      title: "Roadmap & Sprint Planning",
      description:
        "Built a 4-milestone roadmap plus a GTM phase, and translated it into 80+ ClickUp-ready tickets across BE, FE, DevOps, PD, and QA tracks.",
    },
    {
      title: "Prioritization Under Pressure",
      description:
        "Applied the RICE framework to a live backlog crisis, producing a sprint plan and a CEO stakeholder pushback memo.",
    },
    {
      title: "Product Assessment & Audit",
      description:
        "Conducted a formal PM assessment of an external healthtech product, issuing a verdict with six pre-launch conditions.",
    },
    {
      title: "Go-to-Market Planning",
      description:
        "Produced a full GTM strategy with market analysis, pricing tiers, and a pilot validation plan for 15 recruiters.",
    },
  ],
};

export const featuredProduct: FeaturedProduct = {
  name: "MeetMind AI Interviewer",
  tagline:
    "An AI interview participant that joins live calls, tracks scorecard coverage in real time, and delivers structured candidate summaries.",
  description:
    "MeetMind is an AI-powered interview participation agent that joins Zoom and Google Meet sessions as a named participant, listens in real time, tracks scorecard coverage, asks follow-up questions when criteria are not addressed, and generates a structured candidate summary the moment the call ends.",
  role: "Product Manager",
  liveUrl: "https://meetmind.hng14.com",
  responsibilities: [
    "PRD creation",
    "FRD creation",
    "TRD creation",
    "MVP planning",
    "Ticket planning",
    "SDK integration milestone management",
    "GTM planning",
  ],
  ownership: [
    "Wrote the PRD, TRD, FRD, and MVP milestone documentation from scratch.",
    "Defined the product's participation model (Passive, Standard, and Proactive modes) based on recruiter context research.",
    "Managed the ClickUp board across 4 milestones with 80+ tickets spanning BE, FE, DevOps, PD, and QA tracks.",
    "Led the SDK integration milestone, defining transcript accuracy benchmarks (word error rate below 10%), voice response latency requirements (under 6 seconds), and audio purge compliance windows (10 minutes post-session).",
    "Produced the full GTM strategy: market analysis, competitive positioning, pricing tiers, a pilot validation plan with 15 pilot recruiters, and a launch-week execution plan.",
  ],
  techStack: ["LiveKit", "OpenAI", "Cloudinary"],
};

export const workSamples: WorkSample[] = [
  {
    id: "prd",
    title: "Product Requirements Document (PRD)",
    category: "MeetMind AI Interviewer",
    context:
      "Foundational product document for MeetMind, written at the start of the build.",
    link: "https://docs.google.com/document/d/1-OneEoCrh_acUFpcY9nZZLNyGuIS5bco0NyZsOpbyTM/edit?usp=sharing",
    linkLabel: "View PRD",
  },
  {
    id: "frd",
    title: "Functional Requirements Document (FRD)",
    category: "MeetMind AI Interviewer",
    context:
      "Companion to the PRD, translating product requirements into functional behaviour for engineering.",
    link: "https://docs.google.com/document/d/18VnEJglzzbzcanF_Qw046aKer6z9_4ed0_HrQPPPG44/edit?usp=sharing",
    linkLabel: "View FRD",
  },
  {
    id: "trd",
    title: "Technical Requirements Document (TRD)",
    category: "MeetMind AI Interviewer",
    context:
      "Technical specification for MeetMind's SDK integration milestone.",
    link: "https://docs.google.com/document/d/1GcsyQpSCtO6Bx3E-p8EV2hmDDmipdGkqQa1mcYthCB8/edit?usp=sharing",
    linkLabel: "View TRD",
  },
  {
    id: "mvp-milestones",
    title: "MVP Milestone Planning",
    category: "MeetMind AI Interviewer",
    context:
      "Roadmap planning for MeetMind's path from MVP to go-to-market.",
    link: "https://docs.google.com/document/d/1_mS3OUCaL_B0CkmS5J4e-qV3_CVkDWrn_7vMbeNd_-E/edit?usp=sharing",
    linkLabel: "View MVP Plan",
  },
  {
    id: "clinsight-audit",
    title: "Clinsight Product Audit",
    category: "Clinsight Healthtech",
    context:
      "Formal PM assessment of Clinsight, a Nigerian healthtech product giving AI-generated, plain-language lab result interpretations.",
    link: "https://docs.google.com/presentation/d/1tIj7G0UAnhplfO-kS64OFhpuDMUlYBZ_2X-B_BlPzIc/edit?usp=sharing",
    linkLabel: "View Clinsight Assessment",
  },
  {
    id: "gtm-strategy",
    title: "Go-To-Market Strategy",
    category: "MeetMind AI Interviewer",
    context:
      "GTM phase of the MeetMind roadmap, planned alongside the product build.",
    link: "https://docs.google.com/document/d/1xwiFQ6urYLqoDnSTbWBXAuNZITKS8Bs1IwhtTdzgR5A/edit?usp=sharing",
    linkLabel: "View GTM Strategy",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "meetmind-product-leadership",
    title: "Leading MeetMind AI Interviewer: PRD to Go-to-Market",
    subtitle: "End-to-End Product Ownership · Roadmap & Cross-Functional Delivery · HNG Cohort 14",
    context:
      "As Product Manager for MeetMind AI Interviewer (an AI agent that joins Zoom and Google Meet interviews, tracks scorecard coverage in real time, and generates structured candidate summaries), Emmanuela owned the product end-to-end during HNG Internship Cohort 14 (April–June 2026), leading a cross-functional team of backend, frontend, DevOps, and product design engineers from a blank page to a go-to-market plan.",
    problemTitle: "The Challenge",
    problem:
      "MeetMind started with no documentation, no defined participation model, and a four-track engineering team waiting for direction. A complex AI product (spanning authentication, live session handling, SDK integration, and AI-generated scorecards) had to be defined, sequenced into a roadmap, and broken into work the team could execute against on a fixed internship timeline.",
    approachTitle: "What I Did",
    approach: [
      "Authored the PRD, FRD, and TRD from scratch, defining the product vision and a Passive / Standard / Proactive participation model based on recruiter context research.",
      "Built a roadmap of 4 milestones plus a dedicated GTM phase, then broke it into 80+ ClickUp-ready tickets across Backend, Frontend, DevOps, Product Design, and QA, each scoped with acceptance criteria, edge cases, dependencies, and priority.",
      "Led the SDK integration milestone, setting concrete technical acceptance criteria: transcript word error rate below 10%, voice response latency under 6 seconds, and audio data purge within 10 minutes of a session ending.",
      "Managed stakeholder communication across all four engineering tracks, resolving conflicts, unblocking engineers, and aligning the team on scope decisions under deadline pressure.",
    ],
    outcomeTitle: "Outcome",
    outcome:
      "Delivered the product's foundational documentation (PRD, FRD, TRD, MVP milestone plan) as the shared reference point for all four engineering tracks, plus a complete go-to-market strategy (market analysis, pricing tiers, and a pilot validation plan for 15 recruiters) for a product now live at meetmind.hng14.com.",
  },
  {
    id: "vendsync-prioritization",
    title: "The Backlog Crisis: VendSync Prioritization",
    subtitle: "RICE Prioritization · Stakeholder Management",
    context:
      "As part of a formal product management assessment during HNG Internship Cohort 14, Emmanuela was assigned a backlog prioritization exercise for VendSync, a fintech platform for African merchants. VendSync had 34 points of backlog demand against a 15-point engineering sprint, with five items competing for the sprint, each backed by a powerful internal sponsor. The brief required prioritizing the backlog, producing a scoring matrix, writing a stakeholder pushback memo to the CEO, and defending the decisions in a 3-minute video.",
    problemTitle: "The Problem",
    problem:
      "The CEO's favourite feature (an AI Inventory Predictor) scored just 0.2 on RICE (zero user requests, 20% confidence, a 9-point cost). The CEO had publicly committed to investors that it would ship in Q3. Cutting it was the right product decision and the most politically dangerous one.",
    approachTitle: "My Approach",
    approach: [
      "Applied the RICE framework (Reach, Impact, Confidence, Effort) to all five competing items, deliberately using the Confidence variable to surface qualitative risk that raw demand data could not capture.",
      "Selected the Inventory Database Refactor (RICE: 38.6) and the White Screen Checkout Bug Fix (RICE: 8.1), totaling 11 of 15 points, and reserved 4 points for QA, integration testing, and refactor spillover.",
      "Cut the AI Predictor, WhatsApp Bot, and Multi-Currency Wallet, with specific, data-backed justifications for each.",
      "Wrote a one-page CEO memo (firm, data-referenced, no subheadings) that acknowledged the investor commitment and offered a concrete Q3 discovery and Q4 consideration path.",
    ],
    outcomeTitle: "Outcome",
    outcome:
      "Submitted a complete strategy package including the RICE matrix with scored rationale for every value assigned, a stakeholder pushback memo, and a full video script. The memo addressed the investor commitment directly and proposed a repositioning brief, turning a political “no” into a structured path forward.",
    link: "https://docs.google.com/document/d/1NNdY_1wWZpKy9OvUaQBV0cDeiTNbV68P-MmeOmQaK8Q/edit?usp=sharing",
    linkLabel: "View Case Study Document",
  },
  {
    id: "clinsight-assessment",
    title: "Clinsight PM Assessment: Approved with Risks",
    subtitle: "Product Audit · Risk Assessment",
    context:
      "As part of a formal product management assessment during HNG Internship Cohort 14, Emmanuela was tasked with assessing Clinsight, a Nigerian healthtech product that allows users to upload lab results and receive AI-powered, plain-language interpretations. The assessment required reviewing the PRD, FRD, MVP milestone plan, and the product's GitHub repository.",
    problemTitle: "The Problem",
    problem:
      "Clinsight was preparing to launch with no NDPR compliance plan, no clinical validation layer, and an undocumented AI confidence-scoring method. The assessment question was simple and high-stakes: do you approve this product for launch?",
    approachTitle: "My Approach",
    approach: [
      "Conducted a full product audit across five dimensions: clinical validation, execution risk, unclear requirements, stakeholder concerns, and delivery scalability.",
      "Applied a risk framework to identify three formal risks: regulatory exposure, an undefined clinical accuracy standard, and a false safety signal from confidence indicators.",
      "Issued a verdict of “Approved with Risks” with six formal pre-launch conditions, framed not as recommendations but as conditions of the verdict.",
      "Produced two presentation decks in different visual styles and wrote a leadership assessment identifying trust (not OCR, not the timeline, not the tech stack) as the single most likely reason Clinsight would fail.",
    ],
    outcomeTitle: "Outcome",
    outcome:
      "Delivered a complete assessment package including audit findings, a prioritization matrix, a dependency review, and a leadership assessment. The six pre-launch conditions were specific, defensible, and directly traceable to evidence in the documents and repository.",
    link: "https://docs.google.com/presentation/d/1tIj7G0UAnhplfO-kS64OFhpuDMUlYBZ_2X-B_BlPzIc/edit?usp=sharing",
    linkLabel: "View Clinsight Assessment",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Product Management",
    skills: [
      "Roadmap Planning",
      "Sprint Management",
      "Backlog Prioritization",
      "User Story Writing",
      "MVP Scoping",
      "Milestone Planning",
      "Risk Management",
    ],
  },
  {
    category: "Stakeholder Management",
    skills: [
      "Executive Communication",
      "Cross-Functional Team Leadership",
      "Conflict Resolution",
      "PM Assessment & Audit",
    ],
  },
  {
    category: "GTM & Strategy",
    skills: [
      "Market Analysis",
      "Competitive Positioning",
      "Pilot Validation Planning",
      "Launch Planning",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: ["ClickUp", "Figma", "Notion", "Google Docs", "Google Sheets", "GitHub", "Jira"],
  },
  {
    category: "Communication",
    skills: [
      "Product Storytelling",
      "Narrative Strategy",
      "Content Writing",
      "LinkedIn Thought Leadership",
      "Proposal Writing",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Google Project Management Professional Certificate",
    organization: "Google / Coursera",
    year: "2022",
    credentialId: "TEYU6KJS6HX8",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/TEYU6KJS6HX8",
    image: "/images/certificates/google-pm-certificate.jpg",
  },
  {
    title: "HNG Internship Cohort 14",
    organization: "HNG Tech, Product Management Track",
    year: "2026",
    image: "/images/certificates/hng-internship-certificate.jpg",
  },
];

export const education: EducationEntry = {
  degree: "MSc Digital Marketing & Business Transformation",
  institution: "Rome Business School",
};

export const contact: ContactInfo = {
  email: "odonyinyechi@gmail.com",
  linkedin: "linkedin.com/in/emmanuela-odoh",
  location: "Nigeria",
  availability: "Open to Product Management opportunities",
};

export const contactCta = "Let's Build Better Products Together";
