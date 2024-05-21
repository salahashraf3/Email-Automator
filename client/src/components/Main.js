import React, { useState } from 'react'
import light from "../assets/light.png";
import dark from "../assets/dark.png";

const Main = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(true);
    const themeToggle = () => {
      setDarkTheme(!darkTheme);
    };
  
  
  
    return (
      <div
        className={`home_container ${darkTheme ? "dark-theme" : "light-theme"}`}
      >
        <img
          src={darkTheme ? dark : light}
          alt="background"
          className={`background ${darkTheme ? "dark" : "light"}`}
        />
        <button
          onClick={themeToggle}
          className="theme_btn"
          style={{ backgroundColor: darkTheme ? "white" : "black" }}
        >
          {darkTheme ? "☀️" : "🌙"}
        </button>
  
        
  
        {children}
  
        
      </div>
    );
}

export default Main