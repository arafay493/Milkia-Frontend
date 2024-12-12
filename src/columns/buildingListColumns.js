import { createColumnHelper } from "@tanstack/react-table";
import styles from "../styles/tanstack-table.module.css";
import { Divider, IconButton } from "@mui/material";
import { icons } from "@/app/lib/constants";

const columnHelper = createColumnHelper();

export const createBuildingListColumns = ({ onView, onEdit, onDelete }) => [
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
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("firstName", {
    header: "First Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
  columnHelper.display({
    id: "action",
    header: () => <div className={styles.checkboxContainer}>Actions</div>,
    cell: ({ row }) => (
      <div className={styles.actions}>
        <div>
          <IconButton
            variant="contained"
            onClick={() => onView(row.original)}
            size="small"
            style={{ color: "#479ba4" }}
          >
            {icons.view}
          </IconButton>
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
          <IconButton
            variant="contained"
            onClick={() => onEdit(row.original)}
            size="small"
            style={{ color: "#479ba4" }}
          >
            {icons.edit}
          </IconButton>
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
          <IconButton
            variant="contained"
            onClick={() => onDelete(row.original)}
            size="small"
            style={{ color: "#479ba4" }}
          >
            {icons.delete}
          </IconButton>
        </div>
      </div>
    ),
  }),
];