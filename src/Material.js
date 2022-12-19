import React from "react";
import { Box, Grid } from "@mui/material";

import { Icon } from "@mui/material";
import p1 from "./img/p1.png";
import p2 from "./img/p2.png";
import p3 from "./img/p3.png";
import p4 from "./img/p4.png";

import Typography from "@mui/material/Typography";
const Material = () => {
  return (
    <>
      <Box mb={10} xs={12}>
        <Typography variant="h5" fontWeight={700} mb={3}>
          FACTORY GIRL Berlin
        </Typography>

        <Grid container mb={3} gap={2} item xs={12} sm={12} md={12} lg={12}>
          <Grid
            container
            item
            xs={12}
            sm={5.6}
            md={3.5}
            lg={3.7}
            p={3}
            style={{ border: " 1px solid #E0E0E0", borderRadius: "8px" }}
          >
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p1} alt="p1" />
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <Typography style={{ position: "relative", bottom: "2px" }}>
                  Posts
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p4} alt="p4" />
              </Grid>
            </Grid>

            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <Typography>Total Post</Typography>
                <Typography style={{ position: "relative", left: "14px" }}>
                  400
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Typography>Pening</Typography>
                <Typography style={{ position: "relative", left: "15px" }}>
                  28
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sm={5.6}
            md={3.5}
            lg={3.7}
            p={3}
            style={{ border: " 1px solid #E0E0E0", borderRadius: "8px" }}
          >
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p2} alt="p2" />
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <Typography style={{ position: "relative", bottom: "2px" }}>
                  Reviews
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p4} alt="p4" />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <Typography>Total Reviews</Typography>
                <Typography style={{ position: "relative", left: "30px" }}>
                  240
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Typography>Ratings</Typography>
                <Typography style={{ position: "relative", left: "7px" }}>
                  4.86
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sm={5.6}
            md={3.5}
            lg={3.7}
            p={3}
            style={{ border: " 1px solid #E0E0E0", borderRadius: "8px" }}
          >
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p3} alt="p1" />
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <Typography style={{ position: "relative", bottom: "2px" }}>
                  Tasks
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p4} alt="p4" />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <Typography>Total Tasks</Typography>
                <Typography style={{ position: "relative", left: "30px" }}>
                  45
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Typography>Open</Typography>
                <Typography style={{ position: "relative", left: "15px" }}>
                  6
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant="h5" mb={3} fontWeight={700}>
          FACTORY GIRL Amsterdam
        </Typography>

        <Grid container mb={3} gap={2} item xs={12} sm={12} md={12} lg={12}>
          <Grid
            container
            item
            xs={12}
            sm={5.6}
            md={3.5}
            lg={3.7}
            p={3}
            style={{ border: " 1px solid #E0E0E0", borderRadius: "8px" }}
          >
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p1} alt="p1" />
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <Typography style={{ position: "relative", bottom: "2px" }}>
                  Posts
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p4} alt="p4" />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <Typography>Total Post</Typography>
                <Typography style={{ position: "relative", left: "14px" }}>
                  400
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Typography>Pening</Typography>
                <Typography style={{ position: "relative", left: "15px" }}>
                  28
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sm={5.6}
            md={3.5}
            lg={3.7}
            p={3}
            style={{ border: " 1px solid #E0E0E0", borderRadius: "8px" }}
          >
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p2} alt="p2" />
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <Typography style={{ position: "relative", bottom: "2px" }}>
                  Reviews
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p4} alt="p4" />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <Typography>Total Reviews</Typography>
                <Typography style={{ position: "relative", left: "30px" }}>
                  240
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Typography>Ratings</Typography>
                <Typography style={{ position: "relative", left: "7px" }}>
                  4.86
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sm={5.6}
            md={3.5}
            lg={3.7}
            p={3}
            style={{ border: " 1px solid #E0E0E0", borderRadius: "8px" }}
          >
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p3} alt="p1" />
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <Typography style={{ position: "relative", bottom: "2px" }}>
                  Tasks
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p4} alt="p4" />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <Typography>Total Tasks</Typography>
                <Typography style={{ position: "relative", left: "30px" }}>
                  45
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Typography>Open</Typography>
                <Typography style={{ position: "relative", left: "15px" }}>
                  6
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant="h5" mb={3} fontWeight={700}>
          FACTORY GIRL Norway
        </Typography>

        <Grid container mb={3} gap={2} item xs={12} sm={12} md={12} lg={12}>
          <Grid
            container
            item
            xs={12}
            sm={5.6}
            md={3.5}
            lg={3.7}
            p={3}
            style={{ border: " 1px solid #E0E0E0", borderRadius: "8px" }}
          >
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p1} alt="p1" />
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <Typography style={{ position: "relative", bottom: "2px" }}>
                  Posts
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p4} alt="p4" />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <Typography>Total Post</Typography>
                <Typography style={{ position: "relative", left: "14px" }}>
                  400
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Typography>Pening</Typography>
                <Typography style={{ position: "relative", left: "15px" }}>
                  28
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sm={5.6}
            md={3.5}
            lg={3.7}
            p={3}
            style={{ border: " 1px solid #E0E0E0", borderRadius: "8px" }}
          >
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p2} alt="p2" />
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <Typography style={{ position: "relative", bottom: "2px" }}>
                  Reviews
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p4} alt="p4" />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <Typography>Total Reviews</Typography>
                <Typography style={{ position: "relative", left: "30px" }}>
                  240
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Typography>Ratings</Typography>
                <Typography style={{ position: "relative", left: "7px" }}>
                  4.86
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sm={5.6}
            md={3.5}
            lg={3.7}
            p={3}
            style={{ border: " 1px solid #E0E0E0", borderRadius: "8px" }}
          >
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p3} alt="p1" />
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <Typography style={{ position: "relative", bottom: "2px" }}>
                  Tasks
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <img src={p4} alt="p4" />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <Typography>Total Tasks</Typography>
                <Typography style={{ position: "relative", left: "30px" }}>
                  45
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Typography>Open</Typography>
                <Typography style={{ position: "relative", left: "15px" }}>
                  6
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Material;
