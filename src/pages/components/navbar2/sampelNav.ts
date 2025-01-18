export const sampelNavMenu = [
  { hash: "#home", href: "#", label: "home" },
  { hash: "#about", href: "#", label: "about" },
  { hash: "#project", href: "#", label: "project" },
  { hash: "#services", href: "#", label: "services" },
  { hash: "#contact", href: "#", label: "contact" },
];

export const sampelNavMenuWithDrop = [
  { hash: "#home", href: "#", label: "home", drop: [] },
  {
    hash: "#about",
    href: "#",
    label: "about",
    drop: [
      { hash: "#", href: "#", label: "about1" },
      { hash: "#", href: "#", label: "about2" },
      { hash: "#", href: "#", label: "about3" },
      { hash: "#", href: "#", label: "about4" },
    ],
  },
  { hash: "#project", href: "#", label: "project", drop: [] },
  {
    hash: "#services",
    href: "#",
    label: "services",
    drop: [
      { hash: "#", href: "#", label: "service1" },
      { hash: "#", href: "#", label: "service2" },
      { hash: "#", href: "#", label: "service3" },
      { hash: "#", href: "#", label: "service4" },
    ],
  },
  { hash: "#contact", href: "#", label: "contact", drop: [] },
];
