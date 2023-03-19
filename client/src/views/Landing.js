import { useTheme, Paper, Box, Typography, Button } from "@mui/material";
import Logo from "../images/Logo.png";

export default function Landing() {
  const theme = useTheme();
  const primaryDark = theme.palette.primary.dark;
  return (
    <Paper
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to right bottom, #81cac5, #0c877d)",
      }}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      <Box
        sx={{
          width: "40vw",
          height: "100vh",
          background: "white",
          display: "grid",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <Typography variant="h4" color={primaryDark}>
          Login to COVID Globe
        </Typography>
        <Button variant="contained" size="large">Login </Button>
      </Box>
      <Box
        component="img"
        sx={{
          height: 200,
          alignSelf: "center",
        }}
        alt="COVID Globe"
        src={Logo}
      />
    </Paper>
  );
}
