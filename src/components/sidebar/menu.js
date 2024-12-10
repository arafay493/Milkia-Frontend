import { IoIosSpeedometer } from "react-icons/io";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaChartLine } from "react-icons/fa6";
import { BiBarChartSquare } from "react-icons/bi";
import { MdOutlinePayments } from "react-icons/md";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";

export const menuList = [
  {
    id: 1,
    title: "Projects",
    icon: <IoIosSpeedometer />,
    items: [
      { label: "Land", path: "/land" },
      { label: "Add Building", path: "/add-building" },
      { label: "Add Project", path: "/add-project" },
      { label: "Add Properties", path: "/add-properties" },
      { label: "Project List", path: "/project-list" },
      { label: "Add Floor Plan", path: "/add-floor-plan" },
      // { label: "Building", path: "/building" },
    ],
  },
  {
    id: 2,
    title: "Builders and Developers",
    icon: <PiUsersThreeFill />,
    items: [
      { label: "Add New Builder", path: "/add-new-builder" },
      { label: "List of Builders", path: "/list-of-builders" },
    ],
  },
  {
    id: 3,
    title: "Dealers (Partners)",
    icon: <FaChartLine />,
    items: [
      { label: "Add New Dealer", path: "/add-new-dealer" },
      { label: "Registered Clients", path: "/registered-clients" },
      { label: "Sales Person", path: "/sales-person" },
    ],
  },
  {
    id: 4,
    title: "Reports",
    icon: <BiBarChartSquare />,
    items: [
      { label: "Sales Report", path: "/sales-report" },
      { label: "Agent Report", path: "/agent-report" },
    ],
  },
  {
    id: 5,
    title: "Payments",
    icon: <MdOutlinePayments />,
    items: [
      { label: "Payment List", path: "/payment-list" },
      { label: "Add Payment", path: "/add-payment" },
      { label: "Search History", path: "/search-history" },
      { label: "Agent Payouts", path: "/agent-payouts" },
      { label: "Payouts History", path: "/payout-history" },
      { label: "Export Payouts", path: "/export-payouts" },
    ],
  },
  {
    id: 6,
    title: "Agreements",
    icon: <BsJournalBookmarkFill />,
    items: [
      { label: "All Agreements", path: "/all-agreements" },
      { label: "Agreements History", path: "/agreements-history" },
      { label: "Add New Agreement", path: "/add-new-agreement" },
      { label: "Expiring Dates", path: "/expiring-dates" },
    ],
  },
  {
    id: 7,
    title: "Settings",
    icon: <IoMdSettings />,
    items: [
      { label: "Change Password", path: "/change-password" },
      { label: "User List & Logins", path: "/user-lists" },
      { label: "Company Info", path: "/company-info" },
    ],
  },
];
