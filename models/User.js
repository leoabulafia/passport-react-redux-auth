const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');
const ResetPasswordSchema = require('./ResetPassword');

const userSchema = new Schema({
	googleId: String,
	facebookId: String,
	email: String,
	password: String,
	confirmAccountToken: String,
	confirmed: { type: Boolean, default: false }
});

userSchema.methods.generateHash = token => {
	return bcrypt.hashSync(token, bcrypt.genSaltSync(12), null);
};

// from mongoose docs: Do not declare methods using ES6 arrow functions (=>).
//Arrow functions explicitly prevent binding this, so your method will not have
//access to the document.
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

userSchema.methods.validToken = function(token) {
	return bcrypt.compareSync(token, this.confirmAccountToken);
};

mongoose.model('User', userSchema);
