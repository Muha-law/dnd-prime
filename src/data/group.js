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
    image: "/images/properties.webp",
  },
  {
    id: "stays",
    name: "DND Short Lets",
    tag: "Serviced apartments",
    blurb: "Move-in ready apartments for a night, a month, or a season. Booked and supported on-site.",
    to: "/stays",
    image: "/images/stays.webp",
  },
  {
    id: "cleaning",
    name: "DND Cleaning",
    tag: "Professional cleaning",
    blurb: "Standard to deep cleans, end of tenancy, and Airbnb turnarounds. Before-and-after on every job.",
    to: "/cleaning",
    image: "/images/cleaning.webp",
  },
  {
    id: "maintenance",
    name: "DND Maintenance",
    tag: "Property repairs",
    blurb: "One call for all your maintenance needs, from plumbing and electrics to full property upkeep.",
    to: "/maintenance",
    image: "/images/maintenance.webp",
  },
  {
    id: "moving",
    name: "DND Moving & Removal",
    tag: "Removals & relocations",
    blurb: "House moves, office relocations, man & van, and single-item collections — handled with care.",
    to: "/moving",
    image: "/images/moving.webp",
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

export const cleaningQuoteTypes = [
  { name: "Standard Clean", blurb: "Regular upkeep for a tidy, maintained home.", prices: { Studio: 60, "1 Bed": 75, "2 Bed": 95, "3 Bed": 115, "4 Bed+": 140 } },
  { name: "Deep Clean", blurb: "Top-to-bottom detail for a full reset.", prices: { Studio: 120, "1 Bed": 150, "2 Bed": 190, "3 Bed": 230, "4 Bed+": 280 } },
  { name: "End of Tenancy", blurb: "Move-out ready, deposit-back standard.", prices: { Studio: 180, "1 Bed": 220, "2 Bed": 280, "3 Bed": 340, "4 Bed+": 400 } },
  { name: "Airbnb Turnaround", blurb: "Fast, reliable changeover between guests.", prices: { Studio: 45, "1 Bed": 60, "2 Bed": 80, "3 Bed": 100, "4 Bed+": 130 } },
];

export const cleaningQuoteExtras = [
  { name: "Oven clean", price: 25 },
  { name: "Fridge clean", price: 15 },
  { name: "Carpet clean (per room)", price: 30 },
  { name: "Window cleaning", price: 20 },
  { name: "Garage / outbuilding", price: 40 },
];

export const cleaningGallery = [
  {
    room: "Kitchen",
    before: "/images/cleaning-kitchen-before.webp",
    after: "/images/cleaning-kitchen-after.webp",
  },
  {
    room: "Bathroom",
    before: "/images/cleaning-bathroom-before.webp",
    after: "/images/cleaning-bathroom-after.webp",
  },
  {
    room: "Living room",
    before: "/images/cleaning-living-before.webp",
    after: "/images/cleaning-living-after.webp",
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

// ---- MOVING & REMOVAL ----
export const movingServices = [
  { name: "House removals", desc: "Full home moves handled carefully, from packing to delivery." },
  { name: "Office relocations", desc: "Seamless business moves with minimal downtime." },
  { name: "Man & van", desc: "Fast, flexible transport for smaller loads and single items." },
  { name: "Furniture moving", desc: "Safe collection and delivery of individual pieces." },
  { name: "Packing & unpacking", desc: "We pack and label everything, so you don't have to." },
  { name: "Student moves", desc: "Affordable, flexible moves for students across Birmingham." },
  { name: "Long-distance removals", desc: "UK-wide removals with the same care as local jobs." },
  { name: "End of tenancy clearances", desc: "Leave a property spotless and empty, ready for handover." },
];

export const movingAllServices = [
  "House removals",
  "Office & commercial relocations",
  "Man and van",
  "Furniture moving & delivery",
  "Packing & unpacking",
  "Single item collection",
  "Student moves",
  "Long-distance removals",
  "End of tenancy clearances",
  "Junk & rubbish removal",
  "Storage solutions",
  "Assembly & disassembly",
];

export const movingWhy = [
  "Careful handling of all items",
  "Fully insured service",
  "Competitive, transparent pricing",
  "Flexible scheduling",
  "Professional, uniformed team",
  "Residential & commercial moves",
];
