import React, { useState, useEffect } from "react";
import MoviesContext from "./MoviesContext";
const MoviesState = (props) => {
	let [data, setData] = useState([]);
	let [category, setCategory] = useState('');
	let [url, setUrl] = useState('');
	const updateCategory = (value) => {
		setCategory(value);
	}
	let baseurl = `http://localhost:3000/movies` + `/${category}`;
	useEffect(() => {
       const fetchData = async () => {
		   try {
			  if (!category) {
				  const response = await fetch('http://localhost:3000/movies');
				  const jsonData = await response.json();
				  setData(jsonData);
			  }
			  else {
				  const response = await fetch(baseurl);
				  const jsonData = await response.json();
				  setData(jsonData);
			  }
		   } catch (error) {
			  console.log(error);
		   }
	   }
	   fetchData();
	}, [category])
	let [id, setId] = useState('');
	let [movie,setMovie] = useState(null);
	let [title, setTitle] = useState('');
	const movieId = (id) => {
		setId(id)
	}
	useEffect(() => {
        const fetchData = async () => {
			try {
				const response = await fetch(`http://localhost:3000/movie/${id}`);
				const jsonData = await response.json();
				setMovie(jsonData);
				movie.map(item => {
					setTitle(item.title);
				 })
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, [id])
	let [selectedCity, setSelectedCity] = useState('');
	const handleCity = (city) => {
        setSelectedCity(city);
	} 
	let [theatres, setTheatres] = useState([]);
	useEffect(() => {
        const fetchData = async () => {
			try {
               const response = await fetch(`http://localhost:3000/booking/${selectedCity}`);
			   const jsonData = await response.json();
			   setTheatres(jsonData);
			}
			catch(error) {
               console.log(error);
			}
		}
		fetchData();
	}, [selectedCity]);
	const [username,setUsername] = useState('');
	const [password,setPassword] = useState('');
	const [dat, setDat] = useState('');
	const handleSubmit = async (username, password) => {
		try {
		   const response = await fetch('http://localhost:3000/login', {
			  method: 'POST',
			  headers: {
				  'Content-Type': 'application/json'
			  },
			  body: JSON.stringify({ username, password })
		   });
		   const dat = await response.json();
		   setDat(dat);
		}
		catch(error) {
		  console.log(error);
		}
	  };
	return (
       <MoviesContext.Provider value={{ data, updateCategory, baseurl, movieId, movie, handleCity, selectedCity, theatres, title, handleSubmit, dat }}>
		   {props.children}
	   </MoviesContext.Provider>
	)
}
export default MoviesState