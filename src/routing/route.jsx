import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import Body from "../layout/Body";
import { LazyWatchPage } from "./lazy";

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
    ],
  },
]);

export default router;
