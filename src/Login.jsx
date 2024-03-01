import React, { useState, useContext } from 'react'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Payment';
import MoviesContext from './context/MoviesContext';
const Login = () => {
	const a = useContext(MoviesContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');	
	/*const [user, setUser] = useState('');*/
	const handleUsernameChange = (e) => {
	  setUsername(e.target.value);
	};
	const handlePasswordChange = (e) => {
	  setPassword(e.target.value);
	};
	const handleSubmitform = (e) => {
      e.preventDefault();
	  a.handleSubmit(username, password);
	  toast.success(a.dat.message);
	};
	return (
	  <>
	  <ToastContainer />
	  <div>
	  <h1 style={{"position": "relative", "top": "215px", "textAlign": "center"}}><b>LOGIN</b></h1>
	  <div style={styles.container}>
		<form style={styles.form} onSubmit={handleSubmitform}>
		  <label style={{"position": "relative", "left": "20px"}}>
			Username:
		  </label>
			<input
			  type="text"
			  value={username}
			  onChange={handleUsernameChange}
			  style={styles.input}
			  />
		  <label style={{"position": "relative", "left": "20px"}}>
			Password:
		  </label>
			<input
			  type="password"
			  value={password}
			  onChange={handlePasswordChange}
			  style={styles.input}
			  />
		  <button type="submit" style={styles.button}>
			Login
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

export default Login
