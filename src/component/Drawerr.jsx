import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import TuneIcon from "@mui/icons-material/Tune";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router";
import { Brightness7, Brightness4 } from "@mui/icons-material";

// @ts-ignore
export default function Drawerr({ drawerWidth, setModeState ,dispaly,typeDrawerr,hideDrower}) {
  const theme = useTheme();
  let location = useLocation();
  console.log(location.pathname);
  let navigate = useNavigate();
  const menuItems = [
  {
    text: "Expenses",
    icon: <MonetizationOnIcon />,
    path: "/",
  },
  {
    text: "Add",
    icon: <AddIcon />,
    path: "/add",
  },
  {
    text: "Profile",
    icon: <AccountBoxIcon />,
    path: "/profile",
  },
  {
    text: "Setting",
    icon: <TuneIcon />,
    path: "/setting",
  },
  {
    text: "LogOut",
    icon: <LogoutIcon />,
    path: "/logout",
  },
];
  return (
    <Box component="nav">
    <Drawer 
      sx={{
        display:{xs:dispaly ,sm:"block"},
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
          //down فوق القياس
          //up تحت القياس
          [theme.breakpoints.down("md")]: {
            backgroundColor: theme.palette.secondary.main,
          },
        },
      }}
      variant={typeDrawerr}
      anchor="left"
      open={true}
      onClose={() => {
        hideDrower()
      }}
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
  {menuItems.map((item) => (
    <ListItem
      key={item.path}
      disablePadding
      sx={{
        bgcolor:
          location.pathname === item.path
            // @ts-ignore
            ? theme.palette.malak.main
            : null,
      }}
    >
      <ListItemButton onClick={() => navigate(item.path)}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>

        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>
    </Drawer></Box>
  );
}
