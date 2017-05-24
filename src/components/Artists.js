import React from 'react'
import {API_URL} from '../App'
import axios from 'axios';
import ArtistList from './ArtistList'


export default class Artists extends React.Component{

  constructor(props){
    super(props);
    this.state={
      artists:[]
    }
    this.searchArtists = this.searchArtists.bind(this);

  }
  render(){
    // console.log(this.state.artists);
    return(
      <div className="homeContainer">
        <div className="titleDiv">
          <h1 className="pageTitle"> Search for artists </h1>
        </div>

        <form className="inputForm" onSubmit={this.searchArtists}>
					<input className="inputField" ref="keyword" type="text" placeholder="Search..."/>
				</form>

        <div className="itemsContainer">
        <ArtistList artists={this.state.artists}/>
        </div>
      </div>
    )
  }
  searchArtists(event){
  event.preventDefault();
  let keyword = this.refs.keyword.value;

  axios.get(`${API_URL}/search?type=artist&q=${keyword}`).then(response => {
    console.log(response.data.artists.items[0]);
    this.setState({
      artists: response.data.artists.items
    });
  });
}

}
