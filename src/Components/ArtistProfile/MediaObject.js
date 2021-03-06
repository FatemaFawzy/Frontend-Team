import React, { Component } from 'react';
import "./MediaObject.css";

/** Class MediaObject
 * @category MediaObject
 * @extends Component
 */
class MediaObject extends Component {
  constructor(props){
    super(props);
    this.referefence= React.createRef();
    this.state = {
  /**State member showing whether a song/album is playing or not
   * @memberof MediaObject
   * @type {boolean}
   */
      playing: false,
    }
  }

// TODO: handle the case to play only 1 song at a time (play/pause icon)

  render(){

    var PlayPause = this.state.playing ? <i className="far fa-pause-circle"></i> : <i className="far fa-play-circle"></i>;

    return (
      <div className="media-object">

        <div className="container">
          <img src= {this.props.image} className="displayed-image" alt=""></img>
          <div className="middle">
            <div onClick={(event) => {
              this.setState((prevstate, event) => ({ playing: prevstate.playing ? false : true }))
              }}> {PlayPause} </div>
          </div>
        </div>

        <div className="title">
          <a className="title" href={this.props.albumLink} > {this.props.objectName} </a>
        </div>

      </div>
    );
  }
}
export default MediaObject;