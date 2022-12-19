import {
  AppBar,
  InputBase,
  MenuList,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material/";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const Tbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Social = styled(Box)({
    display: "flex",
    gap: 15,
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 25,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });

  const MenuLists = [
    {
      Name: "Home",
      Link: "/",
    },
    {
      Name: "About",
      Link: "#",
    },
    {
      Name: "Portfolio",
      Link: "#",
    },
    {
      Name: "Contact",
      Link: "#",
    },
  ];

  return (
    <AppBar position={"static"} sx={{ bgcolor: "black" }}>
      <Tbar>
        <Social>
          <Facebook />
          <Instagram />
          <WhatsApp />
        </Social>
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuLists.map((i) => (
            <Typography sx={{ fontSize: "16px", cursor: "pointer" }}>
              {i.Name}
            </Typography>
          ))}
        </MenuBox>
        <SearchBox>
          <InputBase placeholder="Serach..." sx={{ color: "white" }} />
          <MenuIcon
            sx={{
              color: "white",
              display: { sx: "block", sm: "block", md: "none" },
            }}
            onClick={() => setopen(!open)}
          />
        </SearchBox>
      </Tbar>
      <Menu
        open={open}
        onClose={() => {
          setopen(!open);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuLists.map((item) => (
            <MenuItem sx={{ fontSize: "16px", cursor: "pointer" }}>
              {item.Name}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
