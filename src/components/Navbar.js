import React from 'react'
import PropTypes from 'prop-types'
export const Navbar = (props) => {
  return (
    <div><nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.AboutText}</a>
          </li>
          
          
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox"  onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?"Enable Dark Mode":"Disable Dark Mode"}</label>
</div>
      </div>
    </div>
  </nav></div>
  )
}
Navbar.prototype={title: PropTypes.string.isRequired,
AboutText: PropTypes.string.isRequired}
Navbar.defaultProps={
    title:'Jay Shree Ram',
    AboutText:'Radhe Radhe '
}
export default Navbar;