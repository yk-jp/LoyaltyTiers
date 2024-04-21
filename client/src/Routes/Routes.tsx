import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import CustomerPage from "../Pages/CustomerPage/CustomerPage";
import HomePage from "../Pages/HomePage/HomePage";
import OrderPage from "../Pages/OrderPage/OrderPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/customer/:customerId", element: <CustomerPage /> },
      { path: "/customer/:customerId/orders", element: <OrderPage /> },
    ],
  },
]);
