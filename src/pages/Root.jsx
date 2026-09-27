import { Box } from "@mui/material";
import Appbar from "../component/Appbar";
import Drawerr from "../component/Drawerr";
import { Outlet } from "react-router";
const drawerWidth = 240;
export default function Root() {
  return (
    <div>
      <Appbar drawerWidth={drawerWidth} />
      <Drawerr drawerWidth={drawerWidth} />
      <Box className="border" sx={{ ml: `${drawerWidth}px`, display: "flex",justifyContent:"center" ,mt:"50px"}}>
      <Outlet />
      </Box>
    </div>
  );
}