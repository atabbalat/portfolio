import React, { useEffect } from 'react'

function Contact() {
  const [emailAddress, setEmailAddress] = React.useState(
    'abedtabbalat@gmail.com'
  )
  const [subject, setSubject] = React.useState('Hello from React!')
  const [body, setBody] = React.useState('This is the email body.')

  useEffect(() => {
    // Code with side effects can go here
    // For example, if you want to do something when the component mounts
    // you can put that logic here.
    // Any subscriptions or timers should be started here.

    // For demonstration purposes, let's log the state to the console when the component mounts.
    console.log({ emailAddress, subject, body })

    // If you need to perform any cleanup when the component unmounts, return a function from useEffect.
    // For example, if you have a subscription, you should unsubscribe here.
    return () => {
      // Cleanup or unsubscribe code here (if necessary)
    }
  }, []) // Empty dependency array ensures this effect runs only once, like componentDidMount

  const handleEmailLinkClick = () => {
    const emailMap =
      'mailto:' +
      encodeURIComponent(emailAddress) +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body)

    window.location.href = emailMap
  }

  const handleDivClick = url => {
    window.open(url, '_blank')
  }

  return (
    <div className='contact'>
      <br />

      <h3>Email:</h3>
      <div
        className='clink-div'
        onClick={handleDivClick.bind(null, `mailto:${emailAddress}`)}
      >
        <a className='email'>{emailAddress}</a>
      </div>
      <br />

      <h3>LinkedIn:</h3>
      <div
        className='clink-div'
        onClick={handleDivClick.bind(
          null,
          'https://www.linkedin.com/in/tabbalat'
        )}
      >
        <a className='linkedin'>Click Here</a>
      </div>
      <br />

      <h3>Github:</h3>
      <div
        className='clink-div'
        onClick={handleDivClick.bind(
          null,
          'https://github.com/atabbalat/DSPortfolio'
        )}
      >
        <a className='github'>Click Here</a>
      </div>
    </div>
  )
}

export default Contact
