import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Credits = () => {
  return (
    <Box marginTop="1rem !important" display="flex" alignItems="center">
      <Avatar src="nft-preview-card-component-main/images/image-avatar.png" />
      <Typography sx={{marginLeft:"1rem !important",color:"hsl(215, 51%, 70%)"}} variant="h4" >
        Creation of <span className="active-element">Jules Wyvern</span>
      </Typography>
    </Box>
  );
};
export default Credits;

