import React from 'react';


const Card = ({children}) => {
    return (
		<div>
			<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
				<div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
					<img
						className="w-full h-[255px]"
						src={children.image}
						alt="ui/ux review check"
					/>
					<div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
					<button
						className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg p-6  text-center align-middle font-sans text-xs font-medium uppercase text-white bg-black transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
					>
						<span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
							{children.status}
						</span>
					</button>
					<button
						className="!absolute  top-4 left-4 h-8 max-h-[60px] w-28 max-w-28 select-none rounded-lg p-6  text-center align-middle font-sans text-xs font-medium uppercase text-white bg-black transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
					>
						<span className="absolute transform -translate-x-1/2 -translate-y-1/2 ">
							{children.location}
						</span>
					</button>
					<button
						className="!absolute  bottom-4 right-4 h-8 max-h-[60px] w-28 max-w-28 select-none rounded-lg p-6  text-center align-middle font-sans text-xs font-medium  text-white bg-black transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
					>
						<span className="absolute transform -translate-x-1/2 -translate-y-1/2 ">
							{children.area_sq_ft} sqft
						</span>
					</button>
				</div>
				<small className="text-xs px-6 text-center">
					{" "}
					(Id: {children.id})
				</small>
				<div className="p-6">
					<div className="flex items-center justify-between mb-3">
						<h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
							{children.estate_title}
						</h5>

						<p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
							<strong>Price: ${children.price}</strong>
						</p>
					</div>
					<p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
						{children.description}
					</p>
				</div>

				<p className="px-6">
					<strong>Segment Name: </strong>
					{children.segment_name}
				</p>
				<div className="px-6">
					<strong>Facilities:</strong>
					<ul className="px-8" style={{ listStyle: "circle" }}>
						{children.facilities.map((facility, idx) => (
							<li key={idx}>{facility}</li>
						))}
					</ul>
				</div>

				<div className="p-6 pt-3">
					<button
						className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
					>
						View Property
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;