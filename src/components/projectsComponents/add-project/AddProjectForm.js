"use client";
import { useFormik } from "formik";
import React from "react";
import styles from "../../../styles/add-project.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const AddProjectForm = () => {
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
              placeholder="Project name"
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
            <button className={styles.resetButton}>Reset</button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddProjectForm;
