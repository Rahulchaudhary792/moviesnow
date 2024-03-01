import React, { useState, useEffect, useContext } from "react";
import MoviesContext from "./context/MoviesContext";
import { Link } from "react-router-dom"
import './Theatres.css';
import Payment from './Payment';
const Theatres = () => {
  const a = useContext(MoviesContext);
  let title;
  let array1 = [];
  let [itemId, setItemId] = useState();
  let [name, setName] = useState();
  a.movie.map((item => {
	 title = item.title
  }))
  a.theatres.map((item => {
	if (item.place === a.selectedCity) {
	 if (item.movie === title) {
		array1.push(item);
	 }
	}
  }))
  const [showComponent1, setShowComponent1] = useState(true);
  const handleTheatre = (item) => {
     setItemId(item._id);
     setName(item.name);
     localStorage.setItem('theatre', item.name);
     setShowComponent1(false);
  }
  return (
    <div style={{ position: "relative", top: "100px" }}>
      <h2 style={{ textAlign: "center" }}>
        <i>
          <b>Theatres in {a.selectedCity}</b>
        </i>
      </h2>
    {showComponent1 ?
    <div>
	  {array1.length > 0?
	  (<div>
      {array1.map((item) => (
		<div key={item._id}>
		<div style={{"marginTop": "58px", "marginBottom": "20px"}}>
			<h4><b><i>Available Theatres</i></b></h4>
		</div>
		  <div
			className="my-3"
			style={{
            backgroundColor: "#ffffff",
            border: "0px solid black",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "3px 3px 10px lightgray",
		}}
		  onClick={()=>handleTheatre(item)}>
          <div
            style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
            }}
			>
            <div>
              <h6>
                <b>
                  <i>{item.name}</i>
                </b>
              </h6>
            </div>
            {item.food ? (
				<div>
                <h6 style={{ color: "orange" }}>
                  <b>
                    <i>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.AHGC9btwLDjBtdHJTN1YHAHaEK&pid=Api&P=0&h=180"
                        style={{ width: "40px", borderRadius: "5px" }}
						/>{" "}
                      Food & Beverages
                    </i>
                  </b>
                </h6>
              </div>
            ) : (
				" "
				)}
            <div>
              <h6>
                <b>
                  <i>
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.306OAwBqEZlEGejP9daMOwHaHa&pid=Api&P=0&h=180"
                      style={{ width: "30px" }}
					  />
                    {item.rating}
                  </i>
				  </b>
				  </h6>
				  </div>
				  </div>
				  </div>
				  </div>
				  ))}
				  </div>)
				 : (<div><h3 style={{"position": "relative", "top": "30px", "textAlign": "center"}}><strong><i>Oops! No Theatre present</i></strong></h3>
				    <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center"}}>
				    <button className="btn btn-success" style={{"position": "relative", "top": "50px", "textAlign": "center"}}><Link to="/" style={{"color": "white", "textDecoration": "none"}}>Home</Link></button>
					</div>
				  </div>)
			    }
          </div>
          : <TheatreDetails itemId={itemId} name={name}/>}
				</div>
				);
};
const TheatreDetails = (props) => {
   let [item, setItem] = useState(null);
   let [d,setd] = useState(null);
   let [m,setm] = useState(null);
   const [showComponent1, setShowComponent1] = useState(true);
   const currentDate = new Date();
   const date = currentDate.getDate();
   const month = currentDate.getMonth() + 1;
   const tomorrowDate = new Date(currentDate);
   tomorrowDate.setDate(currentDate.getDate() + 1);
   const day = tomorrowDate.getDate();
   const tomorrowMonth = tomorrowDate.getMonth() + 1;
   const handleClick = (itemId) => {
       setItem(itemId);
       setShowComponent1(false);
   }
   const settingDate = () => {
       localStorage.setItem('date', date);
       localStorage.setItem('month', month);
   }
   const settingDate1 = () => {
       localStorage.setItem('date', day);
       localStorage.setItem('month', tomorrowMonth);
   }
   return (
      <>
      <div>
        <h3 style={{"textAlign": "center", "marginTop": "30px"}}><b>Shows at {props.name}</b></h3>
      </div>
      {showComponent1 ?
        <div style={{"display": "flex", "justifyContent": "space-around", "alignItems": "center", "marginTop": "30px"}}>
         <div style={{"color": "white", "backgroundColor": "red", "padding": "5px 20px", "textAlign": "center", "borderRadius": "5px"}} onClick={()=>handleClick(props.itemId)}>
             <h5 onClick={settingDate}>{date}/{month}</h5>
         </div>
         <div style={{"color": "white", "backgroundColor": "red", "padding": "5px 20px", "textAlign": "center", "borderRadius": "5px"}} onClick={handleClick}>
             <h5 onClick={settingDate1}>{day}/{tomorrowMonth}</h5>
         </div>         
      </div>
        : <Bookings item={item} name={props.name} />}
      </>
   )
};
const Bookings = (props) => {
  const a = useContext(MoviesContext);
  const [showComponent1, setShowComponent1] = useState(true);
  let title;
  a.movie.map((item => {
    title = item.title;
   }))
   const handleClick = (title) => {
      setShowComponent1(false);
      localStorage.setItem('time', '3');
   }
   const handleClick1 = (title) => {
      setShowComponent1(false);
      localStorage.setItem('time', '6');
   }
  return (
     <>
       {showComponent1 ?
       <div style={{"marginTop": "30px"}}>
          <div style={{"color": "white", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "backgroundColor": "#cb202d", "boxShadow": "1px 3px 10px lightgray", "padding": "10px 10px", "marginBottom": "40px", "borderRadius": "5px"}} onClick={()=>handleClick(title)}>
             <h5><b>{title}</b></h5>
             <h5><b>3PM</b></h5>
          </div>
          <div style={{"color": "white", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "backgroundColor": "#cb202d", "boxShadow": "1px 3px 10px lightgray", "padding": "10px 10px", "marginBottom": "40px", "borderRadius": "5px"}} onClick={()=>handleClick1(title)}>
             <h5><b>{title}</b></h5>
             <h5><b>6PM</b></h5>
          </div>
       </div>
       : <Tickets title={title} name={props.name} />}
     </>
  ); 
};
const Tickets = (props) => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState();
  const [showComponent1, setShowComponent1] = useState(true);
  const handleClick = (title) => {
    setShowComponent1(false);
  }
  let seats;
  let bookedSeats;
  useEffect(() => {
     const fetchData = async () => {
        try {
           const response = await fetch(`http://localhost:3000/price/${props.title}`);
           const jsonData = await response.json();
           setPrice(jsonData.price);
        } catch (error) {
           console.log(error);
        }
     }
     fetchData(); 
   });
   console.log(price);
   console.log(props.title);
  useEffect(() => {
      const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:3000/theatre/${props.name}`);
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      },[props.name]);
      data.map((item) => {
          seats = item.seats;
          bookedSeats = item.seatsbooked;
      });
      let [count, setCount] = useState(0);
      let [click, setClick] = useState(false);
      let [tickets, setTickets] = useState([]);
      let [ticketNumbers, setTicketNumbers] = useState([]);
      let [myStyle, setStyle] = useState({'width': '30px', 'height': '30px', 'border': '3px solid blue', 'marginTop': '20px', 'marginLeft': '20px', 'textAlign': 'center', 'borderRadius': '5px', 'cursor': 'pointer'});
      const handleCount = (key) => {
          tickets.push(key);
          ticketNumbers = Array.from(new Set(tickets));
          setTicketNumbers(ticketNumbers);
          setCount(ticketNumbers.length);
          let mStyle = myStyle;
          setClick(true);
          const newStyles = {
            ...myStyle, [key]: {'width': '30px', 'height': '30px', 'border': '3px solid blue', 'marginTop': '20px', 'marginLeft': '20px', 'textAlign': 'center', 'borderRadius': '5px', 'backgroundColor': 'green'}
          }
          setStyle(newStyles);
      }
      let seas = [];
      const [seatData, setSeatData] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/${props.title}/theatre/${props.name}/date/${localStorage.getItem('date')}/month/${localStorage.getItem('month')}/time/${localStorage.getItem('time')}`);
                const data = await response.json();
                setSeatData(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
      }, [props.title,props.name,localStorage.getItem('date'),localStorage.getItem('month'),localStorage.getItem('time')]);
      seatData.map((item) => {
         item.seatNumbers.map((item1) => {
             seas.push(item1);
         });
      });
      console.log(seas);
      const renderedItems = [];
      /*for (i = 1; i <= seats; i++) {
        for (let j = 0; j<seas.length; j++) {
          if (i == seas[j]){
            renderedItems.push(<div key={i} style={{'width': '30px', 'height': '30px', 'border': '3px solid green', 'backgroundColor': 'grey', 'marginTop': '20px', 'marginLeft': '20px', 'textAlign': 'center', 'borderRadius': '5px'}}>{i}</div>);
          }
          else {
            continue;
          }
        }
        renderedItems.push(<div key={i} className="itemStyle" style={myStyle[i]} onClick={()=>handleCount(i)}>{i}</div>);
      }*/
      let co = 0;
      for (let i = 1; i <= seats; i++) {
          if (seas.includes(i)){
            renderedItems.push(<div key={i} style={{'width': '30px', 'height': '30px', 'border': '3px solid green', 'backgroundColor': 'grey', 'marginTop': '20px', 'marginLeft': '20px', 'textAlign': 'center', 'borderRadius': '5px'}}>{i}</div>);
            co++;
          }
          else if (!seas.includes(i)) {
            renderedItems.push(<div key={i} className="itemStyle" style={myStyle[i]} onClick={()=>handleCount(i)}>{i}</div>);
          }
      }
      const handleBuyNow = (title) => {
        setShowComponent1(false);
      }   
  return (
    <>
      {showComponent1 ?
      <div>
        <div>
          <p style={{'textAlign': 'center', 'marginTop': '30px'}}><strong>Filled seats - grey | About to fill - white</strong></p>
          <p style={{'textAlign': 'center', 'marginTop': '30px'}}><strong>Available Seats - {seats - co}</strong></p>
        </div>
        <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "flexWrap": "wrap"}}>
           {renderedItems}
        </div>
        {count > 0 ?
          <div style={{'textAlign': 'center', 'marginTop': "30px"}}>
             <h5 style={{'marginBottom': '25px'}}><b>Total Tickets - {count}</b></h5>
             <h5 style={{'marginBottom': '25px'}}><b>Price - ${price * count}</b></h5>
             <button className="btn btn-warning" onClick={handleBuyNow}>Buy now</button>
          </div>
        : ' '}
      </div>
        : <Payment price={price} tickets={tickets} title={props.title} name={props.name}/>}
    </>
  );
}
export default Theatres;