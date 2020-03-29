import React ,{ Component} from 'react';
import './AlbumPage.css';
import ClickAwayListener from 'react-click-away-listener';



class AlbumPage extends Component
{
  DropMenu ()
  {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  ClickAway()
  {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  state= { 
    AlbumImage: "https://i1.sndcdn.com/artworks-000240088107-9s5wcs-t500x500.jpg",
    AlbumName: "Perfect",
    Artist: "Ed sheran",
    songsNumber: "12 Songs",
  }

   SongInfo = {
    "Perfect" :
    {
           "id" : 12,
           "SongName" : "Perfect",
           "Singer": "Ed Sheran",
           "Duration" : "3:52"
    },
    "GalwayGirl" :
    {
          "id" : 22,
          "SongName" : "Galway girl",
          "Singer": "Ed Sheran",
          "Duration" : "4:15"
    },
    "ShapeOfYou" :
    {
           "id" : 32,
           "SongName" : "Shape of you",
           "Singer": "Ed Sheran",
           "Duration" : "2:58"
    },
    
}
  render(){
  return(
  <div className="Album-page">
      <div className="content-spacing">
        <div className="row" >
                                             {/* Crad Element */}

          <div className="col-xs-12  col-lg-5 col-xl-4 d-flex justify-content-center " style={{display:"table"}}>
             <ul className="list-unstyled centered-content">
              <li>
              <div class="card ">
              <img src={this.state.AlbumImage} class="card-img-top" alt=""/>
              </div>
              </li>

					  <li> <h3> {this.state.AlbumName} </h3> </li>
					  <li> <h5> {this.state.Artist} </h5> </li>
            <li> <a href="#" className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> Play</a> </li>
            <li >
              <span className="like-song"> 	&#9829;</span>
              <ClickAwayListener onClickAway={this.ClickAway}>
              <div className="dropdown ">
              <a onClick={this.DropMenu} className="d-flex justify-content-center font-weight-bolder card-menu" >•••</a>
              <div id="myDropdown" class="dropdown-content ">
                <a href="#">Add to playlist</a>
                <a href="#">Save to library</a>
              </div>
              </div>
              </ClickAwayListener>
          
            </li>
            <li> <div> {this.state.songsNumber} </div></li>
					</ul>
          </div>

                                              {/* Song Info */}

          <div className="col-xs-12  col-lg-7 col-xl-8">
          <table class="table table-borderless">
            <tbody>
                                            {/* Perfect */}
            <tr>
              <th scope="row" className="music-sign d-flex justify-content-center"> </th>
                <td className="song-content">
                  <ul className="list-unstyled">
                    <li>{this.SongInfo.Perfect.SongName}</li>
                    <li className="song-info"><a href='#'>{this.SongInfo.Perfect.Singer} </a> </li>
                  </ul>
                </td>
                <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
                <td className="duration">{this.SongInfo.Perfect.Duration}</td>
            </tr>
                                          {/* Galway girl */}
            <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
                <td className="song-content">
                  <ul className="list-unstyled">
                    <li>{this.SongInfo.GalwayGirl.SongName}</li>
                    <li className="song-info"><a href='#'>{this.SongInfo.GalwayGirl.Singer} </a> </li>
                  </ul>
                </td>
                <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
                <td className="duration">{this.SongInfo.GalwayGirl.Duration}</td>
            </tr>
                                          {/* Shape of you */}
            <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
                <td className="song-content">
                  <ul className="list-unstyled">
                    <li>{this.SongInfo.ShapeOfYou.SongName}</li>
                    <li className="song-info"><a href='#'>{this.SongInfo.ShapeOfYou.Singer} </a> </li>
                  </ul>
                </td>
                <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
                <td className="duration">{this.SongInfo.ShapeOfYou.Duration}</td>
            </tr>

            
        {/* Perfect */}
            <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
                <td className="song-content">
                  <ul className="list-unstyled">
                    <li>{this.SongInfo.Perfect.SongName}</li>
                    <li className="song-info"><a href='#'>{this.SongInfo.Perfect.Singer} </a> </li>
                  </ul>
                </td>
                <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
                <td className="duration">{this.SongInfo.Perfect.Duration}</td>
            </tr>
                                          {/* Galway girl */}
            <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
                <td className="song-content">
                  <ul className="list-unstyled">
                    <li>{this.SongInfo.GalwayGirl.SongName}</li>
                    <li className="song-info"><a href='#'>{this.SongInfo.GalwayGirl.Singer} </a> </li>
                  </ul>
                </td>
                <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
                <td className="duration">{this.SongInfo.GalwayGirl.Duration}</td>
            </tr>
                                          {/* Shape of you */}
            <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
                <td className="song-content">
                  <ul className="list-unstyled">
                    <li>{this.SongInfo.ShapeOfYou.SongName}</li>
                    <li className="song-info"><a href='#'>{this.SongInfo.ShapeOfYou.Singer} </a> </li>
                  </ul>
                </td>
                <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
                <td className="duration">{this.SongInfo.ShapeOfYou.Duration}</td>
            </tr>

            
                                            {/* Perfect */}
                                            <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
                <td className="song-content">
                  <ul className="list-unstyled">
                    <li>{this.SongInfo.Perfect.SongName}</li>
                    <li className="song-info"><a href='#'>{this.SongInfo.Perfect.Singer} </a> </li>
                  </ul>
                </td>
                <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
                <td className="duration">{this.SongInfo.Perfect.Duration}</td>
            </tr>
                                          {/* Galway girl */}
            <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
                <td className="song-content">
                  <ul className="list-unstyled">
                    <li>{this.SongInfo.GalwayGirl.SongName}</li>
                    <li className="song-info"><a href='#'>{this.SongInfo.GalwayGirl.Singer} </a> </li>
                  </ul>
                </td>
                <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
                <td className="duration">{this.SongInfo.GalwayGirl.Duration}</td>
            </tr>
                                          {/* Shape of you */}
            <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
                <td className="song-content">
                  <ul className="list-unstyled">
                    <li>{this.SongInfo.ShapeOfYou.SongName}</li>
                    <li className="song-info"><a href='#'>{this.SongInfo.ShapeOfYou.Singer} </a> </li>
                  </ul>
                </td>
                <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
                <td className="duration">{this.SongInfo.ShapeOfYou.Duration}</td>
            </tr>

              
            </tbody>
          </table>
           </div> 
          </div>
      </div>
    </div>
  )
}
}

export default AlbumPage;