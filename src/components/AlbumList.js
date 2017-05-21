import React from 'react'
import { Link } from 'react-router-dom'

function AlbumList(props) {
  return (
    <ul className="itemList">

      <div className="imgNameContainer">
        {props
          .albums
          .map((album, i) => {
            const image = album.images.length > 0
              ? album.images[0].url
              : "";
            var divStyle = {
              backgroundImage: `url(${image})`,
              width: "100%"
            };

            return (
              <li key={i}>
                <Link to={`/album/${album.id}`}>
                  <div className="image-container image-container--shadow" style={divStyle}></div>
                  <p className="itemName">{album.name}</p>
                </Link>
              </li>
            )
          })}
      </div>

    </ul>
  )
}

export default AlbumList;
