import React from 'react' 
import { RiComputerFill } from "react-icons/ri";
import { BsAirplaneEnginesFill } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";

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
           <img className='businessman' src={"https://www.pixelsquid.com/png/business-man-sitting-with-phone-2203809966102418553?image=G03"} alt="" />
        </div>
      </div>


      <div className='white-div'>
        <div className='cards'>
           <RiComputerFill className='computer-icon'/>
           <h2>Software services</h2>
           <p>Software as a Service (SaaS) refers specifically to business software applications that are delivered via the cloud instead of being deployed on local platforms. SaaS is one of the three main types of cloud computing, along with Infrastructure as a Service (IaaS) and Platform as a Service (PaaS).3 </p>
           <button>Learn More</button> 
        </div>
        <div className='cards'>
           <BsAirplaneEnginesFill className='computer-icon'/>
           <h2>cloud services</h2>
           <p>Examples of SaaS cloud service providers include Dropbox, G Suite, Microsoft Office 365, and Slack. In each of these applications, users can access, share, store, and secure information in “the cloud.”</p>
           <button>Learn More</button>
        </div>
        <div className='cards'>
           <BsBank className='computer-icon'/>
           <h2>security services</h2>
           <p>“Your security is our topmost priority.” You have probably heard this line a thousand times. People usually encounter this with bank transactions or any establishments that require security. It is indeed everyone's concern to be secured and feel protected.</p>
           <button>Learn More</button>
        </div>
      </div>


      <div className='customers'>
        <h2>Join Our 30,000 Happy Customers</h2>
      </div>


      <div className='logo-apple'>
        <img src={"https://global.canon/en/corporate/logo/img/logo_01.png"} alt="" />
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO7Ueu0hNy7Z3VAYSws_GK1oD85T42aRmCAA&usqp=CAU"} alt="" />
        <img src={"https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_nike_principal.jpg"} alt="" />
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yuSjirzhr6vF5D1YE0nq1aL7BwLy21s_EQ&usqp=CAU"} alt="" />
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4mfwKHzwOkqXO6bYIXYfeeShDfEIKH5r5A&usqp=CAU"} alt="" />
      </div>

      <div className='matter'>
        <div className='matter-one'>
          <h3 className='matter-h3'>let us do the work,so you can focus on wht matters</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est id earum, sint, dolorem, doloremque necessitatibus.</p>
          <button className='matter-button'>learn more</button>
        </div>

        <img className='investerman' src={"https://i.pinimg.com/736x/4a/0d/55/4a0d55798850dc542bffe6d8aa3d0046.jpg"} alt="" />

        <div>
          <div className='remote-div'>
            <CiCircleCheck className='check' />
            <div>
              <h3>Remote Home Office</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className='blulight remote-div'>
            <CiCircleCheck className='check' />
            <div>
              <h3>Virtual Workstation</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className='remote-div'>
            <CiCircleCheck className='check' />
            <div>
              <h3>Terminal Server</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>







    </>

  )
}

export default Home
