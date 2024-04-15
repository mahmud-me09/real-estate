import React from 'react';
import "animate.css";
import Slider from '../Components/Slider';
import Cards from '../Components/Cards';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
		<div>
			<Helmet>
				<title>Luxury Living | Home</title>
			</Helmet>
			<Slider></Slider>
			<div className="my-10 text-center animate__animated animate__zoomIn">
				<h1 className=" font-bold my-4 text-3xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
					----: Estates :----
				</h1>
				<p className="w-3/4 mx-auto">
					At our real estate company, we offer a diverse range of
					residential properties, from cozy apartments and luxury
					townhouses to family-friendly homes and specialized senior
					living. Each property is selected with care to ensure
					quality and comfort, tailored to meet all your housing
					needs.
				</p>
			</div>
			<Cards></Cards>
		</div>
	);
};

export default Home;