import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import  "./styles.css";
import Layout from "./Layout";
import NftCard from "./Components/Card";
const theme = createTheme({
  typography: {
    fontFamily: "Outfit",
    htmlFontSize: "18px",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout><NftCard/></Layout>
    </ThemeProvider>
  );
};
export default App;
