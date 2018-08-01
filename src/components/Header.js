import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <a className="header-logo" href="/" aria-label="Trello Clone Home">
       <span className="header-logo-default"></span>
      </a>
      <div className="header-boards-button">
        <a className="header-btn" href="#">
          <span className="header-btn-icon"></span>
          <span className="header-btn-text">Boards</span>
        </a>
      </div>
      <div>
        <a className="header-btn" href="/search" title="Search for boards, cards, member, and teams">
          <span className="header-btn-icon"></span>
        </a>
        <div className="header-search">
          <input className="header-search-input" type="text" autocomplete="off" autocorrect="off" spellcheck="false" value=""/>
          <span className="header-search-icon"></span>
          <a className="header-search-icon" href="#"></a>
        </div>
        <div className="header-user">
          <a className="header-btn" href="#" aria-label="Create Board"><span className="header-btn-icon"></span></a>
          <a className="header-btn" href="#" aria-label="Open Tips Menu"><span className="header-btn-icon"></span></a>
          <a className="header-btn" href="#" aria-label="Notifications"><span className="header-btn-icon"></span></a>
          <a className="header-btn" href="#" aria-label="Open Member Menu"><span className="header-btn-icon"></span></a>
        </div>
      </div>
    </div>
  ) 
}

export default Header;