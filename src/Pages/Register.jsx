import { useForm } from "react-hook-form";
import NavBar from "../Components/NavBar";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors.message);

	return (
		<>
			<Helmet>
				<title>Luxury Living | Register</title>
			</Helmet>
			<div
				className="w-full my-4 mx-auto max-w-md p-4 border border-purple-500 rounded-md shadow sm:p-8
			dark:bg-gray-50 dark:text-gray-800"
			>
				<h2 className="mb-3 text-3xl font-semibold text-center">
					Register Here
				</h2>
				<form
					className="flex flex-col"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="space-y-4">
						<div className="space-y-2">
							<label htmlFor="email" className="block text-sm">
								Name
							</label>
							<input
								className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
								type="text"
								placeholder="Name"
								{...register("Name", { required: true })}
							/>
						</div>
						<div className="space-y-2">
							<label
								htmlFor="Photo Url"
								className="block text-sm"
							>
								Photo URL
							</label>
							<input
								className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
								type="url"
								placeholder="Photo URL"
								{...register("Photo URL", { required: true })}
							/>
						</div>
						<div className="space-y-2">
							<label htmlFor="email" className="block text-sm">
								Email address
							</label>
							<input
								className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
								type="text"
								placeholder="Email"
								{...register("Email", {
									required: true,
									pattern:{
										value: /^\S+@\S+$/i,
										message:
											()=>toast.warn("not valid email"),
									}, 
									
								})}
							/>
						</div>
						<div className="space-y-2">
							<label htmlFor="password" className="text-sm">
								Password
							</label>
							<input
								className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
								type="password"
								placeholder="Password"
								{...register("Password", {
									required: true,
									min: 6,
									pattern: {
										value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
										message:
											"Password must contain at least one uppercase, one lowercase, and be at least 6 characters long",
									},
								})}
							/>
						</div>
					</div>
					<input className="btn my-4" type="submit" />
				</form>
			</div>
		</>
	);
};

export default Register;
