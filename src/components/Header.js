import React from 'react'
import '../css/header.css';
const Header = () => {
  return (
    <nav className="header">
        <div className="header-right">
            <h1>dope music</h1>
        </div>
        <div className="header-left">
            <a href="https://iamanikman.web.app/contact" target={"_blank"} rel="noreferrer">anikmandal</a>
        </div>
    </nav>
  )
}

export default Header
