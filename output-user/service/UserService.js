'use strict';


/**
 * Create user
 * Creates an user account to enter to Bookify app.
 *
 * body User Created user object (optional)
 * returns User
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "John",
  "lastName" : "Doe",
  "password" : "12345678",
  "id" : 1,
  "email" : "johndoe@email.com",
  "historysubs" : [ "", "" ],
  "username" : "johndoe123"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create user
 * Creates an user account to enter to Bookify app.
 *
 * body User Created user object (optional)
 * returns User
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "John",
  "lastName" : "Doe",
  "password" : "12345678",
  "id" : 1,
  "email" : "johndoe@email.com",
  "historysubs" : [ "", "" ],
  "username" : "johndoe123"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete from user's favourite books a Bookify's book
 * Delete from user's favourite books a Bookify's book
 *
 * username String User's username that need to delete from favourites list the book
 * bookId Integer ID of the favourite book that need to be deleted
 * no response value expected for this operation
 **/
exports.deleteFav = function(username,bookId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * username String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUser = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user's favourite book's list
 * Returns the user's favourite book's list
 *
 * username Long The user's username to return his/her favourite book's list
 * returns List
 **/
exports.getFavBooks = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "bookId" : 1
}, {
  "bookId" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user suscriptions's history
 * Returns the user suscriptions's history
 *
 * username Long The user's username to return his/her suscriptions's history
 * returns List
 **/
exports.getHistSubs = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "endDate" : "16/12/2022",
  "price" : 5.49,
  "userId" : 1,
  "startDate" : "16/11/2022"
}, {
  "endDate" : "16/12/2022",
  "price" : 5.49,
  "userId" : 1,
  "startDate" : "16/11/2022"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user statistics
 * Returns the user statistics data
 *
 * username Long The user's username to return his/her statistics
 * returns Statistics
 **/
exports.getStatistics = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "favgenre" : "Fantasy",
  "audiolistened" : 7,
  "minlistened" : 285,
  "nbookread" : 18,
  "hoursread" : 137
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user info
 * Returns the user data
 *
 * username Long The user's username to return
 * returns SubUser
 **/
exports.getUser = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bankAccount" : "XXXX-XXX-1234",
  "firstName" : "John",
  "lastName" : "Doe",
  "password" : "12345678",
  "ratings" : [ {
    "rate" : 4.7,
    "comment" : "I loved it!",
    "bookId" : 1
  }, {
    "rate" : 4.7,
    "comment" : "I loved it!",
    "bookId" : 1
  } ],
  "favbooks" : [ {
    "bookId" : 1
  }, {
    "bookId" : 1
  } ],
  "id" : 1,
  "email" : "johndoe@email.com",
  "historysubs" : [ {
    "endDate" : "16/12/2022",
    "price" : 5.49,
    "userId" : 1,
    "startDate" : "16/11/2022"
  }, {
    "endDate" : "16/12/2022",
    "price" : 5.49,
    "userId" : 1,
    "startDate" : "16/11/2022"
  } ],
  "username" : "johndoe123",
  "statistics" : {
    "favgenre" : "Fantasy",
    "audiolistened" : 7,
    "minlistened" : 285,
    "nbookread" : 18,
    "hoursread" : 137
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs user into Bookify app
 *
 * username String The user name for login (optional)
 * password String The password for login in clear text (optional)
 * returns String
 **/
exports.loginUser = function(username,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs out current logged in user session
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add to favourites a Bookify's book
 * Returns the favourite book's id
 *
 * body FavBook Add an existent book to the user's favourites book list (optional)
 * username String User's username that need to add to favourites list the book
 * bookId Integer ID of the book that need to be added
 * returns FavBook
 **/
exports.postFav = function(body,username,bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bookId" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add to favourites a Bookify's book
 * Returns the favourite book's id
 *
 * body FavBook Add an existent book to the user's favourites book list (optional)
 * username String User's username that need to add to favourites list the book
 * bookId Integer ID of the book that need to be added
 * returns FavBook
 **/
exports.postFav = function(body,username,bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bookId" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rate a Bookify's book
 * Returns the user rating
 *
 * body Rating Rate an existent book in Bookify (optional)
 * username String User's username that need to rate the book
 * bookId Integer ID of the book that need to be rated
 * returns Rating
 **/
exports.postRating = function(body,username,bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "rate" : 4.7,
  "comment" : "I loved it!",
  "bookId" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rate a Bookify's book
 * Returns the user rating
 *
 * body Rating Rate an existent book in Bookify (optional)
 * username String User's username that need to rate the book
 * bookId Integer ID of the book that need to be rated
 * returns Rating
 **/
exports.postRating = function(body,username,bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "rate" : 4.7,
  "comment" : "I loved it!",
  "bookId" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update user
 * This can only be done by the logged in user.
 *
 * body User Update an existent user in the store (optional)
 * username String name that need to be updated
 * no response value expected for this operation
 **/
exports.updateUser = function(body,username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update user
 * This can only be done by the logged in user.
 *
 * body User Update an existent user in the store (optional)
 * username String name that need to be updated
 * no response value expected for this operation
 **/
exports.updateUser = function(body,username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

