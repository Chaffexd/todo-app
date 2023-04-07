import React, { useState, useContext } from 'react';
import ThemeContext from './context/theme-context';
import Moon from './components/Moon';
import Sun from './components/Sun';
import lightBg from './images/bg-desktop-light.jpg';
import darkBg from './images/bg-desktop-dark.jpg';
import './App.css'
import Todo from './components/Todo';

function App(props) {
  // theme
  const [theme, setTheme] = useState("light");
  const toggleThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle: toggleThemeHandler }}>
      <div className={theme === "light" ? "App" : "darkTheme"}>
        <img src={theme === "light" ? lightBg : darkBg } />
        <div className="toDoContainer">
          <div className="title">
            <h1>T O D O</h1>
            {theme === "light" ? <Moon onClick={toggleThemeHandler} /> : <Sun onClick={toggleThemeHandler} />}
          </div>
          <div className="toDoItems">
            <Todo />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
