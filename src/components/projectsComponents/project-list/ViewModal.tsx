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
const ViewModal = ({ isOpen , toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg" zIndex={1000}>
      <ModalHeader toggle={toggle}>View Details</ModalHeader>
      <ModalBody>
        {/* <StaticInputs
          labels={[
            "Driver Name",
            "Vehicle Id",
            "Transfer Quantity",
            "Created On",
            "Updated On",
            "Total COD",
          ]}
          values={[
            driverInfo?.driverName,
            vehicleInfo?.vehicleRegNo,
            tranferQuantity,
            moment(createdOn).format("DD-MM-YYYY") || "NA",
            moment(updatedOn).format("DD-MM-YYYY") || "NA",
            totalCodCash || "NA",
          ]}
        /> */}
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

export default ViewModal;
