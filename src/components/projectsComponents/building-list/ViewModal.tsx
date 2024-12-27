import StaticInputs from "@/components/StaticInputs/StaticInputs";
import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
interface Details {
  buildingId: string;
  projectName: string;
  buildingName: string;
  totalFloor: number;
  launchDate: string;
  possessionDate: string;
}

interface ViewModalProps {
  isOpen: boolean;
  toggle: () => void;
  row: Details;
}
const ViewModal: React.FC<ViewModalProps> = ({ isOpen, toggle, row }) => {
  const {
    buildingId,
    projectName,
    buildingName,
    totalFloor,
    launchDate,
    possessionDate,
  } = row;
  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg" zIndex={1200}>
      <ModalHeader toggle={toggle}>View Details</ModalHeader>
      <ModalBody>
        <StaticInputs
          labels={[
            "Building ID",
            "Project Name",
            "Building Name",
            "Total Floor",
            "Launch Date",
            "Possession Date",
          ]}
          values={[
            buildingId,
            projectName,
            buildingName,
            totalFloor,
            launchDate,
            possessionDate,
          ]}
        />
      </ModalBody>
    </Modal>
  );
};

export default ViewModal;
