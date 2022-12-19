import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PortraitIcon from "@mui/icons-material/Portrait";
import React from "react";

const Sidebar = () => {
  return (
    <Box flex={0.7} sx={{ height: "42rem" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/">
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="HomePage" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="/about">
            <ListItemIcon>
              <InfoTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="AboutPage" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="/portfolio">
            <ListItemIcon>
              <PortraitIcon />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="/contact">
            <ListItemIcon>
              <ContactPhoneIcon />
            </ListItemIcon>
            <ListItemText primary="ContactPage" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
export default Sidebar;
