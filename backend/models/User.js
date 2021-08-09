const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema ({
                userCode: { 
			type: String,
			required: true
		},
                firstName: {
			type: String,
			required: true
		},
                lastName: { 
			type: String,
			required: true
		},
                email: { 
			type: String,
			required: true
		},
		designation: {
			type: String,
			required: true,
		},
                gender: { 
			type: String,
			required: false
		},
                dateOfBirth: { 
			type: Date,
			required: false
		},
                branchCode: { 
			type: String,
			required: true
		},
                image: { 
			type: String,
			required: false
		},
                mobile: { 
			type: String,
			required: true
		},
                address: { 
			type: String,
			required: true
		}
	}
	, 
	{
		collection: 'users'
	}
);
module.exports = mongoose.model('User', User)
