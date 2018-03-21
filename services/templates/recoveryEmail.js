const keys = require('../../config/keys');

module.exports = token => {
  return `
    <html>
      <body>
        <div style="text-align: center">
          <h3>Hi there,</h3>
          <p>To reset your password, please click here</p>
          <div>
            <a href="${
              keys.redirectDomain
            }/auth/resetpassword/${token}">Reset Password</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
