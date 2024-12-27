import { createBuildingListColumns } from "@/columns/buildingListColumns";
import TanStackTable from "@/components/TanStackTable/TanStackTable";
import { buildingListData } from "@/data/buildingListData";
import { useRouter } from "next/navigation";
import React from "react";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const AddBuildingButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/add-building")}>Add Building</button>
  );
};

const BuildingListTable = () => {
  const [viewModal, setViewModal] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [rowData, setRowData] = React.useState(null);
  // Define the functions to handle actions
  const handleView = (row) => {
    setViewModal(true);
    setRowData(row);
    // alert(`Viewing row: ${JSON.stringify(row)}`);
  };

  const handleEdit = (row) => {
    setEditModal(true);
    setRowData(row);
    // alert(`Editing row: ${JSON.stringify(row)}`);
  };

  const handleDelete = (row) => {
    setDeleteModal(true);
    setRowData(row);
    // alert(`Deleting row: ${JSON.stringify(row)}`);
  };

  const handleCloseModal = () => {
    setViewModal(false);
    setEditModal(false);
    setDeleteModal(false);
  };

  // Generate columns with the functions
  const columns = createBuildingListColumns({
    onView: handleView,
    onEdit: handleEdit,
    onDelete: handleDelete,
  });
  return (
    <>
      <TanStackTable
        columns={columns}
        TopButton={<AddBuildingButton />}
        data={buildingListData}
      />
      {rowData && <ViewModal isOpen={viewModal} toggle = {handleCloseModal} row = {rowData} />}
      {rowData && <EditModal isOpen={editModal} toggle = {handleCloseModal} row = {rowData} />}
      {rowData && <DeleteModal isOpen={deleteModal} toggle = {handleCloseModal} row = {rowData} />}
    </>
  );
};

export default BuildingListTable;
