import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About">{props.about}</Link>
            </li>
          </ul>
          <div class="dropdown me-2">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: props.mode==='dark'? '#4B4948 ': '#F0C0B5 ', color:props.mode=== 'dark'?'white': 'black'}}>
              <i class="fa-solid fa-moon fa-lg" onClick={props.toggleMode}></i>
            </button>
            <ul class="dropdown-menu" style={{backgroundColor: props.mode==='dark'? '#4B4948 ': '#F0C0B5 ', color:props.mode=== 'dark'?'white': 'black'}}>
              <li onClick={props.lightMode}><i class="fa-solid fa-sun ps-1"></i><Link style={{textDecoration:"none",color:props.mode==="dark"?'white':'black'}} to="/">Light</Link></li>
              <li onClick={props.darkMode}><i class="fa-solid fa-circle-half-stroke ps-1"></i><Link style={{textDecoration:"none",color:props.mode==="dark"?'white':'black'}} to="/">Dark</Link></li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn" style={{backgroundColor: props.mode==='dark'? '#4B4948 ': '#F0C0B5 ', color:props.mode=== 'dark'?'white': 'black'}} type="submit">Search</button>
          </form>
          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
            {/*<input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>*/}
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "enter title",
  home: "enter home"
}