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

interface Details {
  buildingId: string;
  projectName: string;
  buildingName: string;
  totalFloor: number;
  launchDate: string;
  possessionDate: string;
}

interface EditModalProps {
  isOpen: boolean;
  toggle: () => void;
  row: Details;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, toggle, row }) => {
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
      <ModalHeader toggle={toggle}>Edit Details</ModalHeader>
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
        {/* {mappedData?.length > 0 && (
              <div className="table-responsive">
                <MaterialReactTable
                  columns={columns}
                  data={mappedData}
                  muiTableProps={{
                    sx: {
                      "& th": {
                        background: "#0A80BF",
                        color: "white",
                        whiteSpace: "nowrap",
                        padding: "10px",
                        minWidth: "230px",
                      },
                    },
                  }}
                />
              </div>
            )}
            {mappedData1?.length > 0 && (
              <>
                <h5 style={{ marginTop: "40px" }}>
                  Returning filled cylinder to warehouse
                </h5>
                <div className="table-responsive">
                  <MaterialReactTable
                    columns={columns1}
                    data={mappedData1}
                    muiTableProps={{
                      sx: {
                        "& th": {
                          background: "#0A80BF",
                          color: "white",
                          whiteSpace: "nowrap",
                          padding: "10px",
                          minWidth: "230px",
                        },
                      },
                    }}
                  />
                </div>
              </>
            )}
            {mappedData2?.length > 0 && (
              <>
                <h5 style={{ marginTop: "40px" }}>
                  Returning Empty cylinder to warehouse
                </h5>
                <div className="table-responsive">
                  <MaterialReactTable
                    columns={columns2}
                    data={mappedData2}
                    muiTableProps={{
                      sx: {
                        "& th": {
                          background: "#0A80BF",
                          color: "white",
                          whiteSpace: "nowrap",
                          padding: "10px",
                          minWidth: "230px",
                        },
                      },
                    }}
                  />
                </div>
              </>
            )}
            <Row className="mb-3">
              <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  color="primary"
                  style={{ marginTop: "20px" }}
                  onClick={handleFinish}
                >
                  Finish
                </Button>
              </Col>
            </Row> */}
      </ModalBody>
    </Modal>
  );
};

export default EditModal;
