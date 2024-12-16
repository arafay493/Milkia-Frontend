import { createDealersListColumns } from "@/columns/dealersListColumns";
import TanStackTable from "@/components/TanStackTable/TanStackTable";
import { dealersListData } from "@/data/dealersListData";
import { useRouter } from "next/navigation";
import React from "react";

const AddDealerButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/add-new-dealer")}>Add Dealer</button>
  );
};

const DealersListTable = () => {
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
  const columns = createDealersListColumns({
    onView: handleView,
    onEdit: handleEdit,
    onDelete: handleDelete,
  });
  return (
    <TanStackTable
      columns={columns}
      TopButton={<AddDealerButton />}
      data={dealersListData}
    />
  );
};

export default DealersListTable;
