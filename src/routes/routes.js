/***** Note: All application routes are defined here *****/

// Note: Importing required icons from Material UI...!
import HomeIcon from "@mui/icons-material/Home";
import RegisterDriverIcon from "@mui/icons-material/PersonAddAlt";
import LogoutIcon from "@mui/icons-material/Logout";
// Note: All web pages / screens routes are defined here...!
import { SiElectronbuilder } from "react-icons/si";
import { PiUsersThreeFill } from "react-icons/pi";

const appRoutes = [
  {
    id: 1,
    label: "dashboard",
    path: "/dashboard",
    icon: HomeIcon,
  },

  {
    id: 2,
    label: "Builder",
    path: "",
    icon: PiUsersThreeFill,
    showNestedTabs: false,
    nestedTabs: [
      {
        id: 1,
        label: "Builder",
        path: "/builder",
        icon: SiElectronbuilder,
      },
    ],
  },

  {
    id: 3,
    label: "Dealers",
    path: "",
    icon: PiUsersThreeFill,
    showNestedTabs: false,
    nestedTabs: [
      {
        id: 1,
        label: "Dealers",
        path: "/Dealers",
        icon: SiElectronbuilder,
      },
    ],
  },

  {
    id: 4,
    label: "Sales Person",
    path: "",
    icon: PiUsersThreeFill,
    showNestedTabs: false,
    nestedTabs: [
      {
        id: 1,
        label: "Sales Person",
        path: "/SalesPerson",
        icon: SiElectronbuilder,
      },
    ],
  },

  {
    id: 5,
    label: "Customers",
    path: "",
    icon: PiUsersThreeFill,
    showNestedTabs: false,
    nestedTabs: [
      {
        id: 1,
        label: "Customers",
        path: "/Customers",
        icon: SiElectronbuilder,
      },
    ],
  },

  {
    id: 6,
    label: "logout",
    path: "/",
    icon: LogoutIcon,
  },
];

export default appRoutes;
