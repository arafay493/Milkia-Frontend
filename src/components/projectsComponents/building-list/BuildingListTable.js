import { createBuildingListColumns } from "@/columns/buildingListColumns";
import TanStackTable from "@/components/TanStackTable/TanStackTable";
import { buildingListData } from "@/data/buildingListData";
import { useRouter } from "next/navigation";
import React from "react";

const AddBuildingButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/add-building")}>Add Building</button>
  );
};

const BuildingListTable = () => {
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
  const columns = createBuildingListColumns({
    onView: handleView,
    onEdit: handleEdit,
    onDelete: handleDelete,
  });
  return (
    <TanStackTable
      columns={columns}
      TopButton={<AddBuildingButton />}
      data={buildingListData}
    />
  );
};

export default BuildingListTable;
