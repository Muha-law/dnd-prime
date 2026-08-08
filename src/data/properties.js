// Placeholder listing data for DND Stays.
// Swap these out for real listings + photos when the client provides them.
// Images use deterministic Unsplash source URLs so the layout looks real in dev.

export const properties = [];

export const getProperty = (id) => properties.find((p) => p.id === id);

// ---- DND PROPERTIES (rent & sale) ----
// Real listings. Images live in /public/properties/<id>/ — drop the client's
// photos there. Cover is image 1; gallery lists the rest in order.
// Built to hold multiple listings; currently shows the one live property.

export const estateListings = [
  {
    id: "cube-eastside",
    name: "Luxury One-Bedroom Flat",
    building: "Eastside Apartments, The Cube",
    area: "The Mailbox, Birmingham",
    deal: "To Rent",
    letAgreed: true,
    price: "£1,150/mo",
    priceNote: "All bills inclusive",
    beds: 1,
    baths: 1,
    type: "Apartment",
    furnished: "Contact for details",
    available: "Contact for details",
    deposit: "Contact for details",
    minTenancy: "Contact for details",
    epc: "Contact for details",
    description:
      "A luxury one-bedroom apartment in Eastside Apartments at The Cube, one of Birmingham's most recognisable addresses, moments from The Mailbox. Finished to a high standard with all bills included for genuinely fuss-free living in the heart of the city.",
    features: [
      "All bills inclusive",
      "Iconic Cube building",
      "Mailbox location",
      "One double bedroom",
      "Modern fitted kitchen",
      "City-centre living",
    ],
    // Cover first, then the remaining gallery images in order.
    // Place files at /public/properties/cube-eastside/01.svg … 14.jpg
    cover: "/properties/cube-eastside/01.webp",
    images: [
      "/properties/cube-eastside/01.webp",
      "/properties/cube-eastside/02.webp",
      "/properties/cube-eastside/03.webp",
      "/properties/cube-eastside/04.webp",
      "/properties/cube-eastside/05.webp",
      "/properties/cube-eastside/06.webp",
      "/properties/cube-eastside/07.webp",
      "/properties/cube-eastside/08.webp",
      "/properties/cube-eastside/03.webp",
      "/properties/cube-eastside/10.webp",
      "/properties/cube-eastside/11.webp",
      "/properties/cube-eastside/12.webp",
      "/properties/cube-eastside/13.webp",
      "/properties/cube-eastside/07.webp",
    ],
  },
  {
    id: "cube-eastside-sale",
    name: "Luxury One-Bedroom Flat",
    building: "Eastside Apartments, The Cube",
    area: "The Mailbox, Birmingham",
    deal: "For Sale",
    price: "Contact for details",
    priceNote: "Contact for sale price",
    beds: 1,
    baths: 1,
    type: "Apartment",
    furnished: "Contact for details",
    available: "Contact for details",
    deposit: "Contact for details",
    minTenancy: "Contact for details",
    epc: "Contact for details",
    description:
      "A luxury one-bedroom apartment in Eastside Apartments at The Cube, one of Birmingham's most recognisable addresses, moments from The Mailbox. Finished to a high standard in the heart of the city.",
    features: [
      "Iconic Cube building",
      "Mailbox location",
      "One double bedroom",
      "Modern fitted kitchen",
      "City-centre living",
    ],
    cover: "/properties/cube-eastside/01.webp",
    images: [
      "/properties/cube-eastside/01.webp",
      "/properties/cube-eastside/02.webp",
      "/properties/cube-eastside/03.webp",
      "/properties/cube-eastside/04.webp",
      "/properties/cube-eastside/05.webp",
      "/properties/cube-eastside/06.webp",
      "/properties/cube-eastside/07.webp",
      "/properties/cube-eastside/08.webp",
      "/properties/cube-eastside/03.webp",
      "/properties/cube-eastside/10.webp",
      "/properties/cube-eastside/11.webp",
      "/properties/cube-eastside/12.webp",
      "/properties/cube-eastside/13.webp",
      "/properties/cube-eastside/07.webp",
    ],
  },
  {
    id: "orion-citycentre",
    name: "Luxury Two-Bedroom Apartment",
    building: "The Orion Building",
    area: "Birmingham City Centre",
    deal: "To Rent",
    letAgreed: true,
    price: "£2,700/mo",
    priceNote: "Per calendar month",
    beds: 2,
    baths: "Contact for details",
    type: "Apartment",
    furnished: "Contact for details",
    available: "Contact for details",
    deposit: "Contact for details",
    minTenancy: "Contact for details",
    epc: "Contact for details",
    description:
      "A luxury two-bedroom apartment in The Orion Building, right in the heart of Birmingham city centre. Spacious, well-finished living with everything the city has to offer on the doorstep.",
    features: [
      "Two double bedrooms",
      "City-centre location",
      "The Orion Building",
      "Modern fitted kitchen",
      "Spacious living area",
      "Close to transport links",
    ],
    cover: "/properties/orion-citycentre/01.webp",
    images: [
      "/properties/orion-citycentre/01.webp",
      "/properties/orion-citycentre/02.webp",
      "/properties/orion-citycentre/03.webp",
      "/properties/orion-citycentre/04.webp",
      "/properties/orion-citycentre/05.webp",
      "/properties/orion-citycentre/06.webp",
      "/properties/orion-citycentre/07.webp",
      "/properties/orion-citycentre/08.webp",
      "/properties/orion-citycentre/09.webp",
      "/properties/orion-citycentre/10.webp",
      "/properties/orion-citycentre/11.webp",
      "/properties/orion-citycentre/12.webp",
      "/properties/orion-citycentre/13.webp",
      "/properties/orion-citycentre/14.webp",
      "/properties/orion-citycentre/15.webp",
      "/properties/orion-citycentre/16.webp",
      "/properties/orion-citycentre/17.webp",
      "/properties/orion-citycentre/18.webp",
      "/properties/orion-citycentre/19.webp",
      "/properties/orion-citycentre/20.webp",
    ],
  },
];

export const getEstate = (id) => estateListings.find((p) => p.id === id);
