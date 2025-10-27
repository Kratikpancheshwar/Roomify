import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { login } from "../../services/operations/AUTH_API";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const loginForm = ({ setPageState }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "aryanaswal45@gmail.com",
		password: "123",
	});
	const changeHandler = (e) => {
		const event = e.target;
		setFormData((prev) => {
			return { ...prev, [event.name]: event.value };
		});
	};
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(formData, navigate));
	};
	return (
		<div className="w-full">
			<form className="space-y-3 md:space-y-4" onSubmit={submitHandler}>
				<div className="flex flex-col">
					<label className="mb-1 text-[#1F2937] text-sm md:text-base">
						Email
					</label>
					<input
						type="email"
						className="w-full px-3 md:px-4 py-2 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
						placeholder="Enter your email"
						onChange={changeHandler}
						value={formData.email}
						name="email"
						required
					/>
				</div>

				<div className="flex flex-col">
					<label className="mb-1 text-[#1F2937] text-sm md:text-base">
						Password
					</label>
					<div className="relative flex justify-end items-center">
						<input
							type={showPassword ? "text" : "password"}
							className="w-full px-3 md:px-4 py-2 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
							placeholder="Enter your password"
							onChange={changeHandler}
							value={formData.password}
							name="password"
							required
						/>
						<button
							type="button"
							className="absolute mr-2 md:mr-4"
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? (
								<IoMdEyeOff className="text-xl md:text-2xl" />
							) : (
								<IoMdEye className="text-xl md:text-2xl" />
							)}
						</button>
					</div>
				</div>

				{/* Remember Me and Forgot Password */}
				<div className="flex justify-between items-center text-sm md:text-base">
					<div className="flex items-center">
						<input
							type="checkbox"
							id="rememberMe"
							className="mr-2 rounded border-[#D1D5DB]"
						/>
						<label htmlFor="rememberMe" className="text-[#1F2937]">
							Remember me
						</label>
					</div>
					<a className="text-[#2563EB] cursor-pointer">Forgot Password?</a>
				</div>

				{/* Login Button */}
				<button
					type="submit"
					className="w-full py-2 text-white bg-[#2563EB] rounded-lg hover:bg-[#1D4ED8] transition duration-200 text-sm md:text-base"
				>
					Log in
				</button>
			</form>

			{/* Footer Link */}
			<p className="text-center text-[#6B7280] mt-3 text-sm md:text-base">
				Don't have an account?{" "}
				<span
					className="text-[#2563EB] cursor-pointer"
					onClick={() => setPageState("signup")}
				>
					Create an account
				</span>
			</p>
		</div>
	);
};

export default loginForm;
