import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Home from "./components/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
    //errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export default routes;