import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import AboutUs from './components/Aboutus';
import ContactUs from './components/Contactus';
import './App.css';
import User from './Dynamic-routing/User';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <Router>
        {/* <Switch> */}
          <Route exact path="/" component={Home }/> */}
              {/* <Home /> */}
            {/* </Route> */}
            {/* <Route path="/aboutus" component={AboutUs} /> */}
              {/* <AboutUs />
            </Route> */}
          {/* <Route path="/contactus/:username" component={ ContactUs }/> */}
              {/* <ContactUs />
            </Route> */}
            
        {/* </Switch> 
      </Router> */}
        <User />
        
      </Router>
   </div>
  );
}

export default App;
