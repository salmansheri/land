export type NavLinksType = {
  id: number;
  label: string;
  href: string;
};
export const navLinks = [
  {
    id: 1,
    label: "Features",
    href: "/features",
  },
  {
    id: 2,
    label: "Get Started",
    href: "/get-started",
  },
] as NavLinksType[];
