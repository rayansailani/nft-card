import { Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Credits from "./Credits";
import Details from "./Details";

const useStyles = makeStyles((theme) => {
  return {
    imageStyles:{
      height:"260px",
      width:"280px",
      borderRadius:"0.2rem"
    }
  };
});

const NftCard = () => {
  const classes = useStyles();
  return (
    <Card >
      <CardMedia>
        <img
          src="./nft-preview-card-component-main/images/image-equilibrium.jpg"
          alt=""
          className={classes.imageStyles}
        />
      </CardMedia>
      <CardContent>
        <Typography variant="h3"  sx={{ margin:"0.6rem 0 0.3rem 0 !important"}} className="active-element"> Equilibrium #3429</Typography>
        <Typography variant="h4" sx={{ color:"hsl(215, 51%, 70%)", margin:"0.6rem 0 0.6rem 0 !important"}}>
          Our Equilibrium collection promotes balance and
          calm. 
        </Typography>
        <Details />
        <Divider sx={{background:"hsl(215, 32%, 27%)", height:"1px"}}/>
        <Credits />
      </CardContent>
    </Card>
  );
};
export default NftCard;
// /Users/rayan/Documents/Personal Projects/Frontend Mentor Challenges/nft-card/public/nft-preview-card-component-main/images/image-equilibrium.jpg
