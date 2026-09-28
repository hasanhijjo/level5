import Add from "./pages/Add";
import Expenses from "./pages/Expenses";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
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


  return (
     
  
      <RouterProvider router={router}/>
  
  );
}
