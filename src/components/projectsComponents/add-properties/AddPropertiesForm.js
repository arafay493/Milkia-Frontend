"use client";
import { useFormik } from "formik";
import React from "react";
import styles from "../../../styles/add-project.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

// const AddPropertiesForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       project: "",
//       subProject: "",
//       city: "",
//       location: "",
//       subLocation: "",
//       zipCode: "",
//       propertyTitle: "",
//       propertyAddress: "",
//       projectType: "",
//       unitNo: "",
//       address: "",
//       type: "",
//       sale: "",
//       state: "",
//       property: "",
//       finishedState: "",
//       source: "",
//       builderId: "",
//       propertyPrice: "",
//       remarks: "",
//       featureImages: [],
//     },
//     onSubmit: (values) => {
//       // alert(JSON.stringify(values, null, 2));
//       console.log(values);
//     },
//   });
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <form onSubmit={formik.handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid size={{ xs: 6 }}>
//             <label htmlFor="project" className={styles.label}>
//               Select Project
//             </label>
//             <br />
//             <select
//               className={styles.input}
//               id="project"
//               name="project"
//               type="text"
//               placeholder="Select Project"
//               onChange={formik.handleChange}
//               value={formik.values.projectName}
//             >
//               {/* Example options */}
//               <option value="project1">Project 1</option>
//               <option value="project2">Project 2</option>
//             </select>
//           </Grid>
//           <Grid size={{ xs: 6 }}>
//             <label htmlFor="subProject" className={styles.label}>
//               Sub Project / Building
//             </label>
//             <br />
//             <select
//               className={styles.input}
//               id="subProject"
//               name="subProject"
//               type="text"
//               placeholder="Select Sub Project"
//               onChange={formik.handleChange}
//               value={formik.values.projectName}
//             >
//               {/* Example options */}
//               <option value="subproject1">Sub Project 1</option>
//               <option value="subproject2">Sub Project 2</option>
//             </select>
//           </Grid>
//           <Grid
//             size={{ xs: 12 }}
//             spacing={2}
//             textAlign={"center"}
//             display={"flex"}
//             gap={3}
//             justifyContent={"center"}
//             alignItems={"center"}
//           >
//             <button type="submit" className={styles.button}>
//               Submit
//             </button>
//             <button
//               type="button"
//               className={styles.resetButton}
//               onClick={formik.handleReset}
//             >
//               Reset
//             </button>
//           </Grid>
//         </Grid>
//       </form>
//     </Box>
//   );
// };

const AddPropertiesForm = () => {
  const formik = useFormik({
    initialValues: {
      project: "",
      subProject: "",
      city: "",
      location: "",
      subLocation: "",
      zipCode: "",
      propertyTitle: "",
      propertyAddress: "",
      projectType: "",
      unitNo: "",
      address: "",
      type: "",
      sale: "",
      state: "",
      property: "",
      finishedState: "",
      source: "",
      builderId: "",
      propertyPrice: "",
      remarks: "",
      featureImages: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 6 }}>
            <label htmlFor="project" className={styles.label}>
              Select Project
            </label>
            <br />
            <select
              className={styles.input}
              id="project"
              name="project"
              onChange={formik.handleChange}
              value={formik.values.project}
            >
              <option value="">Select Project</option>
              <option value="project1">Project 1</option>
              <option value="project2">Project 2</option>
            </select>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="subProject" className={styles.label}>
              Sub Project / Building
            </label>
            <br />
            <select
              className={styles.input}
              id="subProject"
              name="subProject"
              onChange={formik.handleChange}
              value={formik.values.subProject}
            >
              <option value="">Select Sub Project</option>
              <option value="subproject1">Sub Project 1</option>
              <option value="subproject2">Sub Project 2</option>
            </select>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="city" className={styles.label}>
              City
            </label>
            <br />
            <select
              className={styles.input}
              id="city"
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
            >
              <option value="">Select City</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
            </select>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="location" className={styles.label}>
              Location
            </label>
            <br />
            <select
              className={styles.input}
              id="location"
              name="location"
              onChange={formik.handleChange}
              value={formik.values.location}
            >
              <option value="">Select Location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="subLocation" className={styles.label}>
              Sub Location
            </label>
            <br />
            <select
              className={styles.input}
              id="subLocation"
              name="subLocation"
              onChange={formik.handleChange}
              value={formik.values.subLocation}
            >
              <option value="">Select Sub Location</option>
              <option value="sublocation1">Sub Location 1</option>
              <option value="sublocation2">Sub Location 2</option>
            </select>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="zipCode" className={styles.label}>
              Zip Code
            </label>
            <br />
            <select
              className={styles.input}
              id="zipCode"
              name="zipCode"
              onChange={formik.handleChange}
              value={formik.values.zipCode}
            >
              <option value="">Select Zip Code</option>
              <option value="zipcode1">Zip Code 1</option>
              <option value="zipcode2">Zip Code 2</option>
            </select>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="projectType" className={styles.label}>
              Project Type
            </label>
            <br />
            <select
              className={styles.input}
              id="projectType"
              name="projectType"
              onChange={formik.handleChange}
              value={formik.values.projectType}
            >
              <option value="">Select Project Type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="type" className={styles.label}>
              Type
            </label>
            <br />
            <select
              className={styles.input}
              id="type"
              name="type"
              onChange={formik.handleChange}
              value={formik.values.type}
            >
              <option value="">Select Type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="sale" className={styles.label}>
              Sale
            </label>
            <br />
            <select
              className={styles.input}
              id="sale"
              name="sale"
              onChange={formik.handleChange}
              value={formik.values.sale}
            >
              <option value="">Select Sale</option>
              <option value="sale1">Sale 1</option>
              <option value="sale2">Sale 2</option>
            </select>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="state" className={styles.label}>
              State
            </label>
            <br />
            <select
              className={styles.input}
              id="state"
              name="state"
              onChange={formik.handleChange}
              value={formik.values.state}
            >
              <option value="">Select State</option>
              <option value="state1">State 1</option>
              <option value="state2">State 2</option>
            </select>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="property" className={styles.label}>
              Property
            </label>
            <br />
            <select
              className={styles.input}
              id="property"
              name="property"
              onChange={formik.handleChange}
              value={formik.values.property}
            >
              <option value="">Select Property</option>
              <option value="property1">Property 1</option>
              <option value="property2">Property 2</option>
            </select>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="finishedState" className={styles.label}>
              Finished State
            </label>
            <br />
            <select
              className={styles.input}
              id="finishedState"
              name="finishedState"
              onChange={formik.handleChange}
              value={formik.values.finishedState}
            >
              <option value="">Select Finished State</option>
              <option value="state1">State 1</option>
              <option value="state2">State 2</option>
            </select>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="source" className={styles.label}>
              Source
            </label>
            <br />
            <select
              className={styles.input}
              id="source"
              name="source"
              onChange={formik.handleChange}
              value={formik.values.source}
            >
              <option value="">Select Source</option>
              <option value="source1">Source 1</option>
              <option value="source2">Source 2</option>
            </select>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="builderId" className={styles.label}>
              Builder ID
            </label>
            <br />
            <select
              className={styles.input}
              id="builderId"
              name="builderId"
              onChange={formik.handleChange}
              value={formik.values.builderId}
            >
              <option value="">Select Builder ID</option>
              <option value="builder1">Builder 1</option>
              <option value="builder2">Builder 2</option>
            </select>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="propertyTitle" className={styles.label}>
              Property Title
            </label>
            <br />
            <input
              className={styles.input}
              id="propertyTitle"
              name="propertyTitle"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.propertyTitle}
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="propertyPrice" className={styles.label}>
              Property Price
            </label>
            <br />
            <input
              className={styles.input}
              id="propertyPrice"
              name="propertyPrice"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.propertyPrice}
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="unitNo" className={styles.label}>
              Unit No
            </label>
            <br />
            <input
              className={styles.input}
              id="unitNo"
              name="unitNo"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.unitNo}
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <label htmlFor="address" className={styles.label}>
              Address
            </label>
            <br />
            <input
              className={styles.input}
              id="address"
              name="address"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <label htmlFor="type" className={styles.label}>
              Select Type
            </label>
            <br />
            <select
              className={styles.input}
              id="type"
              name="type"
              onChange={formik.handleChange}
              value={formik.values.type}
            >
              <option value="">Select Type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <label htmlFor="sale" className={styles.label}>
              Sale
            </label>
            <br />
            <select
              className={styles.input}
              id="sale"
              name="sale"
              onChange={formik.handleChange}
              value={formik.values.sale}
            >
              <option value="">Sale</option>
              <option value="sale">Sale</option>
              <option value="purchase">Purchase</option>
            </select>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <label htmlFor="state" className={styles.label}>
              State
            </label>
            <br />
            <select
              className={styles.input}
              id="state"
              name="state"
              onChange={formik.handleChange}
              value={formik.values.state}
            >
              <option value="">Upcoming</option>
              <option value="upcomming">Upcoming</option>
              <option value="completed">Completed</option>
            </select>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <label htmlFor="property" className={styles.label}>
              State
            </label>
            <br />
            <select
              className={styles.input}
              id="property"
              name="property"
              onChange={formik.handleChange}
              value={formik.values.property}
            >
              <option value="">Villas</option>
              <option value="type1">Property1</option>
              <option value="type2">Property2</option>
            </select>
          </Grid>
          <Grid
            size={{ xs: 12 }}
            spacing={2}
            textAlign={"center"}
            display={"flex"}
            gap={3}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <button type="submit" className={styles.button}>
              Submit
            </button>
            <button
              type="button"
              className={styles.resetButton}
              onClick={formik.handleReset}
            >
              Reset
            </button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddPropertiesForm;
