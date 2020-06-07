import React,{Component} from 'react';
import './ArtistWebPlayer.css';
// import SearchPage from "./SearchPage";
import {Switch, Route} from "react-router-dom";
import ArtistSidebar from "../ArtistAccount/ArtistSideBar";
import SearchPage from "../../Components/SearchComponents/SearchPage";
import YourLibrary  from '../YourLibraryPages/YourLibrary';
import YourLibraryPlaylist  from '../YourLibraryPages/YourLibraryPlaylist';
import ArtistProfile from '../ArtistProfile/ArtistProfile';
import MusicBar from "../../Components/MusicBar/MusicBar"
import HomePage from '../HomePage/HomePage';
import PlaylistPage from '../../Components/PlaylistsComponent/PlaylistPage';
import CreatePlaylist from '../../Components/PlaylistsComponent/CreatePlaylist';
import AlbumPage from '../../Components/AlbumComponent/AlbumPage';
import AccountLayout from '../UserAccountProfile/AccountLayout';
import welcomePage from '../WelcomePage/welcomePage';
import OtherUser from '../OtherUserPage/OtherUser';
import LikedSongs from '../../Components/LikedSongs/LikedSongs';
import AddToPlaylist from '../../Components/PlaylistsComponent/AddToPlaylist';
import SeeAllArtists from '../../Containers/HomePage/SeeAllArtists';
import SeeAllPlaylists from '../../Containers/HomePage/SeeAllPlaylists';
import SeeAllMadeForYou from '../../Containers/HomePage/SeeAllMadeForYou';
import SeeAllRecentlyPlayed from '../../Containers/HomePage/SeeAllRecentlyPlayed';
import AdsBar from "../../Components/Ads/AdsBar";
import { ArtistHomePage } from './ArtistHomePage';


var isPremium=false;


class ArtistWebPlayer extends Component {

  render(){

    return (
      <div className ="web-player-class1">
        <div id="blur">
        <div id="blur-add-to-playlist">
        <div className="row mx-0 no-gutters" >

          <div className="side-bar-web-player">
            <ArtistSidebar/>
          </div>

          <div className="content-web-player">

         <Switch>
          <Route exact path="/ArtistAccount/ArtistWebPlayer/" component={ArtistHomePage}/>
         </Switch>
            

           

          </div>


        </div>

        
        </div>
        <AddToPlaylist/>
        </div>
        <CreatePlaylist/> 
      </div>
      
    );


  }
  
}

export default ArtistWebPlayer;
