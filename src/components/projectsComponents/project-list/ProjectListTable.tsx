"use client";
import React from "react";
import TanStackTable from "@/components/TanStackTable/TanStackTable";
import { createProjectListColumns } from "@/columns/projectListColumns";
import { useRouter } from "next/navigation";
import { projectListData } from "@/data/projectListData";
import ViewModal from "./ViewModal";

const AddProjectButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/add-project")}>Add Project</button>
  );
};

const ProjectListTable = () => {
  const [viewModal, setViewModal] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  // Define the functions to handle actions
  const handleView = (row) => {
    setViewModal(true);
    alert(`Viewing row: ${JSON.stringify(row)}`);
  };

  const handleEdit = (row) => {
    setEditModal(true);
    alert(`Editing row: ${JSON.stringify(row)}`);
  };

  const handleDelete = (row) => {
    setDeleteModal(true);
    alert(`Deleting row: ${JSON.stringify(row)}`);
  };

  const handleCloseModal = () => {
    setViewModal(false)
    setEditModal(false)
    setDeleteModal(false)
  };

  // Generate columns with the functions
  const columns = createProjectListColumns({
    onView: handleView,
    onEdit: handleEdit,
    onDelete: handleDelete,
  });
  return (
    <>
      <TanStackTable
        columns={columns}
        TopButton={<AddProjectButton />}
        data={projectListData}
      />
      {viewModal && <ViewModal isOpen={viewModal} toggle = {handleCloseModal} />}
    </>
  );
};

export default ProjectListTable;
