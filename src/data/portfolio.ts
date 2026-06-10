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
    "Led MeetMind AI Interviewer from discovery through roadmap planning, technical requirements, and go-to-market strategy.",
  summary:
    "Owned the PRD, FRD, and TRD from scratch, built a 4-milestone roadmap of 80+ tickets across backend, frontend, DevOps, and design, and led stakeholder alignment through to a go-to-market plan.",
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
    "Emmanuela Odoh is a Product Manager with hands-on experience leading product initiatives through HNG Internship Cohort 14, one of Africa's most rigorous product and engineering programmes — one where participants are assessed and eliminated at every stage based on output quality.",
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
  organization: "HNG Internship — Cohort 14",
  role: "Product Manager — MeetMind AI Interviewer",
  product: "MeetMind AI Interviewer",
  duration: "April 2026 – June 2026",
  summary:
    "As Product Manager on the Product Management track, Emmanuela was responsible for MeetMind's roadmap, requirements documentation, cross-functional delivery, and go-to-market plan — and completed two formal product assessments: a live RICE prioritization exercise under stakeholder pressure, and a healthtech product audit.",
  responsibilities: [
    "Led end-to-end product development for MeetMind AI Interviewer, an AI agent that joins Zoom and Google Meet interview calls, participates in real time, and generates structured candidate scorecards.",
    "Defined and managed the product roadmap across 4 milestones and a GTM phase — covering authentication, session setup, SDK integration, and scorecard generation.",
    "Wrote the Product Requirements Document (PRD), Functional Requirements Document (FRD), Technical Requirements Document (TRD), and MVP Milestones documentation.",
    "Broke milestones into ClickUp-ready ticket spreadsheets covering Ticket ID, Track, Description, Problem Statement, User Story, Acceptance Criteria, Edge Cases, Requirements, Assignee, Priority, Dependencies, and Status.",
    "Applied the RICE prioritization framework to a live backlog crisis, producing a data-backed sprint plan, a stakeholder pushback memo, and a video defence of the prioritization decisions.",
    "Managed stakeholder communications across Backend, Frontend, DevOps, and Product Design tracks — resolving conflicts, unblocking engineers, and aligning the team on scope decisions under deadline pressure.",
    "Produced a full Go-To-Market strategy, including market analysis, ICP definition, pricing strategy, GTM phases, acquisition channels, and a pilot validation plan for 15 pilot recruiters.",
    "Conducted a formal Product Manager assessment of an external product, applying repository analysis, a product audit, a prioritization review, and a leadership risk framework.",
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
    "Defined the product's participation model — Passive, Standard, and Proactive modes — based on recruiter context research.",
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
    problem:
      "Engineering and design needed one shared definition of what MeetMind was and what success looked like.",
    approach:
      "Defined the product vision, target users, and the Passive / Standard / Proactive participation model.",
    outcome:
      "Became the shared reference point behind the 4-milestone roadmap and 80+ tickets.",
  },
  {
    id: "frd",
    title: "Functional Requirements Document (FRD)",
    category: "MeetMind AI Interviewer",
    context:
      "Companion to the PRD, translating product requirements into functional behaviour for engineering.",
    problem:
      "Engineers needed precise definitions for call participation, scorecard tracking, follow-ups, and summary generation.",
    approach:
      "Mapped the functional flow and expected behaviour for each capability to the PRD's participation modes.",
    outcome:
      "Gave backend and frontend a shared functional reference for sprint execution.",
  },
  {
    id: "trd",
    title: "Technical Requirements Document (TRD)",
    category: "MeetMind AI Interviewer",
    context:
      "Technical specification for MeetMind's SDK integration milestone.",
    problem:
      "The SDK integration milestone had no objective, testable definition of “done.”",
    approach:
      "Set benchmarks: word error rate below 10%, voice response latency under 6 seconds, audio purge within 10 minutes post-session.",
    outcome:
      "Gave engineering concrete, testable acceptance criteria for the milestone.",
  },
  {
    id: "mvp-milestones",
    title: "MVP Milestone Planning",
    category: "MeetMind AI Interviewer",
    context:
      "Roadmap planning for MeetMind's path from MVP to go-to-market.",
    problem:
      "A complex AI product build needed sequencing into a roadmap the full cross-functional team could execute.",
    approach:
      "Defined a 4-milestone roadmap plus a GTM phase, then broke each milestone into fully scoped ClickUp tickets.",
    outcome:
      "Produced 80+ tracked tickets across BE, FE, DevOps, PD, and QA — the operational backbone of the build.",
  },
  {
    id: "rice-prioritization",
    title: "RICE Prioritization Exercise",
    category: "VendSync Q3 · Stage 7 Simulation",
    context:
      "VendSync (Stage 7 simulation): 34 backlog points competing for a 15-point sprint across five sponsor-backed initiatives.",
    problem:
      "The CEO's favoured feature — an AI Inventory Predictor — scored just 0.2 on RICE, despite a public investor commitment.",
    approach:
      "Scored all five initiatives using RICE (Reach, Impact, Confidence, Effort), using Confidence to surface risk raw demand data missed.",
    outcome:
      "Selected the Database Refactor (38.6) and Checkout Bug Fix (8.1) — 11 of 15 points — with documented cuts to the rest.",
  },
  {
    id: "ceo-pushback-memo",
    title: "CEO Stakeholder Pushback Memo",
    category: "VendSync Q3 · Stage 7 Simulation",
    context:
      "Follow-on from the VendSync RICE exercise, after the CEO publicly committed the AI Predictor to investors.",
    problem:
      "Cutting the CEO's preferred feature was the right call — and the most politically sensitive one.",
    approach:
      "Wrote a one-page, data-referenced memo proposing a Q3 discovery / Q4 consideration path, then defended it on video.",
    outcome:
      "Turned a difficult “no” into a structured path forward, backed by the full RICE matrix and documented rationale.",
  },
  {
    id: "clinsight-audit",
    title: "Clinsight Product Audit",
    category: "Clinsight Healthtech · Stage 6 Simulation",
    context:
      "Formal PM assessment of Clinsight, a Nigerian healthtech product giving AI-generated, plain-language lab result interpretations.",
    problem:
      "Clinsight was preparing to launch with no NDPR compliance plan, no clinical validation layer, and an undocumented confidence-scoring method.",
    approach:
      "Audited the PRD, FRD, MVP plan, and GitHub repo across five dimensions, then applied a risk framework surfacing three formal risks.",
    outcome:
      "Issued an “Approved with Risks” verdict with six pre-launch conditions and a leadership assessment naming trust as the top launch risk.",
  },
  {
    id: "gtm-strategy",
    title: "Go-To-Market Strategy",
    category: "MeetMind AI Interviewer",
    context:
      "GTM phase of the MeetMind roadmap, planned alongside the product build.",
    problem:
      "MeetMind needed a credible path from built product to validation with real recruiters.",
    approach:
      "Defined market analysis, ICP, competitive positioning, pricing tiers, acquisition channels, and a pilot plan for 15 recruiters.",
    outcome:
      "Delivered a launch-week execution plan ready to test MeetMind with real users.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "meetmind-product-leadership",
    title: "Leading MeetMind AI Interviewer: PRD to Go-to-Market",
    subtitle: "End-to-End Product Ownership · Roadmap & Cross-Functional Delivery · HNG Cohort 14",
    context:
      "As Product Manager for MeetMind AI Interviewer — an AI agent that joins Zoom and Google Meet interviews, tracks scorecard coverage in real time, and generates structured candidate summaries — Emmanuela owned the product end-to-end during HNG Internship Cohort 14 (April–June 2026), leading a cross-functional team of backend, frontend, DevOps, and product design engineers from a blank page to a go-to-market plan.",
    problemTitle: "The Challenge",
    problem:
      "MeetMind started with no documentation, no defined participation model, and a four-track engineering team waiting for direction. A complex AI product — spanning authentication, live session handling, SDK integration, and AI-generated scorecards — had to be defined, sequenced into a roadmap, and broken into work the team could execute against on a fixed internship timeline.",
    approachTitle: "What I Did",
    approach: [
      "Authored the PRD, FRD, and TRD from scratch, defining the product vision and a Passive / Standard / Proactive participation model based on recruiter context research.",
      "Built a roadmap of 4 milestones plus a dedicated GTM phase, then broke it into 80+ ClickUp-ready tickets across Backend, Frontend, DevOps, Product Design, and QA — each scoped with acceptance criteria, edge cases, dependencies, and priority.",
      "Led the SDK integration milestone, setting concrete technical acceptance criteria: transcript word error rate below 10%, voice response latency under 6 seconds, and audio data purge within 10 minutes of a session ending.",
      "Managed stakeholder communication across all four engineering tracks — resolving conflicts, unblocking engineers, and aligning the team on scope decisions under deadline pressure.",
    ],
    outcomeTitle: "Outcome",
    outcome:
      "Delivered the product's foundational documentation (PRD, FRD, TRD, MVP milestone plan) as the shared reference point for all four engineering tracks, plus a complete go-to-market strategy — market analysis, pricing tiers, and a pilot validation plan for 15 recruiters — for a product now live at meetmind.hng14.com.",
  },
  {
    id: "vendsync-prioritization",
    title: "The Backlog Crisis: VendSync Q3 Prioritization",
    subtitle: "RICE Prioritization · Stakeholder Management · Stage 7 Simulation",
    context:
      "In Stage 7 of HNG Cohort 14, Emmanuela was given a simulated PM crisis: VendSync, a B2B SaaS platform for African merchants, had 34 points of backlog demand against a 15-point engineering sprint. Five items were competing for the sprint, each with a powerful internal sponsor. The brief required prioritizing the backlog, producing a scoring matrix, writing a stakeholder pushback memo to the CEO, and defending the decisions in a 3-minute video.",
    problemTitle: "The Problem",
    problem:
      "The CEO's favourite feature — an AI Inventory Predictor — scored just 0.2 on RICE (zero user requests, 20% confidence, a 9-point cost). The CEO had publicly committed to investors that it would ship in Q3. Cutting it was the right product decision and the most politically dangerous one.",
    approachTitle: "My Approach",
    approach: [
      "Applied the RICE framework (Reach, Impact, Confidence, Effort) to all five competing items, deliberately using the Confidence variable to surface qualitative risk that raw demand data could not capture.",
      "Selected the Inventory Database Refactor (RICE: 38.6) and the White Screen Checkout Bug Fix (RICE: 8.1) — 11 of 15 points — and reserved 4 points for QA, integration testing, and refactor spillover.",
      "Cut the AI Predictor, WhatsApp Bot, and Multi-Currency Wallet, with specific, data-backed justifications for each.",
      "Wrote a one-page CEO memo — firm, data-referenced, no subheadings — that acknowledged the investor commitment and offered a concrete Q3 discovery and Q4 consideration path.",
    ],
    outcomeTitle: "Outcome",
    outcome:
      "Submitted a complete strategy package including the RICE matrix with scored rationale for every value assigned, a stakeholder pushback memo, and a full video script. The memo addressed the investor commitment directly and proposed a repositioning brief — turning a political “no” into a structured path forward.",
  },
  {
    id: "clinsight-assessment",
    title: "Clinsight PM Assessment: Approved with Risks",
    subtitle: "Product Audit · Risk Assessment · Stage 6 Simulation",
    context:
      "In Stage 6 of HNG Cohort 14, Emmanuela was tasked with conducting a formal PM assessment of Clinsight — a Nigerian healthtech product that allows users to upload lab results and receive AI-powered, plain-language interpretations. The assessment required reviewing the PRD, FRD, MVP milestone plan, and the product's GitHub repository.",
    problemTitle: "The Problem",
    problem:
      "Clinsight was preparing to launch with no NDPR compliance plan, no clinical validation layer, and an undocumented AI confidence-scoring method. The assessment question was simple and high-stakes: do you approve this product for launch?",
    approachTitle: "My Approach",
    approach: [
      "Conducted a full product audit across five dimensions: clinical validation, execution risk, unclear requirements, stakeholder concerns, and delivery scalability.",
      "Applied a risk framework to identify three formal risks — regulatory exposure, an undefined clinical accuracy standard, and a false safety signal from confidence indicators.",
      "Issued a verdict of “Approved with Risks” with six formal pre-launch conditions, framed not as recommendations but as conditions of the verdict.",
      "Produced two presentation decks in different visual styles and wrote a leadership assessment identifying trust — not OCR, not the timeline, not the tech stack — as the single most likely reason Clinsight would fail.",
    ],
    outcomeTitle: "Outcome",
    outcome:
      "Delivered a complete assessment package including audit findings, a prioritization matrix, a dependency review, and a leadership assessment. The six pre-launch conditions were specific, defensible, and directly traceable to evidence in the documents and repository.",
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
    category: "Prioritization",
    skills: [
      "RICE Framework",
      "Data-Backed Decision Making",
      "Stakeholder Pushback & Negotiation",
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
      "Pricing Strategy",
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
    organization: "HNG Tech — Product Management Track",
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
