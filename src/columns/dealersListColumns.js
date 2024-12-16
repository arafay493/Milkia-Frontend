import { createColumnHelper } from "@tanstack/react-table";
import styles from "../styles/tanstack-table.module.css";
import { Button, Divider, IconButton, MenuItem, Select } from "@mui/material";
import { icons } from "@/app/lib/constants";

const columnHelper = createColumnHelper();

export const createDealersListColumns = ({
  onView,
  onEdit,
  onDelete,
}) => [
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div>Attempt | Assign</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <select
            //   value={selectedEmployee}
            //   onChange={(e) => setSelectedEmployee(e.target.value)}
            className={styles.select}
            displayEmpty
            style={{ mixWidth: "50px", display: "inline-block" }}
          >
            <option value="" disabled hidden>
              Select Employee
            </option>
            <option value="47 | abc Lead Manager">47 | abc Lead Manager</option>
            <option value="48 | xyz Lead Manager">48 | xyz Lead Manager</option>
          </select>
          <Button
            variant="contained"
            //   color="primary"
            style={{ backgroundColor: "#63c2c7", height: "35px" , width: "150px" }}
            //   onClick={handleAssign}
            //   disabled={!selectedEmployee} // Disable until an employee is selected
          >
            Assign
          </Button>
        </div>
      </div>
      //   <div className={styles.actions}>
      //     <IconButton
      //       variant="contained"
      //       onClick={() => onView(row.original)}
      //       size="small"
      //       style={{ color: "#479ba4" }}
      //     >
      //       {icons.view}
      //     </IconButton>
      //     <Divider orientation="vertical" flexItem />
      //     <IconButton
      //       variant="contained"
      //       onClick={() => onEdit(row.original)}
      //       size="small"
      //       style={{ color: "#479ba4" }}
      //     >
      //       {icons.edit}
      //     </IconButton>
      //     <Divider orientation="vertical" flexItem />
      //     <IconButton
      //       variant="contained"
      //       onClick={() => onDelete(row.original)}
      //       size="small"
      //       style={{ color: "#479ba4" }}
      //     >
      //       {icons.delete}
      //     </IconButton>
      //   </div>
    ),
  }),
];
