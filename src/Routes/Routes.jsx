import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DetailPage from "../Pages/DetailPage";
import UpdatePage from "../Pages/UpdatePage";
import ProfilePage from "../Pages/ProfilePage";
import PrivateRoutes from "./PrivateRoutes";

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
					loader: () => fetch("./data.json"),
					element: (
						<PrivateRoutes>
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
					path: "/update",
					element: <UpdatePage></UpdatePage>,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routes;
