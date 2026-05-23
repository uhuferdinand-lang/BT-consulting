export const BOOKING_HREF =
  "mailto:hello@btconsulting.co?subject=Business%20Diagnosis%20Session%20Enquiry&body=Hi%20BT%20Consulting%2C%0A%0AI%27d%20like%20to%20book%20a%20Business%20Diagnosis%20Session.%0A%0AHere%27s%20a%20brief%20overview%20of%20my%20business%20and%20what%20I%27m%20stuck%20on%3A%0A%0A%5BYour%20message%20here%5D";

export const GENERAL_HREF =
  "mailto:hello@btconsulting.co?subject=General%20Enquiry&body=Hi%20BT%20Consulting%2C%0A%0AI%27d%20like%20to%20start%20a%20conversation.%0A%0AHere%27s%20a%20brief%20overview%20of%20my%20business%20and%20what%20I%27m%20stuck%20on%3A%0A%0A%5BYour%20message%20here%5D";

export const growthHref = (subject: string) =>
  `mailto:hello@btconsulting.co?subject=${encodeURIComponent(subject)}&body=Hi%20BT%20Consulting%2C%0A%0AI%27d%20like%20to%20start%20a%20conversation.%0A%0AHere%27s%20a%20brief%20overview%20of%20my%20business%20and%20what%20I%27m%20stuck%20on%3A%0A%0A%5BYour%20message%20here%5D`;

export const imageUrls = {
  hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  founder: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  workspace: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
  caseStudies: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
  services: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80",
};

export const grainStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
};

