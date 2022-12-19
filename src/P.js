import { Grid, Typography } from "@mui/material";
import React from "react";
import p1 from "./img/p1.jpeg";
import p2 from "./img/p2.jpeg";
import p3 from "./img/p3.jpeg";

const P = () => {
  return (
    <Grid container>
      <Grid container item mt={2} sm={12} md={12} xm={12} lg={12}>
        <Grid item lg={4} sm={6} md={3} xm={12}>
          <img src={p1} alt="error" style={{ height: "120px" }} />
          <img src={p1} alt="error" style={{ height: "120px" }} />
          <img src={p1} alt="error" style={{ height: "120px" }} />
          <img src={p1} alt="error" style={{ height: "120px" }} />
          <img src={p1} alt="error" style={{ height: "120px" }} />
          <img src={p1} alt="error" style={{ height: "120px" }} />
          <img src={p1} alt="error" style={{ height: "120px" }} />
          <img src={p1} alt="error" style={{ height: "120px" }} />
          <img src={p1} alt="error" style={{ height: "120px" }} />
          <img src={p1} alt="error" style={{ height: "120px" }} />
          <img src={p1} alt="error" style={{ height: "120px" }} />
          <img src={p1} alt="error" style={{ height: "120px" }} />
          <img src={p1} alt="error" style={{ height: "120px" }} />
          <img src={p1} alt="error" style={{ height: "120px" }} />
          <img src={p1} alt="error" style={{ height: "120px" }} />
        </Grid>
        <Grid item lg={4} sm={6} md={3} xm={12}>
          <img src={p2} alt="error" style={{ height: "120px" }} />
          <Grid align="center">
            <img src={p2} alt="error" style={{ height: "120px" }} />
          </Grid>
          <Grid align="right">
            <img src={p2} alt="error" style={{ height: "120px" }} />
          </Grid>
        </Grid>
        <Grid item lg={4} sm={6} md={3} xm={12}>
          <Grid container item lg={12}>
            <Grid lg={4}>
              <img src={p3} alt="error" style={{ height: "120px" }} />
            </Grid>
            <Grid lg={4} align="center">
              <img src={p3} alt="error" style={{ height: "120px" }} />
            </Grid>
            <Grid lg={4} align="right">
              <img src={p3} alt="error" style={{ height: "120px" }} />
            </Grid>
          </Grid>
          <Grid>
            <Grid container item lg={12}>
              <Grid lg={4}>
                <img src={p3} alt="error" style={{ height: "120px" }} />
              </Grid>
              <Grid lg={4} align="center">
                <img src={p3} alt="error" style={{ height: "120px" }} />
              </Grid>
              <Grid lg={4} align="right">
                <img src={p3} alt="error" style={{ height: "120px" }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Grid container item lg={12}>
              <Grid lg={4}>
                <img src={p3} alt="error" style={{ height: "120px" }} />
              </Grid>
              <Grid lg={4} align="center">
                <img src={p3} alt="error" style={{ height: "120px" }} />
              </Grid>
              <Grid lg={4} align="right">
                <img src={p3} alt="error" style={{ height: "120px" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item mt={2} lg={12} sm={12} md={12} xm={12}>
        <Grid item lg={4} sm={6} md={3} xm={12}>
          <img src={p1} alt="error" style={{ height: "120px" }} />
        </Grid>
        <Grid align="center" item lg={4} sm={6} md={3} xm={12}>
          <img src={p2} alt="error" style={{ height: "120px" }} />
        </Grid>
        <Grid align="right" item lg={4} sm={6} md={3} xm={12}>
          <img src={p3} alt="error" style={{ height: "120px" }} />
        </Grid>
      </Grid>

      <Grid container item mt={2} sm={12} md={12} xm={12} lg={12}>
        <Grid item lg={4} sm={6} md={3} xm={12}>
          <Grid align="center">
            <img src={p1} alt="error" style={{ height: "120px" }} />
            <img src={p1} alt="error" style={{ height: "120px" }} />
            <img src={p1} alt="error" style={{ height: "120px" }} />
          </Grid>
        </Grid>
        <Grid item lg={4} sm={6} md={3} xm={12}>
          <Grid align="center">
            <img src={p2} alt="error" style={{ height: "120px" }} />
            <img src={p2} alt="error" style={{ height: "120px" }} />
            <img src={p2} alt="error" style={{ height: "120px" }} />
          </Grid>
        </Grid>
        <Grid item lg={4} sm={6} md={3} xm={12}>
          <Grid align="center">
            <img src={p3} alt="error" style={{ height: "120px" }} />
            <img src={p3} alt="error" style={{ height: "120px" }} />
            <img src={p3} alt="error" style={{ height: "120px" }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default P;
