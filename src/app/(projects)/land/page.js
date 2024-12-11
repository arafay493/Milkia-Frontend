"use client";
import LandCard from "@/components/projectsComponents/land/Card";
import CommercialList from "@/components/projectsComponents/land/CommercialList";
import IndustrialList from "@/components/projectsComponents/land/IndustrialList";
import ResidentialList from "@/components/projectsComponents/land/ResidentialList";
import { assetPaths } from "@/paths/path";
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const Land = () => {
  const [showDetails, setShowDetails] = useState(true);
  const [showTypeOfLand, setShowTypeOfLand] = useState({
    residential: true,
    commercial: false,
    industrial: false,
  });
  const handleShowDetails = (type) => {
    setShowDetails(!showDetails);
    setShowTypeOfLand({ ...showTypeOfLand, [type]: !showTypeOfLand[type] });
  };
  return (
    <Stack
      height={"80vh"}
      direction={"column"}
      // alignContent={"center"}
      // justifyContent={"center"}
      gap={5}
    >
      {!showDetails && (
        <>
          <Typography variant="h3" textAlign={"center"} color="black">
            Land
          </Typography>

          <LandCard
            setShowDetails={setShowDetails}
            setShowTypeOfLand={setShowTypeOfLand}
            handleShowDetails={handleShowDetails}
          />
        </>
      )}
      {showTypeOfLand.residential && (
        <ResidentialList
          setShowDetails={setShowDetails}
          setShowTypeOfLand={setShowTypeOfLand}
        />
      )}
      {showTypeOfLand.commercial && (
        <CommercialList
          setShowDetails={setShowDetails}
          setShowTypeOfLand={setShowTypeOfLand}
        />
      )}
      {showTypeOfLand.industrial && (
        <IndustrialList
          setShowDetails={setShowDetails}
          setShowTypeOfLand={setShowTypeOfLand}
        />
      )}
    </Stack>
  );
};

export default Land;
