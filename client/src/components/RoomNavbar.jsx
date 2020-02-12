/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';

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
			<NavDropdown title='Master' disabled>
				<NavDropdown.Item>Action 1</NavDropdown.Item>
				<NavDropdown.Item>Action 2</NavDropdown.Item>
				<NavDropdown.Item>Action 3</NavDropdown.Item>
			</NavDropdown>
			<Nav className='mr-auto'>{/* <Nav>Room Code: XXXXXXXX</Nav> */}</Nav>
			<Button variant='danger'>Exit Room</Button>
		</Navbar>
	);
};

/* MAIN */
/* -------------------------------*/

export default RoomNavbar;
