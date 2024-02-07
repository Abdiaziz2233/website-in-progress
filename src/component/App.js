import { Route } from "react-router-dom/";
import Header from "./Header";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home";
import about from "./about"

function App() {
  return (
    
    <div>
        <Header/> 
       <div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about"></Route>
            <Route exact path="/services"></Route>
            <Route exact path="/contact-us"></Route>
         </Switch>
        </div>
      
    <div className="App">
        <header>
          <h1>About Me</h1>
        </header>
        <section className="about">
          <h2>Hi, I'm [ABDIAZIZ HUSSEIN HADUN]</h2>
          <p>Welcome to my website! Here's a little bit about me:</p>
          <p>I'm a [Your Profession] passionate about [Your Passion/Hobby]. With [X] years of experience in [Your Field], I've [Achievement/Expertise].</p>
          <p>In my free time, I enjoy [Your Hobbies/Interests] and [Another Hobby/Interest].</p>
          <p>I believe in [Your Belief/Mission] and strive to [Your Goal/Objective].</p>
          <p>Feel free to explore my website and get in touch if you'd like to collaborate or learn more!</p>
        </section>
    </div>


    <div className="App">
      <header>
        <h1>Our Software Services</h1>
      </header>
      <section className="services">
        <div className="service">
          <h2>Web Development</h2>
          <p>We specialize in creating modern, responsive websites tailored to your needs. Our team of experts utilizes the latest technologies to deliver high-quality web solutions.</p>
        </div>
        <div className="service">
          <h2>Mobile App Development</h2>
          <p>Need a mobile app for your business? We've got you covered. From concept to deployment, we develop custom mobile applications for iOS and Android platforms.</p>
        </div>
        <div className="service">
          <h2>UI/UX Design</h2>
          <p>User experience is paramount in today's digital landscape. Our designers craft intuitive interfaces that enhance usability and engage your audience.</p>
        </div>
      </section>
    </div>
    <div className="App">
      <header>
         <h1>Contact Us</h1>
      </header>
        <section className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
    </div>
      
    </div>
  );
}

export default App;
