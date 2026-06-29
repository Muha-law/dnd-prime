// Placeholder listing data for DND Stays.
// Swap these out for real listings + photos when the client provides them.
// Images use deterministic Unsplash source URLs so the layout looks real in dev.

export const properties = [
  {
    id: "the-mews-loft",
    name: "The Mews Loft",
    area: "Lekki Phase 1, Lagos",
    type: "Loft Apartment",
    guests: 2,
    bedrooms: 1,
    baths: 1,
    pricePerNight: 95,
    blurb:
      "A bright open-plan loft a short walk from the water. Built for slow mornings and quiet, productive evenings.",
    amenities: ["Fast Wi-Fi", "Workspace", "Air conditioning", "Smart TV", "Fully fitted kitchen", "Self check-in"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "harbour-two-bed",
    name: "Harbour Two-Bed",
    area: "Victoria Island, Lagos",
    type: "Serviced Apartment",
    guests: 4,
    bedrooms: 2,
    baths: 2,
    pricePerNight: 160,
    blurb:
      "A full two-bedroom with skyline views, made for families or a pair of colleagues on a longer stay.",
    amenities: ["Fast Wi-Fi", "24/7 power", "Workspace", "Air conditioning", "Washer", "Parking", "Self check-in"],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "garden-studio",
    name: "Garden Studio",
    area: "Ikoyi, Lagos",
    type: "Studio",
    guests: 2,
    bedrooms: 1,
    baths: 1,
    pricePerNight: 78,
    blurb:
      "A compact, well-finished studio tucked behind a quiet garden. Everything you need, nothing you don't.",
    amenities: ["Fast Wi-Fi", "Air conditioning", "Kitchenette", "Smart TV", "Self check-in"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "penthouse-six",
    name: "Penthouse Six",
    area: "Lekki Phase 1, Lagos",
    type: "Penthouse",
    guests: 6,
    bedrooms: 3,
    baths: 3,
    pricePerNight: 280,
    blurb:
      "Top-floor three-bedroom with a wraparound terrace. Our flagship space for groups and special stays.",
    amenities: ["Fast Wi-Fi", "24/7 power", "Terrace", "Air conditioning", "Washer", "Parking", "Gym access", "Self check-in"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "the-corner-one-bed",
    name: "The Corner One-Bed",
    area: "Victoria Island, Lagos",
    type: "Serviced Apartment",
    guests: 2,
    bedrooms: 1,
    baths: 1,
    pricePerNight: 110,
    blurb:
      "A corner unit with light on two sides, a proper desk, and a kitchen you'll actually want to cook in.",
    amenities: ["Fast Wi-Fi", "24/7 power", "Workspace", "Air conditioning", "Fully fitted kitchen", "Self check-in"],
    images: [
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "courtyard-flat",
    name: "Courtyard Flat",
    area: "Ikoyi, Lagos",
    type: "Apartment",
    guests: 3,
    bedrooms: 2,
    baths: 1,
    pricePerNight: 130,
    blurb:
      "A calm two-bedroom around a shared courtyard. Quiet, green, and five minutes from everything.",
    amenities: ["Fast Wi-Fi", "Air conditioning", "Washer", "Fully fitted kitchen", "Parking", "Self check-in"],
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1200&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&q=80",
    ],
    featured: false,
  },
];

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
    cover: "/properties/cube-eastside/01.jpg",
    images: [
      "/properties/cube-eastside/01.jpg",
      "/properties/cube-eastside/02.PNG",
      "/properties/cube-eastside/03.PNG",
      "/properties/cube-eastside/04.PNG",
      "/properties/cube-eastside/05.PNG",
      "/properties/cube-eastside/06.PNG",
      "/properties/cube-eastside/07.jpg",
      "/properties/cube-eastside/08.jpg",
      "/properties/cube-eastside/03.PNG",
      "/properties/cube-eastside/10.jpg",
      "/properties/cube-eastside/11.jpg",
      "/properties/cube-eastside/12.jpg",
      "/properties/cube-eastside/13.PNG",
      "/properties/cube-eastside/07.jpg",
    ],
  },
  {
    id: "orion-citycentre",
    name: "Luxury Two-Bedroom Apartment",
    building: "The Orion Building",
    area: "Birmingham City Centre",
    deal: "To Rent",
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
    cover: "/properties/orion-citycentre/01.PNG",
    images: [
      "/properties/orion-citycentre/01.PNG",
      "/properties/orion-citycentre/02.PNG",
      "/properties/orion-citycentre/03.PNG",
      "/properties/orion-citycentre/04.PNG",
      "/properties/orion-citycentre/05.PNG",
      "/properties/orion-citycentre/06.PNG",
      "/properties/orion-citycentre/07.PNG",
      "/properties/orion-citycentre/08.PNG",
      "/properties/orion-citycentre/09.PNG",
      "/properties/orion-citycentre/10.PNG",
      "/properties/orion-citycentre/11.PNG",
      "/properties/orion-citycentre/12.PNG",
      "/properties/orion-citycentre/13.PNG",
      "/properties/orion-citycentre/14.PNG",
      "/properties/orion-citycentre/15.PNG",
      "/properties/orion-citycentre/16.PNG",
      "/properties/orion-citycentre/17.PNG",
      "/properties/orion-citycentre/18.PNG",
      "/properties/orion-citycentre/19.PNG",
      "/properties/orion-citycentre/20.PNG",
    ],
  },
];

export const getEstate = (id) => estateListings.find((p) => p.id === id);
