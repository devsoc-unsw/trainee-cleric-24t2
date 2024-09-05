import { Goal, Bell, Newspaper, RefreshCcw, CirclePlus, BadgeCent } from 'lucide-react';

interface Feature {
    icon: React.ReactNode;
    text: string,
    description: string;
}

export const navItems: {label: string, href: string}[] = [
    { label: "About Us", href: "#" },
    { label: "Features", href: "#" },
    { label: "Testimonials", href: "#"}
];

export const features: Feature[] = [
    {
        icon: <BadgeCent/>,
        text: "Expense Tracking",
        description: "Emphasizes easy logging and categorization for better financial awareness.",
    },

    {
        icon: <CirclePlus/>,
        text: "Budget Creation",
        description: "Highlights personalized budgets and progress tracking towards financial goals.",
    },
    {
        icon: <RefreshCcw/>,
        text: "Account Syncing",
        description: "Describes automatic import and real-time updates across all financial accounts.",
    },
    {
        icon: <Newspaper/>,
        text: "Financial Report",
        description: "Mentions comprehensive reports and visualizations for analyzing spending patterns.",
    },
    {
        icon: <Bell/>,
        text: "Bill Reminders",
        description: "Focuses on avoiding missed payments and maintaining a good credit score.",
    },
    {
        icon: <Goal/>,
        text: "Saving Goals",
        description: "Emphasizes setting and tracking progress towards various financial objectives.",
    },
]