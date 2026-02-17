import { useState, useEffect } from "react";
import { portfolioData } from "../models/PortfolioData";

export const usePortfolioViewModel = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setData(portfolioData);
      setLoading(false);
    }, 500);

    // Initial theme check
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    const theme = newMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return {
    data,
    loading,
    isDarkMode,
    toggleTheme,
    profile: data?.profile,
    skills: data?.skills,
    projects: data?.projects,
    experience: data?.experience,
  };
};
