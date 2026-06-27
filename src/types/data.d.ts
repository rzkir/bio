type LinkItemVariant = "default" | "primary";

interface LinkItem {
    href: string;
    icon: string;
    title: string;
    description: string;
    variant?: LinkItemVariant;
}

interface SocialItem {
    id: string;
    name: string;
    subtitle: string;
    icon: string;
    iconBgClass: string;
    buttonLabel: string;
    href: string;
}