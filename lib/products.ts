export type Product = {
  slug: string;
  name: string;
  category: string;
  tag?: string;
  shortDesc: string;
  longDesc: string;
  price: string;
  priceNote: string;
  image: string;
  gallery: string[];
  features: string[];
  specs: { label: string; value: string }[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
};

export const CATEGORIES = [
  "All",
  "Access Control",
  "CCTV & Surveillance",
  "Gate Automation",
  "Smart Home",
  "Intercom Systems",
  "Electric Fencing",
  "Solar Power",
];

export const PRODUCTS: Product[] = [
  {
    slug: "biometric-access-control",
    name: "Biometric Access Control System",
    category: "Access Control",
    tag: "Most Popular",
    shortDesc:
      "Fingerprint, facial recognition, and card-based access for estates, offices, and residences.",
    longDesc:
      "Our biometric access control systems combine fingerprint scanning, facial recognition, and smart card/fob technology into a single unified platform. Designed for Nigerian estates, corporate offices, and high-security residences, every unit is installed and commissioned by EEE-qualified engineers with full documentation and a 2-year warranty.",
    price: "From ₦350,000",
    priceNote: "Installation inclusive. Final quote after site survey.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    ],
    features: [
      "Fingerprint & facial recognition",
      "Smart card / fob integration",
      "Visitor management log with timestamps",
      "Remote access management via app",
      "Anti-passback & tailgating detection",
      "Offline mode — works without internet",
      "Up to 10,000 user capacity",
      "Audit trail & access reports",
    ],
    specs: [
      { label: "Recognition speed", value: "< 0.5 seconds" },
      { label: "User capacity", value: "Up to 10,000" },
      { label: "Communication", value: "TCP/IP, RS485, Wiegand" },
      { label: "Power supply", value: "12V DC / PoE" },
      { label: "Operating temp", value: "-10°C to 60°C" },
      { label: "IP rating", value: "IP65 (outdoor rated)" },
      { label: "Warranty", value: "2 years" },
      { label: "Installation", value: "Included" },
    ],
    useCases: [
      "Gated residential estates",
      "Corporate offices & banks",
      "Schools & universities",
      "Warehouses & industrial facilities",
      "Government buildings",
    ],
    faqs: [
      {
        q: "Does it work during a power outage?",
        a: "Yes. All our access control units include battery backup that maintains operation for up to 8 hours during power cuts.",
      },
      {
        q: "Can I manage access remotely?",
        a: "Yes. The companion app allows you to grant, revoke, and monitor access from anywhere in the world.",
      },
      {
        q: "How long does installation take?",
        a: "A standard single-door installation takes 4–6 hours. Multi-door estate installations are scoped individually.",
      },
      {
        q: "Is training provided?",
        a: "Yes. We provide on-site training for your admin team and full documentation at handover.",
      },
    ],
    relatedSlugs: ["remote-gate-system", "video-intercom", "cctv-surveillance"],
  },
  {
    slug: "cctv-surveillance",
    name: "CCTV & Surveillance System",
    category: "CCTV & Surveillance",
    shortDesc:
      "HD and 4K cameras with night vision, motion detection, and remote live-view from any device.",
    longDesc:
      "From single-property installations to multi-site estate deployments, our CCTV systems use Tier 1 HD and 4K cameras with infrared night vision, AI-powered motion detection, and cloud or NVR storage. Every system is designed for the Nigerian climate — IP66-rated, surge-protected, and backed by our 24-hour response SLA.",
    price: "From ₦180,000",
    priceNote: "4-camera starter package. Larger deployments quoted on survey.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    ],
    features: [
      "HD / 4K resolution cameras",
      "Infrared night vision up to 40m",
      "AI motion detection & alerts",
      "Cloud & NVR storage options",
      "Mobile live-view app (iOS & Android)",
      "Two-way audio on select models",
      "Licence plate recognition (LPR)",
      "Surge & lightning protection",
    ],
    specs: [
      { label: "Resolution", value: "2MP – 8MP (4K)" },
      { label: "Night vision range", value: "Up to 40 metres" },
      { label: "Storage", value: "NVR / Cloud / Hybrid" },
      { label: "IP rating", value: "IP66" },
      { label: "Power", value: "PoE / 12V DC" },
      { label: "Compression", value: "H.265+ / H.264" },
      { label: "Warranty", value: "2 years" },
      { label: "Installation", value: "Included" },
    ],
    useCases: [
      "Residential homes & estates",
      "Retail shops & supermarkets",
      "Offices & corporate campuses",
      "Car parks & fuel stations",
      "Schools & hospitals",
    ],
    faqs: [
      {
        q: "How much storage do I need?",
        a: "We recommend 30-day rolling storage as a minimum. Our team will calculate the exact NVR size based on your camera count and resolution.",
      },
      {
        q: "Can I view footage on my phone?",
        a: "Yes. All systems include a mobile app for live view, playback, and motion alerts on iOS and Android.",
      },
      {
        q: "What happens to footage during a power cut?",
        a: "We include UPS backup on all NVR units to maintain recording during short outages. Solar integration is available for extended backup.",
      },
    ],
    relatedSlugs: [
      "biometric-access-control",
      "electric-fencing",
      "solar-power-system",
    ],
  },
  {
    slug: "remote-gate-system",
    name: "Remote Swing & Slide Gate System",
    category: "Gate Automation",
    shortDesc:
      "Motorised gate automation with GSM remote control — open your gate from anywhere in the world.",
    longDesc:
      "Our gate automation systems motorise existing or new swing and slide gates with GSM phone-call activation, app-based remote control, and battery backup for power outages. Integrated with intercom and access control for a complete entry management solution.",
    price: "From ₦220,000",
    priceNote: "Single gate. Dual gate and estate pricing on request.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    ],
    features: [
      "GSM phone-call activation",
      "App-based remote control",
      "Battery backup on power outage",
      "Intercom integration",
      "Obstacle detection & auto-reverse",
      "Manual override key",
      "Soft start / soft stop motor",
      "Up to 500kg gate capacity",
    ],
    specs: [
      { label: "Gate type", value: "Swing & slide" },
      { label: "Max gate weight", value: "500 kg" },
      { label: "Control", value: "GSM, remote, app, keypad" },
      { label: "Battery backup", value: "8–12 hours" },
      { label: "Motor power", value: "230V AC / 24V DC" },
      { label: "Operating cycles", value: "Up to 300/day" },
      { label: "Warranty", value: "2 years" },
      { label: "Installation", value: "Included" },
    ],
    useCases: [
      "Private residences",
      "Estate entrance gates",
      "Commercial premises",
      "Car parks",
      "Industrial facilities",
    ],
    faqs: [
      {
        q: "Will it work during NEPA outage?",
        a: "Yes. All our gate systems include a sealed lead-acid battery backup that keeps the gate operational for 8–12 hours without mains power.",
      },
      {
        q: "Can multiple people control the gate?",
        a: "Yes. The GSM module supports multiple authorised phone numbers, and the app supports multiple user accounts.",
      },
      {
        q: "Can it be integrated with my existing intercom?",
        a: "In most cases yes. Our engineers will assess compatibility during the free site survey.",
      },
    ],
    relatedSlugs: [
      "biometric-access-control",
      "video-intercom",
      "electric-fencing",
    ],
  },
  {
    slug: "smart-home-automation",
    name: "Smart Home Automation",
    category: "Smart Home",
    tag: "New",
    shortDesc:
      "Full home automation integrating lighting, climate, entertainment, and security into one intelligent platform.",
    longDesc:
      "Transform your home into an intelligent living space. Our smart home systems centralise lighting, climate control, entertainment, and security into a single app — compatible with voice assistants and fully customisable with scenes and schedules. Designed and installed by our EEE-qualified team.",
    price: "From ₦500,000",
    priceNote: "Starter package (lighting + security). Full-home quoted on survey.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    features: [
      "Centralised app control (iOS & Android)",
      "Smart lighting & scene programming",
      "Climate control & smart AC integration",
      "Voice assistant (Alexa / Google Home)",
      "Custom automation schedules",
      "Security system integration",
      "Smart locks & door sensors",
      "Energy monitoring dashboard",
    ],
    specs: [
      { label: "Protocol", value: "Zigbee, Z-Wave, Wi-Fi, Matter" },
      { label: "Voice control", value: "Alexa, Google Home, Siri" },
      { label: "App platforms", value: "iOS & Android" },
      { label: "Max devices", value: "Unlimited (hub-based)" },
      { label: "Internet required", value: "For remote access only" },
      { label: "Hub power", value: "12V DC with battery backup" },
      { label: "Warranty", value: "2 years" },
      { label: "Installation", value: "Included" },
    ],
    useCases: [
      "Luxury residences",
      "New build developments",
      "Home offices",
      "Short-let / Airbnb properties",
      "Retirement homes",
    ],
    faqs: [
      {
        q: "Does it work without internet?",
        a: "Yes. Local control via the hub works without internet. Remote access and voice assistants require an internet connection.",
      },
      {
        q: "Can I add devices later?",
        a: "Yes. The system is fully expandable — you can add lights, sensors, locks, and cameras at any time.",
      },
      {
        q: "Is it compatible with my existing appliances?",
        a: "We assess compatibility during the free site survey. Most modern appliances can be integrated via smart plugs or IR blasters.",
      },
    ],
    relatedSlugs: [
      "biometric-access-control",
      "solar-power-system",
      "cctv-surveillance",
    ],
  },
  {
    slug: "video-intercom",
    name: "Video Door & Intercom System",
    category: "Intercom Systems",
    shortDesc:
      "See and speak with visitors before granting access — from anywhere, on any device.",
    longDesc:
      "Our video intercom systems let you see, speak with, and grant access to visitors from your phone — whether you're in the living room or in London. HD video door stations, multi-apartment support, and full integration with gate automation and access control.",
    price: "From ₦150,000",
    priceNote: "Single door station + indoor monitor. Multi-unit pricing on request.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    ],
    features: [
      "HD video door station",
      "Two-way audio & video",
      "Mobile app call forwarding",
      "Remote door/gate release",
      "Access log & visitor recording",
      "Multi-apartment support",
      "Night vision built-in",
      "Tamper alarm",
    ],
    specs: [
      { label: "Camera resolution", value: "2MP HD" },
      { label: "Display", value: "7-inch colour touchscreen" },
      { label: "Night vision", value: "Infrared, up to 3m" },
      { label: "App platforms", value: "iOS & Android" },
      { label: "Wiring", value: "2-wire / IP" },
      { label: "IP rating", value: "IP54 (door station)" },
      { label: "Warranty", value: "2 years" },
      { label: "Installation", value: "Included" },
    ],
    useCases: [
      "Private residences",
      "Apartment blocks",
      "Office reception",
      "Schools & nurseries",
      "Gated estates",
    ],
    faqs: [
      {
        q: "Can I answer the door from my phone when I'm not home?",
        a: "Yes. The mobile app sends a push notification when someone rings, and you can see, speak, and unlock remotely.",
      },
      {
        q: "How many indoor monitors can I have?",
        a: "Up to 8 indoor monitors per door station on standard systems. Larger apartment block systems are configured differently.",
      },
    ],
    relatedSlugs: [
      "remote-gate-system",
      "biometric-access-control",
      "cctv-surveillance",
    ],
  },
  {
    slug: "electric-fencing",
    name: "Electric Fencing & Perimeter Security",
    category: "Electric Fencing",
    shortDesc:
      "10,000V deterrent perimeter systems with alarm integration and zoned monitoring for estates and compounds.",
    longDesc:
      "Our electric fencing systems provide a high-voltage deterrent perimeter with integrated alarm, zone monitoring, and remote alerts. SABS-compliant and designed for the Nigerian climate — UV-resistant, surge-protected, and backed by our 24-hour response SLA.",
    price: "From ₦280,000",
    priceNote: "Per 50-metre run, inclusive of energiser and alarm. Surveyed pricing.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    ],
    features: [
      "10,000V deterrent shock",
      "Zoned alarm integration",
      "Live monitoring dashboard",
      "SABS-compliant installation",
      "SMS & app alerts on breach",
      "Solar-powered energiser option",
      "UV-resistant wire & brackets",
      "Surge & lightning protection",
    ],
    specs: [
      { label: "Voltage output", value: "10,000V (deterrent)" },
      { label: "Energiser", value: "Mains / Solar / Battery" },
      { label: "Zones", value: "Up to 16 per energiser" },
      { label: "Wire", value: "High-tensile galvanised" },
      { label: "Compliance", value: "SABS IEC 60335-2-76" },
      { label: "Alarm integration", value: "Yes — all major panels" },
      { label: "Warranty", value: "2 years" },
      { label: "Installation", value: "Included" },
    ],
    useCases: [
      "Residential estates",
      "Industrial compounds",
      "Warehouses & logistics",
      "Schools & hospitals",
      "Government facilities",
    ],
    faqs: [
      {
        q: "Is it dangerous to humans?",
        a: "No. The system delivers a painful but non-lethal shock designed to deter, not harm. It is fully SABS-compliant.",
      },
      {
        q: "What happens when the fence is breached?",
        a: "The energiser triggers an alarm and sends an SMS/app alert to designated contacts immediately.",
      },
      {
        q: "Can it run on solar?",
        a: "Yes. We offer solar-powered energiser options — ideal for perimeter sections far from mains power.",
      },
    ],
    relatedSlugs: [
      "cctv-surveillance",
      "biometric-access-control",
      "solar-power-system",
    ],
  },
  {
    slug: "solar-power-system",
    name: "Solar Power & Battery Backup System",
    category: "Solar Power",
    tag: "Best Value",
    shortDesc:
      "Keep your security systems running 24/7 — even during extended grid outages — with a complete solar installation.",
    longDesc:
      "Our solar systems are designed specifically to prioritise your security infrastructure — gate motors, CCTV, access control, and lighting stay on even when the grid fails. Tier 1 monocrystalline panels, lithium-iron phosphate batteries, and hybrid inverters, installed and commissioned by our EEE-qualified team.",
    price: "From ₦900,000",
    priceNote: "5kW starter system. Sized to your load after free energy audit.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    ],
    features: [
      "Tier 1 monocrystalline solar panels",
      "Lithium-iron phosphate (LiFePO4) batteries",
      "Hybrid inverter (grid-tied & off-grid)",
      "Security system solar priority circuit",
      "Remote monitoring via Eshmart app",
      "Automatic grid/solar switching",
      "Surge & lightning protection",
      "Expandable — add panels or batteries later",
    ],
    specs: [
      { label: "System sizes", value: "3kW – 20kW" },
      { label: "Panel type", value: "Monocrystalline PERC" },
      { label: "Battery chemistry", value: "LiFePO4" },
      { label: "Inverter type", value: "Hybrid (grid + off-grid)" },
      { label: "Backup duration", value: "6 – 36 hours (size dependent)" },
      { label: "Monitoring", value: "Real-time app dashboard" },
      { label: "Warranty", value: "2 years (installation) + panel warranty" },
      { label: "Installation", value: "Included" },
    ],
    useCases: [
      "Homes & estates",
      "Offices & commercial buildings",
      "Industrial facilities",
      "Telecom & data infrastructure",
      "Developer projects",
    ],
    faqs: [
      {
        q: "How long will the battery last at night?",
        a: "It depends on your load. Our free energy audit calculates exactly how many hours of backup you'll get based on your consumption.",
      },
      {
        q: "Can I add more panels later?",
        a: "Yes. All our systems are designed to be expandable — you can add panels, batteries, or a second inverter as your needs grow.",
      },
      {
        q: "What is the payback period?",
        a: "Most residential customers see full payback within 3–5 years based on current NEPA tariffs and diesel generator costs.",
      },
      {
        q: "Do you handle AEDC/IKEDC grid connection paperwork?",
        a: "Yes. For grid-tied systems, we handle all the distribution company paperwork and net metering applications.",
      },
    ],
    relatedSlugs: [
      "cctv-surveillance",
      "electric-fencing",
      "smart-home-automation",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return slugs
    .map((s) => PRODUCTS.find((p) => p.slug === s))
    .filter(Boolean) as Product[];
}
