import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

const myStyle = {
  backgroundImage:
    "url('https://securecdn.pymnts.com/wp-content/uploads/2020/09/luxury-retail-millennials.jpg')",
  height: 600,
  width: "100%",
  backgroundColor: "black",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
};

const Blog = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontWeight: "900" }} align="center">
        Fashion<b style={{ color: "red" }}> Blog</b>
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: "100" }} align="center">
        We make You Look More Better
      </Typography>
      <Box style={myStyle}>
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8" }}>
            <Typography align="center" variant="h6" color="tomato" pt={8}>
              Trending Styles!
            </Typography>
            <Typography align="center" variant="h4">
              Life is Boring Without Fashion
            </Typography>
            <Typography align="center" variant="body1" pb={8}>
              We love to Change Your Style My Dear
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Blog;
