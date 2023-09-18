// Static Data
// Side Bar Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import StoreIcon from "@mui/icons-material/Store";
import BackupTableIcon from "@mui/icons-material/BackupTable";

// Widget Icons
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

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
];

export const widgetData = [
  {
    id: 1,
    title: "Users",
    link: "See All Users",
    category: "users",
    amountProp: "usersAmount",
    percentageProp: "usersPercentage",
    icon: PersonIcon,
    styles: {
      bg: "bg-red-200",
      text: "text-red-500",
    },
    to: "/users",
  },

  {
    id: 2,
    title: "Orders",
    link: "View All Orders",
    category: "orders",
    amountProp: "ordersAmount",
    percentageProp: "ordersPercentage",
    icon: ShoppingCartIcon,
    styles: {
      bg: "bg-yellow-200",
      text: "text-yellow-500",
    },
    to: "/orders",
  },

  {
    id: 3,
    title: "Earning",
    link: "View Net Earning",
    category: "products",
    amountProp: "productsAmount",
    percentageProp: "productsPercentage",
    icon: CurrencyExchangeIcon,
    styles: {
      bg: "bg-green-200",
      text: "text-green-500",
    },
    to: "/orders",
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

export const newUserFormInputs = [
  {
    id: 1,
    label: "User Name:",
    type: "text",
    placeholder: "John_Doe",
    name: "userName",
  },

  {
    id: 2,
    label: "Name & Surname:",
    type: "text",
    placeholder: "John Doe",
    name: "surName",
  },

  {
    id: 3,
    label: "Email:",
    type: "email",
    placeholder: "john@email.com",
    name: "email",
  },

  {
    id: 4,
    label: "Phone:",
    type: "text",
    placeholder: "+12 3214",
    name: "phone",
  },

  {
    id: 5,
    label: "Password:",
    type: "password",
    placeholder: "Password",
    name: "password",
  },

  {
    id: 6,
    label: "Address:",
    type: "text",
    placeholder: "Cairo, Egypt.",
    name: "address",
  },

  {
    id: 7,
    label: "Country:",
    type: "text",
    placeholder: "Cairo",
    name: "country",
  },
];

export const newProductFormInputs = [
  {
    id: 1,
    label: "Title",
    type: "text",
    placeholder: "Apple Macbook Pro",
    name: "title",
  },

  {
    id: 2,
    label: "Price",
    type: "number",
    placeholder: "$100",
    name: "price",
  },
  {
    id: 3,
    label: "Status",
    type: "text",
    placeholder: "Active",
    name: "status",
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

export const homeTableHead = [
  {
    id: 2,
    title: "Product",
  },

  {
    id: 3,
    title: "Customer",
  },
  {
    id: 4,
    title: "Date",
  },

  {
    id: 6,
    title: "Payment Method",
  },
  {
    id: 7,
    title: "Status",
  },
];
