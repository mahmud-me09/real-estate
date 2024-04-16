import React from 'react';
import NavBar from '../Components/NavBar';
import { Helmet } from 'react-helmet-async';
import Detail from '../Components/Detail';
import { useLoaderData, useParams } from 'react-router-dom';

const DetailPage = () => {
	const estates = useLoaderData();
	const {id} = useParams()
	const { properties } = estates;
	console.log(properties, id);
    const estate = properties.find(estate=> estate.id === id)
    console.log(estate)
	return (
		<div>
			<Helmet>
				<title>Luxury Living | Detail</title>
			</Helmet>
	
			<div className="relative mx-auto flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
				<div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
					<img
						className="w-full h-full"
						src={estate?.image}
						alt="ui/ux review check"
					/>
					<div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
					<button
						className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg p-6  text-center align-middle font-sans text-xs font-medium uppercase text-white bg-black transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
					>
						<span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
							{estate?.status}
						</span>
					</button>
					<button
						className="!absolute  top-4 left-4 h-8 max-h-[60px] w-28 max-w-28 select-none rounded-lg p-6  text-center align-middle font-sans text-xs font-medium uppercase text-white bg-black transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
					>
						<span className="absolute transform -translate-x-1/2 -translate-y-1/2 ">
							{estate?.location}
						</span>
					</button>
					<button
						className="!absolute  bottom-4 right-4 h-8 max-h-[60px] w-28 max-w-28 select-none rounded-lg p-6  text-center align-middle font-sans text-xs font-medium  text-white bg-black transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
					>
						<span className="absolute transform -translate-x-1/2 -translate-y-1/2 ">
							{estate?.area_sq_ft} sqft
						</span>
					</button>
				</div>
				<small className="text-xs px-6 text-center">
					{" "}
					(Id: {estate.id})
				</small>
				<div className="p-6">
					<div className="flex items-center justify-between mb-3">
						<h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
							{estate?.estate_title}
						</h5>

						<p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
							<strong>Price: ${estate?.price}</strong>
						</p>
					</div>
					<p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
						{estate?.description}
					</p>
				</div>

				<p className="px-6">
					<strong>Segment Name: </strong>
					{estate?.segment_name}
				</p>
				<div className="px-6">
					<strong>Facilities:</strong>
					<ul className="px-8" style={{ listStyle: "circle" }}>
						{estate?.facilities.map((facility, idx) => (
							<li key={idx}>{facility}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DetailPage;