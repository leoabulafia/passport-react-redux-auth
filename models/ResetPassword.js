const mongoose = require('mongoose');
const { Schema } = mongoose;

const resetPasswordSchema = new Schema({
	resetToken: String,
	email: String,
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	createdAt: { type: Date, expires: 60 * 60 * 24, default: Date.now }
});

resetPasswordSchema.methods.validToken = function(token) {
	return bcrypt.compareSync(token, this.validToken);
};

mongoose.model('ResetPassword', resetPasswordSchema);
