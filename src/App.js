import "./App.css"
import reactIcon from "./logo.svg"

function App() {
  const page = (
    <div>
      <img src={reactIcon} width="100" alt=""></img>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K starts on Github</li>
        <li>Is maintained by facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
  return page
}

export default App
