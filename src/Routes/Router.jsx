import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import AddCraftItems from "../Pages/AddCraftItems/AddCraftItems";
import PrivateRoutes from "./PrivateRoutes";
import CraftItems from "../Pages/Home/CraftItems";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addcraftitems",
        element: (
          <PrivateRoutes>
            <AddCraftItems></AddCraftItems>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default Router;
