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
    href: "https://rizkiramadhan.web.id",
    icon: "lucide:globe",
    title: "Portfolio",
    description: "My Portfolio",
    variant: "default",
  },
  {
    href: "https://spacedigitalia.biz.id",
    icon: "lucide:building-2",
    title: "My Agency",
    description: "My Agency",
    variant: "default",
  },
  {
    href: "https://rizverse.biz.id",
    icon: "lucide:package",
    title: "My Application Stream",
    description: "My Application Stream",
    variant: "default",
  },
  {
    href: "https://mediatools.biz.id",
    icon: "lucide:image",
    title: "Media Tools",
    description: "My Media Tools",
    variant: "default",
  },
  {
    href: "https://rizkiai.biz.id",
    icon: "lucide:brain",
    title: "AI Tools",
    description: "My AI Tools",
    variant: "default",
  },
  {
    href: "https://www.kodera.biz.id",
    icon: "lucide:shopping-bag",
    title: "My E-ccomerce Source Code",
    description: "My E-ccomerce Source Code",
    variant: "default",
  },
  {
    href: "mailto:hallo@rizkiramadhan.web.id",
    icon: "lucide:mail",
    title: "Work with me",
    description: "Open for new projects and collaborations",
    variant: "primary",
  },
];

export const socialsData: SocialItem[] = [
  {
    id: "instagram",
    name: "Instagram",
    subtitle: "@rzkir.20",
    icon: "lucide:instagram",
    iconBgClass:
      "bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400",
    buttonLabel: "Follow",
    href: "https://www.instagram.com/rzkir.20",
  },
  {
    id: "tiktok",
    name: "TikTok",
    subtitle: "@rzkir.20",
    icon: "simple-icons:tiktok",
    iconBgClass:
      "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100",
    buttonLabel: "Follow",
    href: "https://www.tiktok.com/@rzkir.20",
  },
  {
    id: "github",
    name: "GitHub",
    subtitle: "@rzkir",
    icon: "simple-icons:github",
    iconBgClass:
      "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100",
    buttonLabel: "Follow",
    href: "https://github.com/rzkir",
  },
  {
    id: "thread",
    name: "Thread",
    subtitle: "@rzkir.20",
    icon: "lucide:message-circle",
    iconBgClass: "bg-sky-50 text-sky-500 dark:bg-sky-900/20 dark:text-sky-400",
    buttonLabel: "Follow",
    href: "https://www.threads.net/@rzkir.20",
  },
  {
    id: "youtube",
    name: "YouTube",
    subtitle: "@rzkir.20",
    icon: "lucide:youtube",
    iconBgClass: "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400",
    buttonLabel: "Follow",
    href: "https://www.youtube.com/@rzkir.20",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    subtitle: "Professional network",
    icon: "lucide:linkedin",
    iconBgClass:
      "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400",
    buttonLabel: "Connect",
    href: "https://www.linkedin.com/in/rizki-ramadhan12",
  },
];
