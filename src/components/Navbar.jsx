import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import MoviesContext from '../context/MoviesContext';
const Navbar = () => {
  let [username, setUsername] = useState('');
  let a = useContext(MoviesContext);
  return (
	<div>
	  <nav className="navbar navbar-expand-lg bg-dark" style={{"position": "fixed", "top": "0px", "left": "0px", "right": "0px"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{"color": "white"}}><b>Movies Now</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{"color": "white", "backgroundColor": "white"}}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
       <Link className="nav-link" to="/" style={{"color": "white", "textDecoration": "none", "fontWeight": "bold"}} onClick={()=>a.updateCategory('')}>Home</Link>
        <Link className="nav-link" style={{"color": "white"}} onClick={()=>a.updateCategory('Action')}><strong>Action</strong></Link>
        <Link className="nav-link" style={{"color": "white"}} onClick={()=>a.updateCategory('Drama')}><strong>Drama</strong></Link>
		    <Link className="nav-link" style={{"color": "white"}} onClick={()=>a.updateCategory('Science-fiction')}><strong>Science Fiction</strong></Link>
        <Link to="/login" className="nav-link" style={{"color": "white"}}><strong>Login</strong></Link>
        <Link to="/signup" className="nav-link" style={{"color": "white"}}><strong>Signup</strong></Link>
        {a.dat.username ?
          <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center"}}>
          <img src="https://tse1.mm.bing.net/th?id=OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd&pid=Api&P=0&h=180" style={{"width": "30px", "height": "30px", "borderRadius": "100%", "border": "3px solid white", "filter": "invert(1)"}}/>
          <Link to='/profile' className="nav-link" style={{"color": "white"}}><strong>{a.dat.username}</strong></Link>
          </div>
        :<div style={{"display": "flex", "justifyContent": "center", "alignItems": "center"}}> 
        <img src="https://tse1.mm.bing.net/th?id=OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd&pid=Api&P=0&h=180" style={{"width": "30px", "height": "30px", "borderRadius": "100%", "border": "3px solid white", "filter": "invert(1)"}}/>
        <Link to='/profile' className="nav-link" style={{"color": "white"}}><strong>Unknown</strong></Link>
        </div>
        }
      </div>
    </div>
  </div>
</nav>
	</div>
  )
}
export default Navbar