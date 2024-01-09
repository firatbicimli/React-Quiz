import React, { useState } from 'react'
import Dropdown from '../../components/dropdown/Dropdown'
import "./Introduce.css"

const Introduce = () => {
    const diffuculty = ["easy", "medium", "hard"]
    const [diffucultyChange, setDiffucultyChange] = useState("")
  return (
    <div className='introduce'>
      <div className="introduce-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg" alt="" />
        <Dropdown data= {diffuculty} setDiffucultyChange={setDiffucultyChange}/>
        <div className='introduce-btn'>Quize başla</div>
      </div>
    </div>
  )
}

export default Introduce
