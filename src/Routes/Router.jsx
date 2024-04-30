import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import AddCraftItems from "../Pages/AddCraftItems/AddCraftItems";
import PrivateRoutes from "./PrivateRoutes";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import AllArtandCraft from "../Pages/AllArtandCraft/AllArtandCraft";
import MyartCraftItems from "../Pages/MyartCraftItems/MyartCraftItems";
import UpdateItem from "../Pages/UpdateItem/UpdateItem";
import CategoriesPage from "../Pages/CategoriesPage/CategoriesPage";

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
      {
        path: "/viewdetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-five-navy.vercel.app/craftsitems/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/allartcraftitems",
        loader: () =>
          fetch(
            "https://assignment-10-server-five-navy.vercel.app/allartcraftitems"
          ),
        element: <AllArtandCraft></AllArtandCraft>,
      },
      {
        path: "/myartcraftsItems/:email",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-five-navy.vercel.app/mycraftitems/${params.email}`
          ),
        element: (
          <PrivateRoutes>
            <MyartCraftItems></MyartCraftItems>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateItem/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-five-navy.vercel.app/updateItem/${params.id}`
          ),

        element: (
          <PrivateRoutes>
            <UpdateItem></UpdateItem>
          </PrivateRoutes>
        ),
      },
      {
        path: "/categorypage/:subcategory",

        element: <CategoriesPage></CategoriesPage>,
      },
    ],
  },
]);
export default Router;
