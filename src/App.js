import Add from "./pages/Add";
import Expenses from "./pages/Expenses";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { pink } from "@mui/material/colors";
export default function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Expenses/>}></Route>
        <Route path="Add" element={<Add/>}></Route>
        {/*<Route path="profile" element={<Profile/>}/>*/}
      </Route>,
    ),
  );
  const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    myColor :{main:"#2196f3",
      contrastText:"#fff",
      light:"#78b0dd"
    },
    primary:{main:pink[500],light:pink[200]},

  },
});

  return (
     <ThemeProvider theme={darkTheme}>
       <CssBaseline />
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}
