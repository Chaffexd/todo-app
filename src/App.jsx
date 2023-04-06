
import Moon from './components/Moon';
import lightBg from './images/bg-desktop-light.jpg';
import './App.css'
import Todo from './components/Todo';

function App() {

  return (
    <div className="App">
      <img src={lightBg} />
      <div className="toDoContainer">
        <div className="title">
          <h1>T O D O</h1>
          <Moon />
        </div>
        <div className="toDoItems">
          <Todo />
        </div>
      </div>
    </div>
  )
}

export default App
