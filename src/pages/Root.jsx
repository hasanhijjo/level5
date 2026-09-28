import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Appbar from "../component/Appbar";
import Drawerr from "../component/Drawerr";
import { Outlet } from "react-router";
import { useState } from "react";
import { pink, teal } from "@mui/material/colors";
const drawerWidth = 240;
export default function Root() {
  const [ModeState, setModeState] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"?"light":"dark",
  );
  const darkTheme = createTheme({
       palette: {
      mode:ModeState,
      ...(ModeState === "light"
        ? {
            // palette values for Light mode
            malak: {
              main: "#647488",
            },
          }
        : {
            // palette values for dark mode
            malak: {
              main: teal[500],
            },
          }),
    }

  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth} />
        <Drawerr drawerWidth={drawerWidth} setModeState={setModeState} />
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
