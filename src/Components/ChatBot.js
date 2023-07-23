import React from 'react'
function ChatBot() {
  return (
    <div className='chat-bot'>
      <p>
        The Insurance Chatbot Project brings the power of artificial
        intelligence to the insurance industry by designing a chatbot capable of
        providing relevant responses based on user inputs. This project employs
        a deep learning model and Natural Language Processing (NLP),
        demonstrating the potential of AI in enhancing customer service in the
        insurance sector.
      </p>
      <p>
        At the heart of this project is a JSON data file containing pertinent
        insurance data. It's the training set for the deep learning model which
        enables the chatbot to understand and respond to insurance-related
        queries. The data is loaded, preprocessed, and utilized to create and
        train the chatbot model.
      </p>
      <p>
        The project is implemented using Python and web technologies. The Python
        script, app.py, is responsible for loading the chatbot model and
        responding to user input. The user interface for the chatbot is designed
        using HTML and CSS, providing a clean, interactive platform for
        user-chatbot interaction.
      </p>
      <p>
        Running this chatbot is quite straightforward. After cloning the
        repository and installing the necessary Python packages, you run the
        training script to train the model, and then start the Flask server. You
        can then interact with the chatbot via your web browser, posing queries,
        and receiving relevant responses.
      </p>
      <p>
        This Insurance Chatbot Project serves as a useful resource for anyone
        keen on understanding how AI can be utilized in specific industries like
        insurance. The project provides a glimpse into how deep learning and NLP
        can be used to improve customer service, particularly in addressing
        routine queries, freeing up human resources for more complex tasks.
      </p>
      <br></br>
      <a
        href='https://github.com/atabbalat/DSPortfolio/tree/master/7%20-%20Insurance%20ChatBot'
        target='_blank'
        className='repository-link'
        rel='noreferrer'
      >
        Link To Repository
      </a>
    </div>
  )
}

export default ChatBot
