import { Avatar, Link, IconButton, Toolbar, Button, AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
export default function Appbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Link sx={{ flexGrow: 1 }} underline="none" color="inherit">
            Expenses{" "}
          </Link>
          <Button color="inherit">Login</Button>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
