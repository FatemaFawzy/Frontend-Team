import React from 'react';
import './App.css';
import AccountLayout from "./Containers/UserAccountProfile/AccountLayout";
import HelpPage from "./Components/HelpPage/HelpPage";
import welcomePage from "./Containers/WelcomePage/welcomePage";
import SignUp from "./Containers/SignUp/SignUp";
import login from "./Containers/Login/login";
import Premium from "./Containers/PremiumBenefits/Premium";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import HomePageSidebar from "./Components/HomePage/HomePageSidebar";
import Success from "./Components/ForgotPassword/Success";
import {BrowserRouter as Router,
        Switch, 
        Route, 
       } from "react-router-dom";
import WebPlayer from './Containers/WebPlayer/WebPlayer';
import ArtistProfile from './Containers/ArtistProfile/ArtistProfile';
import CreateNewPassword from "./Components/ForgotPassword/CreateNewPassword";


       
function App() {
  return (
    <div className="App">

      <Router>

        <Switch>

          
          <Route exact path="/" component={welcomePage}/>
          <Route  path="/account/" component={AccountLayout}/>
          <Route  path="/help/" component={HelpPage}/>
          <Route  path="/signup/" component={SignUp}/>
          <Route  path="/premium/" component={Premium}/>
          <Route  path="/webplayer/" component={WebPlayer}/>
          <Route  exact path="/logIn/" component={login}/>
          <Route  exact path="/logIn/forgotpassword/" component={ForgotPassword}/>
          <Route  exact path="/logIn/forgotpassword/newpassword" component={CreateNewPassword}/>
          <Route path="/logIn/forgotpassword//newpasword/success/" component={Success}/>
          {/* TODO: Change the route of artistprofile when search is implemented */}
          <Route  path="/webplayer/likedsongs/" component={ArtistProfile}/>
          
          
          {/* TODO: add routes to the other pages */}
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
