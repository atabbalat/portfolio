import React from 'react'
function CovidAnalysis() {
  return (
    <div className='covid-analysis'>
      <p>
        The COVID-19 pandemic has had a significant impact on the entire world,
        fundamentally transforming our understanding of public health and
        emergency preparedness. As part of an effort to better comprehend and
        communicate the ramifications of this pandemic.
      </p>
      <p>
        The primary objective of this project is to analyze data related to
        COVID-19 - including the number of cases, deaths, vaccinations, and the
        population for each country. The data used in this project is fetched
        from a variety of sources, including a flat file, a webpage, and an API,
        demonstrating a multifaceted approach to data gathering.
      </p>
      <p>
        This project involved several data science processes, including data
        wrangling, data storage in a SQLite database, data combination using SQL
        JOIN operations, and data visualization. Each stage has been carefully
        executed to ensure the integrity and accuracy of the data and the
        subsequent analyses performed.
      </p>
      <p>
        The final output of this project comprises various data visualizations.
        These provide clear, concise, and accessible insights into the
        pandemic's impacts. Various graphical representations, including scatter
        plots, bar charts, histograms, density plots, and line graphs, have been
        employed to illustrate the data effectively.
      </p>
      <p>
        No knowledge of coding or data science is needed to understand these
        visualizations. They are designed to cater to a broad audience,
        providing valuable insights into the global COVID-19 situation.
      </p>
      <br></br>
      <a
        href='https://github.com/atabbalat/DSPortfolio/tree/master/2%20-%20Covid%20Analysis'
        className='repository-link'
        target='_blank'
        rel='noreferrer'
      >
        Link To Repository
      </a>
    </div>
  )
}

export default CovidAnalysis
