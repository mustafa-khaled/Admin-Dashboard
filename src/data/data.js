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
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

// Widget Icons
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export const sideBarLinks = [
  {
    id: 1,
    title: "Dashboard",
    icon: DashboardIcon,
    hrefLink: "/",
  },

  {
    id: 2,
    title: "Users",
    icon: PeopleOutlineIcon,
    hrefLink: "/users",
  },

  {
    id: 3,
    title: "Products",
    icon: StoreIcon,
    hrefLink: "/products",
  },

  {
    id: 4,
    title: "Orders",
    icon: BackupTableIcon,
    hrefLink: "/orders",
  },

  {
    id: 5,
    title: "Delivery",
    icon: LocalShippingIcon,
    hrefLink: "/delivery",
  },

  {
    id: 6,
    title: "Stats",
    icon: QueryStatsIcon,
    hrefLink: "/stats",
  },

  {
    id: 7,
    title: "Notifications",
    icon: NotificationsIcon,
    hrefLink: "/notifications",
  },

  {
    id: 8,
    title: "System Health",
    icon: HealthAndSafetyIcon,
    hrefLink: "/systemHealth",
  },
  {
    id: 9,
    title: "Logs",
    icon: PsychologyIcon,
    hrefLink: "/logs",
  },

  {
    id: 10,
    title: "Settings",
    icon: SettingsIcon,
    hrefLink: "/settings",
  },

  {
    id: 11,
    title: "Profile",
    icon: AccountCircleIcon,
    hrefLink: "/profile",
  },

  {
    id: 12,
    title: "Log Out",
    icon: LogoutIcon,
    hrefLink: "/logOut",
  },
];

export const navBarData = [
  {
    id: 1,
    icon: LanguageIcon,
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

export const widgetData = [
  {
    id: 1,
    title: "Users",
    counter: 100,
    link: "See All Users",
    percentage: "20%",
    icon: PersonIcon,
    styles: {
      bg: "bg-red-200",
      text: "text-red-500",
    },
  },

  {
    id: 2,
    title: "Orders",
    counter: 100,
    link: "View All Orders",
    percentage: "20%",
    icon: ShoppingCartIcon,

    styles: {
      bg: "bg-yellow-200",
      text: "text-yellow-500",
    },
  },

  {
    id: 3,
    title: "Earning",
    counter: 3213,
    link: "View Net Earning",
    percentage: "20%",
    icon: CurrencyExchangeIcon,
    styles: {
      bg: "bg-green-200",
      text: "text-green-500",
    },
  },

  {
    id: 4,
    title: "Balance",
    counter: 3213,
    link: "See Details",
    percentage: "20%",
    icon: AccountBalanceWalletIcon,

    styles: {
      bg: "bg-purple-200",
      text: "text-purple-500",
    },
  },
];

export const featuredChartData = [
  {
    id: 1,
    title: "Target",
    value: "$12.4k",
    styles: "text-red-500",
  },

  {
    id: 2,
    title: "Last Week",
    value: "$12.4k",
    styles: "text-green-500",
  },

  {
    id: 3,
    title: "Last Month",
    value: "$12.4k",
    styles: "text-green-500",
  },
];

export const chartData = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

export const homeTableData = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Michael Doe",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
];

export const newUserFormInputs = [
  {
    id: 1,
    label: "User Name",
    type: "text",
    placeholder: "John_Doe",
    name: "userName",
  },

  {
    id: 2,
    label: "Name & Surname",
    type: "text",
    placeholder: "John Doe",
    name: "surname",
  },

  {
    id: 3,
    label: "Email",
    type: "email",
    placeholder: "john@email.com",
    name: "email",
  },

  {
    id: 4,
    label: "Phone",
    type: "text",
    placeholder: "+12 3214",
    name: "phone",
  },

  {
    id: 5,
    label: "Password",
    type: "password",
    placeholder: "Password",
    name: "password",
  },

  {
    id: 6,
    label: "Address",
    type: "text",
    placeholder: "Cairo, Egypt.",
    name: "address",
  },

  {
    id: 7,
    label: "Country",
    type: "text",
    placeholder: "Cairo",
    name: "country",
  },
];

export const productInputs = [
  {
    id: 1,
    label: "Title",
    type: "text",
    placeholder: "Apple Macbook Pro",
    name: "title",
  },
  {
    id: 2,
    label: "Description",
    type: "text",
    placeholder: "Description",
    name: "description",
  },
  {
    id: 3,
    label: "Category",
    type: "text",
    placeholder: "Computers",
    name: "category",
  },
  {
    id: 4,
    label: "Price",
    type: "text",
    placeholder: "100",
    name: "price",
  },
  {
    id: 5,
    label: "Stock",
    type: "text",
    placeholder: "in stock",
    name: "stock",
  },
];

export const loginFormInputs = [
  {
    id: 1,
    label: "Email:",
    name: "email",
    type: "text",
    placeholder: "Enter Your Email",
  },

  {
    id: 2,
    label: "Password:",
    name: "password",
    type: "password",
    placeholder: "Enter Your Password",
  },
];
