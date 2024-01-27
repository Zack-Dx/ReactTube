import { createBrowserRouter } from "react-router-dom";
import { LazySearchPage, LazyWatchPage } from "./lazy";
import Error from "../pages/Error";
import MainContainer from "../components/MainContainer";
import Body from "../layout/Body";

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
