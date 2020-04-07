import React,{Component} from "react";
import './SetPasswordContent.css';
import {Link, Router } from "react-router-dom";
import {connect} from "react-redux";
import {BASEURL} from "../../Constants/baseURL";



const initialState = {
  current: "",
  currentError: "",
  newPassword: "",
  newPasswordError:"",
}
class SetPasswordContent extends Component{
  constructor(props){
    super(props);
 this.state = initialState;
  }

  validateCurrent = () => {
    let current = this.state.current;
    let currentError="";
    let proceedemail=true;
    if (current.length === 0)
     {
       currentError = "Enter your current password.";
       this.setState({currentError});
       document.querySelector("#newPassword-input1").classList.add("red-border");
       proceedemail = false;
     }
     else {
      currentError = "";
      this.setState({current, currentError});
      document.querySelector("#newPassword-input1").classList.remove("red-border");
      proceedemail = true;
      }
      return proceedemail;
   }
  
   validateNew = () => {
    let newPassword = this.state.newPassword;
    let newPasswordError="";
    let proceedpassword=true;
    if (newPassword.length === 0)
     {
       newPasswordError = "Enter your new password.";
       this.setState({newPasswordError});
       document.querySelector("#newPassword-input2").classList.add("red-border");
       proceedpassword = false;
     }
     else {
      newPasswordError = "";
      this.setState({newPassword, newPasswordError});
      document.querySelector("#newPassword-input2").classList.remove("red-border");
      proceedpassword = true;
      }
      return proceedpassword;
   }
  
  
  
  
   handleCurrent = event => {
    let current = this.state.current;
    current = event.target.value;
    this.state.current = current;
    this.validateCurrent();
    
  
  };
  handleNew = event => {
    let pass = this.state.newPassword;
    pass = event.target.value;
    this.state.newPassword = pass;
    this.validateNew();
    
  
  };
  clickSubmit = event => {
    
    let current = this.state.current;
    let currentError = this.state.currentError;
    event.preventDefault();
    // console.log(email.length);
    this.validateCurrent();
    this.validateNew();
    if (this.validateCurrent() && this.validateNew())
    {
      const {current,newPassword}=this.state;

      const requestOptions = {
          method:"PUT",
          headers:{'Content-Type':  'application/json','x-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjOTk1MDE0NGQ5NDA0MzliNDU4NTkiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2Mjc4MjQ3fQ.oC1SvSyACTq3GxB-GNOgXOCvsBKY-VzDZErnyDROgsE'},
          body:JSON.stringify({oldPassword:current,newPassword:newPassword})
        }
        const url = "http://52.14.190.202:8000/changepassword"; 
        fetch(url,requestOptions)
          .then((response) => {
            return response.text();
          })
          .then((data) => {
           console.log(data);
           if(data == "Password has been changed successfully"){
           document.querySelector("#success").classList.remove("d-none");
           }
           else if (data == "Password is incorrect"){
             currentError = "You've entered an incorrect password."
           }
          })
          .catch((error)=>{
            console.log(error);
          })
    }
  };

render() {
  return (

      <div className="SetPasswordContent">
          
        <div className="container" >
          <h1 className="header">Set device Password</h1>
          <p>To use Spotify on your devices, you need to set a separate password and log in with the username provided.</p>
        </div>

        <div className="container" id="container2">
          <form>

            <div className="form-group">
              <label for="newPassword-input1">Enter your current password:</label>
              <input type="password" className="form-control" id="newPassword-input1" onChange={this.handleCurrent}/>
              <p  id="missing-current">{this.state.currentError}</p>
            </div>

            <div className="form-group">
              <label for="newPassword-input2">Enter your new password:</label>
              <input type="password" className="form-control" id="newPassword-input2" onChange={this.handleNew}/>
              <p  id="missing-new">{this.state.newPasswordError}</p>
            </div>

            <button onClick={this.clickSubmit} type="submit" className="button-green btn btn-success">Submit</button>

          </form>
        </div>

        <p id="success" className="d-none">Your password has been changed.</p>

      </div>

);
  }
  }

  const mapStateToProps = state => {

    return {
      userToken : state.userToken
      //now you have access to the userToken as this.props.userToken inside the class component.
    };
  
  };
  
export default connect(mapStateToProps)(SetPasswordContent);