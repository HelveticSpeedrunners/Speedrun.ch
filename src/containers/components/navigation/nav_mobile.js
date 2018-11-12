import React from 'react';
import { Link } from 'react-router-dom';

export default class extends React.Component {
  render() {
    return (
      <nav id="nav-mobile" className="navTransparent">
        <div className="nav-header" id="nav-mobile-header">
          <div className="burger" onClick={this.toggleActiveClass} id="burger">
            <i className="icon icon-menu icon--s5" aria-hidden="true" />
          </div>
        </div>
        <div
          className="nav-content"
          id="mobile-content"
          onClick={this.toggleActiveClass}
        >
          <Link exact to="/">
            <img src="/img/logo_home.png" alt="Helvetic Speedrunners Logo" />
          </Link>
          <Link to="/#about">About Us</Link>
          <Link to="/#events">Events</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="mailto:contact@speedrun.ch">Contact</Link>
        </div>
      </nav>
    );
  }

  toggleActiveClass() {
    if (typeof document !== 'undefined') {
      var element = document.getElementById('mobile-content');
      element.classList.toggle('active');
      var burger = document.getElementById('burger');
      burger.classList.toggle('active');
    }
  }
}
