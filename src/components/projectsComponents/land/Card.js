import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Image from "next/image";
import { assetPaths } from "@/paths/path";
import { cardData } from "./cardData";
import { Stack } from "@mui/material";
const LandCard = () => {
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
    >
      {cardData.map((card, index) => (
        <Card sx={{ maxWidth: 345, padding: "10px" }} key={card.id}>
          <CardActionArea>
            <CardMedia width={"100%"}>
              <Image
                src={card.imageSource}
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
      ))}
    </Stack>
  );
};

export default LandCard;
