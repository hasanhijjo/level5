import { teal } from "@mui/material/colors";

const getDesignTokens = (ModeState)=>({
  palette: {
      mode: ModeState,
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
    },
})

export default getDesignTokens;