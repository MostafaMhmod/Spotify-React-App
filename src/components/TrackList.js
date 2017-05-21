import React from 'react'

function TrackList(props) {
  // console.log(props.imageURL);
  return (
    <div className="tracksContainer">
      <ul className="trackList">

        <div className="singleTrack">
          {props.tracks.map((track, i) =>
            <ol key={i} onClick={() => props.playTrack(props.tracks, i, props.imageURL)}>
              <p className="trackNumber">{i + 1}.</p>
              <div className="tracksNames">
                <p className="trackName">{track.name}</p>
              </div>
              <p className="trackDuration">{track.duration_ms}</p>
              <div className="clear"></div>
            </ol>
          )}
        </div>

      </ul>
    </div>
  )
}

export default TrackList;
