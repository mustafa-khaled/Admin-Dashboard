// Static Data
// Side Bar Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import StoreIcon from "@mui/icons-material/Store";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

// Nav Bar Icons
import LanguageIcon from "@mui/icons-material/Language";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export const sideBarLinks = [
  {
    id: 1,
    title: "Dashboard",
    icon: DashboardIcon,
  },

  {
    id: 2,
    title: "Users",
    icon: PeopleOutlineIcon,
  },

  {
    id: 3,
    title: "Products",
    icon: StoreIcon,
  },

  {
    id: 4,
    title: "Orders",
    icon: BackupTableIcon,
  },

  {
    id: 5,
    title: "Delivery",
    icon: LocalShippingIcon,
  },

  {
    id: 6,
    title: "Stats",
    icon: QueryStatsIcon,
  },

  {
    id: 7,
    title: "Notifications",
    icon: NotificationsIcon,
  },

  {
    id: 8,
    title: "System Health",
    icon: HealthAndSafetyIcon,
  },
  {
    id: 9,
    title: "Logs",
    icon: PsychologyIcon,
  },

  {
    id: 10,
    title: "Settings",
    icon: SettingsIcon,
  },

  {
    id: 11,
    title: "Profile",
    icon: AccountCircleIcon,
  },

  {
    id: 12,
    title: "Log Out",
    icon: LogoutIcon,
  },
];

export const navBarData = [
  {
    id: 1,
    icon: LanguageIcon,
  },
  {
    id: 2,
    icon: NightlightRoundIcon,
  },
  {
    id: 3,
    icon: FullscreenExitIcon,
  },
  {
    id: 4,
    icon: NotificationsActiveIcon,
    before: 2,
  },
  {
    id: 5,
    icon: MarkChatUnreadIcon,
    before: 1,
  },
  {
    id: 6,
    icon: FormatListBulletedIcon,
  },
];
