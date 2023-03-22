import { useState } from 'react'
import { MenuTitle } from "./components/MenuTitle"
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MenuTitle title="Uno" />

      <h1><span className="text-5xl font-bold">JS</span>GameDev<span className="text-5xl font-bold">ES</span></h1>
      <h2>Portal en español sobre desarrollo de video juegos con Javascript</h2>
      <p>Este sitio web está desarrollado usando React, Typescript, Vite</p>
    </div>
  )
}

export default App
