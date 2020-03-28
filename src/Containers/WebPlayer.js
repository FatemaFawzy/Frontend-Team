import React,{Component} from 'react';
import './WebPlayer.css';
// import SearchPage from "./SearchPage";
import {Switch, Route} from "react-router-dom";
import HomePageSidebar from "../Components/HomePageSidebar"
import SearchPage from '../SearchComponents/SearchPage';
import YourLibrary  from './YourLibraryPages/YourLibrary';
import YourLibraryPlaylist  from './YourLibraryPages/YourLibraryPlaylist';
import ArtistProfile from './ArtistProfile/ArtistProfile';
import MusicBar from "../Components/MusicBar/MusicBar"
import HomePage from './HomePage';
import PlaylistPage from '../Components/PlaylistsComponent/PlaylistPage';
import CreatePlaylist from '../Components/PlaylistsComponent/CreatePlaylist';
import AlbumPage from '../Components/AlbumComponent/AlbumPage';



class WebPlayer extends Component {

  render(){

    return (
      <div className ="web-player-class">
        <div id="blur">
        <div className="row mx-0 no-gutters" >

          <div className="side-bar-web-player">
            <HomePageSidebar/>
          </div>

          <div className="content-web-player">

          <Switch>
            <Route exact path="/webplayer/" component={HomePage}/>
            <Route path="/webplayer/search" component={SearchPage}/>
            <Route path="/webplayer/yourlibrary" component={YourLibrary}/>
            <Route path="/webplayer/HomePage" component={HomePage}/>

              {/* TODO: change the directory. this is for testing only */}
              <Route path="/webplayer/likedsongs" component={ArtistProfile}/>
              <Route path="/webplayer/album" component={AlbumPage}/>
              <Route path="/webplayer/playlist" component={PlaylistPage}/>

            </Switch>

          </div>


        </div>

        <footer className="music-bar-footer">
          <MusicBar></MusicBar>
        </footer>
        </div>
        <CreatePlaylist/>
      </div>
      
    );


  }
  
}

export default WebPlayer;

