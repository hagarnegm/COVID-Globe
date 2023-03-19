import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import Landing from "./views/Landing";
import Dashboard from "./views/Dashboard";
import Logger from "./views/Logger";
import Profile from "./views/Profile";

function App() {
  const isAuth = true;//Boolean(useSelector((state) => state.token));
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route index path="/" element={<Landing />} />
            <Route
              path="/dashboard"
              element={isAuth ? <Dashboard /> : <Navigate to="/" />}
            />
            <Route
              path="/logger"
              element={isAuth ? <Logger /> : <Navigate to="/" />}
            />
            <Route
              path="/profile"
              element={isAuth ? <Profile /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
