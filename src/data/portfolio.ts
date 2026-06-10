import type {
  NavLink,
  Stat,
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
    "Product Manager focused on product discovery, prioritization, stakeholder alignment, and go-to-market execution.",
  summary:
    "Building user-centered products through structured thinking, clear communication, and cross-functional collaboration.",
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
    "At HNG, she served as Product Manager for MeetMind, leading a cross-functional team of backend engineers, frontend engineers, DevOps engineers, and product designers through the full product lifecycle — from discovery and requirements to sprint execution, stakeholder management, and go-to-market planning.",
    "She worked across product discovery, requirements definition, sprint planning, stakeholder communication, prioritization, product strategy, and go-to-market planning — owning the product story as much as the product spec.",
    "She believes successful products emerge when user needs, business goals, and engineering realities are aligned.",
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

export const stats: Stat[] = [
  { value: "4+", label: "Product Milestones Managed" },
  { value: "80+", label: "Cross-Functional Tickets Coordinated" },
  { value: "2", label: "Formal Product Assessments Completed" },
];

export const experience: ExperienceEntry = {
  organization: "HNG Internship — Cohort 14",
  role: "Product Manager — MeetMind AI Interviewer",
  product: "MeetMind AI Interviewer",
  duration: "April 2026 – June 2026",
  summary:
    "HNG is a highly competitive remote internship programme that simulates a real product company environment, with participants assessed and eliminated at every stage based on output quality. As Product Manager on the Product Management track, Emmanuela led the MeetMind team through the full product lifecycle and through formal product assessments including live prioritization and audit exercises.",
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
      "Foundational product document for MeetMind AI Interviewer, written at the start of the HNG Cohort 14 build.",
    problem:
      "Backend, frontend, DevOps, and design teams needed a single source of truth for what MeetMind was, who it served, and what success looked like before any work could begin.",
    approach:
      "Authored the PRD from scratch — defining the product vision, target users (recruiters), the Passive / Standard / Proactive participation model, and success criteria for the AI interviewer.",
    outcome:
      "Gave all four engineering tracks a shared reference point, anchoring 4 milestones of roadmap planning and 80+ tickets.",
  },
  {
    id: "frd",
    title: "Functional Requirements Document (FRD)",
    category: "MeetMind AI Interviewer",
    context:
      "Companion document to the PRD, translating product requirements into functional behaviour for engineering.",
    problem:
      "Engineers needed precise functional definitions for real-time call participation, scorecard tracking, follow-up questioning, and post-call summary generation.",
    approach:
      "Documented the functional flow and expected behaviour for each core capability, mapped directly to the participation modes defined in the PRD.",
    outcome:
      "Provided backend and frontend teams with a shared functional reference used throughout sprint execution.",
  },
  {
    id: "trd",
    title: "Technical Requirements Document (TRD)",
    category: "MeetMind AI Interviewer",
    context:
      "Technical specification for MeetMind's SDK integration milestone.",
    problem:
      "Without measurable technical benchmarks, the SDK integration milestone had no objective definition of “done.”",
    approach:
      "Defined transcript accuracy benchmarks (word error rate below 10%), voice response latency requirements (under 6 seconds), and audio data purge windows (10 minutes post-session).",
    outcome:
      "Gave engineering concrete, testable acceptance criteria for the SDK integration milestone.",
  },
  {
    id: "mvp-milestones",
    title: "MVP Milestone Planning",
    category: "MeetMind AI Interviewer",
    context:
      "Roadmap planning for MeetMind's path from MVP to go-to-market.",
    problem:
      "A complex AI product build — covering authentication, sessions, AI integration, and scorecards — needed to be sequenced into a roadmap a full cross-functional team could execute against.",
    approach:
      "Defined and managed a roadmap of 4 milestones plus a dedicated GTM phase, then broke each milestone into ClickUp-ready tickets with Ticket ID, Track, Description, Problem Statement, User Story, Acceptance Criteria, Edge Cases, Requirements, Assignee, Priority, Dependencies, and Status.",
    outcome:
      "Produced 80+ tracked tickets across BE, FE, DevOps, PD, and QA — the operational backbone of the build.",
  },
  {
    id: "rice-prioritization",
    title: "RICE Prioritization Exercise",
    category: "VendSync Q3 · Stage 7 Simulation",
    context:
      "VendSync, a simulated B2B SaaS platform for African merchants, had 34 backlog points competing for a 15-point sprint, with five initiatives each backed by a powerful internal sponsor.",
    problem:
      "The CEO's preferred feature — an AI Inventory Predictor — had a RICE score of just 0.2 (zero user requests, 20% confidence, a 9-point cost), yet the CEO had publicly committed it to investors for Q3.",
    approach:
      "Applied the RICE framework (Reach, Impact, Confidence, Effort) to all five competing items, deliberately using the Confidence variable to surface qualitative risk that raw demand data could not capture.",
    outcome:
      "Selected the Inventory Database Refactor (RICE 38.6) and the White Screen Checkout Bug Fix (RICE 8.1) — 11 of 15 points — and reserved 4 points for QA and integration buffer, with documented justification for cutting the AI Predictor, WhatsApp Bot, and Multi-Currency Wallet.",
  },
  {
    id: "ceo-pushback-memo",
    title: "CEO Stakeholder Pushback Memo",
    category: "VendSync Q3 · Stage 7 Simulation",
    context:
      "Direct follow-on from the VendSync RICE exercise — the CEO had publicly committed the AI Inventory Predictor to investors for Q3.",
    problem:
      "Cutting the CEO's preferred feature was the right product call, but also the most politically sensitive one — it had to be communicated without losing executive trust.",
    approach:
      "Wrote a one-page, data-referenced memo to the CEO that acknowledged the investor commitment directly and proposed a concrete Q3 discovery / Q4 consideration path, then defended the reasoning in a 3-minute video.",
    outcome:
      "Turned a politically difficult “no” into a structured path forward, backed by a full RICE matrix and a documented rationale for every score.",
  },
  {
    id: "clinsight-audit",
    title: "Clinsight Product Audit",
    category: "Clinsight Healthtech · Stage 6 Simulation",
    context:
      "Formal PM assessment of Clinsight, a Nigerian healthtech product that lets users upload lab results and receive AI-generated, plain-language interpretations.",
    problem:
      "Clinsight was preparing to launch with no NDPR compliance plan, no clinical validation layer, and an undocumented AI confidence-scoring method.",
    approach:
      "Reviewed the PRD, FRD, MVP milestone plan, and GitHub repository; ran a five-dimension audit covering clinical validation, execution risk, unclear requirements, stakeholder concerns, and delivery scalability; and applied a risk framework that surfaced three formal risks.",
    outcome:
      "Issued a verdict of “Approved with Risks” alongside six formal pre-launch conditions, two presentation decks, and a leadership assessment identifying trust as the primary launch risk.",
  },
  {
    id: "gtm-strategy",
    title: "Go-To-Market Strategy",
    category: "MeetMind AI Interviewer",
    context:
      "GTM phase of the MeetMind roadmap, planned alongside the product build.",
    problem:
      "MeetMind needed a credible path from a built product to validation with real recruiters in market.",
    approach:
      "Produced a market analysis, ICP definition, competitive positioning, pricing tiers, acquisition channels, and a pilot validation plan for 15 pilot recruiters.",
    outcome:
      "Delivered a launch-week execution plan and pilot validation framework ready to test MeetMind with real users.",
  },
];

export const caseStudies: CaseStudy[] = [
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
