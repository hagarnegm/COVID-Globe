import { Box, CssBaseline } from "@mui/material";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Map from "../components/Map";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const [logs, setLogs] = useState(null);
  const token = useSelector((state) => state.token);

  const getPatientsLogs = async () => {
    const response = await fetch("http://localhost:3001/logs", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setLogs(data);
  };

  useEffect(() => {
    getPatientsLogs();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <NavBar position="fixed" />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <SideBar />
        <Map sx={{ flexGrow: 1, overflowY: "hidden" }} logs={logs} />
      </Box>
    </Box>
  );
}
