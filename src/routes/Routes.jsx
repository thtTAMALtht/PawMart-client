import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddListing from "../pages/addListing/AddListing";
import MyListing from "../pages/myListing/MyListing";
import MyOrders from "../pages/myOrders/MyOrders";
import PetsSupplies from "../pages/petsSupplies/PetsSupplies";
import Conditions from "../pages/conditions/Conditions";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/pets-supplies',
        Component : PetsSupplies
      },
      {
        path: '/addListing',
        element : <AddListing></AddListing>
      },
      {
        path: "/myListing",
        element : <MyListing></MyListing>
      },
      {
        path: "/myOrders",
        element : <MyOrders></MyOrders>
      },
      {
        path: "/terms-condtions",
        Component : Conditions
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: '/auth/login',
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
