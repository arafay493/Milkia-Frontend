"use client";
import React from "react";
import TanStackTable from "@/components/TanStackTable/TanStackTable";
import { createProjectListColumns } from "@/columns/projectListColumns";

const ProjectListTable = () => {
  // Define the functions to handle actions
  const handleView = (row) => {
    alert(`Viewing row: ${JSON.stringify(row)}`);
  };

  const handleEdit = (row) => {
    alert(`Editing row: ${JSON.stringify(row)}`);
  };

  const handleDelete = (row) => {
    alert(`Deleting row: ${JSON.stringify(row)}`);
  };

  // Generate columns with the functions
  const columns = createProjectListColumns({
    onView: handleView,
    onEdit: handleEdit,
    onDelete: handleDelete,
  });
  return <TanStackTable columns={columns} />;
};

export default ProjectListTable;
