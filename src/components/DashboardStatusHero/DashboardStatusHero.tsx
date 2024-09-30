import { Link } from "react-router-dom";
import hello from "../../assets/Icons/hello.svg";
import { useGetMeQuery } from "../../redux/Features/Auth/authApi";
import DashboardStatusHeroLoader from "../Loaders/DashboardStatusHeroLoader";

const DashboardStatusHero = () => {
  const { data: profileData, isLoading } = useGetMeQuery({});

  if (isLoading) {
    return <DashboardStatusHeroLoader />;
  }

  return (
    <div className="bg-white dark:bg-[#E9ECF2]/10 rounded-lg font-SpaceGrotesk shadow flex flex-col md:flex-row gap-7 md:gap-0 items-center justify-between p-5">
      <div className="max-w-[800px]">
        <h1 className="dark:text-[#D9D9D9]/80 text-[#364F53] text-2xl font-bold">
          Welcome Back,{" "}
          <span className="text-[#85A98D]">{profileData?.data?.name}</span>
        </h1>
        <p className="dark:text-[#D9D9D9]/50 text-[#364F53]/90 font-Nunito mt-2">
          Welcome back! We hope you’re ready for a productive day. If you need
          any assistance or have any questions, we’re here to help. Let's
          achieve great things today!
        </p>

        <Link
          to={`/dashboard/${
            profileData?.data?.role === "user" ? "browse-bikes" : "manage-bikes"
          }`}
        >
          <button className="bg-[#364F53] px-4 py-2 rounded-md text-white mt-4 text-sm">
            {profileData?.data?.role === "user"
              ? "Browse Bikes"
              : "Manage Bikes"}
          </button>
        </Link>
      </div>

      <img src={hello} alt="" className="size-32" />
    </div>
  );
};

export default DashboardStatusHero;
