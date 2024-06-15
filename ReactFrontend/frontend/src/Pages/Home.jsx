import React from 'react'
import '../CSS/HomeCSS.css'
import edu from '../assets/edu.jpg'
import toast from 'react-hot-toast'

const Home = () => {

  const contact = () => {
    toast('Thank you for contacting us!', {
      icon: '🖐️ ',
    });
  }

  return (
    <div className="hero-section">
      <div className="row">
        <div className="col-1">
          <div className="wrapper">
            <div className="one">
              <h1>Easily Manage Your Institute</h1>
              <p>with the help of our product</p>
            </div>
            <div className="two">
              <p>This website makes it easier for you to handle all the document-related work digitally.</p>
            </div>
            <div className="three">
              <div className="btn-grp">
                <button onClick={contact}>Contact</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">
          <img src={edu} alt="Hero Image" className="hero-image" />
        </div>
      </div>
    </div>


  )
}

export default Home
