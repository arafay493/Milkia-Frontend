import StaticInputs from "@/components/StaticInputs/StaticInputs";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
interface Details {
  projectId: number;
  projectName: string;
  location: string;
  city: string;
  properties: number;
}

interface EditModalProps {
  isOpen: boolean;
  toggle: () => void;
  row: Details;
}
const ViewModal: React.FC<EditModalProps> = ({ isOpen, toggle, row }) => {
  const { projectId, projectName, location, city, properties } = row;
  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg" zIndex={1200}>
      <ModalHeader toggle={toggle}>View Details</ModalHeader>
      <ModalBody>
        <StaticInputs
          labels={[
            "Project ID",
            "Project Name",
            "Location",
            "City",
            "Properties",
          ]}
          values={[
            projectId,
            projectName,
            location,
            city,
            properties,
          ]}
        />
      </ModalBody>
    </Modal>
  );
};

export default ViewModal;
