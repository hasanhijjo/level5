import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
export default function Appbar({ drawerWidth }) {
  return (
    <AppBar
      position="static"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
      <Toolbar>
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