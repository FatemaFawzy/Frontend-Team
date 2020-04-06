import React from 'react';
import './App.css';
import AccountLayout from "./Containers/UserAccountProfile/AccountLayout";
import HelpPage from "./Components/HelpPage/HelpPage";
import welcomePage from "./Containers/WelcomePage/welcomePage";
import SignUp from "./Containers/SignUp/SignUp";
import login from "./Containers/Login/login";
import Premium from "./Containers/PremiumBenefits/Premium";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Success from "./Components/ForgotPassword/Success";
import {BrowserRouter as Router,
        Switch, 
        Route, 
       } from "react-router-dom";
import WebPlayer from './Containers/WebPlayer/WebPlayer';
import ArtistProfile from './Containers/ArtistProfile/ArtistProfile';
import EmailSent from './Containers/SignUp/EmailSent';
import CreateNewPassword from "./Components/ForgotPassword/CreateNewPassword";
import PasswordIsNew from "./Components/ForgotPassword/PasswordIsNew";


       
function App() {
  return (
    <div className="App">

      <Router>

        <Switch>

          
          <Route exact path="/" component={welcomePage}/>
          <Route  path="/account/" component={AccountLayout}/>
          <Route  path="/help/" component={HelpPage}/>
          <Route  exact path="/signup/" component={SignUp}/>
          <Route  path="/premium/" component={Premium}/>
          <Route  path="/webplayer/" component={WebPlayer}/>
          <Route  exact path="/logIn/" component={login}/>
          <Route  exact path="/logIn/forgotpassword/" component={ForgotPassword}/>
          <Route path="/logIn/forgotpassword/success/" component={Success}/>
          <Route path="/signup/emailsent/" component={EmailSent}/>
          <Route  exact path="http://52.14.190.202:8000/users/reset" component={CreateNewPassword}/>
          <Route path="/logIn/forgotpassword/newpassword/passwordisnew/" component={PasswordIsNew}/>
          
          {/* TODO: Change the route of artistprofile when search is implemented */}
          <Route  path="/webplayer/likedsongs/" component={ArtistProfile}/>
          
          
          {/* TODO: add routes to the other pages */}
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
