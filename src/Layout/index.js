import React from "react";
// import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme=>{
    return {
        container:{
            background:"hsl(217, 54%, 11%)",
            height:"100vh",
            display:"flex !important",
            alignItems:"center !important",
            justifyContent:"center !important",        
        },
    }
})
const Layout = (props) => {
    const classes = useStyles();
  return (
    <Container fluid maxWidth="xl" className={classes.container}>
      {props.children}
    </Container>
  );
};
export default Layout;
