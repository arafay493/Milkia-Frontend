import LandCard from "@/components/projectsComponents/land/Card";
import { Stack, Typography } from "@mui/material";
import React from "react";

const Land = () => {
  return (
    <Stack height={"80vh"} direction={"column"} alignContent={"center"} justifyContent={"center"} gap={5}>
      <Typography variant="h3" textAlign={"center"}>Land</Typography>
      <LandCard />
    </Stack>
  );
};

export default Land;
