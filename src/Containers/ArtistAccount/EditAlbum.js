import React,{Component} from 'react';
 import './EditAlbum.css';
import ArtistHomePageNavbar from "./ArtistNavbar";
import ComponentBlock from "../../Components/HomePageComponents/ComponentBlock"
import * as itemType from "../../Constants/itemType";
import {connect} from "react-redux";
import {BASEURL,BASEURL2} from "../../Constants/baseURL";
import {NavLink,Link} from "react-router-dom";

export class EditAlbum extends Component {
  constructor(props){
    super(props);
    this.state = {
      info:{
        name:"High Hopes",
        image:"https://example.com/image/",
       },
       Name:"",
      Image:"",
      }
      }
      validateAlbumName = () => {
        let Name = this.state.Name;
        let proceedname = true;
        if (Name.length === 0) {
          if (document.querySelector("#basic-url1")) {
            document.querySelector("#basic-url1").classList.add("redbox");
            document.querySelector("#error-message").classList.remove("d-none");
          }
          proceedname = false;
        } else {
         
          if (document.querySelector("#basic-url1")) {
            document.querySelector("#basic-url1").classList.remove("redbox");
            document.querySelector("#error-message").classList.add("d-none");
          }
          proceedname = true;
        }
        return proceedname;
      };
      validateImage = () => {
        let Image = this.state.Image;
        let proceedimage = true;
        if (Image.length === 0) {
          if (document.querySelector("#basic-url2")) {
            document.querySelector("#basic-url2").classList.add("redbox");
            document.querySelector("#error-message").classList.remove("d-none");
          }
          proceedimage = false;
        } else {
         
          if (document.querySelector("#basic-url2")) {
            document.querySelector("#basic-url2").classList.remove("redbox");
            document.querySelector("#error-message").classList.add("d-none");
          }
          proceedimage = true;
        }
        return proceedimage;
      };
    
      handleName = (event) => {
        let Name = this.state.Name;
        Name = event.target.value;
        this.state.Name = Name;
        this.validateAlbumName();
      };
    
      handleImage = (event) => {
        let Image = this.state.Image;
        Image = event.target.value;
        this.state.Image = Image;
        this.validateImage();
      };
    
      clickSubmit= (event) => {
        let Name=this.state.Name;
        let Image=this.state.Image;
        if (event) {
          event.preventDefault();
        }
        this.validateAlbumName();
        this.validateImage();
        if(this.validateAlbumName() && this.validateImage())
        {
          var clr= document.querySelector(".add-info");
         if (clr)
         {
         clr.reset();
         }
         const requestOptions2={
          method:"POST",
          headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
        }
    
      }
      }
  componentDidMount()
  {
    const requestOptions2={
      method:"GET",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }
    const url2 =BASEURL2+"artist/information"; 
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
  render(){
    return (
      <div className ="edit-album">
         <ArtistHomePageNavbar accountType="regular" name="Ali Halafawy" color="transparent"
          image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
            
      <div className="info-content">
        <h1 className="title"><i class="fas fa-info-circle"></i> Edit Album</h1>
        <p id="error-message" className="d-none">Please fill all the required inputs</p>
        <table>
            <tr> 
              <td><li className="list-element">Album Name:</li></td>
              <td><input className="general-input" id="basic-url1" onChange={this.handleName} placeholder={this.state.info.name} type="text"/></td>
            </tr>
            <tr> 
              <td><li className="list-element">Album Image:</li></td>
              <td><input className="general-input" id="basic-url2" onChange={this.handleImage} placeholder={this.state.info.image} type="text"/></td>
            </tr>
            <tr> 
              <td> </td>
              <Link to="/ArtistAccount/ArtistWebPlayer/MyInfo/"><td><button className="button" onClick={this.clickSubmit}>Done</button></td></Link>
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
export default connect(mapStateToProps)(EditAlbum);

