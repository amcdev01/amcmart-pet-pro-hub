// AMC Mart Constants
export const COMPANY_INFO = {
  name: "AMC Mart",
  tagline: "Your Trusted Partner in Veterinary Solutions",
  description: "AMC Mart is a proud concern of the AMC Group, specializing in veterinary medical equipment, pet accessories, and premium pet nutrition solutions. As a trusted distributor of Mindray Animal Medical in Bangladesh, we are dedicated to delivering reliable products, seamless customer support, and innovative technologies that empower veterinary professionals and elevate clinical outcomes across the country.",
  address: "House 03, Floor 02, Road 08 Baridhara J Block, Dhaka 1212",
  addressShort: "House 03, Road 08, 1212 Baridhara J Block, Dhaka 1212",
  phone: "+88 - 0133 281 9800",
  email: "info@amcmart.xyz",
  website: "amcmart.xyz",
  facebook: "https://www.facebook.com/amcmartbd",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8888888888!2d90.4180000000000!3d23.8100000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ4JzM2LjAiTiA5MMKwMjUnMDQuOCJF!5e0!3m2!1sen!2sbd!4v1600000000000!5m2!1sen!2sbd",
};

// Payment Information for bKash and Nagad
export const PAYMENT_INFO = {
  bkash: {
    name: "bKash",
    number: "01XXX-XXXXXX", // Replace with actual bKash merchant number
    type: "Merchant", // or "Personal"
    instructions: "Send money to this bKash number and include your Quote ID in the reference.",
  },
  nagad: {
    name: "Nagad",
    number: "01XXX-XXXXXX", // Replace with actual Nagad merchant number
    type: "Merchant", // or "Personal"
    instructions: "Send money to this Nagad number and include your Quote ID in the reference.",
  },
  bankTransfer: {
    bankName: "Your Bank Name",
    accountName: "AMC Mart",
    accountNumber: "XXXXXXXXXXXX",
    branchName: "Branch Name",
    routingNumber: "XXXXXXXXX",
  },
  paymentNote: "After making payment, please share the transaction ID via WhatsApp or email for verification.",
};

export const MISSION_VISION = {
  mission: "To provide exceptional veterinary medical solutions and pet care products that enhance animal health and well-being, while supporting veterinary professionals with cutting-edge technology and reliable customer service.",
  vision: "To become the leading distributor of veterinary medical equipment and pet care solutions in Bangladesh, recognized for our commitment to quality, innovation, and customer satisfaction.",
};

export const SISTER_CONCERNS = [
  {
    name: "AniMedCare",
    description: "Animal medical care and treatment solutions",
    slug: "animedcare",
  },
  {
    name: "AMC Vet Lab",
    description: "Veterinary diagnostic laboratory services",
    slug: "amc-vet-lab",
  },
  {
    name: "AMC Vet Pharma",
    description: "Veterinary pharmaceutical products",
    slug: "amc-vet-pharma",
  },
  {
    name: "SkyTrek",
    description: "Premium travel and lifestyle solutions",
    slug: "skytrek",
  },
];

export const SERVICES = [
  {
    title: "Customer Care",
    description: "Dedicated support team providing comprehensive assistance for all your veterinary equipment needs, ensuring smooth operations and maximum uptime.",
    icon: "headset",
  },
  {
    title: "Technical Service",
    description: "Expert technical support and maintenance services delivered by certified professionals to keep your equipment running at peak performance.",
    icon: "wrench",
  },
  {
    title: "Spare Parts Support",
    description: "Genuine spare parts availability with quick delivery to minimize downtime and maintain equipment reliability.",
    icon: "cog",
  },
];

export const FOOTER_LINKS = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Recruitment", href: "/recruitment" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Compliance Hotline", href: "/compliance" },
  { label: "Cookie Notice", href: "/cookies" },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Service", href: "/service" },
  { label: "Media Center", href: "/media" },
  { label: "Contact Us", href: "/contact" },
];
