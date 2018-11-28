import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
// albumData is now an array that holds 2 objects - each object defines properties of a specific album

class Library extends Component {
  constructor(props){
    super(props);
    this.state = {
      albums: albumData
    }
  }
  render() {
    return(
      <section className='library'>
      { this.state.albums.map( (album, index) =>
        <section className="album-item">

          <div>
          <img src={album.albumCover} alt={album.title} />
          </div>
          <ul>
            <li>Album: {album.title}</li>
            <li>Artist: {album.artist}</li>
            <li>Length: {album.songs.length} tracks</li>
          </ul>
         <Link to={`/album/${album.slug}`} key={index}>
          <button className="album-link">View Album <i className="icon ion-md-arrow-forward"></i></button>
         </Link>
        </section>
      ) }
        </section>
       );
  }
}

export default Library;
