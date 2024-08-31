import React from 'react'
import "./Home.scss"
import Calculator from '../Calculator/Calculator'
import Result from '../Result/Result'
const Home = () => {
  return (
    <div className='home'>
         <Calculator />
         <Result/>
    </div>
  )
}

export default Home
