import React from 'react'
function DiabetesModeling() {
  return (
    <div className='diabetes-modeling'>
      <p>
        The Diabetes Predictive Modeling Project aims to develop a robust
        predictive model for diabetes, leveraging a variety of health-related
        variables. This endeavor showcases the immense potential of data science
        and predictive modeling in enhancing healthcare outcomes by providing
        early risk identification, which could significantly improve patient
        care and management.
      </p>
      <p>
        This project is built upon a dataset comprising a multitude of health
        variables related to diabetes, stored in a file named "diabetes.csv".
        The project uses several machine learning algorithms, such as Logistic
        Regression, Random Forest, and Decision Tree classifiers, to build
        models that can predict the likelihood of diabetes based on the
        variables provided.
      </p>
      <p>
        The project journey unfolds through several stages. These stages involve
        data loading, initial exploration, data cleaning to handle missing
        values and outliers, visualization to better understand the data, and
        data preprocessing to prepare for modeling. Then, several models are
        trained, evaluated, and compared to find the best performing model. The
        project also explores the impact of high-correlated features on the
        models by creating a new dataset excluding these features, repeating the
        modeling steps, and comparing the results.
      </p>
      <p>
        Finally, the project culminates in a visualized comparison of the
        different models' performance, revealing their accuracy levels. This
        visualization provides an intuitive understanding of how each model
        performs and aids in choosing the best model for predicting diabetes
        based on the given health parameters.
      </p>
      <p>
        This project not only offers a predictive model but also provides a
        detailed walkthrough of the data science pipeline. It demonstrates the
        practical application of data science in healthcare, helping to predict
        disease risks and potentially enabling early interventions.
      </p>
      <br></br>
      <a
        href='https://github.com/atabbalat/DSPortfolio/tree/master/4%20-%20Diabetes%20Predictive%20Modeling'
        className='repository-link'
        target='_blank'
        rel='noreferrer'
      >
        Link To Repository
      </a>
    </div>
  )
}

export default DiabetesModeling
