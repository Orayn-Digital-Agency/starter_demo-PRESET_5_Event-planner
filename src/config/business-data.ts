// ============================================================
// ORAYN DEMO TEMPLATE — STARTER
// PRESET: Event Planner / Events
// ============================================================

export type Service = {
  name: string;
  description: string;
  icon?: string;
};

export type BusinessData = {
  businessName: string;
  tagline: string;
  phone: string;
  whatsappNumber: string;
  email: string | null;
  address: string;
  city: string;
  category: string;
  industry: string;
  logoText: string;
  primaryColor?: string;
  accentColor?: string;
  ctaLabel: string;
  about: string;
  services: Service[];
  whyUs: string[];
  mapEmbedUrl: string;
  openingHours?: { day: string; hours: string }[];
  gallery?: { src: string; alt: string }[];
};

const businessData: BusinessData = {
  businessName: "Grandeur Events",
  tagline:
    "Turning your vision into an unforgettable event. Weddings, corporate functions, and celebrations done flawlessly.",
  phone: "+234 810 123 4567",
  whatsappNumber: "2348101234567",
  email: "hello@grandeurevents.ng",
  address: "7 Ozumba Mbadiwe Avenue, Victoria Island",
  city: "Lagos",
  category: "Event Planning",
  industry: "Events",
  logoText: "Grandeur",
  primaryColor: "#1B2A4A",
  accentColor: "#C49A28",
  ctaLabel: "Plan Your Event",

  about:
    "Grandeur Events is a full-service event planning and management company based in Lagos. Since 2016, we have planned and executed weddings, corporate galas, birthday celebrations, product launches, and social events for clients across Nigeria. We handle every detail — from concept and decor to vendor management, catering coordination, and day-of execution. Your event runs smoothly because we plan obsessively so you never have to worry.",

  services: [
    {
      name: "Wedding Planning",
      description:
        "Full wedding planning and day-of coordination. We manage vendors, logistics, decor, and timeline so you enjoy your day completely.",
      icon: "Heart",
    },
    {
      name: "Corporate Events",
      description:
        "Product launches, annual dinners, company retreats, conferences, and award ceremonies. Professional execution, always on brand.",
      icon: "Briefcase",
    },
    {
      name: "Birthday & Social Celebrations",
      description:
        "Milestone birthdays, anniversaries, baby showers, and private parties. Every detail considered, every moment memorable.",
      icon: "Star",
    },
    {
      name: "Venue Sourcing & Decor",
      description:
        "We identify the right venue, negotiate pricing, and design your decor concept from scratch. Flowers, lighting, draping, and more.",
      icon: "MapPin",
    },
    {
      name: "Catering Coordination",
      description:
        "We work with Lagos's best caterers to ensure your food service matches your event's quality. Menu planning and supervision included.",
      icon: "UtensilsCrossed",
    },
    {
      name: "Entertainment & MC Booking",
      description:
        "Live bands, DJs, comedians, and professional MCs sourced, contracted, and briefed. Your entertainment is in safe hands.",
      icon: "Music",
    },
  ],

  whyUs: [
    "Over 200 events successfully executed since 2016",
    "End-to-end management — you relax while we work",
    "Trusted vendor network across Lagos and Abuja",
    "Transparent budgeting — no hidden costs, no surprises",
  ],

  openingHours: [
    { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
    { day: "Sunday", hours: "By appointment only" },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=85&auto=format&fit=crop",
      alt: "Elegantly decorated wedding reception hall",
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=85&auto=format&fit=crop",
      alt: "Corporate event setup and stage design",
    },
    {
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=85&auto=format&fit=crop",
      alt: "Floral arrangements and decor at a celebration",
    },
  ],

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6!2d3.4299!3d6.4312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52000000001%3A0x0!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716000000006",
};

export default businessData;
