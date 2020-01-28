/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RoomNavbar from './components/RoomNavbar';
import RoomJumbotron from './components/RoomJumbotron';
import Speaker from './components/Speaker';
import MainButton from './components/MainButton';
import Queue from './components/Queue';
import PeopleInRoomTable from './components/PeopleInRoomTable';

/* MAIN */
/* -------------------------------*/

export default () => (
	<React.Fragment>
		<Container fluid={false}>
			<RoomNavbar />
			<Row>
				<Col>
					<RoomJumbotron />
				</Col>
			</Row>
			<Row>
				<Col>
					<Speaker />
				</Col>
			</Row>
			<Row className='text-center'>
				<Col>
					<MainButton />
				</Col>
			</Row>
			<Row className='mt-2'>
				<Col>
					<Queue />
				</Col>
				<Col>
					<PeopleInRoomTable />
				</Col>
			</Row>
		</Container>
	</React.Fragment>
);
