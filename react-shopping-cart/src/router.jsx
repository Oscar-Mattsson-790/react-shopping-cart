import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Error from "./views/Error";
import About from "./views/About";
import ProductItem from "./views/ProductItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product",
    element: <ProductItem />,
  },
]);

export default router;
