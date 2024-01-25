import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
Modal.setAppElement('#root'); 
const Home = () => {
  const [data, setData] = useState([]);
  const [selectedItem,setSelectedItem] = useState();
  useEffect(() => {
      const fetchData = async () => {
		  try {
			  const response = await fetch('http://localhost:3000/movies');
			  const jsonData = await response.json();
			  setData(jsonData);
		  } catch (error) {
			  console.log(error);
		  }
	  }
	  fetchData();
  }, []);
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
      width: '75%', 
      height: '75%', 
      top: '50%',
      left: '50%',
	  transform: 'translate(-50%, -50%)'
    },
  };

  return (
	<div>
	  <h2 style={{"textAlign": "center", "marginTop": "20px"}}><b><strong>Movies on Theatres</strong></b></h2>
	  <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "flexWrap": "wrap"}}>
	  {data.map(item => (
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
                      <p><b style={{"color": "gray"}}>Movie:</b> <strong>{selectedItem.title}</strong></p>
					</div>
					<div>
				     <p><b style={{"color": "gray"}}>Rating:</b> <strong>{selectedItem.rating} / 5</strong><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png" className="mx-2" style={{"width": "50px", "position": "relative", "bottom": "3px"}}/></p>
					</div>
					<div>
				     <p><b style={{"color": "gray"}}>Synopsis:</b> <strong>{selectedItem.description}</strong></p>
					</div>
					<div>
				     <p><b style={{"color": "gray"}}>Category:</b> <strong>{selectedItem.category}</strong></p>
					</div>
					<div>
				     <p><b style={{"color": "gray"}}>Price:</b> <strong>{selectedItem.price} / person</strong></p>
					</div>
					<div>
						<p style={{"color": "red"}}><strong>Book your Tickets now!</strong></p>
						<button className="btn btn-primary">Book now</button>
					</div>
				</div>
			</div>
			<button onClick={closeModal} style={{"color": "gray", "position": "absolute", "right": "10px", "top": "10px", "backgroundColor": "white", "border": "none"}}><b style={{"fontWeight": "1200", "fontSize": "16px"}}><img src="https://tse1.mm.bing.net/th?id=OIP.lhp32E93KNctGToCW2gHjgHaFm&pid=Api&P=0&h=180" style={{"width": "25px", "height": "20px"}}/></b></button>
			</div>
		     : ' '}
		</Modal>
	</div>
  )
}

export default Home
