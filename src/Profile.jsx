import React, { useState, useEffect, useContext } from 'react'
import MoviesContext from './context/MoviesContext'
const Profile = () => {
  const [data, setData] = useState([]);
  const a = useContext(MoviesContext);
  useEffect(() => {
      const fetchData = async () => {
		try {
           const response = await fetch(`http://localhost:3000/profile/${a.dat.username}`);
		   const data = await response.json();
		   setData(data);
		}
		catch (error) {
           console.log(error);
		}
	  }
	  fetchData();
  }, [a.dat.username]);
  return (
	<div style={{"marginTop": "100px"}}>
	  {a.dat.username ?
	  <div>
		  <div>
			<h2>Your shows</h2>
		  </div>
	      <div>
			{data.map((item) => (
			   <div>
				  <div style={{"display": "flex", /*"justifyContent": "center", "alignItems": "center",*/ "flexWrap": "wrap"}}>
					 <div style={{"width": "280px", "border": "3px solid black", "padding": "70px 10px", "borderRadius": "10px", "marginTop": "20px", "marginBottom": "10px", "backgroundColor": "lightgray"}}>
					   <h2 style={{"textAlign": "center", "position": "relative", "bottom": "30px"}}>Tickets</h2>
					   <h4 style={{"textAlign": "center", "position": "relative", "bottom": "15px"}}>{item.theatre}</h4>
		               <p style={{"textAlign": "center"}}><strong>Movie:</strong> {item.movie}</p>
					   <p style={{"textAlign": "center"}}><strong>Date: </strong> {item.date}/ {item.month}</p>
					   <p style={{"textAlign": "center"}}><strong>Time: </strong> {item.time} PM</p>
					   <p style={{"textAlign": "center"}}><strong>Seats numbers: </strong>
						 {item.seatNumbers.map((item1) => (
						    <p style={{"display": "inline"}}>{item1} </p>
						 ))}
					   </p>
					 </div>
				  </div>
		       </div>
			))}
			</div>
		  </div>
		: <p>Unknown</p>
	  }
	</div>
  )
}

export default Profile
