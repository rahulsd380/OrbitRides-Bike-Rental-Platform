import { useGetMeQuery, useUpdateProfileMutation } from "../../../redux/Features/Auth/authApi";
import profileImg from "../../../assets/Images/about-us-img1.jpg";
import supportIcon from "../../../assets/Icons/supportIcon.svg";
import seller from "../../../assets/Icons/seller.svg";
import payment from "../../../assets/Icons/payment.svg";
import report from "../../../assets/Icons/report.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button/Button";
import DashboardStatusHero from "../../../components/DashboardStatusHero/DashboardStatusHero";

const Profile = () => {
    const [updateProfile, {isLoading:isProfileUpdating}] = useUpdateProfileMutation();
    const [profileTab, setProfileTab] = useState("PersonalDetails");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data:profileData, isLoading } = useGetMeQuery({});

  const handleUpdateProfile = async (data) => {

    const profileUpdatedData = {
        name : data.name,
        email : data.email,
        phone : data.phone,
        address : data.address,
    };

    console.log(profileUpdatedData);

    try{
        const response = await updateProfile(profileUpdatedData).unwrap();
        console.log(response);
      if(response.success) {
        console.log("Updated successfully");
      }
      }catch(err){
        console.log(err)
        return;
      }
  }


  const supportDetails = [
    {
      icon: supportIcon,
      label: "Get Support",
    },
    {
      icon: payment,
      label: "Payment History",
    },
    {
      icon: report,
      label: "Report",
    },
    {
      icon: seller,
      label: "Join as Seller",
    },
    {
      icon: supportIcon,
      label: "Contact Now",
    },
  ];


  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    <div>
      <DashboardStatusHero/>
      <div className="font-SpaceGrotesk flex flex-col lg:flex-row gap-10 mt-10">
      {/* Left side */}
      <div className="bg-white p-4 rounded-xl w-full lg:w-[40%]">
        <div className="flex flex-col gap-4 items-center">
          {/* Profile img */}
          <div className="size-32 rounded-xl">
            <img src={profileImg} alt="" className="size-32 rounded-xl" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#85A98D] text-center">
            {profileData?.data?.name}
            </h1>
            <div className="flex items-center justify-center">
              <p className="bg-[#364F53] px-3 py-1 text-white text-xs rounded-3xl w-fit">
              {profileData?.data?.email}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          {supportDetails.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <img src={item.icon} alt="" className="size-5" />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side */}
      <div className="bg-white p-4 rounded-xl w-full lg:w-[60%]">
        <h1 className="text-xl font-bold text-[#85A98D]">
          Profile Informations
        </h1>

          {/* Tabs */}
        <div className="flex items-center gap-7 mt-3 border-b pb-3">
          <button
            onClick={() => setProfileTab("PersonalDetails")}
            className={`${
              profileTab === "PersonalDetails"
                ? "bg-[#85A98D] border-[[#85A98D] text-white"
                : "bg-[#DCDFE5]/30 border-[#364F53]/20  text-[#364F53]"
            }  border text-sm px-4 py-1 rounded-full`}
          >
            Personal Details
          </button>
          <button
            onClick={() => setProfileTab("PaymentMethods")}
            className={`${
              profileTab === "PaymentMethods"
                ? "bg-[#85A98D] border-[[#85A98D] text-white"
                : "bg-[#DCDFE5]/30 border-[#364F53]/20  text-[#364F53]"
            }  border text-sm px-4 py-1 rounded-full`}
          >
            Payment Methods
          </button>
          <button
            onClick={() => setProfileTab("PaymentHistory")}
            className={`${
              profileTab === "PaymentHistory"
                ? "bg-[#85A98D] border-[[#85A98D] text-white"
                : "bg-[#DCDFE5]/30 border-[#364F53]/20  text-[#364F53]"
            }  border text-sm px-4 py-1 rounded-full`}
          >
            Payment History
          </button>
        </div>

        {profileTab === "PersonalDetails" && 
    <div>
      <form onSubmit={handleSubmit(handleUpdateProfile)} className="mt-7">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Name */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Name</p>
            <input
              {...register("name", { required: "Name is required" })}
              defaultValue={profileData?.data?.name}
              type="text"
              id="name"
              className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
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
            <p className="text-body-text font-medium text-sm">Email</p>
            <input
              {...register("email", { required: "Email is required" })}
              defaultValue={profileData?.data?.email}
              type="text"
              id="email"
              className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-rose-500 text-start">
                {errors.email.message as string}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-4">
          {/* Address */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Address</p>
            <input
              {...register("address", { required: "Address is required" })}
              defaultValue={profileData?.data?.address}
              type="text"
              id="address"
              className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter your Address"
            />
            {errors.address && (
              <span className="text-rose-500 text-start">
                {errors.address.message as string}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Phone Number</p>
            <input
              {...register("phone", { required: "Phone Number is required" })}
              defaultValue={profileData?.data?.phone}
              type="text"
              id="phone"
              className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter your Phone Number"
            />
            {errors.phone && (
              <span className="text-rose-500 text-start">
                {errors.phone.message as string}
              </span>
            )}
          </div>
        </div>

        <div className="mt-7 flex gap-5">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">
            {
                isProfileUpdating ? "Loading..." : "Save Changes"
            }
            </Button>
        </div>
      </form>
    </div>
}



      </div>
    </div>
    </div>
  );
};

export default Profile;
