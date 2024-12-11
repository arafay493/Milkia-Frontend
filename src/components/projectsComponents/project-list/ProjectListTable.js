"use client";
import React, { useEffect, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import styles from "../../../styles/project-list.module.css";
import { Box } from "@mui/material";
import Image from "next/image";
const defaultData = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const ProjectListTable = () => {
  const [data, _setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];
  const [selectedRows, setSelectedRows] = useState([]);
  console.log(selectedRows);

  const columnHelper = createColumnHelper();

  const columns = [
    // Checkbox Column
    columnHelper.display({
      id: "select",
      header: ({ table }) => {
        // const selectedRowsArray = table
        //   .getSelectedRowModel()
        //   .rows.map((row) => row.original);
        // setSelectedRows(selectedRowsArray);
        // console.log(table);
        // console.log(table.getState().rowSelection);
        // console.log(table.getSelectedRowModel().rows);
        return (
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
        );
      },
      cell: ({ row }) => {
        // console.log(row);
        // console.log(row.getIsSelected());
        return (
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={row.getIsSelected()}
              onChange={() => row.toggleSelected()}
              className={styles.checkboxContainer}
            />
          </div>
        );
      },
    }),
    // ID Column
    columnHelper.accessor("id", {
      header: "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("firstName", {
      cell: (info) => info.getValue(),
      // footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Last Name</span>,
      // footer: (info) => info.column.id,
    }),
    columnHelper.accessor("age", {
      header: () => "Age",
      cell: (info) => info.renderValue(),
      // footer: (info) => info.column.id,
    }),
    columnHelper.accessor("visits", {
      header: () => <span>Visits</span>,
      // footer: (info) => info.column.id,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      // footer: (info) => info.column.id,
    }),
    columnHelper.accessor("progress", {
      header: "Profile Progress",
      // footer: (info) => info.column.id,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  // Watch for changes in the row selection state
  useEffect(() => {
    const selectedRowsArray = table
      .getSelectedRowModel()
      .rows.map((row) => row.original);

    setSelectedRows(selectedRowsArray);
  }, [table.getState().rowSelection]);
  return (
    <Box className="p-2" style={{ overflowX: "auto" }}>
      {/* <Box className={styles.search}>
        
        <input className={styles.input} />
      </Box> */}
      <Box className={styles.search}>
        <select className={styles.input}>
          <option value="">All</option>
          <option value="status">Status</option>
          <option value="age">Age</option>
          <option value="progress">Progress</option>
        </select>
        <input className={styles.input} placeholder="Search..." />
      </Box>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
    </Box>
  );
};

export default ProjectListTable;
