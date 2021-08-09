const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Product = new Schema ({
                name: { 
			type: String,
			required: true
		},
                price: {
			type: Number,
			required: true
		},
                category: { 
			type: String,
			required: true
		},
                description: { 
			type: String,
			required: false
		},
                image: { 
			type: String,
			required: false
		}
	}
	, 
	{
		collection: 'products'
	}
);
module.exports = mongoose.model('Product', Product)
