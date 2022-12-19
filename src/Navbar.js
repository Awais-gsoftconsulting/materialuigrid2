import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button, IconButton, Typography, Menu, MenuItem } from "@mui/material";

import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";

import img1 from "./img/news.png";

const Navbar = () => {
  const [mobileMenuAnchorEl, setmobileMenuAnchorEl] = useState(null);
  const ismobileMenuOpen = Boolean(mobileMenuAnchorEl);
  const theme = useTheme();

  const openMenu = (e) => {
    setmobileMenuAnchorEl(e.currentTarget);
  };
  const closeMenu = () => {
    setmobileMenuAnchorEl(null);
  };

  const mobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      id="menu"
      keymounted
      open={ismobileMenuOpen}
    >
      <MenuItem onClick={closeMenu}>Home</MenuItem>
      <MenuItem onClick={closeMenu}>News</MenuItem>
      <MenuItem onClick={closeMenu}>Sport</MenuItem>
      <MenuItem onClick={closeMenu}>Reel</MenuItem>
      <MenuItem onClick={closeMenu}>Worklife</MenuItem>
      <MenuItem onClick={closeMenu}>Travel</MenuItem>
      <MenuItem onClick={closeMenu}>Future</MenuItem>
      <MenuItem onClick={closeMenu}>Culture</MenuItem>
    </Menu>
  );
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "white",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const isMatch = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <AppBar sx={{ backgroundColor: "black" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Link
                href="#"
                variant="h6"
                px={1}
                mx={0.5}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                B
              </Link>
              <Link
                href="#"
                variant="h6"
                px={1}
                mx={0.5}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                B
              </Link>
              <Link
                href="#"
                variant="h6"
                px={1}
                mx={0.5}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                C
              </Link>

              <Button
                startIcon={
                  <Person2Icon sx={{ width: "30px", height: "35px" }} />
                }
                sx={{
                  marginRight: 12,
                  color: "white",
                  "&:hover": {
                    borderBottom: "2px solid blue",
                    height: "40px",
                  },
                }}
              >
                SignIn
              </Button>

              <div>
                <Link
                  sx={{
                    marginLeft: 5,
                    color: "white",
                    textDecoration: "none",
                    "&:hover": {
                      borderBottom: "2px solid red",
                      height: "30px",
                    },
                  }}
                >
                  Home
                </Link>
                <Link
                  sx={{
                    marginLeft: 5,
                    color: "white",
                    textDecoration: "none",
                    "&:hover": {
                      borderBottom: "2px solid red",
                      height: "30px",
                    },
                  }}
                >
                  News
                </Link>
                <Link
                  sx={{
                    marginLeft: 5,
                    color: "white",
                    textDecoration: "none",
                    "&:hover": {
                      borderBottom: "2px solid red",
                      height: "30px",
                    },
                  }}
                >
                  Sport
                </Link>
                <Link
                  sx={{
                    marginLeft: 5,
                    color: "white",
                    textDecoration: "none",
                    "&:hover": {
                      borderBottom: "2px solid red",
                      height: "30px",
                    },
                  }}
                >
                  Real
                </Link>
                <Link
                  sx={{
                    marginLeft: 5,
                    color: "white",
                    textDecoration: "none",
                    "&:hover": {
                      borderBottom: "2px solid red",
                      height: "30px",
                    },
                  }}
                >
                  Worklife
                </Link>
                <Link
                  sx={{
                    marginLeft: 5,
                    color: "white",
                    textDecoration: "none",
                    "&:hover": {
                      borderBottom: "2px solid red",
                      height: "30px",
                    },
                  }}
                >
                  Travel
                </Link>
                <Link
                  sx={{
                    marginLeft: 5,
                    color: "white",
                    textDecoration: "none",
                    "&:hover": {
                      borderBottom: "2px solid red",
                      height: "30px",
                    },
                  }}
                >
                  Future
                </Link>

                <Link
                  sx={{
                    marginLeft: 5,
                    color: "white",
                    textDecoration: "none",
                    "&:hover": {
                      borderBottom: "2px solid red",
                      height: "30px",
                    },
                  }}
                >
                  Culture
                </Link>
              </div>

              <Search mx={2}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search BBC"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </>
          ) : (
            <>
              <IconButton
                color="inherit"
                sx={{
                  marginRight: "auto",
                  "&:hover": {
                    height: "40px",
                  },
                }}
              >
                <Person2Icon sx={{ height: "40px", width: "35px" }} />
              </IconButton>

              <Link
                href="#"
                variant="h6"
                px={1}
                mx={0.5}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                B
              </Link>
              <Link
                href="#"
                variant="h6"
                px={1}
                mx={0.5}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                B
              </Link>
              <Link
                href="#"
                variant="h6"
                px={1}
                mx={0.5}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                C
              </Link>

              <IconButton
                onClick={openMenu}
                color="inherit"
                sx={{ marginLeft: "auto" }}
              >
                <MenuIcon sx={{ height: "50px", width: "35px" }} />
              </IconButton>
              <IconButton
                onClick={openMenu}
                color="inherit"
                sx={{ marginLeft: "auto" }}
              >
                <SearchIcon sx={{ height: "50px", width: "35px" }} />
              </IconButton>
              {mobileMenu}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
