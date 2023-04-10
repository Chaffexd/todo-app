import React, { useState, useEffect } from 'react';
import ThemeContext from './context/theme-context';
import Moon from './components/Moon';
import Sun from './components/Sun';
import lightBg from './images/bg-desktop-light.jpg';
import darkBg from './images/bg-desktop-dark.jpg';
import mobileLightBg from './images/bg-mobile-light.jpg';
import mobileDarkBg from './images/bg-mobile-dark.jpg';
import './App.css'
import Todo from './components/Todo';
import ToDoMobile from './components/ToDoMobile';

function App(props) {
  // theme
  const [theme, setTheme] = useState("light");
  const toggleThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const updateWidth = () => {
    setDesktop(window.innerWidth > 1000);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return() => {window.removeEventListener("resize", updateWidth)}
  }, []);


  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle: toggleThemeHandler }}>
      <div className={theme === "light" ? "App" : "darkTheme"}>
        { isDesktop ?
          <img src={theme === "light" ? lightBg : darkBg } />
          : 
          <img src={theme === "light" ? mobileLightBg : mobileDarkBg } className="mobileBg" />
        }
        <div className="toDoContainer">
          <div className="title">
            <h1>T O D O</h1>
            {theme === "light" ? <Moon onClick={toggleThemeHandler} /> : <Sun onClick={toggleThemeHandler} />}
          </div>
          <div className="toDoItems">
            {isDesktop ? <Todo isDesktop={isDesktop} /> : <ToDoMobile /> }
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
