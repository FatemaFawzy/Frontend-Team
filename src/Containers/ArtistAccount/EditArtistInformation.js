import React,{Component} from 'react';
 import './EditArtistInformation.css';
import ArtistHomePageNavbar from "./ArtistNavbar";
import ComponentBlock from "../../Components/HomePageComponents/ComponentBlock"
import * as itemType from "../../Constants/itemType";
import {connect} from "react-redux";
import {BASEURL} from "../../Constants/baseURL";
import {NavLink,Link} from "react-router-dom";

/**Email format that must be entered by the user
 * @memberof EditArtistInformation
 * @type {expression}
 */
const emailFormat = RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);
/** Class EditArtistInformation
 * @group EditArtistInformation
 * @extends Component
 */
export class EditArtistInformation extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
   /**Artist's information
   * @memberof EditArtistInformation
   * @type {object}
   */ 
   info:{
    // email:"davidgilmour123@gmail.com",
    // username:"pink_floyd",
    // dateOfBirth:"31/05/1950",
    // bio:"",
    // imageURL:" ",
    // artistName:"Pink Floyd",
    //day:"31",
    //month:"05",
    //year:"1950"
   },
      /**Artist's email
   * @memberof EditArtistInformation
   * @type {String}
   */ 
   email:"",
         /**Artist's email error
   * @memberof EditArtistInformation
   * @type {String}
   */ 
   emailError:"",
         /**Artist's day in dob
   * @memberof EditArtistInformation
   * @type {String}
   */ 
   day:"",
         /**Artist's day in dob error msg
   * @memberof EditArtistInformation
   * @type {String}
   */ 
   dayError:"",
         /**Artist's month in dob
   * @memberof EditArtistInformation
   * @type {String}
   */ 
   month:"",
         /**Artist's month in dob error msg
   * @memberof EditArtistInformation
   * @type {String}
   */ 
   monthError:"",
         /**Artist's year in dob
   * @memberof EditArtistInformation
   * @type {String}
   */ 
   year:"",
         /**Artist's year in dob error msg
   * @memberof EditArtistInformation
   * @type {String}
   */ 
   yearError:"",
         /**Artist's name
   * @memberof EditArtistInformation
   * @type {String}
   */ 
   artistName:"",
         /**Artist's cover img url
   * @memberof EditArtistInformation
   * @type {String}
   */ 
   imageURL:"",
         /**Artist's bio
   * @memberof EditArtistInformation
   * @type {String}
   */ 
   bio:"",
         /**Artist's dob
   * @memberof EditArtistInformation
   * @type {String}
   */ 
   dateOfBirth:"",
         /**Artist's username
   * @memberof EditArtistInformation
   * @type {String}
   */ 
   username:"",
   artistName:""

    }   
  }
   /**A function that validates user input(must be an email)
   * @memberof EditArtistInformation
   * @func validateEmail
   */
  validateEmail = () => {
   if (!emailFormat.test(this.state.email) && this.state.email.length != 0) 
   {
    this.setState({emailError:"Please enter a valid email."});
    return false;
   }
   else{
     console.log("db");
    this.setState({emailError:""});
    return true;
   }
  }
     /**A function that validates user input day 
   * @memberof EditArtistInformation
   * @func validateDay
   */
  validateDay = () => {
    if ((this.state.day <= 0 || this.state.day > 31) && this.state.day.length != 0)
    {
      console.log(this.state.day);
      this.setState({dayError:"Please choose a valid day."});
      return false;
    }
    else{
      this.setState({dayError:""});
      return true;
     }
  }
       /**A function that validates user input month 
   * @memberof EditArtistInformation
   * @func validateMonth
   */
  validateMonth = () => {
    if ((this.state.month <= 0 || this.state.month > 12) && this.state.month.length != 0)
    {
      this.setState({monthError:"Please choose a valid month."});
      return false;
    }
    else{
      this.setState({monthError:""});
      return true;
     }
  }
         /**A function that validates user input year 
   * @memberof EditArtistInformation
   * @func validateYear
   */
  validateYear = () => {
    if ((this.state.year <= 1901 || this.state.year > 1999) && this.state.year.length != 0)
    {
      this.setState({yearError:"Please choose a valid year."});
      return false;
    }
    else{
      this.setState({yearError:""});
      return true;
     }
  }
        /**A function that handles changes in email input
   * @memberof EditArtistInformation
   * @func handleEmailChange
   */
  handleEmailChange = event => {
    let inp = this.state.email;
    inp = event.target.value;
    this.state.email = inp;
    this.validateEmail();
  };
          /**A function that handles changes in day input
   * @memberof EditArtistInformation
   * @func handleDayChange
   */
  handleDayChange = event => {
    let inp = this.state.day;
    inp = event.target.value;
    this.state.day = inp;
    this.validateDay();
  }
            /**A function that handles changes in month input
   * @memberof EditArtistInformation
   * @func handleMonthChange
   */
  handleMonthChange = event => {
    let inp = this.state.month;
    inp = event.target.value;
    this.state.month = inp;
    this.validateMonth();
  }
              /**A function that handles changes in year input
   * @memberof EditArtistInformation
   * @func handleYearChange
   */
  handleYearChange = event => {
    let inp = this.state.year;
    inp = event.target.value;
    this.state.year = inp;
    console.log(this.validateYear());
    this.validateYear();
  }
              /**A function that handles changes in name input
   * @memberof EditArtistInformation
   * @func handleNameChange
   */
  handleNameChange = event => {
    let inp = this.state.artistName;
    inp = event.target.value;
    this.state.artistName = inp;
  }
              /**A function that handles changes in username input
   * @memberof EditArtistInformation
   * @func handleUsernameChange
   */
  handleUsernameChange = event => {
    let inp = this.state.username;
    inp = event.target.value;
    this.state.username = inp;
  }
              /**A function that handles changes in image input
   * @memberof EditArtistInformation
   * @func handleImageChange
   */
  handleImageChange = event => {
    let inp = this.state.imageURL;
    inp = event.target.value;
    this.state.imageURL = inp;
  }
              /**A function that handles changes in bio input
   * @memberof EditArtistInformation
   * @func handleBioChange
   */
  handleBioChange = event => {
    let inp = this.state.bio;
    inp = event.target.value;
    this.state.bio = inp;
  }
             /**A function that fires when the page loads
   * @memberof EditArtistInformation
   * @func componentDidMount
   */
  componentDidMount()
  {
    const requestOptions2={
      method:"GET",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }
    const url2 =BASEURL+"artist/information"; 
    fetch(url2,requestOptions2)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
        info: data.info});
        console.log(this.state.info);
      })
      .catch((error)=>{console.log(error);
      })
  }
        /**A function that fires when a user clicks on the button to edit the profile
   * @memberof EditArtistInformation
   * @func clickSubmit
   */
  clickSubmit = () => {
    if (this.validateEmail() && this.validateDay() && this.validateMonth() && this.validateYear())
    {
      if (this.state.day.length == 0)
      {
        console.log("day is empty");
        this.setState({day:this.state.info.day});
      }
      if (this.state.month.length == 0)
      {
        console.log("month is empty");
        this.setState({month:this.state.info.month});
      }
      if (this.state.year.length == 0)
      {
        console.log("year is empty");
        this.setState({year:this.state.info.year});
      }
      if (this.state.email.length == 0)
      {
        console.log("email is empty");
        this.setState({email:this.state.info.email});
      }
      if (this.state.username.length == 0)
      {
        console.log("username is empty");
        this.setState({username:this.state.info.username});
      }
      if (this.state.artistName.length == 0)
      {
        console.log("name is empty");
        this.setState({artistName:this.state.info.artistName});
      }
       if (this.state.bio.length == 0)
      {
        console.log("bio is empty");
        this.setState({bio:this.state.info.bio});
      }
     if (this.state.imageURL.length == 0)
      {
        console.log("image is empty");
        this.setState({imageURL:this.state.info.imageURL});
      }
      console.log("email val");
      const requestOptions3={
        method:"POST",
        headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
      }
      const url3 =BASEURL+"artist/information/edit"; 
      fetch(url3,requestOptions3)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.message == "info edited successfully")
          {
            console.log("edited successfully");
            this.props.history.push("/ArtistAccount/ArtistWebPlayer/MyInfo/");
          }
        })
        .catch((error)=>{console.log(error);
        })
    }
  }
  render(){
    return (
      <div className ="edit-artist-information">
         <ArtistHomePageNavbar accountType="regular" name="Ali Halafawy" color="transparent"
          image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
            
      <div className="info-content">
        <h1 className="title"><i class="fas fa-info-circle"></i> My Information</h1>
        <table>
            <tr> 
              <td><li className="list-element">Email:</li>  <p className="email-error">{this.state.emailError}</p></td>
              <td><input id="email" className="general-input" placeholder={this.state.info.email} type="text" onChange={this.handleEmailChange}/></td>
            </tr>
            <tr> 
              <td><li className="list-element">Username:</li></td>
              <td><input id="username" className="general-input" placeholder={this.state.info.username} type="text" onChange={this.handleUsernameChange}/></td>
            </tr>
            <tr> 
              <td><li className="list-element">Name:</li></td>
              <td><input id="name" className="general-input" placeholder={this.state.info.artistName} type="text" onChange={this.handleNameChange}/></td>
            </tr>
            <tr> 
              <td><li className="list-element">Date Of Birth:</li>
              <div className="email-error">{this.state.dayError}</div>
                  <div className="email-error">{this.state.monthError}</div>
                  <div className="email-error">{this.state.yearError}</div>
              </td>
              <td>
                <div className="row" id="birth-date">

                  <div className="col-3">
                    <input id="day-input" name="day" className=" form-control birth-date-signup" type="number" placeholder={this.state.info.day} max="31" min="1" maxLength="2" onChange={this.handleDayChange}/>
                  </div>

                  <div className="col-6">
                  <input id="month" name="month" className=" form-control birth-date-signup" type="number" placeholder={this.state.info.month} max="12" min="1" maxLength="2" onChange={this.handleMonthChange}/>
                  </div>

                  <div className="col-3 ">
                    <input id="year" name="year" className="form-control birth-date-signup" type="number" placeholder={this.state.info.year} max="1999" min="1900" maxLength="4" onChange={this.handleYearChange}/>
                  </div>
                  
                  </div>
              </td>
            </tr>
            <tr> 
              <td><li className="list-element">Biography:</li></td>
              <td><input id="bio" className="general-input" placeholder={this.state.info.bio} type="text" onChange={this.handleBioChange}/></td>
            </tr>
            <tr> 
              <td><li className="list-element">Cover Image URL:</li></td>
              <td><input  id="image" className="general-input" placeholder={this.state.info.imageURL} type="text" onChange={this.handleImageChange}/></td>
            </tr>
            <tr> 
              <td> </td>
              <td><button className="button" onClick={this.clickSubmit}>Done</button></td>
            </tr>
      
        </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    userID:state.userID,
    selectedArtistID : state.selectedArtistID,
  };

};
export default connect(mapStateToProps)(EditArtistInformation);

