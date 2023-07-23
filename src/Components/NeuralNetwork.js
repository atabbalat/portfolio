import React from 'react'
function NeuralNetwork() {
  return (
    <div className='neural-network'>
      <p>
        The Neural Network Image Classification Project illustrates the power
        and utility of neural networks in the field of image recognition. This
        endeavor centers around the use of a deep learning model, ResNet50, to
        classify different animal images. With the rising ubiquity of images in
        digital data, this project is an excellent example of how artificial
        intelligence can be used to identify and classify these images
        effectively.
      </p>
      <p>
        This project begins by loading an image from a designated path and
        preparing it for analysis. It then applies the ResNet50 model, a
        renowned and widely used neural network model known for its depth and
        precision, to classify the image. The model predicts the top classes for
        the input image, offering both the classes and their associated
        probabilities.
      </p>
      <p>
        The demonstration within the project uses four distinct animal images -
        a bear, an elephant, a koala, and a ram. Each of these images is loaded,
        visually displayed, classified using the ResNet50 model, and the results
        are stored for future reference.
      </p>
      <p>
        Through these steps, the project provides a clear and practical
        demonstration of neural network image classification. It emphasizes the
        capability of deep learning to process visual information, a task humans
        naturally excel at but that computers only recently began to perform
        effectively.
      </p>
      <p>
        This project serves as a great introduction to anyone curious about the
        practical application of neural networks and image classification. It's
        also a fantastic resource for those interested in understanding the
        capabilities of the ResNet50 model.
      </p>
      <br></br>
      <a
        href='https://github.com/atabbalat/DSPortfolio/tree/master/5%20-%20Neural%20Network%20Image%20Classification'
        className='repository-link'
        target='_blank'
        rel='noreferrer'
      >
        Link To Repository
      </a>
    </div>
  )
}

export default NeuralNetwork
