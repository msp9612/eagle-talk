/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { Alert, ListGroup } from 'react-bootstrap';

/* Global variables and instances */
/* -------------------------------*/

const RoomQueue = props => {
	return (
		// <Jumbotron className='text-center'>
		// 	<Container>
		// 		<h1>Room Name</h1>
		// 		<p>Room Code</p>
		// 	</Container>
		// </Jumbotron>
		<React.Fragment>
			<Alert className='text-center' variant='success'>
				<p>Speaker:</p>
				<Alert.Heading>Person A</Alert.Heading>
			</Alert>
			<ListGroup className='text-center'>
				<ListGroup.Item>Person B</ListGroup.Item>
				<ListGroup.Item>Person C</ListGroup.Item>
				<ListGroup.Item></ListGroup.Item>
				<ListGroup.Item></ListGroup.Item>
				<ListGroup.Item></ListGroup.Item>
				<ListGroup.Item></ListGroup.Item>
				<ListGroup.Item></ListGroup.Item>
				<ListGroup.Item></ListGroup.Item>
			</ListGroup>
		</React.Fragment>
	);
};

/* MAIN */
/* -------------------------------*/

export default RoomQueue;
