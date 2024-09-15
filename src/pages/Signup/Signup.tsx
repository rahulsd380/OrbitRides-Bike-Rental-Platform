import { useState } from "react";
import { useForm } from "react-hook-form";
import eyeOpen from "../../assets/Icons/eye-open.svg";
import eyeClosed from "../../assets/Icons/eye-closed.svg";
import Button from "../../components/Button/Button";
import logo from "../../assets/Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import HamburgerMenu from "../../components/Navbar/HamburgerMenu";
import Lottie from "lottie-react";
import signupAnimation from "../../assets/signup-animation.json"
import { useSignupMutation } from "../../redux/Features/Auth/authApi";
import successIcon from "../../assets/Icons/successIcon.svg"
import { CustomToast } from "../../components/ToastMessage/ToastMessage";

type TSignupData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
};

const Signup = () => {

  const [signup, {isLoading : isSigningUp}] = useSignupMutation();
  
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignupData>();

  const handleSignup = async (data: TSignupData) => {
    const signupData = {
      name: data.name,
      email: data.email,
      address: data.address,
      phone: data.phone,
      password: data.password,
    };

    try{
      const response = await signup(signupData).unwrap();
      console.log(response);
    if(response.success) {
      CustomToast({
        title: "Welcoem to OrbitRides!!",
        message: "Explore new bikes",
        icon: successIcon,
      });
     
      console.log("Signup successful");
      navigate("/login");
    }
    }catch(err){
      console.log(err)
      return;
    }
    
  };


  return (
    <div className="font-SpaceGrotesk flex flex-col lg:flex-row gap-20">
      <div className="w-full lg:w-[50%] bg-gradient-to-r from-teal-600 to-teal-800 rounded-tr-none lg:rounded-r-[80px] p-6 h-full xl:h-screen">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img className="w-16" src={logo} alt="" />
          <h1 className="text-[#f5f5f5]/90 font-bold text-[27px] white">OrbitRides</h1>
        </Link>

        <h1 className="text-3xl font-bold text-[#f5f5f5]/90 mt-5">
          Welcome To OrbitRides <br /> Join Us Now!
        </h1>






        <div className="w-full max-w-[400px] mx-auto mt-5">
              <Lottie animationData={signupAnimation} loop={true} />
            </div>
      </div>

      <div className="w-full lg:w-[50%] py-8">
        <div className="flex justify-end px-8 lg:px-36">
          <div className="flex items-center gap-3">
            <Link to={"/login"} className="hover:underline hover:text-[#85A98D] text-[#364F53] dark:text-[#D9D9D9]/70">Already have an account?</Link>
          <HamburgerMenu />
          </div>
        </div>

<div className="flex items-center mt-7 w-full p-8 lg:p-0 lg:pr-36">
        <form
          onSubmit={handleSubmit(handleSignup)}
          className="flex flex-col gap-4 w-full"
        >
          <div>
            <h1 className="font-bold text-[27px] dark:text-[#D9D9D9]/80 text-[#364F53]">Create New Account</h1>
            <p className="max-w-[500px] text-sm text-[#364F53] dark:text-[#D9D9D9]/70">
              Lorem ipsum dolor sit amet consectetur adipisicing{" "}
            </p>
          </div>

          {/* Name */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm text-[#364F53] dark:text-[#D9D9D9]/70">Name</p>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              id="name"
              className="bg-[#E9ECF2]/20 dark:bg-[#E9ECF2]/10  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full text-[#364F53] dark:text-[#D9D9D9]/70"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="text-rose-500 text-start">
                {errors.name.message as string}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm text-[#364F53] dark:text-[#D9D9D9]/70">Email</p>
            <input
              {...register("email", { required: "Email is required" })}
              type="text"
              id="email"
              className="bg-[#E9ECF2]/20 dark:bg-[#E9ECF2]/10  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full text-[#364F53] dark:text-[#D9D9D9]/70"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-rose-500 text-start">
                {errors.email.message as string}
              </span>
            )}
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm text-[#364F53] dark:text-[#D9D9D9]/70">Address</p>
            <input
              {...register("address", { required: "Address is required" })}
              type="text"
              id="address"
              className="bg-[#E9ECF2]/20 dark:bg-[#E9ECF2]/10  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full text-[#364F53] dark:text-[#D9D9D9]/70"
              placeholder="Enter your Address"
            />
            {errors.address && (
              <span className="text-rose-500 text-start">
                {errors.address.message as string}
              </span>
            )}
          </div>

          {/* Password & Phone number */}
          <div className="flex flex-col lg:flex-row items-center gap-3">
            {/* Phone Number */}
            <div className="flex flex-col gap-1 w-full">
              <p className="text-body-text font-medium text-sm text-[#364F53] dark:text-[#D9D9D9]/70">Phone Number</p>
              <input
                {...register("phone", { required: "Phone Number is required" })}
                type="text"
                id="phone"
                className="bg-[#E9ECF2]/20 dark:bg-[#E9ECF2]/10  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full text-[#364F53] dark:text-[#D9D9D9]/70"
                placeholder="Enter your Phone Number"
              />
              {errors.phone && (
                <span className="text-rose-500 text-start">
                  {errors.phone.message as string}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1 w-full relative">
              <p className="text-body-text font-medium text-sm text-[#364F53] dark:text-[#D9D9D9]/70">Password</p>
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
                className="bg-[#E9ECF2]/20 dark:bg-[#E9ECF2]/10  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full text-[#364F53] dark:text-[#D9D9D9]/70"
                placeholder="Password must be at least 8 characters"
              />
              {errors.password && (
                <span className="text-rose-500 text-start">
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
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              // {...register("rememberMe")}
              type="checkbox"
              id="rememberMe"
              className="accent-[#85A98D] size-4"
            />
            <label htmlFor="rememberMe" className="text-body-text font-medium text-[#364F53] dark:text-[#D9D9D9]/70">
              I agree with the{" "}
              <span className="text-[#85A98D] hover:underline">
                Terms & Condition
              </span>{" "}
              and{" "}
              <span className="text-[#85A98D] hover:underline">
                Privacy Policy
              </span>
            </label>
          </div>

          <Button variant="primary">
            {
              isSigningUp ? "Signing Up" : "Sign Up"
            }
          </Button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
