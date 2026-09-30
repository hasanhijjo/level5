import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Appbar from "../component/Appbar";
import Drawerr from "../component/Drawerr";
import { Outlet } from "react-router";
import { useState } from "react";
import { useMemo } from "react";
import getDesignTokens from "../styels/Theme";
import React from "react";

const drawerWidth = 240;
export default function Root() {
  const [ModeState, setModeState] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
        ? "light"
        : "dark",
  );
  const [dispaly, setdispaly] = useState("none");
  const [typeDrawerr, settypeDrawerr] = useState("permanent");
  const showDrower = () => {
    settypeDrawerr("temporary");
    setdispaly("block");
  };
  const hideDrower = () => {
    settypeDrawerr("permanent");
    setdispaly("none");
  };
  const theme = React.useMemo(
    () => createTheme(getDesignTokens(ModeState)),
    [ModeState],
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth} showDrower={showDrower} />
        <Drawerr
          {...{ drawerWidth, setModeState, dispaly, typeDrawerr, hideDrower }}
        />
        <Box
          sx={{
            ml: `${drawerWidth}px`,
            display: "flex",
            justifyContent: "center",
            mt: "50px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
}
