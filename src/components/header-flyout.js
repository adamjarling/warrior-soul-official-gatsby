import React from 'react';
import logo from '../images/warrior-soul-logo-full-white.png';
import * as globals from '../services/globals';

const items = [
  {
    idUrl: '/#home',
    title: 'home',
    label: 'Home'
  },
  {
    idUrl: '/#about',
    title: 'about',
    label: 'Bio'
  },
  {
    idUrl: '#tour-dates',
    title: 'tour dates',
    label: 'Tour Dates'
  },
  {
    idUrl: '#works',
    title: 'photos',
    label: 'Photos'
  },
  {
    idUrl: '/#albums',
    title: 'albums',
    label: 'Albums'
  },
  {
    idUrl: '#videos',
    title: 'videos',
    label: 'Videos'
  },
  {
    idUrl: '#shop',
    title: 'shop',
    label: 'Buy Merch'
  },
  {
    idUrl: '#contact',
    title: 'contact',
    label: 'Contact / Booking'
  }
];

const HeaderItem = props => {
  const { idUrl, title, label } = props;

  return (
    <li>
      <a className="smoothscroll" href={idUrl} title={title}>
        {label}
      </a>
    </li>
  );
};

const HeaderFlyout = () => {
  return (
    <header className="s-header">
      <div className="header-logo">
        <a className="site-logo" href="/">
          <img src={logo} alt="Homepage" />
        </a>
      </div>

      <nav className="header-nav">
        <a href="#0" className="header-nav__close" title="close">
          <span>Close</span>
        </a>

        <h3>Navigate to</h3>

        <div className="header-nav__content">
          <ul className="header-nav__list">
            {items.map(item => (
              <HeaderItem
                key={item.idUrl}
                idUrl={item.idUrl}
                title={item.title}
                label={item.label}
              />
            ))}
            <li>
              <a href="http://warriorsoulofficial.com/artwork/" title="Paintings and Sculptures by Kory Clarke" target="_blank" rel="noopener noreferrer">
                Paintings and Sculptures
              </a>
            </li>
          </ul>

          <p>Copyright 2018 Warrior Soul</p>

          <ul className="header-nav__social">
            <li>
              <a href={globals.FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/warriorsoulofficial/">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <a className="header-menu-toggle" href="#0">
        <span className="header-menu-icon" />
      </a>
    </header>
  );
};

export default HeaderFlyout;
