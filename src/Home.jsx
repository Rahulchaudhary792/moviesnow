import React, { useState, useEffect, useContext } from 'react'
import MoviesContext from './context/MoviesContext';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
Modal.setAppElement('#root'); 
const Home = () => {
  const a = useContext(MoviesContext);
  const [selectedItem,setSelectedItem] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = (item) => {
    setModalIsOpen(true);
	setSelectedItem(item);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const customStyles = {
    content: {
	  backgroundColor: "white",
      width: '75%', 
      height: '76%', 
      top: '50%',
      left: '50%',
	  transform: 'translate(-50%, -50%)'
    },
  };
  return (
	<div>
	  <h2 style={{"textAlign": "center", "marginTop": "80px"}}><b><strong><i>Movies on Theatres</i></strong></b></h2>
	  <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "flexWrap": "wrap"}}>
	  {a.data.map(item => (
		 <div key={item._id} onClick={()=>{openModal(item)}}>
		  <div className="mx-3 my-4" style={{"boxShadow": "3px 3px 20px lightgray", "borderRadius": "5px"}}>
			 <img src={item.image} style={{"width": "15rem", "height": "300px", "borderRadius": "5px"}}/>
		     <p className="my-2" style={{"textAlign": "center", "paddingBottom": "10px"}}><b><strong>{item.title}</strong></b></p>
			</div>
		  </div>
	  ))}
	  </div>
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel="Example Modal"
			style={customStyles}
			>
			{selectedItem ? 
			<div>
			<div className="my-3" style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap"}}>
				<div>
                   <img src={selectedItem.image} style={{"width": "392px", "height": "450px"}}/>
				</div>
				<div>
					<div>
                      <p><b><i>Movie:</i></b> <strong style={{"color": "gray"}}><i>{selectedItem.title}</i></strong></p>
					</div>
					<div>
				     <p><b><i>Rating</i>:</b> <strong style={{"color": "gray"}}>{selectedItem.rating} / 5</strong><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png" className="mx-2" style={{"width": "50px", "position": "relative", "bottom": "3px"}}/></p>
					</div>
					<div>
				     <p><b><i>Synopsis:</i></b> <strong style={{"color": "gray"}}><i>{selectedItem.description}</i></strong></p>
					</div>
					<div>
				     <p><b><i>Category:</i></b> <strong style={{"color": "gray"}}><i>{selectedItem.category}</i></strong></p>
					</div>
					<div>
				     <p><b><i>Price:</i></b> <strong style={{"color": "gray"}}>${selectedItem.price} / person</strong></p>
					</div>
					<div>
						<p style={{"color": "red"}}><strong><i>Book your Tickets now!</i></strong></p>
						<button className="btn btn-primary" onClick={()=>a.movieId(selectedItem._id)}><Link to="/booking" style={{"color": "white", "textDecoration": "none", "fontWeight": "bold"}}>Book now</Link></button>
					</div>
				</div>
			</div>
			<button onClick={closeModal} style={{"color": "gray", "position": "absolute", "right": "10px", "top": "7px", "backgroundColor": "white", "border": "none"}}><b style={{"fontWeight": "1200", "fontSize": "16px"}}><img src="https://tse1.mm.bing.net/th?id=OIP.lhp32E93KNctGToCW2gHjgHaFm&pid=Api&P=0&h=180" style={{"width": "25px", "height": "20px"}}/></b></button>
			</div>
		     : ' '}
		</Modal>
	</div>
  )
}

export default Home
