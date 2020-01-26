/* Dependencies */
/* -------------------------------*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Global variables and instances */
/* -------------------------------*/

const roomSchema = new Schema({
	// All required
	code: { type: String, required: true },
	name: { type: String, required: true },
	capacity: { type: Number, required: true },
	masterPassword: { type: String, required: true },
});

/* MAIN */
/* -------------------------------*/

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
