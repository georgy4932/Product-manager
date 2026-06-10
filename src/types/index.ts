export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TimelineItem {
  title: string;
  description: string;
}

export interface ExperienceEntry {
  organization: string;
  role: string;
  product: string;
  duration: string;
  summary: string;
  responsibilities: string[];
  timeline: TimelineItem[];
}

export interface FeaturedProductDetail {
  label: string;
  value: string;
}

export interface FeaturedProduct {
  name: string;
  tagline: string;
  description: string;
  role: string;
  liveUrl?: string;
  responsibilities: string[];
  ownership: string[];
  techStack: string[];
}

export interface WorkSample {
  id: string;
  title: string;
  category: string;
  context: string;
  problem: string;
  approach: string;
  outcome: string;
  link?: string;
}

export interface CaseStudySection {
  heading: string;
  items: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  context: string;
  problemTitle: string;
  problem: string;
  approachTitle: string;
  approach: string[];
  outcomeTitle: string;
  outcome: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  title: string;
  organization: string;
  year: string;
  credentialId?: string;
  credentialUrl?: string;
  image: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  location: string;
  availability: string;
}
