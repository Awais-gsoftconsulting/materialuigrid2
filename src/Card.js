import { Box, Grid } from "@mui/material";
import React from "react";
import p1 from "./img/p1.jpeg";

const Card = () => {
  return (
    <Grid
      container
      lg={12}
      md={12}
      sm={12}
      xs={12}
      sx={{ bgcolor: "blue" }}
      gap={1}
    >
      <Grid item lg={5} xs={11} sx={{ bgcolor: "pink" }}>
        <Box style={{ width: "100%" }}>
          <img src={p1} xs={12} alt="error" style={{ width: "100%" }} />
        </Box>
      </Grid>
      <Grid item lg={5} xs={11} sx={{ bgcolor: "orange" }}>
        <Box style={{ width: "100%" }} align="center">
          <img
            src={p1}
            xs={12}
            alt="error"
            style={{ width: "400px", height: "400px" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Card;
