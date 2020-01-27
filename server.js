/* Dependencies */
/* -------------------------------*/

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const routes = require('./routes');

/* Global variables and instances */
/* -------------------------------*/

const PORT = process.env.PORT || 3001;

/* MAIN */
/* -------------------------------*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// API routes
app.use(routes);

// Mongoose
mongoose.connect('mongodb://localhost/eagle_talk_db', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

// Socket.io
//Whenever someone connects this gets executed
io.on('connection', function(socket) {
	console.log('A user connected');

	//Whenever someone disconnects this piece of code executed
	socket.on('disconnect', function() {
		console.log('A user disconnected');
	});
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
