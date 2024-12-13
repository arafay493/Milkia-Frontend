import { createColumnHelper } from "@tanstack/react-table";
import styles from "../styles/tanstack-table.module.css";
import { Divider, IconButton } from "@mui/material";
import { icons } from "@/app/lib/constants";

const columnHelper = createColumnHelper();

export const createRegisteredClientsListColumns = ({ onView, onEdit, onDelete }) => [
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={table.getIsAllRowsSelected()}
          onChange={(e) =>
            e.target.checked
              ? table.toggleAllRowsSelected(true)
              : table.toggleAllRowsSelected(false)
          }
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={() => row.toggleSelected()}
          className={styles.checkboxContainer}
        />
      </div>
    ),
  }),
  columnHelper.accessor("personId", {
    header: "Person ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("leadName", {
    header: "Lead Name",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("contact", {
    header: "Contact",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("project", {
    header: "Project",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("requirements", {
    header: "Requirements",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("for", {
    header: "For",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => `${row.source} / ${row.employee}`, {
    id: "sourceEmployee",
    header: "Source / Employee",
    cell: (info) => info.getValue(),
  }),
//   columnHelper.accessor("source", {
//     header: "Source",
//     cell: (info) => info.getValue(),
//   }),
//   columnHelper.accessor("employee", {
//     header: "Employee",
//     cell: (info) => info.getValue(),
//   }),
  columnHelper.accessor("remarks", {
    header: "Remarks",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => `${row.leadDate} ${row.leadTime}`, {
    id: "lead",
    header: "Lead Date",
    cell: (info) => info.getValue(),
  }),
//   columnHelper.accessor("leadDate", {
//     header: "Lead Date",
//     cell: (info) => info.getValue(),
//   }),
//   columnHelper.accessor("leadTime", {
//     header: "Lead Time",
//     cell: (info) => info.getValue(),
//   }),
  columnHelper.display({
    id: "action",
    header: "Actions",
    cell: ({ row }) => (
      <div className={styles.actions}>
        <IconButton
          variant="contained"
          onClick={() => onView(row.original)}
          size="small"
          style={{ color: "#479ba4" }}
        >
          {icons.view}
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton
          variant="contained"
          onClick={() => onEdit(row.original)}
          size="small"
          style={{ color: "#479ba4" }}
        >
          {icons.edit}
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton
          variant="contained"
          onClick={() => onDelete(row.original)}
          size="small"
          style={{ color: "#479ba4" }}
        >
          {icons.delete}
        </IconButton>
      </div>
    ),
  }),
];
