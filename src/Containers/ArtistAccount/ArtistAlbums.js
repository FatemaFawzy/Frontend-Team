import React,{Component} from 'react';
 import './ArtistAlbums.css';
 import ReactSnackBar from "react-js-snackbar";
 import "../../Components/PlaylistsComponent/SnackBar.css";
import ArtistAlbumsNavbar from "./ArtistNavbar";
import ComponentBlock from "../../Components/HomePageComponents/ComponentBlock"
import * as itemType from "../../Constants/itemType";
import {connect} from "react-redux";
import {BASEURL} from "../../Constants/baseURL";
import {NavLink,Link} from "react-router-dom";



/** Class ArtistAlbums
 * @category ArtistAlbums
 * @extends Component
 */
export class ArtistAlbums extends Component {
  constructor(props){
    super(props);
    this.state = {  
               /**array of albums
   * @memberof ArtistAlbums
   * @type {Array<Albums>}
   */ 
      AlbumInfo: [],
          /**array of popular albums
   * @memberof ArtistAlbums
   * @type {Array<Albums>}
   */ 
       PopularAlbums: [],
       Deleted:false,
       Added:"",
   /**Boolean to indicate if the snackbar should appear
   * @memberof ArtistAlbums
   * @type {boolean}
   */ 
       showSnackBar: false,
   /**String of snackbar message
   * @memberof ArtistAlbums
   * @type {string}
   */ 
       snackBarMes: ""
      
      
    }
    
  }
     /**A function that fires when the page loads
   * @memberof ArtistAlbums
   * @func componentDidMount
   */
  componentDidMount() {
    const requestOptions1={
      method:"GET",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }
  
    const url1 =BASEURL + "artist/myalbums/id"; 
     fetch(url1,requestOptions1)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
         
        this.setState({AlbumInfo:data.albumInfo})
      })
      .catch((error)=>{
        console.log(error);
      })
      
      const requestOptions2={
        method:"GET",
        headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
      }
  
      const url2 =BASEURL + "artist/myalbums/id"; 
      fetch(url2,requestOptions2)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
         this.setState({PopularAlbums:data.albumInfo.slice(0,5)})
        })
        .catch((error)=>{
          console.log(error);
        })
      
    }
     /**A function that is called when an album is requested to be deleted
   * @memberof ArtistAlbums
   * @func deleteAlbum
   */
deleteAlbum = () => {
  this.setState({Deleted:true});
  const requestOptions2={
    method:'DELETE'
  }

  const url2 =BASEURL+"album/remove/id"; 

  fetch(url2,requestOptions2)
    .then((response) => { return response.json()})
    .then((data) => {
      if (data.message == "album deleted successfully")
      {
        console.log("album deleted");
        this.setState({
          showSnackBar: true,
          snackBarMes: "Album Deleted",
        });
        setTimeout(() => {
          this.setState({ showSnackBar: false });
        }, 2000);
      }
    })
    .catch((error)=>{console.log(error);
    })
}

  render(){
    return (
      <div className ="artist-albums" >
            <ArtistAlbumsNavbar accountType="regular" name="Ali Halafawy" color="transparent"
            image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
          <div className="container  artist-top-section " style={{ backgroundImage: `url(https://i.scdn.co/image/378cc874bb148ccd0db2596b1e6b3a7f38ad301a)` }}>

            <h1 className="artist-name font-weight-bolder"> My Albums</h1>
            <div id="buttons">
         <Link to="/ArtistAccount/ArtistWebPlayer/AddAlbum"><button id="follow-button" className="btn btn-success rounded-pill " >
           Add Album   <i class="fas fa-plus"></i>
         </button></Link>
        </div>   
          </div>
          
           <div className="all-albums" >
             <h2 id="all-albums" >All Albums</h2>
           </div>    
          <div className="col-xs-12 col-sm-12 ">
        <table className="table table-borderless">
          <tbody>
                                            
           {this.state.AlbumInfo.map((album,index)=>(
            <tr key={index}>
              <th scope="row" className=" d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li >{album.albumName}</li>
                  <li className="song-info"><a href='/ArtistAccount/ArtistWebPlayer/'>{album.Singer}</a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'> </a></li>
                </ul>
              </td>
              <td >
                <div className="dropdown ">
                <a className="song-menu Menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
                  <div className="dropdown-menu song-dropdown-content dropdown-menu-right ">
                    <Link to="/ArtistAccount/ArtistWebPlayer/MySongs/EditAlbum"><a className="dropdown-item drop-class" id="REMOVE" value="ShowRemove" onClick={this.show}>Edit</a></Link>
                    <a className="dropdown-item drop-class" id="deletes" onClick={this.deleteAlbum} href="#">Remove</a>
                  </div>
                </div>
              </td>
            </tr>
            ))} 
             
      </tbody>
    </table>
    <ComponentBlock ComponentName="Popular Albums" type="albums" description="" details={this.state.PopularAlbums} excess={false}   /> 
    <ReactSnackBar
          Icon={<span className="fab fa-spotify"></span>}
          Show={this.state.showSnackBar}
        >
      {this.state.snackBarMes}
    </ReactSnackBar>
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
export default connect(mapStateToProps)(ArtistAlbums);

