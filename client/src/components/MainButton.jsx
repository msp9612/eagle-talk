/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { Button } from 'react-bootstrap';

/* Global variables and instances */
/* -------------------------------*/

const MainButton = props => {
	return (
		<Button variant='primary' size='lg' block>
			Add to Queue / Remove from Queue / Finish Talking
		</Button>
	);
};

/* MAIN */
/* -------------------------------*/

export default MainButton;
