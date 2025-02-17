import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DetailPage from "../Pages/DetailPage";
import UpdatePage from "../Pages/UpdatePage";
import ProfilePage from "../Pages/ProfilePage";
import PrivateRoutes from "./PrivateRoutes";
import BlogPage from "../Pages/BlogPage";
import Error from "../Pages/Error";
import PublicRoutes from "./PublicRoute";

import ScrollToTop from "react-scroll-to-top";

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
					element: (
						<PublicRoutes>
							<Login></Login>
						</PublicRoutes>
					),
				},
				{
					path: "/register",
					element: (
						<PublicRoutes>
							<Register></Register>
						</PublicRoutes>
					),
				},
				{
					path: ":id",
					loader: () => fetch("./data.json"),
					element: (
						<PrivateRoutes>
							<ScrollToTop smooth />
							<DetailPage></DetailPage>
						</PrivateRoutes>
					),
				},

				{
					path: "/profile",
					element: (
						<PrivateRoutes>
							<ProfilePage></ProfilePage>
						</PrivateRoutes>
					),
				},
				{
					path: "/blogs",
					element: (
						<PrivateRoutes>
							<BlogPage></BlogPage>
						</PrivateRoutes>
					),
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
