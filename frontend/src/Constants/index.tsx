import { Goal, Bell, Newspaper, RefreshCcw, CirclePlus, BadgeCent } from 'lucide-react';

interface Feature {
    icon: React.ReactNode;
    text: string,
    description: string;
}

interface ChecklistItem {
    title: string;
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

export const checklistItems: ChecklistItem[] = [
    {
        title: "Expense tracking made easy",
        description: "Effortlessly log and categorize your daily spending for better financial awareness"
    },

    {
        title: "Budget insights at a glance",
        description: "Visualize your spending patterns and receive personalized recommendations to improve your financial health",
    },

    {
        title: "AI-powered financial advice",
        description: "Get intelligent suggestions to optimize your budget and achieve your financial goals faster",
    },

    {
        title: "Sync across all devices",
        description: "Access your financial data securely from any device, ensuring you're always on top of your budget"
    }
]
