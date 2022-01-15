import React from 'react'

import "../assets/css/pages/home.css"
import icone from "../assets/image/analytics.png"

const Home = () => {
  return (
    <main className='main'>
      <div className='main-home'>
        <img className="main-icone" src={icone} alt="pesquisa" />
        <h1 className='main-title'>React Reacting</h1>
        <p className='main-sobre'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel tellus pulvinar,
          feugiat risus quis, fermentum tellus. Pellentesque posuere enim vitae rhoncus malesuada.
          Etiam suscipit, lorem ut consectetur dictum, odio risus tristique tortor, sed molestie arcu
          lorem quis diam.
        </p>
      </div>
    </main>
  )
}

export default Home