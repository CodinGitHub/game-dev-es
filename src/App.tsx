import { useState } from 'react'
import { MenuTitle } from "./components/MenuTitle"
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MenuTitle title="Uno" />
      <MenuTitle title="Dos" />
      <h1>JSGameDev</h1>
      <h2>Portal en español sobre desarrollo de video juegos con Javascript</h2>
      <p>Este sitio web está desarrollado usando React, Typescript, Vite</p>
    </div>
  )
}

export default App
