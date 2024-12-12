"use client";
import React from "react";
import TanStackTable from "@/components/TanStackTable/TanStackTable";
import { createProjectListColumns } from "@/columns/projectListColumns";
import { useRouter } from "next/navigation";
import { projectListData } from "@/data/projectListData";

const AddProjectButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/add-project")}>Add Project</button>
  );
};

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
  return (
    <TanStackTable
      columns={columns}
      TopButton={<AddProjectButton />}
      data={projectListData}
    />
  );
};

export default ProjectListTable;
