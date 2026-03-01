export type LinkItemVariant = "default" | "primary";

export interface LinkItem {
  href: string;
  icon: string;
  title: string;
  description: string;
  variant?: LinkItemVariant;
}

export interface SocialItem {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  iconBgClass: string;
  buttonLabel: string;
  href: string;
}

export const linksData: LinkItem[] = [
  {
    href: "#",
    icon: "lucide:globe",
    title: "Selected Works",
    description: "Personal Portfolio 2024",
    variant: "default",
  },
  {
    href: "#",
    icon: "lucide:newspaper",
    title: "The Design Log",
    description: "Weekly design insights & tips",
    variant: "default",
  },
  {
    href: "#",
    icon: "lucide:shopping-bag",
    title: "Gumroad Store",
    description: "UI Kits & Design Templates",
    variant: "default",
  },
  {
    href: "#",
    icon: "lucide:mail",
    title: "Work with me",
    description: "Open for new projects",
    variant: "primary",
  },
];

export const socialsData: SocialItem[] = [
  {
    id: "instagram",
    name: "Instagram",
    subtitle: "@rizki.design • 12.4k",
    icon: "lucide:instagram",
    iconBgClass:
      "bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400",
    buttonLabel: "Follow",
    href: "#",
  },
  {
    id: "tiktok",
    name: "TikTok",
    subtitle: "Process videos • 45k",
    icon: "simple-icons:tiktok",
    iconBgClass:
      "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100",
    buttonLabel: "Follow",
    href: "#",
  },
  {
    id: "twitter",
    name: "Twitter / X",
    subtitle: "Daily thoughts • 8.2k",
    icon: "lucide:twitter",
    iconBgClass:
      "bg-sky-50 text-sky-500 dark:bg-sky-900/20 dark:text-sky-400",
    buttonLabel: "Follow",
    href: "#",
  },
  {
    id: "youtube",
    name: "YouTube",
    subtitle: "Tutorials • 3.1k",
    icon: "lucide:youtube",
    iconBgClass:
      "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400",
    buttonLabel: "Follow",
    href: "#",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    subtitle: "Professional network",
    icon: "lucide:linkedin",
    iconBgClass:
      "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400",
    buttonLabel: "Connect",
    href: "#",
  },
];