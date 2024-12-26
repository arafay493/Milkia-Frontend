import StaticInputs from "@/components/StaticInputs/StaticInputs";
import React from "react";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
const DeleteModal = ({ isOpen, toggle, row }) => {
  const { projectId, projectName, location, city, properties } = row;
  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg" zIndex={1200}>
      <ModalHeader toggle={toggle}>Delete Details</ModalHeader>
      <ModalBody>
        <StaticInputs
          labels={[
            "Project ID",
            "Project Name",
            "Location",
            "City",
            "Properties",
          ]}
          values={[projectId, projectName, location, city, properties]}
        />
      </ModalBody>
    </Modal>
  );
};

export default DeleteModal;
