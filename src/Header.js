import React from 'react'
import { Link } from 'react-router-dom'
import abedLogo from './Components/Abed_Artboard_14.png'
function Header() {
  return (
    <div className='App-header'>
      <div className='abed-logo'>
        <img src={abedLogo}></img>
      </div>
      <div className='nav-container'>
        <div className='link-div'>
          <Link id='link' to='/portfolio' title='Home'>
            Home
          </Link>
        </div>
        <div className='link-div'>
          <Link id='link' to='/weatherapp'>
            WeatherApp
          </Link>
        </div>
        <div className='link-div'>
          <Link id='link' to='/covidanalysis'>
            Covid Analysis
          </Link>
        </div>
        <div className='link-div'>
          <Link
            id='link'
            to='/insurancemodeling'
            title='Insurance Exposure Predictive Modeling'
          >
            Insurance Exposure Predictive Modeling
          </Link>
        </div>
        <div className='link-div'>
          <Link id='link' to='/diabetesmodeling'>
            Diabetes Predictive Modeling
          </Link>
        </div>
        <div className='link-div'>
          <Link id='link' to='/neuralnetwork'>
            Neural Network Image Classification
          </Link>
        </div>
        <div className='link-div'>
          <Link id='link' to='/movieapp'>
            Movie Recommender App
          </Link>
        </div>
        <div className='link-div'>
          <Link id='link' to='/chatbot'>
            Chat Bot
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
