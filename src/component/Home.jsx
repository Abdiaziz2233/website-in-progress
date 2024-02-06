import React from 'react'
import { RiComputerFill } from "react-icons/ri";
import { BsAirplaneEnginesFill } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { FaApplePay } from "react-icons/fa";
import { SiAppletv } from "react-icons/si";
import { BsAmazon } from "react-icons/bs";
import { AiOutlineSortAscending } from "react-icons/ai";

function Home() {
  return (
    <>
      <div className='home-div'>
        <div className='home-left'>
            <p id='welcome'>WELCOME TO BIRU</p>
            <h1>We solve business problem with technology.</h1>
            <p id='madowow'>Our performance is your success. Our passion is innovation. Our expertise is unmatched. we get you more.</p>
            <button className='twin-1 twins-btns'>Get Started</button>
            <button className='twin-2 twins-btns'>View Case Study</button>
        </div>
        <div className='home-right'>
            <img className='businessman' src={"https://static.vecteezy.com/system/resources/previews/028/144/531/original/asian-businessman-isolated-png.png"} alt="" />
        </div>
      </div>


      <div className='white-div'>
        <div className='cards'>
          <RiComputerFill className='computer-icon'/>
          <h2>Software services</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad eaque sapiente harum.</p>
          <button>Learn More</button>
        </div>
        <div className='cards'>
          <BsAirplaneEnginesFill className='computer-icon'/>
          <h2>cloud services</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad eaque sapiente harum.</p>
          <button>Learn More</button>
        </div>
        <div className='cards'>
          <BsBank className='computer-icon'/>
          <h2>security services</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad eaque sapiente harum.</p>
          <button>Learn More</button>
        </div>
      </div>


      <div className='customers'>
        <h2>Join Our 30,000 Happy Customers</h2>
      </div>


      <div className='logo-apple'>
        <img src={"https://global.canon/en/corporate/logo/img/logo_01.png"} alt="" />
        <img src={"https://global.canon/en/corporate/logo/img/logo_01.png"} alt="" />
        <img src={"https://global.canon/en/corporate/logo/img/logo_01.png"} alt="" />
        <img src={"https://global.canon/en/corporate/logo/img/logo_01.png"} alt="" />
        <img src={"https://global.canon/en/corporate/logo/img/logo_01.png"} alt="" />
        
       </div>

    </>

  )
}

export default Home
