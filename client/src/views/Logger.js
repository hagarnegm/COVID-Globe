import { Box, CssBaseline } from "@mui/material";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import LoggerForm from "../components/LoggerForm";

export default function Logger() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: 'repeat(2, 1fr)'
      }}
    >
      <CssBaseline />
      <NavBar position="fixed"/>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        <SideBar />
        <LoggerForm sx={{gridColumn: "2 / 3"}} />
      </Box>
    </Box>
  );
}
