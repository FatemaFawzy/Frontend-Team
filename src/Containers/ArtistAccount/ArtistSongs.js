import React,{Component} from 'react';
 import './ArtistSongs.css';
 import ReactSnackBar from "react-js-snackbar";
 import "../../Components/PlaylistsComponent/SnackBar.css";
import ArtistHomePageNavbar from "./ArtistNavbar";
import ComponentBlock from "../../Components/HomePageComponents/ComponentBlock"
import * as itemType from "../../Constants/itemType";
import {connect} from "react-redux";
import {BASEURL} from "../../Constants/baseURL";
import {NavLink,Link} from "react-router-dom";



/** Class ArtistSongs
 * @category ArtistSongs
 * @extends Component
 */
export class ArtistSongs extends Component {
  constructor(props){
    super(props);
    this.state = {  
      SongInfo: [],
        PopularSongs: [],
            /**Boolean to indicate whether a song has been deleted
   * @memberof ArtistSongs
   * @type {boolean}
   */ 
        Deleted: false,
                   /**Boolean to indicate whether a song has been added
   * @memberof ArtistSongs
   * @type {boolean}
   */ 
        Added:"",
   /**Boolean to indicate if the snackbar should appear
   * @memberof ArtistSongs
   * @type {boolean}
   */ 
  showSnackBar: false,
  /**String of snackbar message
  * @memberof ArtistSongs
  * @type {string}
  */ 
      snackBarMes: ""
     
     
    }
    
  }
  
     /**A function that fires when the page loads
   * @memberof ArtistSongs
   * @func componentDidMount
   */
  componentDidMount() {
  const requestOptions1={
    method:"GET",
    headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
  }

   const url1 =BASEURL + "artist/mysongs/id"; 
  fetch(url1,requestOptions1)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({PopularSongs:data.songsInfo.slice(0,5)})

      
    })
    .catch((error)=>{
      console.log(error);
    })

    const requestOptions2={
      method:"GET",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }

    const url2 = BASEURL + "artist/mysongs/id"; 
    fetch(url2,requestOptions2)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
        SongInfo: data.songsInfo});
      })
      .catch((error)=>{console.log(error);
      })
 }
 ////////////////////////////////////////////////////////
      /**A function that is called when a song is requested to be deleted
   * @memberof ArtistSongs
   * @func deleteSong
   */
 deleteSong = () => {

  this.setState({Deleted:true});
  var requestOptions = {
    method: 'DELETE'
  };

  // get artist's popular tracks
  var urlPopular =BASEURL+"songs/remove/id"; 

  fetch(urlPopular,requestOptions)
    .then((response) => { return response.json()})
    .then((data) => {
      if (data.message == "song deleted successfully")
      {
        console.log("song deleted");
        this.setState({
          showSnackBar: true,
          snackBarMes: "Song Deleted",
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
      <div className ="artist-songs" >
            <ArtistHomePageNavbar accountType="regular" name="Ali Halafawy" color="transparent"
            image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
          <div className="container  artist-top-section " style={{ backgroundImage: `url(https://i.scdn.co/image/378cc874bb148ccd0db2596b1e6b3a7f38ad301a)` }}>

            <h1 className="artist-name font-weight-bolder"> My Songs</h1>
            <div id="buttons">
         <Link to="/ArtistAccount/ArtistWebPlayer/AddSong"><button id="follow-button" className="btn btn-success rounded-pill " >
           Add Song   <i class="fas fa-plus"></i>
         </button></Link>
        </div>   
          </div>
          <div className="col-xs-12 col-sm-12 ">
          
          
          <h1 id="all-songs">All Songs</h1>

          
        <table className="table table-borderless"> 
         <tbody>
                                             {/* Display likd songs */}
           {this.state.SongInfo.map((song,id)=>(
            <tr key={id}>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{song.songName}</li>
                  <li className="song-info"><a href='/ArtistAccount/ArtistWebPlayer/'>{song.artistName}</a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>{song.AlbumName}</a></li>
                </ul>
              </td>
              <td >
                <div className="dropdown ">
                <a className="song-menu Menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
                  <div className="dropdown-menu song-dropdown-content dropdown-menu-right ">
                    <Link to="/ArtistAccount/ArtistWebPlayer/MySongs/EditSong"><a className="dropdown-item drop-class" id="REMOVE" value="ShowRemove" onClick={this.show}>Edit</a></Link>
                    <a className="dropdown-item drop-class" id="delete" onClick={this.deleteSong} href="#">Remove</a>
                  </div>
                </div>
              </td>
              <td className="duration">{song.Duration}</td>
              <td className="likes">{song.Likes}  <i class="fas fa-heart"></i></td>
            </tr>
            ))} 

      </tbody>
    </table>
          <div className="Song-component">
          <ComponentBlock ComponentName="Popular Songs" type="songs" description="" details={this.state.PopularSongs} excess={false}   />
          </div>
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
export default connect(mapStateToProps)(ArtistSongs);

