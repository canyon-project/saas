// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import {Typography} from "./auto-imports";
import Login from "./login.tsx";

const {Title} = Typography
function App() {
  // const [count, setCount] = useState(0)
  console.log(Typography,'Typography')
  return (
      <div>
          <Login></Login>
      </div>
  )
}

export default App
