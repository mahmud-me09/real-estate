import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DetailPage from "../Pages/DetailPage";
import CartPage from "../Pages/CartPage";
import UpdatePage from "../Pages/UpdatePage";
import ProfilePage from "../Pages/ProfilePage";

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
					path: ":id",
					loader:()=>fetch('./data.json'),
					element: <DetailPage></DetailPage>,
				},
				{
					path: "/cart",
					element: <CartPage></CartPage>,
				},
				{
					path: "/profile",
					element: <ProfilePage></ProfilePage>,
				},
				{
					path: "/update",
					element: <UpdatePage></UpdatePage>,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routes;
