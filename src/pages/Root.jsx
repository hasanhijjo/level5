import Appbar from "../component/Appbar";
import Drawerr from "../component/Drawerr";
import { Outlet } from "react-router";
const drawerWidth = 240;
export default function Root() {
  return (
    <div>
      <Appbar drawerWidth={drawerWidth} />
      <Drawerr drawerWidth={drawerWidth} />
      <Outlet />
    </div>
  );
}