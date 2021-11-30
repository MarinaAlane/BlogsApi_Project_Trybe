const cadastration = (email, displayName, password) => {
  validationEmail(email);
  searchifEmailExists(email);
  validationName(displayName);
  validationPassword(password);
};

const validationName = (displayName) => {

};

const validationPassword = (password) => {

};

const validationEmail = (email) => {
  
};

const searchifEmailExists = (email) => {

}

module.exports = {
  cadastration,
};
