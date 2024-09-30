import { useEffect, useRef, useState } from 'react';
import editProfile from "../../assets/Icons/edit-profile.svg";
import inbox from "../../assets/Icons/inbox.svg";
import setting from "../../assets/Icons/setting2.svg";
import help from "../../assets/Icons/help.svg";
import logoutIcon from "../../assets/Icons/logout.svg";
import myProfile from "../../assets/Icons/my-profile.svg";
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/Features/Auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import profileImg from "../../assets/Images/dumy-profile-img.avif";

const UserDropdown = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const close = (e: MouseEvent) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", close);
        return () => {
            document.removeEventListener("mousedown", close);
        };
    }, []);

    const items = [
        {
            pathname: "My Profile",
            link: "/dashboard/my-profile",
            icon: myProfile,
        },
        {
            pathname: "Edit Profile",
            link: "/dashboard/my-profile",
            icon: editProfile,
        },
        {
            pathname: "Inbox",
            link: "/dashboard/inbox",
            icon: inbox,
        },
        {
            pathname: "Setting",
            link: "/dashboard/setting",
            icon: setting,
        },
        {
            pathname: "Help",
            link: "/dashboard/help",
            icon: help,
        },
    ];

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div ref={dropDownRef} className="relative font-SpaceGrotesk flex justify-center">
            <button onClick={() => setOpen((prev) => !prev)} className="w-full">
                <img src={profileImg} alt="" className="size-11 rounded-full" />
            </button>
            <div
                className={`${
                    open
                        ? "visible translate-y-0 duration-300"
                        : "invisible translate-y-4"
                } absolute top-14 z-50 w-48 bg-white shadow rounded-b-lg py-2 -right-5`}
            >
                {items.map((item, idx) => (
                    <Link to={item.link} key={idx}>
                        <div
                            className={`px-4 py-2 ${
                                open ? "opacity-100 duration-300" : "opacity-0"
                            } hover:text-primary-10 cursor-pointer text-body-text`}
                        >
                            <div className="flex items-center gap-2">
                                <img src={item.icon} alt="" className="size-5" />
                                {item.pathname}
                            </div>
                        </div>
                    </Link>
                ))}

                <div
                    className={`px-4 py-2 ${
                        open ? "opacity-100 duration-300" : "opacity-0"
                    } hover:text-primary-10 cursor-pointer text-body-text border-t border-neutral-55/20`}
                >
                    <div onClick={handleLogout} className="flex items-center gap-2">
                        <img src={logoutIcon} alt="" className="size-5" />
                        Log Out
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDropdown;
