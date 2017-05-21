import React from 'react'
import { API_URL } from "../App"
import axios from 'axios';
import TrackList from "./TrackList"
import { Link } from 'react-router-dom'

export default class SingleAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: {},
      artists: []
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`${API_URL}/albums/${id}`).then(
      (response) => {
        this.setState({
          album: response.data, artists: response.data.artists
        });
      }
    )
  }

  render() {
    if (!this.state.artists[0]) {
      return null;
    }
    // console.log("Single Album Page ");
    // console.log(this.state.album.tracks);


    return (
      <div className="singleAlbumContainer">

        <div className="artistDetail">

          <img className="albumImage" src={this.state.album.images[0].url} />

          <h2 className="albumName">
            {this.state.album.name}
          </h2>

          <h4 className="albumArtistName">
            {this.state.artists[0].name}
          </h4>

          <h5 className="albumTracks">
            {this.state.album.tracks.total} tracks
            </h5>

          <Link to={`/artist/${this.state.artists[0].id}`}>
            <button className="button">ARTIST PROFILE </button>
          </Link>

        </div>


        <TrackList tracks={this.state.album.tracks.items} imageURL={this.state.album.images[0].url} playTrack={this.props.playTrack} />


      </div>

    )
  }
}
