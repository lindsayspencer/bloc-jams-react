import React, { Component } from 'react';

class PlayerBar extends Component {

  render() {
    return(
      <section className="player-bar">
      <section id="volume-control" className="player-bar-section">
        <div className="lg icon ion-md-volume-low"></div>
        <input type="range"
        className="seek-bar"
        value={ this.props.currentVolume }
        min="0"
        max="1"
        step="0.01"
        onChange={ this.props.handleVolumeChange }
        />
        <div className="lg icon ion-md-volume-high"></div>
      </section>
      <section id="buttons" className="player-bar-section">
           <button id="previous" onClick={ this.props.handlePrevClick }>
             <span className="lg ion-md-skip-backward"></span>
           </button>
           <button id="play-pause" onClick={ this.props.handleSongClick }>
             <span className={ this.props.isPlaying ? "lg ion-md-pause" : "lg ion-md-play" } ></span>
           </button>
           <button id="next" onClick={ this.props.handleNextClick }>
             <span className="lg ion-md-skip-forward"></span>
           </button>
         </section>
         <section id="time-control" className="player-bar-section">
           <div className="current-time">{ this.props.formatTime(this.props.currentTime) }</div>
           <input
            type="range"
            className="seek-bar"
            value={(this.props.formatTime(this.props.currentTime) / this.props.formatTime(this.props.duration)) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={ this.props.handleTimeChange} />
           <div className="total-time">{ this.props.formatTime(this.props.duration) }</div>
         </section>

      </section>
    );
  }
}


export default PlayerBar;
