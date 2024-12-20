import { useState } from 'react'
import Header from './components/Header'
import './index.css';

function App() {

  return (
    <div>
      <Header />
      <div className='content'>
        <div className="text-content">
          <p className='p-header'>your feet deserve the best </p>
          <p className="description">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES</p>
            <div className="btn-2">
            <button className="shoping-card">Shop Now</button>
            <button className="shoping-catagory">Category</button>
            </div>

          <div className="shop">
            <p className="availavail-site">Also Availavle On</p>
            <img src="/images/flipkart.png" alt="" />
            <img src="/images/amazon.png" alt="" />
          </div>

        </div>
        <div className="shoe-image">
          <img src="/images/shoe_image.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default App
