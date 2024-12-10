import ProjectListTable from "@/components/projectsComponents/project-list/ProjectListTable";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const ProjectList = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3" fontSize={20} mb={2} fontWeight={600}>
          Project List
        </Typography>
        <ProjectListTable />
      </CardContent>
    </Card>
  );
};

export default ProjectList;
