import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-div'>
      <br></br>
      <div className='home-list'>
        <p>Greetings, and welcome to my Data Science portfolio!</p>
        <p>
          {' '}
          In the contemporary world where data drives virtually every aspect of
          our lives, having a robust understanding and command over data becomes
          pivotal in all fields. My name is Abed Tabbalat and I am currently
          immersed in the insurance sector, working extensively in Financial
          Planning & Analysis (FP&A).
        </p>
        <p>
          {' '}
          My journey in understanding the remarkable power of data commenced in
          2019. It was during this time when I understood how instrumental data
          is within the insurance industry. I realized how efficacious data
          management can influence key financial decisions, including budgeting
          and forecasting. This inspired me to embark on the enriching journey
          of obtaining a master's degree in Data Science.
        </p>
        <p>
          Starting from a position of novice understanding, I dedicated three
          relentless years to in-depth learning, late-night studying, and
          practical applications. As a result, I acquired proficiency in
          performing intricate data-focused tasks that can provide insightful
          recommendations to decision-makers.
        </p>
        <p>
          {' '}
          In my course of study, I had the opportunity to work on a plethora of
          projects, each presenting unique challenges and rewarding experiences.
          For this portfolio, I've meticulously curated a selection of my top
          seven diverse projects. These projects demonstrate a broad spectrum of
          skills, technologies, and areas of focus, offering the most insightful
          glimpse into my competencies.
        </p>
        <br />
        <h3>Weather App</h3>
        <li>
          A Python application fetching weather data from the OpenWeatherMap API
          based on user input of a city name or zip code. It displays weather
          details such as temperature, humidity, wind speed, and more.
        </li>
        <h3>COVID-19 Analysis Project</h3>
        <li>
          Analysis of COVID-19 related data like cases, deaths, vaccinations,
          and population for each country. It involves data wrangling, storing
          data in a SQLite database, combining data using SQL JOIN operations,
          and creating visualizations.
        </li>
        <h3>Insurance Predictive Modeling Project</h3>
        <li>
          A project focused on insurance predictive modeling using a dataset
          related to insurance premiums, losses, and building exposures. The
          goal is to analyze the data and build a linear regression model to
          predict insurance premiums based on various factors. The project
          involves data preprocessing, data visualization, feature engineering,
          model training, and evaluation.
        </li>
        <li>
          <h3>Diabetes Predictive Modeling</h3> Involves predictive modeling for
          diabetes using various machine learning algorithms. It includes data
          preprocessing, handling missing values, handling outliers, model
          training and evaluation, and visualizing the results.
        </li>
        <li>
          <h3>Neural Network Image Classification</h3> Utilizes neural networks,
          specifically the ResNet50 model, for image classification. It
          demonstrates the classification of animal images such as bears,
          elephants, koalas, and rams.
        </li>
        <li>
          <h3>Movie Recommendation System</h3> A movie recommendation system
          built using collaborative filtering. It involves data preprocessing,
          creating user-item matrices, and calculating similarity between users
          or items to make personalized movie recommendations.
        </li>
        <li>
          <h3>Insurance Chatbot</h3> An implementation of an insurance chatbot
          using a deep learning model. The chatbot utilizes Natural Language
          Processing (NLP) to understand user inputs and provide appropriate
          responses. It is trained using a JSON file with data relevant to the
          insurance domain.
        </li>
        <p>
          {' '}
          <br></br>
          Should you have an interest in any of these projects, please feel free
          to select it from the list on the left to explore in-depth. I
          appreciate your time and interest in visiting my portfolio. <br></br>
          -----
          <br></br>
          Best, <br></br>
          Abed Tabbalat <br></br>
        </p>
      </div>
    </div>
  )
}

export default Home
