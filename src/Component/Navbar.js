import React from 'react'

export default function Navbar(props) {
  return (
    <div >
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <p className="navbar-brand" href="/">TextUtils</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <p className="nav-link active" aria-current="page" href="/">Home</p>
        </li>
        <li className="nav-item">
          <p className="nav-link" href="/">About</p>
        </li>
        {/* onClick={props.ytext}{props.yltheme} */}
      </ul>
      
      <div className={`form-check form-switch text-${ props.mode==='light'?'dark':'light'} `} >
      <input className="form-check-input" type="checkbox" onClick={() => { props.toggel(); props.ctext(); }} role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.changeText}</label>
      </div>
     
    </div>
  </div>
</nav>
    </div>
  )
}
