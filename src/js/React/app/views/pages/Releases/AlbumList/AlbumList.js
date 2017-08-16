import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AlbumList extends Component{
  constructor(props){
    super(props)
    this.state = {
      playSound: false
    }
  }

  render(){
    return(
      <div className="albumList">
        <h1> These are the Albums </h1>
        <div className="albumList__spaceGhost">
          <iframe style={{border: 0, width: 350, height: 350}} src="https://bandcamp.com/EmbeddedPlayer/album=1738598922/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://fadedslightly.bandcamp.com/album/space-coast-manor-sessions-volume-1">Space Coast Manor Sessions Volume 1 by Slightly Faded</a></iframe>
          <Link to="/releases/spaceghost"> <button> Space Ghost Manor </button> </Link>
        </div>
        <div className="albumList__loudStrange">
          <iframe style={{border: 0, width: 350, height: 350}} src="https://bandcamp.com/EmbeddedPlayer/album=2814396654/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://fadedslightly.bandcamp.com/album/loudstrangedifferent">loudstrangedifferent by Slightly Faded</a></iframe>
          <Link to="/releases/loudstrange"> <button> loudstrangedifferent </button> </Link>
        </div>
        <div className="albumList__summerTime">
          <iframe style={{border: 0, width: 350, height: 350}} src="https://bandcamp.com/EmbeddedPlayer/track=2589176487/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://fadedslightly.bandcamp.com/track/summertime-sublime-doin-time">Summertime (Sublime - Doin&#39; Time) by Slightly Faded</a></iframe>
          <Link to="/releases/summertime"> <button> SummerTime </button> </Link>
        </div>
        <div className="albumList__floridaHigh">
          <iframe style={{border: 0, width: 350, height: 350}} src="https://bandcamp.com/EmbeddedPlayer/album=1605193841/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://fadedslightly.bandcamp.com/album/florida-high">Florida High by Slightly Faded</a></iframe>
          <Link to="/releases/floridahigh"> <button> Florida High </button> </Link>
        </div>
        <div className="albumList__orangePalms">
          <iframe style={{border: 0, width: 350, height: 350}} src="https://bandcamp.com/EmbeddedPlayer/album=3495745832/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://fadedslightly.bandcamp.com/album/orange-palms">Orange Palms by Slightly Faded</a></iframe>
          <Link to="/releases/orangepalms"> <button> Orange Palms </button> </Link>
        </div>
      </div>
    )
  }
}

export default AlbumList;
