import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import TuneIcon from "@mui/icons-material/Tune";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router";
import { Brightness7, Brightness4 } from "@mui/icons-material";

export default function Drawerr({ drawerWidth, setModeState }) {
  const theme = useTheme();
  let location = useLocation();
  console.log(location.pathname);
  let navigate = useNavigate();
  return (
    <Drawer
      sx={{
        width: `${drawerWidth}px`,
        //down فوق القياس
        //up تحت القياس

        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",

          [theme.breakpoints.down("md")]: {
            backgroundColor: theme.palette.secondary.main,
          },
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <ListItem>
        <IconButton
          sx={{ ml: 10 }}
          onClick={() => {
            localStorage.setItem(
              "currentMode",
              theme.palette.mode === "light" ? "dark" : "light",
            );
            setModeState(theme.palette.mode === "light" ? "dark" : "light");
          }}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </ListItem>
      <Divider />
      <List>
        <ListItem
          disablePadding
          sx={{
            bgcolor:
              location.pathname === "/" ? theme.palette.malak.main : null,
          }}
        >
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <MonetizationOnIcon />
            </ListItemIcon>

            <ListItemText primary="Expenses" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem
          disablePadding
          sx={{
            bgcolor:
              location.pathname === "/add" ? theme.palette.malak.main : null,
          }}
        >
          <ListItemButton
            onClick={() => {
              navigate("add");
            }}
          >
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <TuneIcon />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="LogOut" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
