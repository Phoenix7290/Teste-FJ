import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from '../views/Home';
import NotFound from '../views/NotFound';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
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