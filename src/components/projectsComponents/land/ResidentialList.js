import { assetPaths } from "@/paths/path";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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
    title: "Residential",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "plot",
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
    title: "Commercial",
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = () => {
    setShowDetails(true);
    // setShowTypeOfLand("residential");
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
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {card.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    ));
  return (
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
          >
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Plots" {...a11yProps(1)} />
            <Tab label="Villas" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            // justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            // sx={{marginBottom: "70px"}}
            marginBottom={20}
          >
            {filteredList}
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            // justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            // sx={{marginBottom: "70px"}}
            marginBottom={20}
          >
            {filteredList}
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            // justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            // sx={{marginBottom: "70px"}}
            marginBottom={20}
          >
            {filteredList}
          </Stack>
        </CustomTabPanel>
      </Box>
      {/* <Stack
        direction={"row"}
        flexWrap={"wrap"}
        // justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        // sx={{marginBottom: "70px"}}
        marginBottom={20}
      >
        {filteredList}
      </Stack> */}
    </Card>
  );
};

export default ResidentialList;
