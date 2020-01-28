/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { Alert } from 'react-bootstrap';

/* Global variables and instances */
/* -------------------------------*/

const Speaker = props => {
	return (
		<Alert className='text-center' variant='success'>
			<h6>Speaker:</h6>
			<h1>Person A</h1>
		</Alert>
	);
};

/* MAIN */
/* -------------------------------*/

export default Speaker;
