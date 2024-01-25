import React from 'react'

const Navbar = () => {
  return (
	<div>
	  <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{"color": "white"}}><b>Movies Now</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{"color": "white", "backgroundColor": "white"}}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#" style={{"color": "white"}}><strong>Home</strong></a>
        <a className="nav-link" href="#" style={{"color": "white"}}><strong>Action</strong></a>
        <a className="nav-link" href="#" style={{"color": "white"}}><strong>Drama</strong></a>
		    <a className="nav-link" href="#" style={{"color": "white"}}><strong>Science Fiction</strong></a>
      </div>
    </div>
  </div>
</nav>
	</div>
  )
}

export default Navbar
