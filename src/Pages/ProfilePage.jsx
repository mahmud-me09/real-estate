import React, { useContext } from "react";
import NavBar from "../Components/NavBar";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, Navigate } from "react-router-dom";

const ProfilePage = () => {
	const { user } = useContext(AuthContext);
	return (
		<div>
			<Helmet>
				<title>Luxury Living | Profile</title>
			</Helmet>

			<div className="hero min-h-fit bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src={user.photoURL}
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-lg lg:text-3xl font-bold">
							Hello, <br></br>
							{user.displayName}
						</h1>
						<p></p>

						<p className="py-6">
							Welcome to{" "}
							<span className="font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
								Luxury Living
							</span>
							. We will do our best to ensure that your dream will
							come to reality. You can choose from our
							collections. We will be in touch in your provided
							email: <strong>{user.email}</strong>
						</p>
						<Link to="/" className="btn btn-primary "
							>
						Get Started</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
