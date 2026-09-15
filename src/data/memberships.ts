export type MembershipPlan = {
  slug: string;
  name: string;
  price: number;
  gst: number;
  total: number;
  type: "package" | "unlimited";
  discount?: number;
  sessions: string;
  summary: string;
  gift?: string;
};

export const membershipPlans: MembershipPlan[] = [
  {
    slug: "essential-start",
    name: "Essential Start",
    price: 51000,
    gst: 9180,
    total: 60180,
    type: "package",
    discount: 15,
    sessions: "Up to 5",
    summary:
      "A focused first program across skin, hair and recovery protocols.",
  },
  {
    slug: "signature-glow",
    name: "Signature Glow",
    price: 75000,
    gst: 13500,
    total: 88500,
    type: "package",
    discount: 21,
    sessions: "Up to 7",
    summary:
      "A broader multi-goal program across skin, recovery and immune wellness.",
  },
  {
    slug: "unlimited-quarterly",
    name: "Unlimited Quarterly",
    price: 90000,
    gst: 16200,
    total: 106200,
    type: "unlimited",
    sessions: "Unlimited*",
    summary:
      "Three months of physician-scheduled access across core wellness families.",
  },
  {
    slug: "performance-edit",
    name: "Performance Edit",
    price: 120000,
    gst: 21600,
    total: 141600,
    type: "package",
    discount: 30,
    sessions: "Up to 10",
    summary:
      "Performance recovery layered with skin and immune support.",
  },
  {
    slug: "longevity-starter",
    name: "Longevity Starter",
    price: 150000,
    gst: 27000,
    total: 177000,
    type: "package",
    discount: 30,
    sessions: "Up to 12",
    summary:
      "A structured first step into cellular longevity.",
    gift: "₹50,000 complimentary NAD+",
  },
  {
    slug: "unlimited-half-year",
    name: "Unlimited Half-Year",
    price: 180000,
    gst: 32400,
    total: 212400,
    type: "unlimited",
    sessions: "Unlimited*",
    summary:
      "Six months of physician-scheduled access across the core system.",
  },
  {
    slug: "elite-circle",
    name: "Elite Circle",
    price: 210000,
    gst: 37800,
    total: 247800,
    type: "package",
    discount: 36,
    sessions: "Up to 16",
    summary:
      "Comprehensive year-round wellness with the deepest package discount.",
  },
  {
    slug: "prestige-longevity",
    name: "Prestige Longevity",
    price: 240000,
    gst: 43200,
    total: 283200,
    type: "package",
    discount: 36,
    sessions: "Up to 18",
    summary:
      "The flagship package combining full-system wellness with a longevity gift.",
    gift: "₹1,00,000 complimentary NAD+",
  },
  {
    slug: "unlimited-annual",
    name: "Unlimited Annual",
    price: 300000,
    gst: 54000,
    total: 354000,
    type: "unlimited",
    sessions: "Unlimited*",
    summary:
      "Twelve months of physician-scheduled access across the full 19-protocol system.",
  },
];

export const circleMemberships = [
  {
    slug: "circle-essential",
    name: "DripLabs Circle — Essential",
    monthlyPrice: 6000,
    term: "3-month minimum, then cancel anytime",
    summary:
      "1 core wellness session per month, 15% off additional sessions, and one rollover session allowed.",
  },
  {
    slug: "circle-longevity",
    name: "DripLabs Circle — Longevity",
    monthlyPrice: 15000,
    term: "3-month minimum, then cancel anytime",
    summary:
      "1 NADx or APEX session per month, 20% off additional sessions, priority scheduling and quarterly check-in.",
  },
];