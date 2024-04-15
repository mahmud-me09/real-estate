import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	const navLink = (
		<>
			<li className="font-bold">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? "bg-purple-500 text-white" : ""
					}
				>
					Home
				</NavLink>
			</li>
			<li className="font-bold">
				<NavLink
					to="/update"
					className={({ isActive }) =>
						isActive ? "bg-purple-500 text-white" : ""
					}
				>
					Update Profile
				</NavLink>
			</li>
			<li className="font-bold">
				<NavLink
					to="/profile"
					className={({ isActive }) =>
						isActive ? "bg-purple-500 text-white" : ""
					}
				>
					User Profile
				</NavLink>
			</li>
		</>
	);
	return (
		<div className="navbar bg-purple-50 rounded-b z-10 mb-4">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{navLink}
					</ul>
				</div>
				<h1 className="btn btn-ghost text-lg lg:text-2xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
					Luxury Living
				</h1>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal mx-4 px-1">{navLink}</ul>
			</div>
			<div className="navbar-end">
				{/* <Link className="btn">Button</Link> */}
				<div className="flex lg:gap-6">
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle"
						>
							<div className="indicator">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
								<span className="badge badge-sm indicator-item">
									8
								</span>
							</div>
						</div>
						<div
							tabIndex={0}
							className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow z-30"
						>
							<div className="card-body">
								<span className="font-bold text-lg">
									8 Items
								</span>
								<span className="text-info">
									Subtotal: $999
								</span>
								<div className="card-actions">
									<button className="btn btn-primary btn-block">
										View cart
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom z-30"
							data-tip="hello"
						>
							<div className="w-10 rounded-full">
								<img
									alt="Tailwind CSS Navbar component"
									src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 border border-purple-600 rounded-box w-52 z-30"
						>
							<li>
								<Link to="/update" className="justify-between">
									Update Profile
								</Link>
							</li>
							<li>
								<Link to="/profile">User Profile</Link>
							</li>
							<li>
								<Link to="/">Logout</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		// 	<div className="navbar  ">
		// 		<div className="flex-1">
		//
		// 		</div>

		// 	</div>
	);
};

export default NavBar;
