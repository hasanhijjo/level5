import MenuIcon from '@mui/icons-material/Menu';
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
export default function Appbar({ drawerWidth ,showDrower}) {
  return (
    <AppBar
      position="static"
      sx={{ width: {sx:`calc(100% - ${drawerWidth}px)`, ml: {xs:0,sm:`${drawerWidth}px`}} }}>
      <Toolbar>
        <IconButton sx={{display:{sm:"none"},color:"inherit"}} onClick={() => {
            showDrower()
        
        }}>
          <MenuIcon/>
        </IconButton>
        <Link
          href="/"
          sx={{
            flexGrow: 1,
            "&:hover": { textDecoration: "underline", fontSize: "18px" },
          }}
          color="inherit"
          underline="none"
        >
          Expenses
        </Link>
        <Button color="inherit">Login</Button>
        {/* <Avatar alt="user" src="./images/user.png" /> */}
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
      </Toolbar>
    </AppBar>
  );
}