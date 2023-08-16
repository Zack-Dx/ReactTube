import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import MainContainer from "../components/MainContainer";
import Body from "../layout/Body";
import { LazySearchPage, LazyWatchPage } from "./lazy";

// Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <LazyWatchPage />,
      },
      {
        path: "/results",
        element: <LazySearchPage />,
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
