//Fields for:
//createAccountForm
//loginForm

//createAccountForm fields
export const signUpFields = [
  {
    label: 'Your email address',
    name: 'email',
    noValue: 'Please, insert a valid email address',
    type: 'text'
  },
  {
    label: 'Create a password',
    name: 'password',
    noValue: 'You must provide a password!',
    type: 'password'
  },
  {
    label: 'Confirm your password',
    name: 'confirmpassword',
    noValue: 'Please, confirm your password',
    type: 'password'
  }
];

//loginForm fields
export const loginFields = [
  {
    label: 'Email address',
    name: 'email',
    noValue: 'Please, enter your email address',
    type: 'text'
  },
  {
    label: 'Password',
    name: 'password',
    noValue: 'Please, enter your password',
    type: 'password'
  }
];

//forgotPassword Fields
export const forgotPasswordFields = [
  {
    label: 'Email address',
    name: 'email',
    type: 'text',
    noValue: ' Please enter a valid email address'
  }
];

//resetPassword fields
export const resetPasswordFields = [
  {
    label: 'Create new password',
    name: 'password',
    noValue: 'You must provide a password!',
    type: 'password'
  },
  {
    label: 'Confirm your new password',
    name: 'confirmpassword',
    noValue: 'Please, confirm your password',
    type: 'password'
  }
];
