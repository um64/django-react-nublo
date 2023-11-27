import React from 'react'
import { useNavigate } from 'react-router-dom'
const About=()=> {
    const navigate = useNavigate(
    
        )
  return (
    <div>
    <p>About</p>
    <button onClick={()=>navigate("/")}>Go to Home</button>
    </div>
  )
}

export default About