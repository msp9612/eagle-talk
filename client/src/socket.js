/* Dependencies */
/* -------------------------------*/

import io from 'socket.io-client';

/* Global variables and instances */
/* -------------------------------*/

const socket = io(window.location.origin, { transports: ['polling'] });
// {transports: ['websocket']}

/* MAIN */
/* -------------------------------*/

socket.on('enterName', () => {
	const name = window.prompt('Please enter your name.');
	if (name == null || name === '') {
		socket.emit('nameEntered', 'NO NAME');
	} else {
		socket.emit('nameEntered', name);
	}
});

socket.on('userConnected', function(data) {
	console.log(data);
});

socket.on('userDisconnected', function(data) {
	console.log(data);
});

export default socket;
