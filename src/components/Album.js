import React, { Component } from 'react';
import albumData from './../data/albums.js';
import PlayerBar from './PlayerBar.js'

class Album extends Component {
  constructor(props){
    super(props);
    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });
    this.state = {
      album: album,
      currentSong: null,
      isPlaying: false,
      currentHovered: null,
      currentTime: 0,
      duration: album.songs[0].duration,
      currentVolume: 0.2
    }
    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }
    play(){
      this.audioElement.play();
      this.setState({ isPlaying: true });
    }
    pause(){
      this.audioElement.pause();
      this.setState({ isPlaying: false });
    }
    setSong(song){
      this.audioElement.src = song.audioSrc;
      this.setState({ currentSong: song });
    }
    handleSongClick(song){
      const isSameSong = this.state.currentSong === song;
      if(this.state.isPlaying && isSameSong){
        this.pause();
      } else {
        if(!isSameSong) { this.setSong(song); }
        this.play();
      }
    };
    getIconFor(song, index){
      const isSameSong = this.state.currentSong === song;
      const isHoveredSong = this.state.currentHovered === song;
      if(this.state.isPlaying && isSameSong){
        return(<i className="icon ion-md-pause"></i>);
      } else if(!this.state.isPlaying && isSameSong) {
        return(<i className="icon ion-md-play-circle"></i>);
      } else if(!isSameSong && isHoveredSong) {
        return(<i className="icon ion-md-play-circle"></i>);
      } else {
        return(index + 1);
      }
    }
    handleSongHover(song){
      this.setState({ currentHovered: song });
    }
    handleSongHoverEnd(){
      this.setState({ currentHovered: null });
    }
    handlePrevClick(){
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.max(0, currentIndex - 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
    }
    handleNextClick(){
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.min(this.state.album.songs.length - 1, currentIndex + 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
    }
    componentDidMount(){
      this.eventListeners = {
        timeupdate: e => {
          this.setState({ currentTime: this.audioElement.currentTime });
        },
        durationchange: e => {
          this.setState({ duration: this.audioElement.duration });
        }
      };
      this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
      this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
    }
    componentWillUnmount(){
      // stops audio playback
      this.audioElement.src = null;
      this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
      this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
    }
    handleTimeChange(e){
      const newTime = this.audioElement.duration * e.target.value;
      this.audioElement.currentTime = newTime;
      this.setState({currentTime: newTime});
    }
    handleVolumeChange(e){
      this.audioElement.volume = e.target.value;
      this.setState({currentVolume: e.target.value});
    }
  render(){
    return(
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={ this.state.album.albumCover } alt={ this.state.album.title } />
          <div className="album-details">
            <h1 id="album-title">{ this.state.album.title }</h1>
            <h2 className="artist">{ this.state.album.artist }</h2>
            <div id="release-info">{ this.state.album.releaseInfo }</div>
            <table id="song-list">
              <colgroup>
                <col id="song-number-column" />
                <col id="song-title-column" />
                <col id="song-duration-column" />
              </colgroup>
              <tbody>
              { this.state.album.songs.map( (song, index) =>
                <tr key={index} className="song" onClick={() => this.handleSongClick(song)} onMouseEnter={() => this.handleSongHover(song)} onMouseLeave={() => this.handleSongHoverEnd()}><td> {this.getIconFor(song, index)} {song.title} ({song.duration} seconds)</td></tr>)}
              </tbody>
            </table>
            <PlayerBar
              isPlaying={this.state.isPlaying}
              currentSong={this.state.currentSong}
              handleSongClick={() => this.handleSongClick(this.state.currentSong)}
              handlePrevClick={() => this.handlePrevClick()}
              handleNextClick={() => this.handleNextClick()}
              currentTime={this.audioElement.currentTime}
              duration={this.audioElement.duration}
              handleTimeChange={(e) => this.handleTimeChange(e)}
              currentVolume={this.audioElement.currentVolume}
              handleVolumeChange={(e) => this.handleVolumeChange(e)}
              />
          </div>
        </section>
      </section>
    );
  }
}

export default Album;
