const loginCheck = (allowedRole = null) => {
  return (req, res, next) => {
    console.log("I am inside auth Router");
    next();
  };
};

module.exports = loginCheck;
