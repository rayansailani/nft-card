import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Details = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" width="80px" justifyContent="space-between" alignItems="center" margin="1rem 0 1rem 0 !important" marginBottom="1rem">
        <img
          src="nft-preview-card-component-main/images/icon-ethereum.svg"
          alt="" 
        />
        <Typography variant="h5" sx={{color:"hsl(178, 100%, 50%)"}}>0.041 ETH</Typography>
      </Box>
      <Box display="flex" width="80px" justifyContent="space-between" alignItems="center" margin="1rem 0 1rem 0 !important">
        <img
          src="nft-preview-card-component-main/images/icon-clock.svg"
          alt=""
        />
        <Typography sx={{display:"inline", color:"hsl(215, 51%, 70%)"}} variant="h5">3 days left</Typography>
      </Box>
    </Box>
  );
};
export default Details;
