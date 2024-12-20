import React from 'react'

const Header = () => {
    return (

        <div className='nav-bar' >
            <div className="logo">
                <img src="/images/brand_logo.png" alt="log"  />
            </div>           
            
             <ul>
                <li>Menu</li>
                <li>location</li>
                <li>About</li>
                <li>contract</li>
            </ul>

          <button className='btn'>Log out</button>

        </div>
    )
}

export default Header