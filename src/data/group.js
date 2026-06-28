// DND group data — the four arms plus cleaning & maintenance details.
// Contact details come from the client's flyers.

export const CONTACT = {
  whatsapp: "07903 824773",
  whatsappIntl: "447903824773",
  email: "info.dnd.dnd@gmail.com",
  coverage: "Birmingham & surrounding areas",
};

// The four arms shown on the landing hub.
export const arms = [
  {
    id: "properties",
    name: "DND Properties",
    tag: "Buy, rent & manage",
    blurb: "Quality homes to rent and buy, fully managed by a team that answers for every property.",
    to: "/properties",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
  },
  {
    id: "stays",
    name: "DND Short Lets",
    tag: "Serviced apartments",
    blurb: "Move-in ready apartments for a night, a month, or a season. Booked and supported on-site.",
    to: "/stays",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
  },
  {
    id: "cleaning",
    name: "DND Cleaning",
    tag: "Professional cleaning",
    blurb: "Standard to deep cleans, end of tenancy, and Airbnb turnarounds. Before-and-after on every job.",
    to: "/cleaning",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
  },
  {
    id: "maintenance",
    name: "DND Maintenance",
    tag: "Property repairs",
    blurb: "One call for all your maintenance needs, from plumbing and electrics to full property upkeep.",
    to: "/maintenance",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
  },
];

// ---- CLEANING ----
export const cleaningServices = [
  "Standard cleaning",
  "Deep cleaning",
  "End of tenancy cleaning",
  "Airbnb & serviced accommodation turnarounds",
  "Carpet cleaning",
  "Oven cleaning",
  "Property refreshes",
  "Bed & furniture removal",
];

export const cleaningPackages = [
  { name: "Standard Clean", from: 60, blurb: "Regular upkeep for a tidy, maintained home." },
  { name: "Deep Clean", from: 120, blurb: "Top-to-bottom detail for a full reset." },
  { name: "End of Tenancy", from: 180, blurb: "Move-out ready, deposit-back standard." },
  { name: "Airbnb Turnaround", from: 45, blurb: "Fast, reliable changeovers between guests." },
];

export const cleaningGallery = [
  {
    room: "Kitchen",
    before: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    after: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
  },
  {
    room: "Bathroom",
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
  },
  {
    room: "Living room",
    before: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
    after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
];

export const cleaningWhy = [
  "Fully insured",
  "Professional service",
  "Flexible scheduling",
  "Reliable team",
  "High attention to detail",
  "Before & after reports available",
];

// ---- MAINTENANCE ----
// Headline services with short descriptions for the feature grid.
export const maintenanceServices = [
  { name: "Plumbing repairs", desc: "Leaks, blockages, fittings, and full plumbing work." },
  { name: "Electrical maintenance", desc: "Safe, compliant electrical repairs and installs." },
  { name: "Painting & decorating", desc: "Interior and exterior finishes done properly." },
  { name: "Handyman services", desc: "The odd jobs and fixes that keep a home running." },
  { name: "Property maintenance", desc: "Ongoing upkeep for landlords and homeowners." },
  { name: "Garden maintenance", desc: "Hedges, lawns, and outdoor spaces kept in shape." },
  { name: "Door & lock repairs", desc: "Security, locks, and door repairs and replacements." },
  { name: "Wall repairs & plastering", desc: "Cracks, holes, and full plastering and finishing." },
];

// The fuller services list from the flyer.
export const maintenanceAllServices = [
  "General property repairs",
  "Handyman services",
  "Plumbing repairs",
  "Electrical maintenance",
  "Painting & decorating",
  "Wall repairs & plastering",
  "Door & lock repairs",
  "Window repairs",
  "Property maintenance",
  "End of tenancy repairs",
  "Garden maintenance",
  "Preventative maintenance",
];

export const maintenanceWhy = [
  "Experienced & professional team",
  "Fast response times",
  "Residential & commercial properties",
  "High-quality workmanship",
  "Competitive pricing",
  "Fully insured services",
];
