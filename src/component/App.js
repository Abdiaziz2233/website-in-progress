import { Route } from "react-router-dom/";
import Header from "./Header";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home";

function App() {
  return (
    <div>
      <Header/>
      <div >
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about"></Route>
          <Route exact path="/services"></Route>
          <Route exact path="/contact-us"></Route>
        </Switch>
      </div>
    </div>
  )
}

export default App;
