import AddFloorPlanFrom from "@/components/projectsComponents/add-floor-plan/AddFloorPlanFrom";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
const AddFloorPlan = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3" fontSize={20} mb={2} fontWeight={600}>
          Add Project
        </Typography>
        <AddFloorPlanFrom />
      </CardContent>
    </Card>
  );
};

export default AddFloorPlan;
