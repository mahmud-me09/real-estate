import React from "react";

import { Helmet } from "react-helmet-async";

import { useLoaderData, useParams } from "react-router-dom";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const icon = L.icon({
	iconRetinaUrl: iconRetina,
	iconUrl: iconMarker,
	shadowUrl: iconShadow,
	iconSize: [22, 32],
	iconAnchor: [16, 32],
	popupAnchor: [0, -32],
});

const DetailPage = () => {
	const estates = useLoaderData();
	const { id } = useParams();
	const { properties } = estates;
	console.log(properties, id);
	const estate = properties.find((estate) => estate.id === id);

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
						<h1 className="text-xl lg:text-5xl py-4 font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
							{estate.estate_title}
						</h1>
						<p className="py-2">
							Segment Name: {estate.segment_name}
						</p>
						<p className="py-6 text-lg lg:text-xl">
							Description: {estate.description}. This Property is
							available for <strong>{estate.status}</strong> with
							very much affordable price of{" "}
							<strong>${estate.price}</strong>. This property is a
							very attractive place at{" "}
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
						<div>
							<p className="py-6 text-lg">
								The Location is right here:
							</p>
							<MapContainer
								center={estate.coordinates}
								zoom={13}
								style={{ height: "250px", width: "50%" }}
							>
								<TileLayer
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								/>
								<Marker position={estate.coordinates} icon={icon}>
									<Popup>{estate.location}</Popup>
								</Marker>
							</MapContainer>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailPage;
