import AddProjectForm from "@/components/projectsComponents/add-project/AddProjectForm";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const AddProject = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3" fontSize={20}>
          Add Project
        </Typography>
        <AddProjectForm />
      </CardContent>
    </Card>
  );
};

export default AddProject;
