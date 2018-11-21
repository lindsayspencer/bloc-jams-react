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
          <Link to={`/album/${album.slug}`} key={index}>
          {album.title}
          <img src={album.cover} alt={album.title} />
          <div>{album.title}</div>
          <div>{album.artist}</div>
          <div>{album.songs.length} tracks</div>
        </Link>
      ) }
        </section>
       );
  }
}

export default Library;
