import React, { Component } from 'react';

class Landing extends Component {
  render(){
    return(
    <section>
      <i className="icon lg ion-md-volume-low"></i>
      <h1 className="hero-title">Turn the music up!</h1>
      <i className="icon lg ion-md-volume-high"></i>
        <section className="selling-points">
          <div className="point">
            <h2 className="point-title">Choose your music</h2>
            <i className="icon lg ion-md-checkbox-outline"></i>
            <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
          </div>
          <div className="point">
            <h2 className="point-title">Unlimited, streaming, ad-free</h2>
            <i className="icon lg ion-md-checkbox-outline"></i>
            <p className="point-description">No arbitrary limits. No distractions.</p>
          </div>
          <div className="point">
            <h2 className="point-title">Mobile enabled</h2>
            <i className="icon lg ion-md-checkbox-outline"></i>
            <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
          </div>
        </section>
    </section>
  )}
}

export default Landing;
