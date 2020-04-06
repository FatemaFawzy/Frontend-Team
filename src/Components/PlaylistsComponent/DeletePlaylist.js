import React ,{ Component} from 'react';
import'./DeletePlaylist.css';
import {BASEURL} from "../../Constants/baseURL";
import {connect} from 'react-redux';



class DeletePlaylist extends Component{

handleDelete () {
const url = BASEURL+ "/playlists?playlistName="+this.props.playlistName;    
  console.log(url);
  // const requestOptions = {
  //   method: 'DELETE', 
  //   headers: { 'x-auth': this.props.userToken }, 
  // };    
  //    fetch(url,requestOptions)
  //     .then((res) => res.json())
  //     .then((data) =>console.log(data))
  //     .catch((err)=>console.log(err))
}


render(){
  return(
<div className="delete-playlist ">
<div id="delete" className="modal fade" role="dialog">
<div className="modal-dialog modal-xl  ">
<div className="modal-content">


            <button className="btn close-button" data-dismiss="modal"> <i className="fas fa-times"></i> </button>
        
          <h2 className="d-flex justify-content-center mb-3" >Do You Really Want To Delete this playlist?</h2>
          <div className="container ">
              <div className="row">
                <div className="col-6 d-flex justify-content-end">
                <button className="btn btn-dark border border-light rounded-pill text-center px-5 py-2 mt-3 font-weight-bold" data-dismiss="modal"> Cancel</button>
                </div>
                <div className="col-6 d-flex justify-content-start">
                <a href="/webplayer/yourlibrary" className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold" > Delete</a>
          
            </div>
        </div>
        </div>
        </div>    
</div>
</div>
</div>
  )
}
}
const mapStateToProps = state =>{
  return{
    playlistName: state.selectedPlaylistName,
    userToken: state.userToken

  };
};

export default connect(mapStateToProps) (DeletePlaylist)