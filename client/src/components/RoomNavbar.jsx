/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

/* Global variables and instances */
/* -------------------------------*/

const RoomNavbar = props => {
	return (
		<Navbar bg='dark' variant='dark'>
			<Navbar.Brand>
				{/* <img
					alt='Logo'
					src='../../public/img/eagle-talk-large.png'
					width='30'
					height='30'
					className='d-inline-block align-top'
				/> */}
				Eagle Talk
			</Navbar.Brand>
			<Nav className='mr-auto'>{/* <Nav>Room Code: XXXXXXXX</Nav> */}</Nav>
			<Button variant='danger'>Exit Room</Button>
		</Navbar>
	);
};

/* MAIN */
/* -------------------------------*/

export default RoomNavbar;
