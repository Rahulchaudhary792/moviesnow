import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
	const handleUsernameChange = (e) => {
	  setUsername(e.target.value);
	};
	const handlePasswordChange = (e) => {
	  setPassword(e.target.value);
	};
	const handleSignup = async (e) => {
		e.preventDefault();
		const obj = {
			'username': username,
			'password': password
		};
		try {
		  const response = await fetch('http://localhost:3000/signup', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(obj)
		});
		  const data = await response.json();
		  setMessage(data.message);
		  toast.success(data.message);
		} catch (error) {
		  console.error('Error during signup:', error);
		}
	};
	return (
	  <>
	  <ToastContainer />
	  <div>
	  <h1 style={{"position": "relative", "top": "215px", "textAlign": "center"}}><b>SIGN UP</b></h1>
	  <div style={styles.container}>
		<form style={styles.form} onSubmit={handleSignup}>
		  <label style={{"position": "relative", "left": "20px"}}>
			Username:
		  </label>
			<input
			  type="text"
			  value={username}
			  onChange={handleUsernameChange}
			  style={styles.input}
			  name="username"
			  />
		  <label style={{"position": "relative", "left": "20px"}}>
			Password:
		  </label>
			<input
			  type="password"
			  value={password}
			  onChange={handlePasswordChange}
			  style={styles.input}
			  name="password"
			  />
		  <button type="submit" style={styles.button}>
			Sign Up
		  </button>
		</form>
	  </div>
	</div>
	</>
	);
  };
  const styles = {
	container: {
	  display: 'flex',
	  justifyContent: 'center',
	  alignItems: 'center',
	  height: '100vh',

	},
	form: {
	  display: 'flex',
	  flexDirection: 'column',
	  width: '300px',
	},
	input: {
	  margin: '9px 20px',
	  padding: '4px',
	  fontSize: '16px',
	},
	button: {
	  backgroundColor: '#4CAF50',
	  color: 'white',
	  padding: '10px 0px',
	  fontSize: '16px',
	  cursor: 'pointer',
	  width: '260px',
	  position: 'relative',
	  left: '20px',
	  marginTop: '20px'
   }
}
export default Signup