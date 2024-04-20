import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CustomerPage from "../Pages/CustomerPage/CustomerPage";
import OrderPage from "../Pages/OrderPage/OrderPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/customers", element: <CustomerPage /> },
      { path: "/customers/:customerId/orders", element: <OrderPage /> },
    ],
  },
]);
