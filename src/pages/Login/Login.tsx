import { useState } from "react";
import { useForm } from "react-hook-form";
import eyeOpen from "../../assets/Icons/eye-open.svg";
import eyeClosed from "../../assets/Icons/eye-closed.svg";
import google from "../../assets/Icons/google.svg";
import facebook from "../../assets/Icons/facebook.svg";
import Button from "../../components/Button/Button";
import logo from "../../assets/Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import HamburgerMenu from "../../components/Navbar/HamburgerMenu";
import Lottie from "lottie-react";
import signupAnimation from "../../assets/signup-animation.json";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/Features/Auth/authSlice";
import { useLoginMutation } from "../../redux/Features/Auth/authApi";
import { verifyToken } from "../../utils/verifyToken";
import { CustomToast } from "../../components/ToastMessage/ToastMessage";
import successIcon from "../../assets/Icons/successIcon.svg"
import errorIcon from "../../assets/Icons/error.svg"

type TLoginData = {
  email: string;
  password: string;
};

const Login = () => {
  const [login, {isLoading : isLoginIn}] = useLoginMutation();

  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>();

  const handleLogin = async (data: TLoginData) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };

    try{
      const response = await login(loginData).unwrap();
    const user = verifyToken(response.data?.accessToken);
    dispatch(setUser({ user, token: response.data.accessToken }));
    CustomToast({
      title: "Welcome back!!",
      message: "Explore new bikes",
      icon: successIcon,
    });
    navigate("/dashboard");
    }catch(err){
      CustomToast({
        title: "Invalid email or password",
        icon: errorIcon,
      });
    }
  };


  return (
    <div className="font-SpaceGrotesk flex flex-col lg:flex-row gap-20">
      <div className="w-full lg:w-[50%] bg-gradient-to-r from-teal-600 to-teal-800 rounded-tr-none lg:rounded-tr-[80px] p-6 h-full xl:h-screen">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img className="w-16" src={logo} alt="" />
          <h1 className="text-[#f5f5f5]/90 font-bold text-[27px] white">
            OrbitRides
          </h1>
        </Link>

        <h1 className="text-3xl font-bold text-[#f5f5f5]/90 mt-5">
          Welcome To OrbitRides <br /> Join Us Now!
        </h1>

        <div className="w-full max-w-[400px] mx-auto mt-5">
          <Lottie animationData={signupAnimation} loop={true} />
        </div>
      </div>

      <div className="w-full h-full flex flex-col lg:w-[50%] py-8">
        <div className="flex justify-end px-8 lg:px-36">
          <div className="flex items-center gap-3">
            <Link
              to={"/signup"}
              className="hover:underline hover:text-[#85A98D]"
            >
              Don't have an account?
            </Link>
            <HamburgerMenu />
          </div>
        </div>

        <div className="flex items-center justify-center mt-7 w-full p-8 lg:p-0 lg:pr-36">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col gap-4 w-full"
          >
            <div>
              <h1 className="font-bold text-[27px]">Login Your Account</h1>
              <p className="max-w-[500px] text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing{" "}
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1 w-full">
              <p className="text-body-text font-medium text-sm">Email</p>
              <input
                {...register("email", { required: "Email is required" })}
                type="text"
                id="email"
                className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-warning-10 text-start">
                  {errors.email.message as string}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1 w-full relative">
              <p className="text-body-text font-medium text-sm">Password</p>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                type={`${showPassword ? "text" : "password"}`}
                id="password"
                className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
                placeholder="Password must be at least 8 characters"
              />
              {errors.password && (
                <span className="text-warning-10 text-start">
                  {errors.password.message as string}
                </span>
              )}
              {showPassword ? (
                <img
                  onClick={() => setShowPassword(false)}
                  src={eyeClosed}
                  alt="Hide password"
                  className="w-[18px] absolute top-9 bottom-0 right-4 cursor-pointer"
                />
              ) : (
                <img
                  onClick={() => setShowPassword(true)}
                  src={eyeOpen}
                  alt="Show password"
                  className="w-[18px] absolute top-9 bottom-0 right-4 cursor-pointer"
                />
              )}
            </div>

              {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <input
                  // {...register("rememberMe")}
                  type="checkbox"
                  id="rememberMe"
                  className="accent-[#85A98D] size-4"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-body-text font-medium"
                >
                  Remember Me
                </label>
              </div>

              {/* Forgot password */}
              <p className="text-[#85A98D] font-medium text-end mt-2 cursor-pointer hover:underline">
                Forgot Password?
              </p>
            </div>

            <Button variant="primary">
              {
                isLoginIn ? "Login In..." : "Login"
              }
            </Button>
            <Button
              variant="secondary"
              classNames="flex items-center gap-3 justify-center"
            >
              Continue With Google
              <img src={google} alt="" className="size-6" />
            </Button>
            <Button
              variant="secondary"
              classNames="flex items-center gap-3 justify-center"
            >
              Continue With Facebook
              <img src={facebook} alt="" className="size-6" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
