import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Rejy</div>
            <span><Toggle /></span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                <Link spy={true} to ='Navbar' smooth={true} activeClass='activeClass'>
                <li>Home</li>
                </Link>
                <Link spy={true} to ='Services' smooth={true} >
                <li>Services</li>
                </Link>
                <Link spy={true} to ='Experience' smooth={true} >
                <li>Experience</li>
                </Link>
                <Link spy={true} to ='Portfolio' smooth={true} >
                <li>Portfolio</li>
                </Link>
                <Link spy={true} to ='Testimonials' smooth={true} >
                <li>Testimonials</li>
                </Link>
                
                </ul>
            </div>
            {/* <Link spy={true} to ='Contact' smooth={true} >
            <button className="button n-button">Contact</button>
            </Link> */}
            <a 
  href="https://api.whatsapp.com/send?phone=+917994870262&text=Hello%20Rejy%20Karinga%2C%0ANeed%20your%20help" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="button n-button">Contact</button>
</a>

        </div>
    </div>
  )
}

export default Navbar