import React, { useState } from 'react'
import Dropdown from '../../components/dropdown/Dropdown'
import "./Introduce.css"
import {useNavigate} from 'react-router-dom'

const Introduce = () => {
    const diffuculty = ["easy", "medium", "hard"]
    const [diffucultyChange, setDiffucultyChange] = useState("")
    const navigate = useNavigate()
    const TOTAL_QUESTİONS = 10

    const startQuiz = () => {
        if(diffucultyChange) {
            navigate(`/quiz/${diffucultyChange}/${TOTAL_QUESTİONS}`)
        }
    }

  return (
    <div className='introduce'>
      <div className="introduce-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg" alt="" />
        <Dropdown data= {diffuculty} setDiffucultyChange={setDiffucultyChange}/>
        <div onClick={startQuiz} className='introduce-btn'>Quize başla</div>
      </div>
    </div>
  )
}

export default Introduce
