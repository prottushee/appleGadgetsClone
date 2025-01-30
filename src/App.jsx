import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import RootLayout from "./pages/RootLayout";  
import Home from "./pages/Home";       
import Cart from "./pages/Cart"
import SingleProduct from "./pages/SingleProduct";  
import NotFound from "./pages/NotFound";  
import { ToastContainer } from "react-toastify";
import PreOrderForm from "./pages/PreOrderForm";
import OffersPage from "./pages/Offers";
// import Checkout from "./pages/Checkout";  
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product/:slug", element: <SingleProduct /> },
      {path: "/cart", element: <Cart />},
      { path: "/offers", element: <OffersPage /> },
      { path: "/preorder", element: <PreOrderForm /> },
      { path: "*", element: <NotFound /> },  
    ],
  },
]);

function App() {
  return (
    <> 
      <RouterProvider router = { router } />
      <ToastContainer/>
    </> 
  );
}

export default App;
