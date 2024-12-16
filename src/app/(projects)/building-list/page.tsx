"use client"
import BuildingListTable from "@/components/projectsComponents/building-list/BuildingListTable";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const AddBuilding = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3" fontSize={20} mb={2} fontWeight={600}>
          Building List
        </Typography>
        <BuildingListTable />
      </CardContent>
    </Card>
  )
}

export default AddBuilding