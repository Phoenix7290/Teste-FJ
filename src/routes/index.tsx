import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Personal from "../views/Personal";
import Details from "../views/Details";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/personal/",
        element: <Personal />,
    },
    {
        path: "/details/:id",
        element: <Details />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
])

const Routes = () => {
    return (
        <RouterProvider router={Router} />
    );
}

export default Routes;