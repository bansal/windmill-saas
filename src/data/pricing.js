export const pricing = [
  {
    name: "Free",
    description: "For small teams",
    value: {
      monthly: 0,
      yearly: 0,
    },
    unit: "per user/month",
    currency: "$",
    features: [
      "Unlimited users",
      "Unlimited projects",
      "Unlimited storage",
      "Unlimited support",
    ],
    button: {
      label: "Get started",
      href: "/signup",
      color: "light",
      icon: "tabler:arrow-right",
    },
  },
  {
    name: "Pro",
    description: "For growing teams",
    value: {
      monthly: 15,
      yearly: 12,
    },
    unit: "per user/month",
    currency: "$",
    features: [
      "All Free features",
      "Priority support",
      "Advanced analytics",
      "Custom branding",
    ],
    button: {
      label: "Start free trial",
      href: "/signup",
      icon: "tabler:rocket",
    },
  },
  {
    name: "Enterprise",
    description: "For large teams",
    value: {
      monthly: 29,
      yearly: 24,
    },
    unit: "per user/month",
    currency: "$",
    features: [
      "All Pro features",
      "Dedicated account manager",
      "Custom integrations",
      "Data import & export",
    ],
    button: {
      label: "Contact sales",
      href: "/contact",
      color: "light",
      icon: "tabler:mail",
    },
  },
];
