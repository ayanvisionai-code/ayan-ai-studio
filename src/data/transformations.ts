export interface TransformationMockup {
  title: string;
  label: string;
  image?: string;
  fit?: string;
}

export interface TransformationPreview {
  problem: string;
  change: string;
  result: string;
  metric?: { value: string; label: string };
}

export interface Transformation {
  slug: string;
  type: string;
  client: string;
  summary: string;
  context: string;
  challenges: string;
  bottlenecks: string;
  discovery: string;
  objectives: string;
  strategy: string;
  architecture: string[];
  implementation: string;
  results: string;
  lessons: string;
  mockups?: TransformationMockup[];
  liveLink: string;
  ctaTitle: string;
  ctaHeading: string;
  ctaDescription: string;
  ctaPrimaryButton: string;
  ctaSecondaryButton: string;
  ctaInfoCardTitle?: string;
  ctaInfoCardContent?: string;
  endingNote?: string;
  framework: string;
  relatedInsights: string[];
  relatedMethodologies: string[];
  relatedSolution: string;
  /** Short, homepage-safe summary distilled from the fields above — no facts beyond what's stated in this record. */
  homepagePreview: TransformationPreview;
}

// Single source of truth for real transformation projects.
// Consumed by both /transformations (full executive reports) and the homepage (concise preview).
export const transformations: Transformation[] = [
  {
    slug: "rongdhonu",
    type: "Commercial Implementation",
    client: "Rongdhonu Operating System",
    summary: "Engineered a comprehensive Digital Operating System for a cultural organization. We decoupled their public digital presence from their internal administration, replacing scattered manual workflows with a single centralized platform that governs artists, members, exhibitions, and historical archives.",
    context: "Rongdhonu is a cultural organization managing artists, exhibitions, artwork, members, public engagement, and organizational history. As the organization expanded, manual coordination became increasingly difficult. Administrative activities—such as tracking artist submissions, managing member renewals, and organizing exhibition data—became severely fragmented across different SaaS tools and paper-based processes.",
    challenges: "The organization experienced severe administrative overhead. Member management was entirely manual, requiring individual tracking in spreadsheets. Artwork tracking was disjointed, making it difficult to maintain an accurate catalog. Furthermore, exhibition preparation was incredibly time-consuming due to disconnected communication, and preserving historical records of past events was nearly impossible.",
    bottlenecks: "The root cause of these challenges was a complete lack of centralized operations. Because information was siloed in different spreadsheets and email inboxes, administrators were forced into repeated manual work just to keep the organization running. The lack of integrations meant there was extremely limited operational visibility, and critical organizational knowledge was trapped in the minds of individual administrators.",
    discovery: "We analyzed the organization by studying how exhibition operations were conducted and evaluating member management workflows. We identified severe administrative pain points caused by redundant data entry. We observed that their public website was completely disconnected from their internal database. Our priority was not to just build a new website, but to redesign their entire operational architecture to support sustainable long-term growth.",
    objectives: "Centralize all organizational information into a single database. Reduce manual administration. Improve collaboration among administrators. Simplify exhibition preparation. Improve the public experience, and create a scalable architecture that preserves historical records indefinitely.",
    strategy: "The chosen strategy was to strictly separate the public experience from internal operations. Rather than building a monolithic website, we architected a connected operating system. By centralizing organizational knowledge in a headless backend, we could reduce repetitive administration and ensure that every piece of data—whether an artist profile or an exhibition record—only needed to be entered once. This architectural decision guarantees future scalability.",
    architecture: [
      "Members", "Artist Portal", "Artwork Catalog", "Exhibitions", "Administration", "Archive", "Public Gallery"
    ],
    implementation: "We built two interconnected environments. The Internal Platform manages member accounts, artist profiles, artwork catalogs, exhibition workflows, notifications, and historical archives via a secure Administration Dashboard. The Public Platform serves as the organization's face, displaying the website, artist showcases, exhibition archives, artwork galleries, public events, and organizational information.",
    results: "The operating system fundamentally transformed how Rongdhonu functions. All organizational information is now centralized, leading to vastly simplified exhibition preparation and improved administrative coordination. Artwork management is now precise and scalable. The public communication is far more consistent, and the organization now possesses a permanent, automated mechanism for the long-term preservation of its history.",
    lessons: "This project proved that technology alone does not solve operational problems. Understanding internal workflows is far more important than merely selecting software. By ensuring business architecture preceded implementation, we delivered operational clarity that creates genuine long-term sustainability.",
    mockups: [
      {
        title: "Public Platform Interface",
        label: "Insert Rongdhonu Public Website Screenshot (1920x1080)",
        image: "/rongdhonu-public-website.png"
      },
      {
        title: "Administrative Headless CMS",
        label: "Insert Rongdhonu Admin Dashboard Screenshot (1920x1080)",
        image: "/rongdhonu-dashboard.png",
        fit: "contain"
      }
    ],
    liveLink: "https://rong-dhonu.vercel.app/en",
    ctaTitle: "11. Experience the Public Platform",
    ctaHeading: "Explore the Rongdhonu Operating System.",
    ctaDescription: "Explore the public-facing experience of the Rongdhonu Operating System. The administrative operating system remains private and is used exclusively by authorized organization administrators.",
    ctaPrimaryButton: "View Live Public Platform",
    ctaSecondaryButton: "Explore System Architecture",
    framework: "Connected Business Architecture",
    relatedInsights: ["Designing for Invisibility", "The Cost of Fragmented Logic"],
    relatedMethodologies: ["System Architecture", "Operational Mapping"],
    relatedSolution: "Data Unification & Intelligence",
    homepagePreview: {
      problem: "A cultural organization's member records, artwork catalog, and exhibition planning lived across scattered spreadsheets and paper processes — coordination got harder every time it grew.",
      change: "We built a complete operating system: a public gallery and website connected to a private platform that manages members, artists, artwork, and exhibitions from one place.",
      result: "Exhibition preparation is now vastly simpler, artwork management is precise and scalable, and the organization has a permanent record of its own history."
    }
  },
  {
    slug: "agencyos",
    type: "Unified Operating System",
    client: "Digital Agencies (AgencyOS)",
    summary: "Digital agencies often rely on many disconnected tools to manage leads, projects, communication, workflows, reporting, and client relationships. AgencyOS was designed as a unified operating system that brings these operational functions into one connected platform. The objective was not to build another SaaS product. The objective was to redesign how agencies operate.",
    context: "Digital agencies handle sales, client onboarding, project delivery, team collaboration, automation, reporting, and customer communication simultaneously. As agencies grow, operational complexity increases. Different departments begin relying on separate tools, making coordination increasingly difficult.",
    challenges: "Leads are stored in different places. Client onboarding is painfully manual. Project information is scattered across tools, making team coordination difficult. Administrators suffer from repeated work, while leadership has poor visibility into operations. Disconnected reporting and workflow inconsistency fuel growing operational complexity.",
    bottlenecks: "These problems existed because of multiple disconnected platforms. Manual information transfer caused duplicate work and fragmented communication. There was no centralized operational architecture. The lack of standardized workflows inherently limited business visibility.",
    discovery: "We studied agency workflows by analyzing lead acquisition, the sales process, client onboarding, project execution, internal collaboration, and reporting. We mapped operational dependencies and observed that agencies did not need more software. They needed one connected operating model.",
    objectives: "Centralize business operations. Reduce operational complexity. Create one source of truth. Improve collaboration, support automation, increase visibility, and build truly scalable operational processes.",
    strategy: "The architectural thinking prioritized one integrated operating system instead of introducing additional disconnected tools. We designed a modular architecture with unified workflows, connected data, and shared operational intelligence. Future scalability was the primary directive, ensuring technology remained secondary to the business strategy.",
    architecture: [
      "Lead Capture", "Sales Pipeline", "Client Onboarding", "Project Workspace", "Task Automation", "Reporting"
    ],
    implementation: "AgencyOS provides comprehensive business capabilities: Lead Management, CRM, Client Management, Project Workspace, Task Management, Workflow Automation, Internal Dashboard, Reporting, Authentication, Role-based Access, Notifications, Knowledge Management, and Analytics. These operational functions are powered by a headless architecture.",
    results: "Agency operations improved significantly. The platform provided centralized operational visibility, more efficient client onboarding, and better collaboration. Project tracking improved while manual administration was drastically reduced. Connected workflows resulted in scalable operational processes.",
    lessons: "Business architecture should come before software selection. Operational clarity is more valuable than adding more tools. Connected systems outperform disconnected workflows. Technology creates value only when it supports well-designed operations.",
    mockups: [
      {
        title: "Unified Agency Dashboard",
        label: "Insert AgencyOS Dashboard Screenshot (1920x1080)",
        image: "/agencyos-dashboard.png",
        fit: "contain"
      },
      {
        title: "Client & Contract Management",
        label: "Insert AgencyOS Client Screenshot (1920x1080)",
        image: "/agencyos-client-redacted.png",
        fit: "contain"
      },
      {
        title: "Project Management & Delivery",
        label: "Insert AgencyOS Projects Screenshot (1920x1080)",
        image: "/agencyos-projects.png",
        fit: "contain"
      }
    ],
    liveLink: "https://agency-application-fckg.vercel.app",
    ctaTitle: "11. Experience AgencyOS",
    ctaHeading: "AgencyOS represents the practical implementation of the transformation described above.",
    ctaDescription: "Explore the live platform to understand how modern digital agencies can centralize operations, manage client relationships, organize projects, automate workflows, and improve operational visibility through one connected operating system. The platform demonstrates how business architecture is translated into a real operational system.",
    ctaPrimaryButton: "Explore AgencyOS",
    ctaSecondaryButton: "Explore System Architecture (Coming Soon)",
    ctaInfoCardTitle: "Live Demonstration",
    ctaInfoCardContent: "This public platform demonstrates the practical implementation of the AgencyOS operational architecture. Visitors can explore the interface to better understand how the system supports agency operations through one connected platform.",
    endingNote: "This transformation illustrates our approach to designing intelligent business operating systems. Rather than introducing additional software, we begin by understanding operational workflows, identifying structural bottlenecks, and designing an architecture that enables organizations to operate with greater clarity, coordination, and scalability. AgencyOS is the practical outcome of that philosophy.",
    framework: "Connected Business Architecture",
    relatedInsights: ["The Cost of Fragmented Logic", "Designing for Invisibility"],
    relatedMethodologies: ["System Architecture", "Operational Mapping"],
    relatedSolution: "Data Unification & Intelligence",
    homepagePreview: {
      problem: "Digital agencies juggling leads, client onboarding, and project delivery across disconnected tools — with leadership flying blind on what's actually happening.",
      change: "We built AgencyOS: a unified operating system for agencies, bringing lead management, CRM, project workspace, task automation, and reporting into one connected platform.",
      result: "Client onboarding is faster, manual administration dropped sharply, and leadership finally has real operational visibility."
    }
  },
  {
    slug: "lead-routing",
    type: "Internal Demonstration",
    client: "Intelligent Lead Routing Systems",
    summary: "An internal prototype demonstrating how conversational AI can function as a centralized operational intake layer. The system eliminates manual lead qualification, protects expensive human capital, and ensures instant, accurate routing of high-value prospects.",
    context: "In high-ticket sales environments (such as luxury real estate, premium consulting, and private equity), inbound lead volume frequently outpaces the capacity of the sales team. The existing way of working usually involves human agents reading inquiries chronologically and attempting to decide who is worth calling. The operational environment demands extreme speed and precision.",
    challenges: "The daily reality involved extremely slow customer response times, duplicate work as agents manually sorted through unqualified emails, and a heavy reliance on disjointed spreadsheets to track VIP prospects. Fragmented communication meant that high-value leads were frequently slipping through the cracks while agents wasted time on unqualified inquiries.",
    bottlenecks: "The process lacked any standardized filtering automation. The bottleneck was entirely human: highly skilled closers were forced to perform manual administrative sorting before they could actually sell. Information silos between the website inbox and the CRM meant there was no way to instantly prioritize leads.",
    discovery: "During business discovery for similar clients, we consistently observed that sales agents were acting as expensive receptionists. We asked: 'How much revenue is lost because an agent is busy qualifying the wrong lead?' We analyzed existing workflows and realized that a synchronous, human-driven intake process was fundamentally incompatible with high-volume digital environments. The priority was asynchronous filtering.",
    objectives: "Centralize the intake operation. Simplify administration for the sales team. Improve the customer experience by providing instant responses, and increase operational visibility so leadership can track lead flow in real-time without manual reporting.",
    strategy: "The strategic solution required removing the human from the initial intake phase entirely. We evaluated using offshore virtual assistants but rejected the approach due to latency (time-to-lead must be under 5 minutes for conversion) and privacy concerns. The architectural decision was made to deploy an LLM-driven reasoning layer capable of instantly evaluating intent, querying parameters, and routing data without human delay. The trade-off was accepting a slightly less rigid intake format in exchange for conversational fluidity.",
    architecture: [
      "Visitor Intent", "AI Receptionist", "Parameter Extraction", "Qualification", "CRM Routing", "Agent Alert"
    ],
    implementation: "We built an AI Receptionist as the frontline implementation layer. The system utilizes conversational agents to engage the visitor, extract structured parameters (budget, timeline, requirements), and cross-reference them against internal business rules. Qualified dossiers are pushed directly into the CRM, and the correct agent receives an instant notification containing the summarized data.",
    results: "The system ensures instantaneous communication and faster operations. Agents no longer spend hours qualifying cold leads; they only speak to buyers who match exact criteria. Average response time dropped from roughly 48 hours to about 3 minutes in the internal demonstration. This results in significantly reduced manual effort, better team coordination, and an incredibly scalable intake process that never sleeps.",
    lessons: "In premium environments, speed to qualification is more important than speed to response. A fast 'no' is just as valuable as a fast 'yes'. This project reinforced why centralized operations improve efficiency and why rigid workflows must sometimes give way to intelligent, probabilistic reasoning layers.",
    mockups: [
      {
        title: "AI Reception Logic Parsing",
        label: "Insert AI Conversation / Parameter Extraction Screenshot (1920x1080)"
      },
      {
        title: "CRM Lead Dossier (Automated)",
        label: "Insert CRM Routed Lead Screenshot (1920x1080)"
      }
    ],
    liveLink: "#",
    ctaTitle: "11. Explore the Live Platform",
    ctaHeading: "Experience the transformed system.",
    ctaDescription: "The public website serves as the front-end experience for clients, while the true Operational Core orchestrates data, logic, and reasoning silently behind the scenes for internal administrators.",
    ctaPrimaryButton: "View Live Platform",
    ctaSecondaryButton: "Explore System Architecture",
    framework: "Intelligent Orchestration",
    relatedInsights: ["Agents vs. Automations"],
    relatedMethodologies: ["Agent Integration", "Workflow Automation"],
    relatedSolution: "Customer Communication System",
    homepagePreview: {
      problem: "High-value leads were slipping through the cracks — sales agents were acting as expensive receptionists, manually sorting inquiries instead of selling.",
      change: "We built an AI intake system that engages every lead instantly, asks the right questions, and routes a qualified summary straight to the right agent.",
      result: "Average response time dropped from roughly 48 hours to about 3 minutes, in this internal demonstration.",
      metric: { value: "48 Hours → 3 Minutes", label: "Avg. Response Time (Internal Demo)" }
    }
  }
];
