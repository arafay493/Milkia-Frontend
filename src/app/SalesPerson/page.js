"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMaterialReactTable, MaterialReactTable } from "material-react-table";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";
import dayjs from "dayjs";
import { MDBBtn, MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import { styled, useTheme } from "@mui/system";
import styles from "@/styles/builder.module.css";
import { CreateBuilderForm, getbuilderList } from "@/redux/action/builder-action.js/builder-action";
import toast from "react-hot-toast";


const customStyles = {
    content: {
        width: "50rem",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        zindex: "999"
    },
};

export default function SalesPerson() {

    const { builderlist } = useSelector(({ builderStates }) => builderStates);

    const theme = useTheme();

    const dispatch = useDispatch();
    const router = useRouter();

    const resHandler = (data) => {
        console.log("Builder resHandler", data);
    }

    useEffect(() => {
        dispatch(getbuilderList(resHandler));
    }, [])

    console.log("builderlist DATA: ", builderlist?.builders);


    const [CreateNewBuilderModalIsOpen, setCreateNewBuilderModalIsOpen] = useState(false);

    const [formStates, setFormStates] = useState({
        isLoading: false,
        name: "",
        profilePic: "http://example.com/profile.jpg",
        cnic: "",
        officeOrAgencyName: "",
        cityOrLocation: "",
        ExperienceLevel: "",
        LicenceOrRegistrationNumber: "",
        ReferalCode: "",
        phone: "",
        email: "",
        password: ""
    });

    const columns = useMemo(
        () => [
            { accessorKey: "id", header: "ID", size: 100, Cell: ({ row }) => (<p>BU-{row.original.id.slice(-4)}</p>), },
            { accessorKey: "name", header: "Name", size: 100 },
            { accessorKey: "email", header: "Email", size: 100 },
            { accessorKey: "phone", header: "Phone", size: 100 },
            { accessorKey: "cnic", header: "CNIC", size: 100 },
            { accessorKey: "ExperienceLevel", header: "Experience Level", size: 100 },
            { accessorKey: "LicenceOrRegistrationNumber", header: "Lic / Reg Number", size: 100 },
        ],
        []
    );

    const data = useMemo(() => builderlist?.builders ?? [], [builderlist?.builders]);

    const table = useMaterialReactTable({
        columns,
        data,
        initialState: { pagination: { pageSize: 10 } },
        enableFilters: true,
        columnFilterDisplayMode: "popover",
        positionToolbarAlertBanner: "bottom",
        renderTopToolbarCustomActions: ({ table }) => (
            <Box sx={{ display: "flex", gap: "16px", padding: "8px", flexWrap: "wrap" }}>
                <Button onClick={() => BuilderopenModal("create")} startIcon={<AddIcon />} style={{ color: theme.colors._63C2C7 }}>
                    Create Builder
                </Button>
            </Box>
        ),
        muiTableHeadCellProps: {
            sx: {
                backgroundColor: theme.colors._63C2C7, // Set your desired background color here
                color: 'white', // Optional: Set text color for better contrast
            },
        },
    });

    function BuildercloseModal() {
        setCreateNewBuilderModalIsOpen(false);
        setFormStates({
            ...formStates,
            name: "",
            profilePic: "",
            cnic: "",
            officeOrAgencyName: "",
            cityOrLocation: "",
            ExperienceLevel: "",
            LicenceOrRegistrationNumber: "",
            ReferalCode: "",
            phone: "",
            email: "",
            password: ""
        });
    }

    function BuilderopenModal(row, Type) {
        setCreateNewBuilderModalIsOpen(true);
    }


    const submitFormresHandler = (data) => {
        if (data) {
            dispatch(getbuilderList(resHandler));
            // console.log("submitFormresHandler message", data);
            toast.success(data?.data?.message)
            setFormStates({ ...formStates, isLoading: false });
            setCreateNewBuilderModalIsOpen(false);
            setFormStates({
                ...formStates,
                name: "",
                profilePic: "",
                cnic: "",
                officeOrAgencyName: "",
                cityOrLocation: "",
                ExperienceLevel: "",
                LicenceOrRegistrationNumber: "",
                ReferalCode: "",
                phone: "",
                email: "",
                password: ""
            });
        }
    }

    const submitForm = () => {
        // Check if all fields are filled
        // const allFieldsFilled = Object.values(formStates).every(field => field.trim() !== "");

        // if (!allFieldsFilled) {
        //     alert("Please fill in all fields.");
        //     return; // Prevent submission if any field is empty
        // }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        if (!emailPattern.test(formStates.email)) {
            alert("Please enter a valid email address.");
            return; // Prevent submission if email format is invalid
        }

        console.log("Form submitted with data: ", formStates);
        // Here you can add logic to handle form submission, e.g., API call

        setFormStates({ ...formStates, isLoading: true });

        let FormData = {
            name: formStates.name,
            profilePic: formStates.profilePic,
            cnic: formStates.cnic,
            officeOrAgencyName: formStates.officeOrAgencyName,
            cityOrLocation: formStates.cityOrLocation,
            ExperienceLevel: formStates.ExperienceLevel,
            LicenceOrRegistrationNumber: formStates.LicenceOrRegistrationNumber,
            ReferalCode: formStates.ReferalCode,
            phone: formStates.phone,
            email: formStates.email,
            password: formStates.password
        }

        dispatch(CreateBuilderForm(FormData, submitFormresHandler));
    }


    return (
        <>
            <Modal
                isOpen={CreateNewBuilderModalIsOpen}
                onRequestClose={() => setCreateNewBuilderModalIsOpen(false)}
                style={customStyles}
                contentLabel="Log Modal"
            >
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "2rem",
                    }}
                >
                    <h2 style={{ margin: "0", color: "#63C2C7" }}>
                        Create New Builder
                    </h2>
                    <div style={{ cursor: "pointer", color: "red" }} onClick={BuildercloseModal}>
                        <ImCross />
                    </div>
                </div>
                <div className="main_modal_body_div">
                    <MDBRow>
                        <MDBCol>
                            <MDBInput
                                className="p-3"
                                label="Name"
                                type="text"
                                value={formStates.name} // Set value from state
                                onChange={(e) => setFormStates({ ...formStates, name: e.target.value })} // Update state on change
                            />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput
                                className="p-3"
                                label="CNIC"
                                type="number"
                                value={formStates.cnic} // Set value from state
                                onChange={(e) => setFormStates({ ...formStates, cnic: e.target.value })} // Update state on change
                            />
                        </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        <MDBCol>
                            <MDBInput
                                className="p-3"
                                label="Email"
                                type="text"
                                value={formStates.email} // Set value from state
                                onChange={(e) => setFormStates({ ...formStates, email: e.target.value })} // Update state on change
                            />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput
                                className="p-3"
                                label="Password"
                                type="text"
                                value={formStates.password} // Set value from state
                                onChange={(e) => setFormStates({ ...formStates, password: e.target.value })} // Update state on change
                            />
                        </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        <MDBCol>
                            <MDBInput
                                className="p-3"
                                label="Office Or Agency Name"
                                type="text"
                                value={formStates.officeOrAgencyName} // Set value from state
                                onChange={(e) => setFormStates({ ...formStates, officeOrAgencyName: e.target.value })} // Update state on change
                            />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput
                                className="p-3"
                                label="City Or Location"
                                type="text"
                                value={formStates.cityOrLocation} // Set value from state
                                onChange={(e) => setFormStates({ ...formStates, cityOrLocation: e.target.value })} // Update state on change
                            />
                        </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        <MDBCol>
                            <MDBInput
                                className="p-3"
                                label="Experience Level"
                                type="number"
                                value={formStates.ExperienceLevel} // Set value from state
                                onChange={(e) => setFormStates({ ...formStates, ExperienceLevel: e.target.value })} // Update state on change
                            />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput
                                className="p-3"
                                label="Licence Or Registration Number"
                                type="number"
                                value={formStates.LicenceOrRegistrationNumber} // Set value from state
                                onChange={(e) => setFormStates({ ...formStates, LicenceOrRegistrationNumber: e.target.value })} // Update state on change
                            />
                        </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        <MDBCol>
                            <MDBInput
                                className="p-3"
                                label="Referal Code"
                                type="text"
                                value={formStates.ReferalCode} // Set value from state
                                onChange={(e) => setFormStates({ ...formStates, ReferalCode: e.target.value })} // Update state on change
                            />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput
                                className="p-3"
                                label="Phone"
                                type="number"
                                value={formStates.phone} // Set value from state
                                onChange={(e) => setFormStates({ ...formStates, phone: e.target.value })} // Update state on change
                            />
                        </MDBCol>
                    </MDBRow>
                    <br />

                    <MDBBtn block style={{ marginTop: 10 }} onClick={submitForm} style={{ background: "#63C2C7" }}>
                        Submit
                    </MDBBtn>
                </div>
            </Modal>

            <div className={styles.main_builder_div}>
                {/* style={{ color: theme.colors._63C2C7 }} */}
                <h1> Builder List </h1>
                <div style={{ marginTop: 20 }}>
                    <MaterialReactTable table={table} />
                </div>
            </div>
        </>
    );
}
