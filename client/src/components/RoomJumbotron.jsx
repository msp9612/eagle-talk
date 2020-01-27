/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { useEffect } from 'react';

/* Global variables and instances */
/* -------------------------------*/

const RoomJumbotron = props => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = '/socket.io/socket.io.js';
		document.body.appendChild(script);
		return () => {
			console.log('hi');
			document.body.removeChild(script);
		};
	}, []);

	return (
		<Jumbotron className='text-center'>
			<Container>
				<h1>Room Name</h1>
				<p>Room Code</p>
			</Container>
		</Jumbotron>
	);
};

/* MAIN */
/* -------------------------------*/

export default RoomJumbotron;
