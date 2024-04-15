import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DetailPage from "../Pages/DetailPage";
import CartPage from "../Pages/CartPage";

const Routes = () => {
    const router = createBrowserRouter([
		{
			path: "/",
			element: <Root></Root>,
			errorElement: <Error />,
			children: [
				{
					path: "/",
					element: <Home></Home>,
				},
				{
					path: "/login",
					element: <Login></Login>,
				},
				{
					path: "/register",
					element: <Register></Register>,
				},
				{
					path: "/detail/:id",
					element: <DetailPage></DetailPage>,
				},
				{
					path: "/cart",
					element: <CartPage></CartPage>,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routes;
