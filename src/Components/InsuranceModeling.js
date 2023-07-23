import React from 'react'
function InsuranceModeling() {
  return (
    <div className='insurance-modeling'>
      <p>
        Insurance premiums form a significant portion of an individual's or a
        business's expenses. The determination of these premiums is a complex
        process involving various factors. To understand, model, and predict
        these factors.
      </p>
      <p>
        This project analyzes a dataset related to insurance premiums, losses,
        and building exposures. Its primary objective is to build a model that
        predicts insurance premiums based on various influencing factors.
        Leveraging a linear regression model, the project seeks to capture the
        intricate relationships among the variables involved in determining
        insurance premiums.
      </p>
      <p>
        The journey towards building this predictive model has been meticulously
        structured into several steps. These steps include loading and exploring
        the dataset, pre-processing the data, conducting a correlation analysis,
        splitting the data into training and testing sets, training the model,
        and finally, evaluating the model's performance.
      </p>
      <p>
        Data visualization techniques are used extensively in the project,
        enabling a clear representation of the complex patterns and
        relationships within the dataset. These visualizations include bar
        charts and scatter plots, which provide valuable insights into the data
        and aid the model-building process.
      </p>
      <p>
        The project's output is not only a predictive model but also an
        enlightening journey through data science processes applied to
        real-world insurance data. With its focus on predicting insurance
        premiums, it demonstrates the practical application of data science in
        making business processes more efficient and predictable.
      </p>
      <br></br>
      <a
        href=' https://github.com/atabbalat/DSPortfolio/tree/master/3%20-%20Insurance%20Exposure%20Predictive%20Modeling'
        className='repository-link'
        target='_blank'
        rel='noreferrer'
      >
        Link To Repository
      </a>
    </div>
  )
}

export default InsuranceModeling
