import history from '../../custom/history';

// 비밀번호 VALID
const validatePassword = (password) => {
  return password.length > 5 && password.length < 12;
};

// 이메일 VALID
export const validateMail = (mail) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};

const validateUsername = (username) => {
  return username.length > 5 && username.length < 12;
};

// 이메일 + 비밀번호 VALID => TRUE || FALSE
export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid; // true or false
};

// 이메일 + 비밀번호 + 이름 VALID => TRUE || FALSE
export const validateRegisterForm = ({ mail, username, password }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  const isUsernameValid = validateUsername(username);

  return isMailValid && isPasswordValid && isUsernameValid; // true or false
};

export const logout = () => {
  history.push('/login');
  localStorage.clear();
};
