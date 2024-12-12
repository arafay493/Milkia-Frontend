"use client"
import FloorPlanListTable from "@/components/projectsComponents/floor-plan/FloorPlanListTable";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const FloorPlan = () => {
  return (
    <Card>
      <CardContent style={{overflowX: 'auto'}}>
        <Typography variant="h3" fontSize={20} mb={2} fontWeight={600}>
          Floor Plan
        </Typography>
        <FloorPlanListTable />
      </CardContent>
    </Card>
  )
}

export default FloorPlan