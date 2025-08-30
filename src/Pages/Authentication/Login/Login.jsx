import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";  
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from || '/'

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            await signIn(data.email, data.password);


            Swal.fire({
                title: "Login Successful 🎉",
                text: "Welcome back to RootX!",
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            });

            setTimeout(() => navigate(from), 1500);

        } catch (err) {
            console.error("Login failed", err.message);

            // ✅ SweetAlert Error Notification
            Swal.fire({
                title: "Login Failed ❌",
                text: err.message || "Please check your credentials",
                icon: "error",
                confirmButtonText: "Try Again"
            });
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center ">
            <div className="card w-full max-w-md shadow-2xl bg-base-100 p-6">
                <h2 className="text-3xl font-bold text-center  mb-6">Login to RootX</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Email */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className="input input-bordered w-full"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Minimum 6 characters" }
                            })}
                            className="input input-bordered w-full"
                            placeholder="Enter your password"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-primary w-full">Login</button>
                </form>

                {/* Register Redirect */}
                <p className="text-center mt-4">
                    New here?
                    <Link state={{ from }} to="/register" className="text-primary font-semibold ml-1 hover:underline">
                        Create an account
                    </Link>
                </p>

                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;
