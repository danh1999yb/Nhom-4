import async from "../components/Async";

import {
  Bell as Bellicon,
  BookOpen as BookOpenIcon,
  Calendar as CalendarIcon,
  CheckSquare as CheckSquareIcon,
  Grid as GridIcon,
  Heart as HeartIcon,
  Layout as LayoutIcon,
  List as ListIcon,
  MapPin as MapPinIcon,
  Monitor as MonitorIcon,
  PieChart as PieChartIcon,
  Sliders as SlidersIcon,
  Users as UsersIcon
} from "react-feather";

// Landing
import Landing from "../pages/landing/Landing";

// Auth
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import Page404 from "../pages/auth/Page404";
import Page500 from "../pages/auth/Page500";

// Layouts
import Boxed from "../pages/layouts/Boxed";
import SidebarCollapsed from "../pages/layouts/SidebarCollapsed";
import SidebarSticky from "../pages/layouts/SidebarSticky";
import ThemeClassic from "../pages/layouts/ThemeClassic";
import ThemeCorporate from "../pages/layouts/ThemeCorporate";
import ThemeModern from "../pages/layouts/ThemeModern";

// Misc
import Blank from "../pages/misc/Blank";

// UI Elements
import Alerts from "../pages/ui-elements/Alerts";
import Buttons from "../pages/ui-elements/Buttons";
import Cards from "../pages/ui-elements/Cards";
import Carousel from "../pages/ui-elements/Carousel";
import EmbedVideo from "../pages/ui-elements/EmbedVideo";
import General from "../pages/ui-elements/General";
import Grid from "../pages/ui-elements/Grid";
import Modals from "../pages/ui-elements/Modals";
import Tabs from "../pages/ui-elements/Tabs";
import Typography from "../pages/ui-elements/Typography";

// Notifications
import Notifications from "../pages/notifications/Notifications";

// Pages
import Profile from "../pages/pages/Profile";
import Settings from "../pages/pages/Settings";
import Clients from "../pages/pages/Clients";
import Projects from "../pages/pages/Projects";
import Invoice from "../pages/pages/Invoice";
import Pricing from "../pages/pages/Pricing";
import Tasks from "../pages/pages/Tasks";
import Chat from "../pages/pages/Chat";
import Tables from "../pages/pages/group/Groups";
// Documentation
import Introduction from "../pages/docs/Introduction";
import GettingStarted from "../pages/docs/GettingStarted";
import EnvironmentVariables from "../pages/docs/EnvironmentVariables";
import Deployment from "../pages/docs/Deployment";
import StateManagement from "../pages/docs/StateManagement";
import Plugins from "../pages/docs/Plugins";
import Changelog from "../pages/docs/Changelog";
import NewPassword from "../pages/auth/NewPassword";

// auth
import withAuth from "../HOC/withAuth";

// Dashboards
const Default = async(() => import("../pages/dashboards/Default"));
const Analytics = async(() => import("../pages/dashboards/Analytics"));
const Ecommerce = async(() => import("../pages/dashboards/Ecommerce"));
const Crypto = async(() => import("../pages/dashboards/Crypto"));
const Social = async(() => import("../pages/dashboards/Social"));

// Forms
const Layouts = async(() => import("../pages/forms/Layouts"));
const BasicInputs = async(() => import("../pages/forms/BasicInputs"));
const AdvancedInputs = async(() => import("../pages/forms/AdvancedInputs"));
const InputGroups = async(() => import("../pages/forms/InputGroups"));
const Editors = async(() => import("../pages/forms/Editors"));
const Validation = async(() => import("../pages/forms/Validation"));
const Wizard = async(() => import("../pages/forms/Wizard"));

// Tables
const BootstrapTables = async(() => import("../pages/tables/Bootstrap"));
const PaginationTables = async(() => import("../pages/tables/Pagination"));
const RowSelectionTables = async(() => import("../pages/tables/RowSelection"));
const ExportCsvTables = async(() => import("../pages/tables/ExportCsv"));
const ExpandableRowsTables = async(() =>
  import("../pages/tables/ExpandableRows")
);

// Charts
const Chartjs = async(() => import("../pages/charts/Chartjs"));
const ApexCharts = async(() => import("../pages/charts/ApexCharts"));

// Icons
const FontAwesome = async(() => import("../pages/icons/FontAwesome"));
const Feather = async(() => import("../pages/icons/Feather"));

// Calendar
const Calendar = async(() => import("../pages/calendar/Calendar"));

// Maps
const VectorMaps = async(() => import("../pages/maps/VectorMaps"));
const GoogleMaps = async(() => import("../pages/maps/GoogleMaps"));

// Routes
const landingRoutes = {
  path: "/",
  name: "Landing Page",
  component: Landing,
  children: null
};

const dashboardRoutes = {
  path: "/dashboard",
  name: "Dashboards",
  header: "Pages",
  badgeColor: "primary",
  icon: SlidersIcon,
  containsHome: true,
  component: withAuth(Default),
  children: null
};
// const otherRoutes = {
//   path: "/"
// }
const pageRoutes = {
  path: "/management",
  name: "Management",
  icon: LayoutIcon,
  children: [
    {
      path: "/management/groups",
      name: "Tours",
      component: Tables
    },
    {
      path: "/management/orders",
      name: "Orders",
      component: Pricing
    },
    {
      path: "/management/invoice",
      name: "Invoice",
      component: Invoice
    },
    {
      path: "/management/clients",
      name: "Clients",
      component: Clients
    },
    {
      path: "/management/settings",
      name: "Settings",
      component: Settings
    },

  ]
};

const authRoutes = {
  path: "/auth",
  name: "Auth",
  icon: UsersIcon,
  badgeColor: "secondary",
  badgeText: "Special",
  children: [
    {
      path: "/auth/sign-in",
      name: "Sign In",
      component: SignIn
    },
    {
      path: "/auth/sign-up",
      name: "Sign Up",
      component: SignUp
    },
    {
      path: "/auth/reset-password",
      name: "Reset Password",
      component: ResetPassword
    },
    {
      path: "/auth/new-password/:token",
      name: "New Password",
      component: NewPassword
    },
    {
      path: "/auth/404",
      name: "404 Page",
      component: Page404
    },
    {
      path: "/auth/500",
      name: "500 Page",
      component: Page500
    }
  ]
};

// This route is not visisble in the sidebar
const privateRoutes = {
  path: "/private",
  name: "Private",
  children: [
    {
      path: "/private/blank",
      name: "Blank Page",
      component: Blank
    }
  ]
};

// Dashboard specific routes
export const dashboard = [
  dashboardRoutes,
  pageRoutes,
  privateRoutes
];

// Landing specific routes
export const landing = [landingRoutes];

// Auth specific routes
export const page = [authRoutes];

// All routes, on display sidebar
export default [
  dashboardRoutes,
  pageRoutes,
  // authRoutes,



];
