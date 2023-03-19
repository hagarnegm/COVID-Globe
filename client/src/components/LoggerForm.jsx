import { useState } from "react";
import {
  useTheme,
  Box,
  Typography,
  FormLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
  Slider,
  Button,
  CssBaseline,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { setLogs } from "../state/state";

export default function LoggerForm() {
  const theme = useTheme();
  const primaryDark = theme.palette.primary.dark;

  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const [temp, setTemp] = useState(0);
  const [checked, setChecked] = useState(false);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [error, setError] = useState("");

  const geoLocationAPI = navigator.geolocation;

  const getCurrentLocation = () => {
    if (!geoLocationAPI) {
      setError("Geolocation API is not available in your browser!");
    } else {
      geoLocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLong(coords.longitude);
        },
        (error) => {
          setError("Something went wrong!");
        }
      );
    }
  };

  const patchLogs = async () => {
    getCurrentLocation();
    const logData = new FormData();
    logData.append("temperature", temp);
    logData.append("location", [lat, long]);

    const response = await fetch(`http://localhost:3001/log`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: logData,
    });
    const returnedLogs = await response.json();
    dispatch(setLogs({ logs: returnedLogs }));
  };

  const handleLocation = (event) => {
    setChecked(event.target.checked);
  };

  const handleTemperature = (event) => {
    setTemp(event.target.value);
  };

  const marks = [
    {
      value: 0,
      label: "0°C",
    },
    {
      value: 20,
      label: "20°C",
    },
    {
      value: 37,
      label: "37°C",
    },
    {
      value: 100,
      label: "100°C",
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <FormControl>
        <Typography variant="h4" color={primaryDark}>
          COVID Data Logger
        </Typography>
        <FormLabel>Enter your temperature.</FormLabel>
        <Slider
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={1}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={handleTemperature}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleLocation}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Allow COVID Globe to use your current location."
        />
        <Button variant="contained" size="medium" onClick={patchLogs}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
