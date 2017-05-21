import React from 'react'
import { Link } from 'react-router-dom'

function ArtistList(props) {

  // console.log(props.artists[0].images[0].url);
  // <img  className="itemImage" src={image} />

  return (
    <ul className="itemList">

      <div className="imgNameContainer">
        {props.artists.map((artist, i) => {
          const image = artist.images.length > 0 ? artist.images[0].url : "";
          var divStyle = {
            backgroundImage: `url(${image})`,
            width: "100%"
          };
          return (
            <li key={i}>
              <Link to={`/artist/${artist.id}`}>
                <div className="image-container image-container--shadow" style={divStyle}>
                </div>
                <p className="itemName">{artist.name}</p>
              </Link>
            </li>
          )
        }
        )
        }
      </div>

    </ul>
  )
}

export default ArtistList;
