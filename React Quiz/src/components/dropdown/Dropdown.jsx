import React from 'react'
import './Dropdown.css'

const Dropdown = ({data, setDiffucultyChange}) => {
  return (
    <div className='dropdown'>
      <select onChange={e => setDiffucultyChange(e.target.value)} name="" id="">
        {
            data.map((dt,i) => (
                <option value={dt}>{dt}</option>
            ))
        }
      </select>
    </div>
  )
}

export default Dropdown
