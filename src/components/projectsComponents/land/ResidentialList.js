import { assetPaths } from "@/paths/path";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { icons } from "@/app/lib/constants";
import styles from "../../../styles/land.module.css";
import ResidentialCardDetails from "./ResidentialCardDetails";

const cardData = [
  {
    id: 1,
    images: [
      assetPaths.landResidentials,
      assetPaths.landCommercial,
      assetPaths.landIndustrial,
      assetPaths.landResidentials,
      assetPaths.landCommercial,
    ],
    title: "Gulbery Tower",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "plot",
    rooms: 3,
    bathrooms: 2,
    area: "5x7",
  },
  {
    id: 2,
    images: [
      assetPaths.landCommercial,
      assetPaths.landResidentials,
      assetPaths.landIndustrial,
      assetPaths.landResidentials,
      assetPaths.landCommercial,
    ],
    title: "Saima Apartments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "plot",
  },
  {
    id: 3,
    images: [
      assetPaths.landIndustrial,
      assetPaths.landCommercial,
      assetPaths.landResidentials,
      assetPaths.landCommercial,
      assetPaths.landResidentials,
    ],
    title: "Industrial",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "villas",
  },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ResidentialList = ({ setShowDetails, setShowTypeOfLand }) => {
  const [value, setValue] = React.useState(0);
  const [viewDetails, setViewDetails] = React.useState(false);
  const [fullPlotDetails, setFullPlotDetails] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = () => {
    setShowDetails(true);
    // setShowTypeOfLand("residential");
  };
  const handleViewCardDetails = () => {
    setViewDetails(!viewDetails);
  };
  const filteredList = cardData
    .filter((card) => {
      if (value === 0) return true; // All list
      if (value === 1) return card.type === "plot"; // Plots list
      if (value === 2) return card.type === "villas"; // Villas list
      return false;
    })
    .map((card) => (
      <Card sx={{ maxWidth: 345, padding: "10px" }} key={card.id}>
        <CardActionArea>
          <CardMedia width={"100%"}>
            <Image
              src={card.images[0]}
              alt="green iguana"
              height={200}
              width={325}
              style={{ borderRadius: "5px" }}
            />
          </CardMedia>
          <CardContent>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={2}
            >
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Box>
                <IconButton>{icons.heart}</IconButton>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {card.description}
            </Typography>
            <Box
              sx={{
                borderTop: "1px solid lightgray",
                marginTop: "10px",
                paddingTop: "10px",
                textAlign: "center",
              }}
            >
              <Button
                variant="contained"
                className={styles.button}
                onClick={handleViewCardDetails}
              >
                View Details
              </Button>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    ));
  return (
    <>
      {!viewDetails && (
        <Card
          sx={{
            padding: "50px",
            minHeight: "85vh",
            overflow: "auto",
            marginBottom: "400px",
          }}
        >
          <Typography variant="h4" mb={4}>
            Residential
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#479ba4", // Change the indicator color
                  },
                  "& .MuiButtonBase-root": {
                    color: "black", // Default button text color
                    fontWeight: 600, // Set the font weight
                    fontSize: "14px", // Set the font size
                    textTransform: "none", // Optional: Prevent uppercase transformation
                  },
                  "& .MuiTab-root": {
                    color: "black", // Default tab text color
                    fontWeight: 500, // Set the font weight
                    fontSize: "14px", // Set the font size
                    textTransform: "none", // Optional: Prevent uppercase transformation
                  },
                  "& .Mui-selected": {
                    color: "#479ba4 !important", // Change the color of the selected tab text
                    fontWeight: 600,
                  },
                }}
              >
                <Tab label="All" {...a11yProps(0)} />
                <Tab label="Plots" {...a11yProps(1)} />
                <Tab label="Villas" {...a11yProps(2)} />
              </Tabs>
            </Box>
            {cardData.map((element, index) => (
              <CustomTabPanel key={index} value={value} index={index}>
                <Stack
                  direction={"row"}
                  flexWrap={"wrap"}
                  alignItems={"center"}
                  gap={2}
                  marginBottom={20}
                >
                  {filteredList}
                </Stack>
              </CustomTabPanel>
            ))}
          </Box>
        </Card>
      )}
      {viewDetails && <ResidentialCardDetails />}
    </>
  );
};

export default ResidentialList;
