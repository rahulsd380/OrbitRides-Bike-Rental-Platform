import { useEffect, useState } from "react";
import sun from "../../assets/Icons/sun.svg";
import moon from "../../assets/Icons/moon.svg";


const ThemeSwitcher = () => {
    const [mode, setMode] = useState("light");
  const changeTheme = () => {
    const html = document.documentElement;
    if (mode === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };

  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "light";
    setMode(currentMode);
    const html = document.documentElement;
    html.classList.add(currentMode);
  }, []);

    return (
        <div>
            {mode === "dark" ? (
              <img
                onClick={changeTheme}
                src={sun}
                alt="sun-icon"
                className="size-9 cursor-pointer"
              />
            ) : (
              <img
                onClick={changeTheme}
                src={moon}
                alt="sun-icon"
                className="size-8 cursor-pointer"
              />
            )}
        </div>
    );
};

export default ThemeSwitcher;