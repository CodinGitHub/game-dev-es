import { useState } from 'react'
import { MenuTitle } from "./components/MenuTitle"
import { GiBlackBook } from "react-icons/gi";
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section className='menu-section'>
      <ul>
        <li className='menu-title-container'>
          <GiBlackBook />
          <MenuTitle title="Bases" />
        </li>
        <li className='menu-title-container'>
          <GiBlackBook />
          <MenuTitle title="Tutoriales" />
        </li>
        <li className='menu-title-container'>
          <GiBlackBook />
          <MenuTitle title="Recursos" />
        </li>
      </ul>
      </section>
        
    <section className='content-section'>
      <h1><span className="text-5xl font-bold">JS</span>GameDev<span className="text-5xl font-bold">ES</span></h1>
      <h2>Portal en español sobre desarrollo de video juegos con Javascript</h2>
      <p>Este sitio web está desarrollado con ❤️ usando  Vite, React, Typescript y Tailwind</p>
    </section>

      
    </div>
  )
}

export default App
