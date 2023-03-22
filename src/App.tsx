import { useState } from 'react'
import { MenuTitle } from "./components/MenuTitle"
import { GiBlackBook } from "react-icons/gi";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App border-2 flex p-2 bg-neutral-900 m-0">
      <section className='menu-section border-2 bg-white'>
      <ul>
        <li className='menu-title-container cursor-pointer'>
          <GiBlackBook />
          <MenuTitle title="Bases" />
        </li>
        <li className='menu-title-container cursor-pointer'>
          <GiBlackBook />
          <MenuTitle title="Tutoriales" />
        </li>
        <li className='menu-title-container cursor-pointer'>
          <GiBlackBook />
          <MenuTitle title="Recursos" />
        </li>
      </ul>
      </section>
        
    <section className='content-section border-2 bg-white'>
      <h1><span className="text-5xl font-bold">JS</span>GameDev<span className="text-5xl font-bold">ES</span></h1>
      <h2>Portal en español sobre desarrollo de video juegos con Javascript</h2>
      <p>Este sitio web está desarrollado con ❤️ usando  Vite, React, Typescript y Tailwind</p>
    </section>

      
    </div>
  )
}

export default App
