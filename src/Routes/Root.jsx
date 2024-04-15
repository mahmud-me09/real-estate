import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

const Root = () => {
	return (
		<HelmetProvider>
			<div className="max-w-[1320px] mx-auto">
				<NavBar></NavBar>
				<Outlet></Outlet>
				<Footer></Footer>
				<ToastContainer />
			</div>
		</HelmetProvider>
	);
};

export default Root;
