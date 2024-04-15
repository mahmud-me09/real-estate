import { useForm } from 'react-hook-form';
import NavBar from '../Components/NavBar';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
		<>
			<Helmet><title>Luxury Living | Register</title></Helmet>
			<form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder="Name"
					{...register("Name", { required: true })}
				/>
				<input
					type="url"
					placeholder="Photo URL"
					{...register("Photo URL", { required: true })}
				/>
				<input
					type="text"
					placeholder="Email"
					{...register("Email", {
						required: true,
						pattern: /^\S+@\S+$/i,
					})}
				/>
				<input
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
				<input type="submit" />
			</form>
		</>
  );
};

export default Register;