const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Master = new Schema ({
                category: { 
			type: String,
			required: true
		}
	}
	, 
	{
		collection: 'master'
	}
);
module.exports = mongoose.model('Master', Master)
