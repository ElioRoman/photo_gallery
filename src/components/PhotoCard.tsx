import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { IPhoto } from "../types";

const PhotoCard: React.FC<{ photo: IPhoto }> = ({ photo }) => {
  return (
    <div>
      <Card
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Zoom>
          <CardMedia
            component="img"
            height="140"
            image={photo.urls.small}
            alt={photo.alt_description}
          />
        </Zoom>
        <CardContent style={{ flexGrow: 1 }}>
          <Tooltip
            title={photo.description || "No description available"}
            arrow
          >
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
              }}
            >
              {photo.description || "No description available"}
            </Typography>
          </Tooltip>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoCard;
