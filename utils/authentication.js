const withAuth = (req, res, next) => {
    // TODO: If the user is not logged in, redirect the user to the login page
    if (!res.sesssion.loggedIn){
      res.redirect('/login');
    }
    else {
      next();
    }
    // TODO: If the user is logged in, allow them to view the paintings
  };
  
  module.exports = withAuth;
  