import React ,{ Component} from 'react';
import './YourLibraryPlaylist.css';
import YourLibraryNavbar from "../../Components/YourLibraryComponents/YourLibraryNavbar";
import GeneralItem from "../GenericComponenets/GeneralItem";
import LikedSongsComponent from '../../Components/YourLibraryComponents/LikedSongsComponent';
import {connect} from "react-redux";
class YourLibraryPlaylist extends Component {
  constructor(props){
    super(props);
    this.state = {
    playlistArray:[],
    total:"",
    }
  }
  componentDidMount() {

    //Make a request with this.props.userID
    //assume this is the returned data

    // const url = "https://jsonplaceholder.typicode.com/photos"; 
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState({playlists:data.slice(0,10)})
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })

    const playlistArray=
    [
      {image:"https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba",
      name:"Mood Booster",
      description:"Ride on dem swings",
      id:"1"},
      {image:"https://i.scdn.co/image/ab67706f0000000262822373d6fce52feea1501c",
      name:"Pop PunkFaves",
      description:"Your favorite punks.",
      id:"2"},
      {image:"https://i.pinimg.com/474x/75/28/e7/7528e70aef7cf03be7a5fb13a163f476.jpg",
      name:"Today's Top Hits",
      description:"Drake is on top of the Hot 100!",
      id:"3"},
      {image:"https://pl.scdn.co/images/pl/default/2d5e3dba500f5a4f87581eaf7e294089806b6ba9",
      name:"Comfort Zone",
      description:"Chilled songs that you are familiar with - no surprises!",
      id:"4"},
      {image:"https://i.scdn.co/image/ab67706f00000002b6b079ea1e8f5af584d7a897",
      name:"Hip Hop Drive",
      description:"Hey there homie..",
      id:"5"}
  ];

    
    const playlists = playlistArray.map(item => {
      return (
        <GeneralItem
        image={item.image}
        name={item.name}
        subname={item.description}
        id={item.id}
        type="PLAYLIST"
      />
      )
    }
    )
    this.setState({total:playlists});
  }
render() {
return ( 
  <div className="your-library-playlist">
     <YourLibraryNavbar moreButtonName="More" type="Playlists" name="Mariam El Baz" image="https://scontent.faly3-1.fna.fbcdn.net/v/t1.0-9/55551870_2158938997531927_3034631111746519040_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeGwe2-J_MT4EygifW-VfNvej1uF1cRNlvwiorJldSFzTIIpuVox357lEbAA-O4M3jEKKMKWI8PrCYFUvy0wVPf8XPOsIIRBGNPyiy7u7AH8Ug&_nc_ohc=V_GhBoRn94kAX_oH8FG&_nc_ht=scontent.faly3-1.fna&oh=2049561230477a31e5eb3fe1ea8f3a92&oe=5EA2F5F0" />
        <div className="actual-content">
        <h1 className="playlist-header">Playlists</h1>
        <LikedSongsComponent {...this.props}/>
        {this.state.total}
        </div>

      </div>

);
}
}

const mapStateToProps = state => {

  return {
    userID:state.userID
  };

};
export default connect(mapStateToProps)(YourLibraryPlaylist);