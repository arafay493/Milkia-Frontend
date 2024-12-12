import { icons } from "@/app/lib/constants";
import { Box, Card, Typography } from "@mui/material";
import React from "react";

const ResidentialCardDetails = ({ cardDetails }) => {
  console.log(cardDetails);
  return (
    <Card sx={{ textAlign: "center", padding: "20px" }}>
      <Box mb={2}>
        <Typography variant="h3">{cardDetails?.title}</Typography>
      </Box>
      <Box>
        <Typography variant="body1">{cardDetails?.description}</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={6}
        fontSize={20}
        mt={5}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Typography fontSize={25}>{icons.bed}</Typography>{" "}
          {cardDetails?.rooms} beds
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Typography fontSize={25}>{icons.bathroom}</Typography>{" "}
          {cardDetails?.bathrooms} bathrooms
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Typography fontSize={20}>{icons.square}</Typography>{" "}
          <Typography fontSize={20}>
            {" "}
            {cardDetails?.area} m <sup>2</sup>
          </Typography>
        </Box>
      </Box>
      <Box></Box>
    </Card>
  );
};

export default ResidentialCardDetails;
