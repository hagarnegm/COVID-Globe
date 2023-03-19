import * as React from "react";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: 1300 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component="img"
            sx={{
              height: 50,
            }}
            alt="COVID Globe"
            src={Logo}
          />
          <Avatar component={Link} to="/profile" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
