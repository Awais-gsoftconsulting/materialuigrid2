import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img1 from "./img/news.png";
import img2 from "./img/p2.jpeg";
import img3 from "./img/p3.jpeg";
import img4 from "./img/1.png";
import img5 from "./img/2.jpeg";

const Home = () => {
  return (
    <Box style={{ paddingTop: "80px" }}>
      <Container>
        <Typography>WELCOME TO BBC</Typography>
        <Grid
          container
          item
          lg={12}
          md={12}
          xs={12}
          sm={12}
          gap={1}
          style={{
            backgroundColor: "blue",
            justifyContent: "center",
            height: "40vh",
          }}
        >
          <Grid
            item
            lg={5.9}
            md={5.8}
            xs={11.8}
            sm={5.7}
            style={{ backgroundColor: "red" }}
          ></Grid>
          <Grid
            container
            item
            lg={5.9}
            md={5.8}
            xs={11.8}
            sm={5.7}
            gap={1}
            p={1}
            sx={{ bgcolor: "pink", justifyContent: "center" }}
          >
            <Grid
              container
              item
              lg={5}
              md={5.8}
              sm={5.7}
              xs={11.9}
              sx={{ bgcolor: "green" }}
            ></Grid>
            <Grid
              item
              lg={5}
              md={5.8}
              sm={5.7}
              xs={11.9}
              sx={{ bgcolor: "orange" }}
            ></Grid>
            <Grid
              item
              lg={5}
              sm={5.7}
              md={5.8}
              xs={11.9}
              sx={{ bgcolor: "brown" }}
            ></Grid>
            <Grid
              item
              lg={5}
              sm={5.7}
              md={5.8}
              xs={11.9}
              sx={{ bgcolor: "grey" }}
            ></Grid>
          </Grid>
        </Grid>

        <Typography
          variant="h5"
          sx={{ position: "absolute", top: "440px", left: "40px" }}
        >
          News
        </Typography>

        <Grid
          container
          item
          gap={2}
          lg={12}
          md={12}
          xs={12}
          sm={12}
          px={5}
          sx={{ height: "90vh", marginTop: "50px" }}
        >
          <Grid
            container
            gap={2}
            p={1}
            item
            lg={7.8}
            md={7.8}
            sm={7.8}
            xs={11.7}
            sx={{ bgcolor: "skyblue" }}
          >
            <Grid lg={3.8} sm={5.7} xs={11.8} md={3.7} sx={{ bgcolor: "red" }}>
              NEWS5
            </Grid>
            <Grid lg={3.8} sm={5.7} xs={11.8} md={3.7} sx={{ bgcolor: "blue" }}>
              NEWS6
            </Grid>
            <Grid
              lg={3.8}
              sm={5.7}
              xs={11.8}
              md={3.7}
              sx={{ bgcolor: "orange" }}
            >
              NEWS7
            </Grid>
            <Grid
              lg={3.8}
              sm={5.7}
              xs={11.8}
              md={3.7}
              sx={{ bgcolor: "green" }}
            >
              NEWS8
            </Grid>
            <Grid
              lg={3.8}
              sm={5.7}
              xs={11.8}
              md={3.7}
              sx={{ bgcolor: "wheat" }}
            >
              NEWS9
            </Grid>
            <Grid
              lg={3.8}
              sm={5.7}
              xs={11.8}
              md={3.7}
              sx={{ bgcolor: "brown" }}
            >
              NEWS10
            </Grid>
          </Grid>
          <Grid
            item
            lg={3.8}
            sm={3.8}
            md={3.8}
            xs={11.8}
            sx={{ bgcolor: "lightblue" }}
          >
            advertisment
          </Grid>
        </Grid>

        <Grid
          lg={12}
          xs={12}
          md={12}
          sm={12}
          sx={{ height: "25vh", bgcolor: "grey", marginTop: "27px" }}
        >
          <Typography variant="h5">F00TER</Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
