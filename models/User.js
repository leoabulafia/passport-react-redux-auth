const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  email: String,
  password: String,
  confirmPasswordToken: String,
  confirmed: { type: Boolean, default: false }
});

userSchema.methods.generateHash = token => {
  return bcrypt.hashSync(token, bcrypt.genSaltSync(12), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.validToken = function(token) {
  return bcrypt.compareSync(token, this.confirmPasswordToken);
};

mongoose.model('User', userSchema);
