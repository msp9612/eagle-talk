/* Dependencies */
/* -------------------------------*/

import io from 'socket.io-client';

/* Global variables and instances */
/* -------------------------------*/

const socket = io(window.location.origin, { transports: ['polling'] });
// {transports: ['websocket']}

/* MAIN */
/* -------------------------------*/

socket.on('connect', () => {
	console.log('Connected!');
});

export default socket;
