import React from 'react';
import axios from 'axios';
import {API_URL} from '../App'

import ArtistList from './ArtistList'

export default class Home extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        artists: []
      }
  }

  componentDidMount(){
    axios.get(`${API_URL}/search?type=artist&q=test`).then((response)=> {
      this.setState({
        artists: response.data.artists.items
      });
  })
  }

  render(){
    return(

      <div className="homeContainer">
        <div>
          <h1 className="pageTitle"> Top Artists </h1>
        </div>
        <div className="itemsContainer">
          <ArtistList artists = {this.state.artists} />
        </div>
      </div>
    )
  }
}
