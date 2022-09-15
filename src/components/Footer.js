import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-left"><b>lofi</b></div>
        <div className="footer-center"><a href="https://fueler.io/" target={"_blank"} rel="noreferrer">Side project by <img src="https://fueler.io/images/fueler/main/fueler-icon.svg" alt="" /> <span className='fueler'>Fueler</span></a></div>
        <div className="footer-right"><a href="https://github.com/anikman98/dope-music" target={"_blank"} rel="noreferrer">v1.0</a></div>
    </footer>
  )
}

export default Footer
