"use client";
import { useFormik } from "formik";
import React from "react";
import styles from "../../../styles/add-project.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const AddFloorPlanFrom = () => {
  const formik = useFormik({
    initialValues: {
      projectName: "",
      location: "",
      startPrice: "",
      endPrice: "",
      totalProjectArea: "",
      projectType: "",
      possessionDate: "",
      launchDate: "",
      description: "",
      mapLink: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 6 }}>
            <label htmlFor="projectName" className={styles.label}>
              Project Name
            </label>
            <br />
            <input
              className={styles.input}
              id="projectName"
              name="projectName"
              type="text"
              placeholder="Project Name"
              onChange={formik.handleChange}
              value={formik.values.projectName}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <label htmlFor="location" className={styles.label}>
              Multi City/Location/SubLocation
            </label>
            <br />
            <input
              className={styles.input}
              id="location"
              name="location"
              type="text"
              placeholder="Location"
              onChange={formik.handleChange}
              value={formik.values.location}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <label htmlFor="startPrice" className={styles.label}>
              Start Price
            </label>
            <br />
            <input
              className={styles.input}
              id="startPrice"
              name="startPrice"
              type="text"
              placeholder="Start Price"
              onChange={formik.handleChange}
              value={formik.values.startPrice}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <label htmlFor="endPrice" className={styles.label}>
              End Price
            </label>
            <br />
            <input
              className={styles.input}
              id="endPrice"
              name="endPrice"
              type="text"
              placeholder="End Price"
              onChange={formik.handleChange}
              value={formik.values.endPrice}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <label htmlFor="totalProjectArea" className={styles.label}>
              Total Project Area
            </label>
            <br />
            <input
              className={styles.input}
              id="totalProjectArea"
              name="totalProjectArea"
              type="text"
              placeholder="Total Project Area"
              onChange={formik.handleChange}
              value={formik.values.totalProjectArea}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <label htmlFor="projectType" className={styles.label}>
              Project Type
            </label>
            <br />
            <input
              className={styles.input}
              id="projectType"
              name="projectType"
              type="text"
              placeholder="Project Type"
              onChange={formik.handleChange}
              value={formik.values.projectType}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <label htmlFor="possessionDate" className={styles.label}>
              Possession Date
            </label>
            <br />
            <input
              className={styles.input}
              id="possessionDate"
              name="possessionDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.possessionDate}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <label htmlFor="launchDate" className={styles.label}>
              Launch Date
            </label>
            <br />
            <input
              className={styles.input}
              id="launchDate"
              name="launchDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.launchDate}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <label htmlFor="description" className={styles.label}>
              Description
            </label>
            <br />
            <textarea
              className={styles.input}
              id="description"
              name="description"
              placeholder="Description"
              rows={5}
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <label htmlFor="mapLink" className={styles.label}>
              Map Link
            </label>
            <br />
            <input
              className={styles.input}
              id="mapLink"
              name="mapLink"
              type="url"
              placeholder="Map Link"
              onChange={formik.handleChange}
              value={formik.values.mapLink}
            />
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

export default AddFloorPlanFrom;
