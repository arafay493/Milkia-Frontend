import StaticInputs from "@/components/StaticInputs/StaticInputs";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

interface Details {
  projectId: number;
  projectName: string;
  location: string;
  city: string;
  properties: number;
}

type DeleteModalProps = {
  isOpen: boolean;
  toggle: () => void;
  row: Details | null;
};

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, toggle, row }) => {
  const { projectId, projectName, location, city, properties } = row;
  const dispatch = useDispatch();

  const confirmDelete = async () => {
    // if (row) {
    // const res = await DeleteMasterItemType({ id: row.id });
    // if (res.succeeded === false) {
    //   toast.error(res.message);
    //   toggle();
    // } else {
    //   toast.success(res.message);
    //   // dispatch(fetchAllMasterItemTypes());
    //   toggle();
    // }
    // }
    toast.success("Successfully deleted")
    toggle()
  };
  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg" zIndex={1200}>
      <ModalHeader toggle={toggle}>Confirm Deletion</ModalHeader>
      {/* <ModalBody>
        Are you sure you want to delete the item "{details?.name}"?
      </ModalBody> */}
      <ModalBody>Are you sure you want to delete this item?</ModalBody>
      <ModalFooter>
        {/* <Button color="primary" onClick={toggle}>
          Cancel
        </Button> */}
        <Button color="danger" onClick={confirmDelete}>
          Yes, Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteModal;
