'use client'

import { useEffect, useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

const ThemeToggleButton = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-bs-theme", savedTheme);
        }

        const toggleButton = document.getElementById("theme-toggle-button");

        const toggleTheme = () => {
            const currentTheme = theme;
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-bs-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            setTheme(newTheme);
        };

        toggleButton.addEventListener("click", toggleTheme);

        return () => {
            toggleButton.removeEventListener("click", toggleTheme);
        };
    }, [theme]);

    return (
        <button id="theme-toggle-button" aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}>
            {theme === "dark" ? <IoMdSunny size={25} /> : <IoMdMoon size={25} />}
        </button>
    );
};

export default ThemeToggleButton;
