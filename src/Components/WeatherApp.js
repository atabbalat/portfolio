import React, { useState } from 'react'

const WeatherApp = () => {
  return (
    <div className='weather-app'>
      <p>
        Weather influences our daily lives more than we often realize - from
        determining our choice of clothing to planning outdoor activities.
        Realizing the necessity of easily accessible weather information.
      </p>
      <p>
        The Weather App is a user-friendly application that allows you to get
        comprehensive weather data for any city or zip code in the US at your
        fingertips. It leverages the OpenWeatherMap's API, a powerful tool that
        provides real-time weather data. As a user, you'll be able to access the
        current, high, and low temperatures, humidity levels, wind speed, wind
        direction, and even get a brief description of the prevailing weather
        for your selected location.
      </p>
      <p>
        A key advantage of this application is its adaptability to user
        preferences. You can enter either a city name or a zip code, and choose
        your preferred temperature unit among Celsius, Fahrenheit, or Kelvin.
        This ensures that the weather information you receive is customized to
        your preference. Also, after providing the weather data for a location,
        the app prompts the user to input another query if desired, offering a
        continuous user experience.
      </p>
      <p>
        The application, designed in Python, ensures user-friendly experiences
        and precise weather reports. It follows standard conventions and has
        inbuilt error handling mechanisms to manage potential data fetching
        issues, making it highly reliable.
      </p>
      <br></br>
      <a
        href='https://github.com/atabbalat/DSPortfolio/tree/master/1%20-%20WeatherApp'
        className='repository-link'
        target='_blank'
        rel='noreferrer'
      >
        Link To Repository
      </a>
    </div>
  )
}

export default WeatherApp
