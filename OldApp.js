import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Components
import Header from './Header'
import WeatherApp from './Components/WeatherApp'
import Home from './Components/Home'
import CovidAnalysis from './Components/CovidAnalysis'
import InsuranceModeling from './Components/InsuranceModeling'
import DiabetesModeling from './Components/DiabetesModeling'
import NeuralNetwork from './Components/NeuralNetwork'
import MovieApp from './Components/MovieApp'
import ChatBot from './Components/ChatBot'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/weatherapp' element={<WeatherApp />} />
          <Route path='/covidanalysis' element={<CovidAnalysis />} />
          <Route path='/insurancemodeling' element={<InsuranceModeling />} />
          <Route path='/diabetesmodeling' element={<DiabetesModeling />} />
          <Route path='/neuralnetwork' element={<NeuralNetwork />} />
          <Route path='/movieapp' element={<MovieApp />} />
          <Route path='/chatbot' element={<ChatBot />} />
          <Route path='*' element={<h1>Default or 404 Page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
