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
import PageContainer from './PageContainer'

function App() {
  const appStyle = { 'font-family': 'Titillium Web' }
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <PageContainer title={'Data Science Portfolio'}>
                <h5 style={appStyle}>By Abed Tabbalat</h5>
                <Home />
              </PageContainer>
            }
          />
          <Route
            path='/weatherapp'
            element={
              <PageContainer title='Weather App'>
                <h5 style={appStyle}>By Abed Tabbalat</h5>
                <WeatherApp />
              </PageContainer>
            }
          />
          <Route
            path='/covidanalysis'
            element={
              <PageContainer title='Covid Analysis'>
                <h5 style={appStyle}>By Abed Tabbalat</h5>
                <CovidAnalysis />
              </PageContainer>
            }
          />
          <Route
            path='/insurancemodeling'
            element={
              <PageContainer title='Insurance Exposure Predictive Modeling'>
                <h5 style={appStyle}>By Abed Tabbalat</h5>
                <InsuranceModeling />
              </PageContainer>
            }
          />
          <Route
            path='/diabetesmodeling'
            element={
              <PageContainer title='Diabetes Predictive Modeling'>
                <h5 style={appStyle}>By Abed Tabbalat</h5>
                <DiabetesModeling />
              </PageContainer>
            }
          />
          <Route
            path='/neuralnetwork'
            element={
              <PageContainer title='Neural Network Image Classification'>
                <h5 style={appStyle}>By Abed Tabbalat</h5>
                <NeuralNetwork />
              </PageContainer>
            }
          />
          <Route
            path='/movieapp'
            element={
              <PageContainer title='Movie Recommender App'>
                <h5 style={appStyle}>By Abed Tabbalat</h5>
                <MovieApp />
              </PageContainer>
            }
          />
          <Route
            path='/chatbot'
            e
            element={
              <PageContainer title='Insurance Chat Bot'>
                <h5 style={appStyle}>By Abed Tabbalat</h5>
                <ChatBot />
              </PageContainer>
            }
          />
          <Route path='*' element={<h1>Default or 404 Page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
