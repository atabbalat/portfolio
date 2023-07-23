import React from 'react'
function MovieApp() {
  return (
    <div className='movie-app'>
      <p>
        The Movie Recommender System Project harnesses the power of
        collaborative filtering to bring personalization to the forefront of
        movie recommendations. By using the K-nearest neighbors algorithm, a
        popular method in machine learning, this project delivers movie
        suggestions that are tailored to users' viewing history and preferences.
      </p>
      <p>
        The recommender system is built on the MovieLens dataset, a
        comprehensive collection of movie ratings by users. This project begins
        by loading and examining the data, before preprocessing to handle
        missing values, duplicates, and transforming the data into an ideal
        format for the recommendation algorithms.
      </p>
      <p>
        The model uses collaborative filtering, a method that predicts a user's
        interests by collecting preferences from many users. It assumes that if
        a person A has the same opinion as person B on an issue, A is more
        likely to have B's opinion on a different issue than that of a randomly
        chosen person. The K-Nearest Neighbors algorithm, known for its
        simplicity and effectiveness, is used to find clusters of similar users
        based on common movie ratings.
      </p>
      <p>
        After selecting the relevant features - user ID, movie ID, and user
        ratings, the model is put to the test. Various movie inputs are used to
        evaluate the quality of recommendations produced, verifying the system's
        ability to deliver accurate and personalized recommendations.
      </p>
      <p>
        This project serves as an insightful introduction to the development of
        recommendation systems, particularly for those interested in the film
        industry or personalized marketing. It's also an excellent resource for
        anyone curious about collaborative filtering and the K-Nearest Neighbors
        algorithm.
      </p>
      <br></br>
      <a
        href='https://github.com/atabbalat/DSPortfolio/tree/master/6%20-%20Movie%20Recommender%20App'
        className='repository-link'
        target='_blank'
        rel='noreferrer'
      >
        Link To Repository
      </a>
    </div>
  )
}

export default MovieApp
