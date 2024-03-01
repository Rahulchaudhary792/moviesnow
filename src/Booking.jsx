import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import MoviesContext from './context/MoviesContext';
const Booking = () => {
  const a = useContext(MoviesContext);
  return (
	<div>
		<div style={{"position": "relative", "top": "230px"}}>
		  <h1 style={{"textAlign": "center"}}><b><i>Select your City</i></b></h1>
		</div>
	   <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "height": "100vh", "margin": "0"}}>
		 <Link to={`/booking/Mumbai`} style={{"color": "black", "textDecoration": "none"}}>
		  <div className="mx-3" style={{"boxShadow": "3px 3px 20px lightgray", "padding": "15px", "borderRadius": "10px"}} onClick={()=>{a.handleCity('Mumbai')}}>
             <img src="https://tse3.mm.bing.net/th?id=OIP.6YIJLLnJY-EnprwmxJCTegHaH_&pid=Api&P=0&h=180" style={{"width": "100px", "height": "100px"}}/>
			 <p style={{"textAlign": "center"}}><b>Mumbai</b></p>
		  </div>
		 </Link>
		 <Link to={`/booking/Hyderabad`} style={{"color": "black", "textDecoration": "none"}}>
		  <div className="mx-3" style={{"boxShadow": "3px 3px 20px lightgray", "padding": "15px", "borderRadius": "10px"}} onClick={()=>{a.handleCity('Hyderabad')}}>
		     <img src="https://thumbs.dreamstime.com/b/india-hyderabad-charminar-travel-landmark-line-vector-illustration-india-hyderabad-charminar-travel-landmark-vector-illustration-273847505.jpg" style={{"width": "100px", "height": "100px"}}/>
			 <p style={{"textAlign": "center"}}><b>Hyderabad</b></p>
		  </div>
		 </Link>
		 <Link to={`/booking/Delhi`} style={{"color": "black", "textDecoration": "none"}}>
		  <div className="mx-3" style={{"boxShadow": "3px 3px 20px lightgray", "padding": "15px", "borderRadius": "10px"}} onClick={()=>{a.handleCity('Delhi')}}>
		     <img src="https://thumbs.dreamstime.com/z/india-gate-illustration-new-delhi-59673180.jpg" style={{"width": "100px", "height": "100px"}}/>
			 <p style={{"textAlign": "center"}}><b>Delhi</b></p>
		  </div>
		 </Link>
	   </div>
	</div>
  )
}

export default Booking
