import React from 'react';
import ReactPlayer from 'react-player';
// import { API_URL } from "../App";
// import axios from 'axios';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      progressWidth: 0,
      artistImage: ""
    }
    this.togglePlay = this.togglePlay.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
  }
  togglePlay() {
    this.setState({ playing: !this.state.playing });
  }
  handleProgress(played) {
    this.setState({ progressWidth: played.played * 100 });
  }

  render() {
    console.log(this.props);
    if (!this.props.current) {
      return null;
    }
    var divStyle = {
      backgroundImage: `url(${this.props.imageURL})`,
      height: "100%"
    };

    return (

      <div className="playerContainer">

        <div className="playerArtist">
          <div className="trackImage">
            <div className="playerImage" style={divStyle}></div>
          </div>
          <h6 className="trackPlaying">{this.props.current.name}</h6>
          <h6 className="trackPlaying">{this.props.current.artists[0].name}</h6>
        </div>

        <div className="player">
          <div className="playerControls">
            <div className="playerControlsButtons">
              <a className="playerControlsButtons">


                <i className={!this.state.playing ? "fa fa-play fa-2" : "fa fa-pause fa-2"} onClick={this.togglePlay} >
                </i>
              </a>
            </div>

            <div className="playerBar">
              <h6 className="timeBegin">{parseInt((this.state.progressWidth * 30) / 100)}</h6>
              <div className="progressBar">
                <div className="progressBarColor" style={{ width: `${this.state.progressWidth}%` }}></div>
              </div>
              <h6 className="timeEnd">30</h6>
            </div>
          </div>

          <ReactPlayer onProgress={this.handleProgress} url={this.props.current.preview_url} hidden playing={this.state.playing} />

        </div>

      </div>

    )
  }
}
