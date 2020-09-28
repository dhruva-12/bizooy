import { Home, Users, Settings, UserCheck, HelpCircle } from "react-feather";

export const MENUITEMS = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/dashboard",
    type: "link",
    badgeType: "primary",
    active: false,
  },

  {
    title: "Customers",
    path: "/customers",
    icon: Users,
    type: "link",
    active: false,
    children: [
      {
        path: "/customers/addsingle",
        title: "Add Single Customer",
        type: "link",
      },
      {
        path: "/customers/addbulk",
        title: "Add Customers in bulk",
        type: "link",
      },
      {
        path: "/customers/mailchimp",
        title: "Add via MailChimp",
        type: "link",
      },
    ],
  },

  {
    title: "Reviews",
    icon: UserCheck,
    type: "sub",
    active: false,
    children: [
      { path: "/review/request", title: "Request Reviews", type: "link" },
      { path: "/review/unopened", title: "Unopened Reviews", type: "link" },
      { path: "/review/opened", title: "Opened Reviews", type: "link" },
      { path: "/review/completed", title: "Completed Reviews", type: "link" },
    ],
  },

  {
    title: "Settings",
    icon: Settings,
    type: "sub",
    active: false,
    children: [
      { path: "/settings/Information", title: "Information", type: "link" },
      { path: "/settings/SMS/Email", title: "SMS/Email", type: "link" },
      {
        path: "/settings/socialprofiles",
        title: "Social Profiles",
        type: "link",
      },
      {
        path: "/settings/mailchimp",
        title: "MailChimp Integrations",
        type: "link",
      },
    ],
  },
  {
    title: "Unsubscribe",
    path: "/unsubscribe",
    icon: HelpCircle,
    type: "link",
    active: false,
  },
];
