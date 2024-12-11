"use client";
import React, { useEffect, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import styles from "../../../styles/project-list.module.css";
import { Box, Button, Divider, IconButton } from "@mui/material";
import Image from "next/image";
import { defaultData } from "./defaultData";
import { icons } from "@/app/lib/constants";

const ProjectListTable = () => {
  const [data, _setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];
  const [selectedRows, setSelectedRows] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 5, //default page size
  });
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
    columnHelper.display({
      id: "action",
      header: ({ table }) => {
        // const selectedRowsArray = table
        //   .getSelectedRowModel()
        //   .rows.map((row) => row.original);
        // setSelectedRows(selectedRowsArray);
        // console.log(table);
        // console.log(table.getState().rowSelection);
        // console.log(table.getSelectedRowModel().rows);
        return <div className={styles.checkboxContainer}>Actions</div>;
      },
      cell: ({ row }) => {
        // console.log(row);
        // console.log(row.getIsSelected());
        return (
          <div className={styles.actions}>
            <div>
              <IconButton
                variant="contained"
                onClick={() => alert("Edit")}
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
                onClick={() => alert("Edit")}
                size="small"
                style={{ color: "#479ba4" }}
              >
                {icons.edit}
              </IconButton>
            </div>
            <Divider orientation="vertical" flexItem />
            <div style={{ color: "#479ba4" }}>
              <IconButton
                variant="contained"
                onClick={() => alert("Edit")}
                size="small"
                style={{ color: "#479ba4" }}
              >
                {icons.delete}
              </IconButton>
            </div>
          </div>
        );
      },
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      //...
      pagination,
    },
    onPaginationChange: setPagination,
  });
  // console.log(table);
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
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className={styles.input}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <input className={styles.input} placeholder="Search..." />
      </Box>
      <table className={styles.table}>
        <thead style={{ backgroundColor: "#63c2c7" }}>
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
      <Box className={styles.pagination} style={{ marginTop: "10px" }}>
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectListTable;
