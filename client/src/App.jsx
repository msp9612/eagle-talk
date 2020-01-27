/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RoomJumbotron from './components/RoomJumbotron';
import RoomQueue from './components/RoomQueue';

/* MAIN */
/* -------------------------------*/

export default () => (
	<React.Fragment>
		<Container className='mt-1' fluid={false}>
			<Row>
				<Col>
					<RoomJumbotron />
				</Col>
			</Row>
			<Row>
				<Col>
					<RoomQueue />
				</Col>
			</Row>
		</Container>
	</React.Fragment>
);
