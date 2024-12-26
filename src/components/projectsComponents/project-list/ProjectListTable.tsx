"use client";
import React from "react";
import TanStackTable from "@/components/TanStackTable/TanStackTable";
import { createProjectListColumns } from "@/columns/projectListColumns";
import { useRouter } from "next/navigation";
import { projectListData } from "@/data/projectListData";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

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
  const [rowData, setRowData] = React.useState(null);
  console.log(rowData)
  // Define the functions to handle actions
  const handleView = (row) => {
    setViewModal(true);
    setRowData(row)
    // alert(`Viewing row: ${JSON.stringify(row)}`);
  };

  const handleEdit = (row) => {
    setEditModal(true);
    setRowData(row)
    // alert(`Editing row: ${JSON.stringify(row)}`);
  };

  const handleDelete = (row) => {
    setDeleteModal(true);
    setRowData(row)
    // alert(`Deleting row: ${JSON.stringify(row)}`);
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
      {rowData && <ViewModal isOpen={viewModal} toggle = {handleCloseModal} row = {rowData} />}
      {rowData && <EditModal isOpen={editModal} toggle = {handleCloseModal} row = {rowData} />}
      {rowData && <DeleteModal isOpen={deleteModal} toggle = {handleCloseModal} row = {rowData} />}
    </>
  );
};

export default ProjectListTable;
