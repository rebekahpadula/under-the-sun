import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Shows from './components/Shows';
import Social from './components/Social';
// import Video from './components/Video';
// import LongBio from './components/LongBio';
import ShortBio from './components/ShortBio';
import HeroImage from './components/HeroImage';
import InquiryForm from './components/InquiryForm';

import NavIcon from './assets/icon-menu.svg';
import CloseIcon from './assets/icon-close.svg';

const AppContainer = styled.div`
  /* max-width: 1800px; */
  margin: 0 auto;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.closeMobileNav = this.closeMobileNav.bind(this);
  }

  toggleNavigation() {
    // grab icon
    const toggleIcon = document.getElementById('toggleIcon');
    // grab toggle link
    const toggleLink = document.getElementById('toggleLink');
    // grab next sibling
    const navList = toggleLink.nextElementSibling;
    if(navList.dataset.expandContent == 'false') {
      navList.setAttribute('data-expand-content', 'true');
      toggleIcon.setAttribute('src', CloseIcon);
    } else {
      navList.setAttribute('data-expand-content', 'false');
      toggleIcon.setAttribute('src', NavIcon);
    }
  }

  closeMobileNav(e) {
    const navLink = document.querySelector('.primary-nav__link');
    const navList = navLink.parentNode.parentNode;
    navList.setAttribute('data-expand-content', 'false');
    // why doesn't this part work??
    const toggleIcon = document.getElementById('toggleIcon');
    toggleIcon.setAttribute('src', NavIcon);
  }

  render() {
    return (
      <AppContainer>
        {/* <Header toggleNavigation={this.toggleNavigation} closeMobileNav={this.closeMobileNav}></Header> */}
        <HeroImage/><Social></Social>
        <ShortBio></ShortBio>
        <InquiryForm></InquiryForm>
        <Shows></Shows>
        {/* <Video></Video> */}
      </AppContainer>
    );
  }
}