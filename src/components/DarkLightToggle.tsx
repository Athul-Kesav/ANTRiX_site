"use client";

import { useEffect, useState } from "react";
import "./DL_Toggle.css";

export default function DL_Toggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Initialize theme from localStorage or default to light
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme as 'light' | 'dark');
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  function changeTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    console.log(`Theme Changed to ${newTheme}`);
  }

  return (
    <label className="switch">
      <input 
        type="checkbox" 
        onChange={changeTheme} 
        checked={theme === "dark"} 
      />
      <span className="slider"></span>
    </label>
  );
}
