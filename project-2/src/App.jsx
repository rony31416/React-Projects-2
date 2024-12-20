import { useState } from 'react'
import './index.css';
import i from '/images/Service 24_7-pana 1.svg'

function App() {

  return (
    <div className='main'>
      <div className="nav">
        <img src="/images/Frame 2 1.png" alt="" />

        <div className='menu'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="content block">
        <p className="heading">CONTACT US</p>
        <p className="des">LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>

      </div>

      <div className="container">

        <div className="from-section">

          <div className="btn">

            <div className="frist-two">
              <button>via support chat </button>
              <button>via call</button>
            </div>

            <button>via email from </button>

          </div>

          <div className="from-fields">
            <label htmlFor="">name</label>
            <input type="text" name="name" id="" className='name bg-gray-300' />

            <label htmlFor="">E-mail</label>
            <input type="email" className='bg-gray-400' />

            <label htmlFor="message">messsage</label>
            <textarea name="" id="" className='bg-gray-400'></textarea>



          </div>

        </div>
        <div className="image">
          <img src="/images/Service 24_7-pana 1.svg" alt="" />
        </div>
      </div>



    </div>
  )
}

export default App
