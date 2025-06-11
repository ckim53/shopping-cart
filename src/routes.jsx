import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Layout from "./components/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;