import StaticInputs from "@/components/StaticInputs/StaticInputs";
import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
interface Details {
  buildingName: string;
  projectName: string;
  unitNo: string;
  floor: number;
  price: number;
  size: string;
  plan: string;
}

interface ViewModalProps {
  isOpen: boolean;
  toggle: () => void;
  row: Details;
}
const ViewModal: React.FC<ViewModalProps> = ({ isOpen, toggle, row }) => {
  const {
    buildingName,
    projectName,
    unitNo,
    floor,
    price,
    size,
    plan,
  } = row;
  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg" zIndex={1200}>
      <ModalHeader toggle={toggle}>View Details</ModalHeader>
      <ModalBody>
        <StaticInputs
          labels={[
            "Building Name",
            "Project Name",
            "Unit No",
            "Floor",
            "Price",
            "Size",
            "Plan",
          ]}
          values={[
            buildingName,
            projectName,
            unitNo,
            floor,
            price,
            size,
            plan,
          ]}
        />
      </ModalBody>
    </Modal>
  );
};

export default ViewModal;
