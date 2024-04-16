import React from "react";

import { Helmet } from "react-helmet-async";

import { useLoaderData, useParams } from "react-router-dom";

const DetailPage = () => {
	const estates = useLoaderData();
	const { id } = useParams();
	const { properties } = estates;
	console.log(properties, id);
	const estate = properties.find((estate) => estate.id === id);
	console.log(estate);
	return (
		<div>
			<Helmet>
				<title>Luxury Living | Detail</title>
			</Helmet>

			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content gap-8 flex-col lg:flex-row-reverse">
					<img
						src={estate?.image}
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-xl lg:text-5xl font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
							{estate.estate_title}
						</h1>
						<p className="py-2">
							Segment Name: {estate.segment_name}
						</p>
						<p className="py-6 text-lg lg:text-xl">
							Description: {estate.description}. This Property is
							available for <strong>{estate.status}</strong> with
							very much affordable price of{" "}
							<strong>${estate.price}</strong>. This property is
							 a very attractive place at{" "}
							<strong>{estate.location}</strong>. Total area of
							this property is{" "}
							<strong>{estate.area_sq_ft} square feet</strong>.
						</p>

						<strong className="text-lg lg:text-xl">
							Facilities:
						</strong>
						<ul
							className="px-8 text-lg lg:text-xl"
							style={{ listStyle: "circle" }}
						>
							{estate?.facilities.map((facility, idx) => (
								<li key={idx}>{facility}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailPage;
