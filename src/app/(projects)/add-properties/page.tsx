import AddPropertiesForm from "@/components/projectsComponents/add-properties/AddPropertiesForm";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const AddProperties = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3" fontSize={20} mb={2} fontWeight={600}>
          Add Properties
        </Typography>
        <AddPropertiesForm />
      </CardContent>
    </Card>
  )
}

export default AddProperties