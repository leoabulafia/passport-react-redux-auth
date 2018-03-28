const mongoose = require('mongoose');
const { URL } = require('url');
const Path = require('path-parser');
const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');
const randomstring = require('randomstring');
const crypto = require('crypto');
const confirmEmail = require('../services/templates/confirmEmail');
const recoveryEmail = require('../services/templates/recoveryEmail');

const User = mongoose.model('User');
const ResetPassword = mongoose.model('ResetPassword');

module.exports = app => {
	app.get('/auth/confirm/:token', (req, res) => {
		res.redirect('/emailconfirmed');
	});

	app.get('/auth/resetpassword/:token', (req, res) => {
		console.log('PARAMS: ', req.params);
		const { token } = req.params;
		console.log(token);
		res.redirect(`/resetpassword/${token}`);
	});

	app.post('/', (req, res) => {
		req.body.map(event => {
			const pathname = new URL(event.url).pathname;
			const p = new Path('/auth/confirm/:token');
			const { token } = p.test(pathname);
			const emailToConfirm = event.email;
			console.log('Token: ', token);
			console.log('Email: ', emailToConfirm);
			User.findOne({ email: emailToConfirm, confirmed: false }, (err, user) => {
				if (user.validToken(token)) {
					console.log('confirmed!');
					user.confirmed = true;
					user.save(err => {
						if (err) {
							console.error(err);
						}
					});
				}
			});
		});
		res.send({});
	});

	app.post('/auth/recover', (req, res) => {
		const email = req.body.email;
		console.log(req.body);
		User.findOne({ email: email }, (err, user) => {
			if (err) {
				console.log('this is an error.');
			}
			if (!user) {
				return res.send(false);
			} else {
				let tokenToHash = randomstring.generate({ length: 64 });
				const newPasswordReset = new ResetPassword();
				newPasswordReset.resetToken = tokenToHash;
				newPasswordReset.email = email;
				newPasswordReset.save(err => {
					if (err) {
						throw err;
					}
					sgMail.setApiKey(keys.sendGridKey);
					sgMail
						.send({
							to: email,
							from:
								'React & PassportJS Auth Demo <no-reply@reactpassportauth.com>',
							replyTo: 'no-reply@reactpassportauth.com',
							subject: 'Reset your Password',
							text: 'Authentication with React & PassportJS',
							html: recoveryEmail(tokenToHash, email)
						})
						.then(() => console.log('sent!'))
						.catch(error => {
							console.error(error.toString());
						});
				});
			}
			res.send({});
		});
	});

	app.post('/auth/changepassword', (req, res) => {
		const { id, password } = req.body;
		const userMethod = new User();
		User.findOneAndUpdate(
			{ _id: id },
			{ $set: { password: userMethod.generateHash(password) } },
			(err, user) => {
				if (err) {
					return res.send(false);
				}
				if (!user) {
					return res.send(false);
				} else {
					console.log('IT WORKED!!!!');
					res.send(user);
				}
			}
		);
	});

	app.post('/auth/resetpassword', (req, res) => {
		const { token, password } = req.body;
		ResetPassword.findOne({ resetToken: token }, (err, model) => {
			if (err) {
				console.log('there was an error');
				return res.send(false);
			}
			if (!model) {
				console.log('theres no model');
				return res.send(false);
			} else {
				const userMethod = new User();
				User.findOneAndUpdate(
					{ email: model.email },
					{ $set: { password: userMethod.generateHash(password) } },
					(err, user) => {
						if (err) {
							return res.send(false);
						}
						if (!user) {
							return res.send(false);
						} else {
							console.log('IT WORKED!!!!');
							res.send(user);
						}
					}
				);
			}
		});
	});

	app.post('/auth/delete', (req, res) => {
		const { _id } = req.body;
		console.log('body: ', req.body);
		User.findByIdAndRemove({ _id: _id }, (err, cb) => {
			if (err) {
				console.log('this is an error');
				return res.send(false);
			} else {
				console.log('account deleted');
				return res.send(false);
			}
		});
	});
};
