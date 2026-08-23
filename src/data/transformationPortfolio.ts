export type TransformationCategory =
  | "websites"
  | "websites-apps"
  | "applications"
  | "automation";

export interface TransformationImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Optional tiny base64 preview shown while the full image loads — a quiet, premium placeholder instead of an empty rectangle. */
  blurDataURL?: string;
  /**
   * "full" renders this image full-width, standalone, instead of squeezed into the default
   * half-width pairing with text. Use for a section capture whose real content is naturally
   * tall/portrait — forcing that into a narrow column would distort its presentation.
   * Defaults to the standard paired treatment when omitted.
   */
  layout?: "paired" | "full";
  /** Optional short caption shown beneath the image — what the visual is evidence of. */
  caption?: string;
}

export interface TransformationEntry {
  slug: string;
  category: TransformationCategory;
  title: string;
  /** Short, plain-language descriptor of what kind of business/project this is. */
  type: string;
  /** Large editorial one-line statement of what the transformation was about. */
  oneLiner: string;
  status: "live" | "concept";
  statusLabel: string;
  /** One line: what kind of business is this. */
  businessContext: string;
  /** What needed to improve. */
  challenge: string;
  /** What was actually built. */
  solution: string;
  /** How it helps the business — qualitative, never a fabricated metric. */
  value: string;
  /** Short list of real, existing capabilities — not a technology stack dump. */
  capabilities: string[];
  /** 2–6 curated images, in narrative order. Omit for automation entries that use a diagram instead. */
  images: TransformationImage[];
  /**
   * Real, honestly-labelled workflow steps for an automation entry, rendered as a clean
   * diagram built from this data — never a fabricated screenshot. Present only for
   * automation-category entries that have no representative visual asset.
   */
  diagramNodes?: string[];
  /** A verified, already-documented internal figure (with its own qualifier) — never invented here. */
  verifiedNote?: string;
  /**
   * Optional bespoke callouts for a capability specific to this one project — e.g. an
   * owner-managed content system or a direct inquiry channel. Not every project needs
   * these; only present when there's something genuinely distinct to explain.
   */
  highlights?: { label: string; text: string }[];
  /** Real, verified destination only. No CTA is rendered when this is null — never a "#" placeholder. */
  liveUrl: string | null;
  /** Required only when liveUrl is set — there is nothing to label otherwise. */
  ctaLabel?: string;
  /**
   * When true, the Approach section renders as text only — no paired/full-width visual —
   * and every image after the Business Need visual flows into the closing image grid instead.
   * Defaults to false (unchanged behavior) for every entry that omits it.
   */
  skipApproachVisual?: boolean;
}

export interface TransformationCategoryMeta {
  id: TransformationCategory;
  number: string;
  navLabel: string;
  title: string;
  description: string;
  /** The dedicated case-study route for this category — URL-safe, no spaces. */
  route: string;
}

export const transformationCategories: TransformationCategoryMeta[] = [
  {
    id: "websites",
    number: "01",
    navLabel: "Websites",
    title: "Websites",
    description:
      "Digital experiences designed around how a business needs to present itself, attract customers and guide them toward action.",
    route: "/transformations/website",
  },
  {
    id: "websites-apps",
    number: "02",
    navLabel: "Websites + Custom Applications",
    title: "Websites + Custom Applications",
    description: "A public-facing experience connected to the system behind the business.",
    route: "/transformations/website-plus-applications",
  },
  {
    id: "applications",
    number: "03",
    navLabel: "Custom Applications",
    title: "Custom Applications",
    description:
      "Dedicated software designed around a company's actual workflow, rather than forcing the business into generic tools.",
    route: "/transformations/custom-applications",
  },
  {
    id: "automation",
    number: "04",
    navLabel: "Automations",
    title: "Automations",
    description:
      "Processes that can evaluate information, make routine decisions and move work forward without constant manual intervention.",
    route: "/transformations/automations",
  },
];

// Single source of truth for the Transformations section. Every fact here is drawn from the
// real project repositories already audited in this workspace — no invented clients,
// metrics, or URLs. Entries with no verified live URL render no live-experience CTA.
export const transformationEntries: TransformationEntry[] = [
  // ---------------------------------------------------------------------
  // 01 — WEBSITES
  // ---------------------------------------------------------------------
  {
    slug: "paper-museum",
    category: "websites",
    title: "Paper Museum",
    type: "Stationery & Creative Products · Retail Website",
    oneLiner: "Turning a wide product catalogue into a shop worth browsing.",
    status: "live",
    statusLabel: "Live Project",
    businessContext: "A stationery and gift shop with a wide, personality-driven product range.",
    challenge:
      "A catalogue this varied — pens, notebooks, art supplies, gifts — can easily start to feel like generic clutter online, and the brand's warmth can get lost in a plain product list.",
    solution:
      "A warm, visual storefront that leads with a featured collection and clearly labelled categories, so browsing feels like exploring a curated shop rather than searching a database — with the brand's personality carried through photography and layout, not confined to a separate About page.",
    value:
      "Makes a wide catalogue easy to browse without it feeling like an impersonal marketplace, and turns the website itself into part of the brand experience rather than just a place to list products.",
    capabilities: [
      "Featured collection & category-led homepage",
      "Full product catalogue by category",
      "\"Popular Picks\" bestseller section",
      "Customer testimonials & brand story",
      "WhatsApp enquiry and contact",
    ],
    images: [
      { src: "/paper-museum-hero.jpg", alt: "Paper Museum homepage hero — featured stationery collection", width: 1400, height: 875 },
      { src: "/paper-museum-products.jpg", alt: "Paper Museum product catalogue organized by category", width: 1440, height: 900 },
      { src: "/paper-museum-story.jpg", alt: "Paper Museum brand values section — Crafted for Perfection", width: 1440, height: 600 },
      { src: "/paper-museum-picks.jpg", alt: "Paper Museum Popular Picks bestseller section", width: 1400, height: 875 },
    ],
    liveUrl: "https://paper-musium.vercel.app",
    ctaLabel: "View Live Website",
  },
  {
    slug: "privet-jets",
    category: "websites",
    title: "Privet Jets",
    type: "Private Aviation · Charter Membership Website",
    oneLiner: "Communicating the experience before the journey begins.",
    status: "live",
    statusLabel: "Live Project",
    businessContext: "A private jet charter service competing for high-value clients who expect exclusivity before they ever pick up the phone.",
    challenge:
      "A plain booking form can't communicate the trust, safety and standard of service that a premium charter client is actually paying for.",
    solution:
      "A cinematic, editorial site that leads with identity and standard of service — full-motion footage, a fleet presented as a curated collection with its own detail pages, and a trust section — before ever asking for a booking.",
    value:
      "Turns the website into the client's first impression of the operator's standard of service, not just a scheduling utility, and sets it apart from commodity charter marketplaces.",
    capabilities: [
      "Cinematic full-motion hero",
      "Fleet showcase — three aircraft with dedicated detail pages",
      "Membership-style flight request flow",
      "Concierge enquiry form",
      "Client trust section and press mentions",
    ],
    images: [
      { src: "/privet-jets-hero.jpg", alt: "Privet Jets homepage hero — private jet in flight above the clouds", width: 1440, height: 900 },
      { src: "/privet-jets-manifesto.jpg", alt: "Privet Jets brand positioning — Private Access, Open Horizons", width: 1400, height: 632 },
      { src: "/privet-jets-fleet.jpg", alt: "Privet Jets fleet showcase — three aircraft presented as a curated collection", width: 1400, height: 1021 },
      { src: "/privet-jets-booking.jpg", alt: "Privet Jets flight request form", width: 1400, height: 778 },
    ],
    liveUrl: "https://privet-jet.vercel.app",
    ctaLabel: "View Live Website",
  },
  {
    slug: "sweet-dishes",
    category: "websites",
    title: "Sweet Dishes",
    type: "Fine Dining · Restaurant Website",
    oneLiner: "The website becomes part of the restaurant's identity.",
    status: "live",
    statusLabel: "Live Project",
    businessContext: "A premium restaurant competing on atmosphere and craft, not just menu price.",
    challenge:
      "A restaurant like this can't look interchangeable with a hundred other listings on a review site — the website needs to carry the same weight as the dining room.",
    solution:
      "A dark, editorial site structured like a print feature: the philosophy and executive chef given their own moment, a tasting menu framed as a journey, and a private VIP dining path — all before the reservation form.",
    value:
      "Makes the restaurant's identity, not just its menu, the first thing a visitor experiences — reinforcing its premium positioning before a guest ever calls to book.",
    capabilities: [
      "Dark, atmosphere-led homepage",
      "Philosophy & Executive Chef feature",
      "Nine-course tasting menu journey",
      "Signature Selections showcase",
      "Private VIP dining path",
      "Reservation flow with VIP enquiry path",
    ],
    images: [
      { src: "/sweet-dishes-hero.jpg", alt: "Sweet Dishes homepage hero — dark, atmospheric restaurant interior", width: 1440, height: 900 },
      { src: "/sweet-dishes-philosophy.jpg", alt: "Sweet Dishes philosophy section featuring the executive chef", width: 1400, height: 826 },
      { src: "/sweet-dishes-tasting.jpg", alt: "Sweet Dishes tasting menu section with a plated signature dish", width: 1440, height: 900 },
      { src: "/sweet-dishes-menu.jpg", alt: "Sweet Dishes Signature Selections menu grid", width: 1400, height: 875 },
      { src: "/sweet-dishes-vip.jpg", alt: "Sweet Dishes Inner Circle VIP private dining section", width: 1400, height: 632 },
    ],
    liveUrl: "https://restaurants-vert-six.vercel.app",
    ctaLabel: "View Live Website",
  },
  {
    slug: "blueice",
    category: "websites",
    title: "Lakhey Lachen Homestay",
    type: "Himalayan Hospitality · Homestay Website",
    oneLiner: "Communicating a place, not just a room, before a guest ever arrives.",
    status: "live",
    statusLabel: "Live Project",
    businessContext: "A family-run homestay at 3,800 feet in Munsong, Kalimpong, in the Himalayan foothills — competing for guests who are choosing an experience, not just somewhere to sleep.",
    challenge:
      "A homestay isn't selling a room. It's selling a place, an atmosphere and a reason to choose it over anywhere else — and none of that comes across in a listing on a booking aggregator. The website needed to let a guest feel the mountain, the quiet and the hospitality before they ever asked a question.",
    solution:
      "A destination-led site built around the actual experience of staying there: the view from the ridge, the rhythm of mornings and evenings, the family's own story, and a direct, personal way to ask about a stay — instead of a generic booking form standing in for a conversation.",
    value:
      "Designed to let a potential guest understand the place — the altitude, the setting, the atmosphere — before they reach out, so the first message already comes from someone who wants to come, not someone still deciding what this even is.",
    capabilities: [
      "Destination-led homepage with real location & elevation storytelling",
      "Dedicated Stays, Experiences, Our Story and Contact pages",
      "Curated experience showcase (sunrise views, bonfire evenings, tea garden trails, mountain waterfalls)",
      "Direct WhatsApp and phone inquiry",
      "Bilingual navigation (English / Bengali)",
    ],
    images: [
      {
        src: "/blueice-hero.jpg",
        alt: "BlueIce Lakhey Lachen Homestay homepage hero — Himalayan mountain view at sunrise with reservation panel",
        width: 1800,
        height: 1013,
        caption: "The homepage hero — the first impression a visitor gets.",
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAJABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBf/EAB8QAAICAgEFAAAAAAAAAAAAAAECAAMRExIUMTJBgf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABIB/9oADAMBAAIRAxEAPwDFrNOpWNIb73h7qVDHp1C4GRyxIKfcTb5QnFU//9k=",
      },
      {
        src: "/blueice-business-need.jpg",
        alt: "BlueIce destination storytelling section — Slow Down, You've Reached the Ridge, with elevation and location detail",
        width: 1600,
        height: 1158,
        caption: "How the site communicates the destination and atmosphere.",
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAEG/8QAHxABAAICAgIDAAAAAAAAAAAAAQIDABESIQQxQVFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8Aysa2ZHgLKToPvG+ZRVTVKLQ12nXc17/MBzkAcnQ7D4Ms7Z2yZTdr7yFj/9k=",
      },
      {
        src: "/blueice-stay.jpg",
        alt: "BlueIce Stays page hero — A Cedar Sanctuary, Wrapped in Mountain Silence",
        width: 1600,
        height: 679,
        caption: "The Stays page — how the accommodation itself is presented.",
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAHABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAACAgEFAAAAAAAAAAAAAAABAgADESEiMkFh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAwDAQACEQMRAD8Amq7lrTgrNjvMWOj1bwS590ERBVkMv//Z",
      },
      {
        src: "/blueice-story.jpg",
        alt: "BlueIce \"Not a Hotel. A Home That Remembers You\" section — the property's philosophy and identity",
        width: 1600,
        height: 887,
        caption: "The Story section — how the site communicates the homestay's identity.",
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAJABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECBv/EABwQAAICAgMAAAAAAAAAAAAAAAABAhESIkFhgf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDLxUK2ck+hPHi/SQAT/9k=",
      },
      {
        src: "/blueice-contact.jpg",
        alt: "BlueIce Contact page hero — A Seat by the Fire, Always Waiting for You",
        width: 1600,
        height: 679,
        caption: "The Contact page — how a visitor moves toward a direct inquiry.",
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAHABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIG/8QAHBAAAQUBAQEAAAAAAAAAAAAAEQABAgMSFCIx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAAiH/2gAMAwEAAhEDEQA/AM/11tXiuAk49D4rlzvmy2WpAgOERFWZ5f/Z",
      },
    ],
    highlights: [
      {
        label: "Owner-Controlled Content",
        text: "Behind the public experience is a content system the owner manages directly — stays, photos and property information can be kept current without waiting on a developer for every small change.",
      },
      {
        label: "A Direct Line To The Host",
        text: "The site connects a visitor straight into a WhatsApp or phone conversation with the host — as the site itself puts it: \"no middlemen, no automated portals, just personal Sikkim warmth from the moment you inquire.\"",
      },
    ],
    liveUrl: "https://blueices-v2.vercel.app",
    ctaLabel: "View Live Website",
    skipApproachVisual: true,
  },

  // ---------------------------------------------------------------------
  // 02 — WEBSITES + CUSTOM APPLICATIONS
  // ---------------------------------------------------------------------
  {
    slug: "rongdhonu",
    category: "websites-apps",
    title: "Rongdhonu Operating System",
    type: "Cultural Organization · Public Website + Internal Management System",
    oneLiner: "The public website is only one part of the system.",
    status: "live",
    statusLabel: "Live Project",
    businessContext: "A cultural organization managing artists, exhibitions, artwork, members and public engagement.",
    challenge:
      "Member records, artwork catalogues and exhibition planning lived across scattered spreadsheets and email, completely disconnected from the public website — every update meant re-entering the same information by hand.",
    solution:
      "We built two connected environments instead of one website: a public platform — gallery, exhibitions, artist showcases — and a private administration system behind it that manages members, artists, artwork and exhibitions from a single place.",
    value:
      "Behind the public website is a system that lets the organization manage its content, artists and exhibitions without re-entering the same information twice, and gives it a permanent record of its own history.",
    capabilities: [
      "Public gallery, exhibitions & artist showcase",
      "Member management",
      "Artist portal & artwork catalogue",
      "Exhibition workflow tools",
      "Administrative dashboard & archive",
    ],
    images: [
      { src: "/rongdhonu-public-website.png", alt: "Rongdhonu public website and gallery", width: 1904, height: 953 },
      { src: "/rongdhonu-dashboard.png", alt: "Rongdhonu administrative dashboard for managing members, artists and exhibitions", width: 1920, height: 946 },
    ],
    liveUrl: "https://rong-dhonu.vercel.app/en",
    ctaLabel: "View Live Experience",
  },

  // ---------------------------------------------------------------------
  // 03 — CUSTOM APPLICATIONS
  // ---------------------------------------------------------------------
  {
    slug: "agencyos",
    category: "applications",
    title: "AgencyOS",
    type: "Custom Business Operations Platform",
    oneLiner: "Software designed around how an agency actually works.",
    status: "live",
    statusLabel: "Live Project",
    businessContext: "A digital agency juggling leads, client relationships, projects, contracts, invoices and team communication.",
    challenge:
      "Client information, proposals, contracts, projects, invoices, files and messages were scattered across separate tools, so nothing lined up and leadership had no real picture of what was happening.",
    solution:
      "A dedicated application built around how an agency actually works — bringing leads, clients, contracts, projects, invoices, files and team communication into one workspace, instead of forcing the agency to adapt to generic CRM or project-management software.",
    value:
      "Brings client and project information into one workspace instead of a dozen disconnected tools — faster onboarding, less duplicate data entry, and real visibility into what's actually happening across the agency.",
    capabilities: [
      "Client & contract management",
      "Project workspace & task tracking",
      "Invoicing & proposals",
      "Team messaging & file sharing",
      "Centralized reporting dashboard",
    ],
    images: [
      { src: "/agencyos-dashboard.png", alt: "AgencyOS unified dashboard", width: 1906, height: 953 },
      { src: "/agencyos-client-redacted.png", alt: "AgencyOS client and contract management", width: 1920, height: 948 },
      { src: "/agencyos-projects.png", alt: "AgencyOS project management and delivery", width: 1920, height: 948 },
    ],
    liveUrl: "https://agency-application-fckg.vercel.app",
    ctaLabel: "Explore The System",
  },

  // ---------------------------------------------------------------------
  // 04 — AUTOMATIONS
  // ---------------------------------------------------------------------
  {
    slug: "lead-routing",
    category: "automation",
    title: "Intelligent Lead Routing",
    type: "Automated Intake & Routing System",
    oneLiner: "Requests are evaluated and sent to the right next step automatically.",
    status: "concept",
    statusLabel: "Internal Demonstration",
    businessContext: "High-ticket sales environments where inbound interest arrives faster than a sales team can manually read and sort it.",
    challenge:
      "Every inquiry had to be read and judged by a person before anyone could act on it — so skilled salespeople spent their time sorting messages instead of selling, and good leads sat waiting.",
    solution:
      "Instead of every request being manually reviewed and routed, the system reads incoming messages, pulls out the details that matter, and sends each one to the right next step automatically — only the judgment calls that genuinely need a person reach one.",
    value:
      "Frees the sales team from manual sorting so they only spend time on inquiries that are actually worth their attention, and nothing sits waiting for someone to notice it.",
    capabilities: [
      "Automatic intake from incoming messages",
      "Key-detail extraction",
      "Rule-based qualification",
      "Direct routing to CRM",
      "Instant agent alert for qualified matches",
    ],
    images: [],
    diagramNodes: ["Visitor Intent", "AI Receptionist", "Parameter Extraction", "Qualification", "CRM Routing", "Agent Alert"],
    verifiedNote: "In this internal demonstration, average response time dropped from roughly 48 hours to about 3 minutes.",
    liveUrl: null,
  },
];

export function getCategoryMeta(id: TransformationCategory): TransformationCategoryMeta {
  const meta = transformationCategories.find((c) => c.id === id);
  if (!meta) throw new Error(`Unknown transformation category: ${id}`);
  return meta;
}

export function getEntriesByCategory(id: TransformationCategory): TransformationEntry[] {
  return transformationEntries.filter((e) => e.category === id);
}
