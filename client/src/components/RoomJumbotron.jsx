/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

/* Global variables and instances */
/* -------------------------------*/

const RoomJumbotron = props => {
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
