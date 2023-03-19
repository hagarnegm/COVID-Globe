import * as React from "react";
import {
  useTheme,
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import InputIcon from "@mui/icons-material/Input";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link } from "react-router-dom";

export default function SideBar() {
  const drawerWidth = 200;
  const theme = useTheme();
  const primaryDark = theme.palette.primary.dark;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ display: "grid", gridTemplateRows: "repeat(5, 1fr)" }}>
          <List sx={{ gridRow: "span 3" }}>
            <ListItem key="Dashboard" disablePadding>
              <ListItemButton
                sx={{ "&:hover": { color: primaryDark } }}
                component={Link}
                to="/dashboard"
              >
                <ListItemIcon>
                  <DashboardIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Logger" disablePadding>
              <ListItemButton
                sx={{ "&:hover": { color: primaryDark } }}
                component={Link}
                to="/logger"
              >
                <ListItemIcon>
                  <InputIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Logger" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem key="Profile" disablePadding>
              <ListItemButton
                sx={{ "&:hover": { color: primaryDark } }}
                component={Link}
                to="/profile"
              >
                <ListItemIcon>
                  <AccountCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Logout" disablePadding>
              <ListItemButton
                sx={{ "&:hover": { color: primaryDark } }}
                component={Link}
                to="/"
              >
                <ListItemIcon>
                  <LogoutIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
