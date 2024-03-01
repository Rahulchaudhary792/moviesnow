import React, { useState, useContext } from 'react'
import QRCode from 'qrcode.react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviesContext from './context/MoviesContext';
const Payment = (props) => {
  const a = useContext(MoviesContext);
  console.log(a.username);
  const [price, setPrice] = useState(Math.round(props.price * 83.07))
  const [phonePeAmount, setPhonePeAmount] = useState(price); 
  const [gPayAmount, setGPayAmount] = useState(price); 
  const [paytmAmount, setPaytmAmount] = useState(price);
  const [payment, setPayment] = useState('');
  const [qr, setQr] = useState(false);
  const phonePeURI = `upi://pay?pa=phonepe@ybl&pn=MerchantName&mc=1234&tid=merchantTID1234&tr=12345678&tn=PaymentDescription&am=${phonePeAmount}&cu=INR`;
  const gPayURI = `upi://pay?pa=example@upi&pn=PayeeName&mc=1234&tid=merchantTID1234&tr=12345678&tn=PaymentDescription&am=${gPayAmount}&cu=INR`;
  const paytmURI = `paytm://pay?pn=PayeeName&mc=1234&tid=merchantTID1234&tr=12345678&tn=PaymentDescription&am=${paytmAmount}&cu=INR`;
  const getQR = () => {
      setQr(true);
      setPayment('Get QR code');
  }
  const handlePayment = async  (e) => {
      e.preventDefault();
      const sendData = async () => {
          try {
              const response = await fetch(`http://localhost:3000/user`, {
                 method: 'POST',
                 headers: {
                    'Content-Type': 'application/json'
                 },
                 body: JSON.stringify({
                    'username': a.dat.username,
                    'movie': props.title,
                    'seatNumbers': props.tickets,
                    'date': localStorage.getItem('date'),
                    'month': localStorage.getItem('month'),
                    'time': localStorage.getItem('time'),
                    'theatre': localStorage.getItem('theatre'),
                    'payment': 'successful' 
                 })
              });
              const data = await response.json();
              toast.success(data.message);
          }
          catch(error) {
              console.log(error);
          }
      }
      sendData();
  }
  return (
	<div>
     <ToastContainer/>
	  <h3 style={{"textAlign": "center", "marginTop": "30px"}}><strong>Payment</strong></h3>
	  <h3 style={{"textAlign": "center", "marginTop": "30px"}}><strong>Pay &#8377;{price}</strong></h3>
    <div>
	  <div style={{"textAlign": "center", "marginTop": "30px"}}>
	     <button className="btn btn-primary" style={{"padding": "7px 27px"}} onClick={()=>{setPayment('Use card')}}>Use card</button>
	  </div>
	  <div style={{"textAlign": "center", "marginTop": "20px"}}>
         <button className="btn btn-primary" onClick={getQR}>Get QR code</button>
	  </div>
    {payment === 'Get QR code' ?
    <div>
	  {qr ? 
    <div>
    <h3 className="my-0 mt-4" style={{"textAlign": "center"}}><strong>QR Codes</strong></h3>
	  <div style={{"display": "flex", "justifyContent": "center", "marginTop": "0px", "marginBottom": "20px", "textAlign": "center"}}>
		<div className="mx-3">
      <h4 style={{"marginTop": "20px", "marginBottom": "20px"}}><b>PhonePe</b></h4>
      <QRCode value={phonePeURI} />
	  </div>
	  <div className="mx-3">
      <h4 style={{"marginTop": "20px", "marginBottom": "20px"}}><b>Google Pay</b></h4>
      <QRCode value={gPayURI} />
	  </div>
	  <div className="mx-3">
      <h4 style={{"marginTop": "20px", "marginBottom": "20px"}}><b>Paytm</b></h4>
      <QRCode value={paytmURI} style={{"marginBottom": "20px"}}/>
	  </div>
    </div>
    </div>
	: ' '}
  </div>
  : 
   <div style={{"textAlign": "center", "marginTop": "20px", "marginBottom": "20px"}}>
      <form>
            <h3 className="my-3"><strong>Card Details</strong></h3>
            <label style={{"textAlign": "center"}}><b>Card number</b></label>
         <div style={{"display": "flex", "justifyContent": "center", "marginTop": "5px", "marginBottom": "5px"}}>
            <input style={{"display": "block"}}/>
         </div>
            <label><b>CVV</b></label>
         <div style={{"display": "flex", "justifyContent": "center", "marginTop": "5px", "marginBottom": "5px"}}>
            <input style={{"display": "block"}}/>
         </div>
            <label><b>Expiry date</b></label>
         <div style={{"display": "flex", "justifyContent": "center", "marginTop": "5px", "marginBottom": "5px"}}>
            <input style={{"display": "block"}}/>
         </div>
         <div>
            <button className="btn btn-success my-3" onClick={handlePayment}>Proceed</button>
         </div>
      </form>
   </div> 
  }
  </div>
	</div>
  )
}

export default Payment
