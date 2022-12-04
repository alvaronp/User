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
    var examples =  {
  "firstName" : body.firstName,
  "lastName" : body.lastName,
  "password" : body.password,
  "id" : body.id,
  "email" : body.email,
  "historysubs" : [ "", "" ],
  "username" : body.username
};
    if (body.id > 4) {
      if(body.password.length >= 8){
        resolve(examples);
      }
      else{
        reject(JSON.stringify("La contraseña debe tener al menos 8 caracteres"));
      }
    } else {
      reject(JSON.stringify("Ya existen usuarios con ese ID"));
    }
  });
}


/**
 * Delete from user's favourite books a Bookify's book
 * Delete from user's favourite books a Bookify's book
 *
 * userId Integer User's ID that need to delete from favourites list the book
 * bookId Integer ID of the favourite book that need to be deleted
 * no response value expected for this operation
 **/
exports.deleteFav = function(userId,bookId) {
  return new Promise(function(resolve, reject) {
    var examples  = [ {
        "bankAccount": "XXXX-XXX-1234",
        "firstName": "John",
        "lastName": "Doe",
        "password": "12345678",
        "ratings": [
          {
            "rate": 4.7,
            "comment": "I loved it!",
            "bookId": 1
          },
          {
            "rate": 4.3,
            "comment": "Me encanta",
            "bookId": 2
          }
        ],
        "favbooks": [
          {
            "bookId": 1
          },
          {
            "bookId": 2
          },
          {
            "bookId": 3
          },
          {
            "bookId": 4
          }
        ],
        "id": 1,
        "email": "johndoe@email.com",
        "historysubs": [
          {
            "endDate": "16/12/2022",
            "price": 5.49,
            "userId": 1,
            "startDate": "16/11/2022"
          },
          {
            "endDate": "16/11/2022",
            "price": 5.49,
            "userId": 1,
            "startDate": "16/10/2022"
          }
        ],
        "userId": "johndoe123",
        "statistics": {
          "favgenre": "Fantasy",
          "audiolistened": 7,
          "minlistened": 285,
          "nbookread": 18,
          "hoursread": 137
        }
    }, {
      "bankAccount": "XXXX-XXX-1301",
      "firstName": "Marta",
      "lastName": "G",
      "password": "00011190",
      "ratings": [
      ],
      "favbooks": [
        {
          "bookId": 5
        },
        {
          "bookId": 6
        }
      ],
      "id": 2,
      "email": "martag@email.com",
      "historysubs": [
        {
          "endDate": "15/12/2022",
          "price": 5.49,
          "userId": 1,
          "startDate": "15/11/2022"
        },
        {
          "endDate": "14/10/2022",
          "price": 5.49,
          "userId": 1,
          "startDate": "14/09/2022"
        }
      ],
      "userId": "martag13",
      "statistics": {
        "favgenre": "Romance",
        "audiolistened": 10,
        "minlistened": 403,
        "nbookread": 21,
        "hoursread": 168
      }
    }, {
      "bankAccount": "XXXX-XXX-4321",
      "firstName": "Alfredo",
      "lastName": "P",
      "password": "12345678",
      "ratings": [
        {
          "rate": 4.4,
          "comment": "Me encanta",
          "bookId": 4
        },
        {
          "rate": 4.5,
          "comment": "El mejor libro de este siglo!",
          "bookId": 5
        }
      ],
      "favbooks": [
        {
          "bookId": 3
        },
        {
          "bookId": 4
        }
      ],
      "id": 3,
      "email": "alfredop@email.com",
      "historysubs": [
        {
          "endDate": "14/04/2022",
          "price": 5.49,
          "userId": 1,
          "startDate": "14/03/2022"
        },
        {
          "endDate": "14/02/2022",
          "price": 5.49,
          "userId": 1,
          "startDate": "14/01/2022"
        }
      ],
      "userId": "alfredop",
      "statistics": {
        "favgenre": "Drama",
        "audiolistened": 4,
        "minlistened": 135,
        "nbookread": 45,
        "hoursread": 652
      }
    }];
    if (userId >= 1 & userId <= 3) {
      resolve([JSON.stringify("EL USUARIO "+ userId +" HA ELIMINADO DE FAVORITOS EL LIBRO "+ bookId +"\n"), examples[userId-1]]);
    } else {
      reject(JSON.stringify("No existe usuario con ese ID"));
    }  
  });
}


/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * userId Integer User's ID that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUser = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples  = [ {
        "bankAccount": "XXXX-XXX-1234",
        "firstName": "John",
        "lastName": "Doe",
        "password": "12345678",
        "ratings": [
          {
            "rate": 4.7,
            "comment": "I loved it!",
            "bookId": 1
          },
          {
            "rate": 4.3,
            "comment": "Me encanta",
            "bookId": 2
          }
        ],
        "favbooks": [
          {
            "bookId": 1
          },
          {
            "bookId": 2
          },
          {
            "bookId": 3
          },
          {
            "bookId": 4
          }
        ],
        "id": 1,
        "email": "johndoe@email.com",
        "historysubs": [
          {
            "endDate": "16/12/2022",
            "price": 5.49,
            "userId": 1,
            "startDate": "16/11/2022"
          },
          {
            "endDate": "16/11/2022",
            "price": 5.49,
            "userId": 1,
            "startDate": "16/10/2022"
          }
        ],
        "userId": "johndoe123",
        "statistics": {
          "favgenre": "Fantasy",
          "audiolistened": 7,
          "minlistened": 285,
          "nbookread": 18,
          "hoursread": 137
        }
    }, {
      "bankAccount": "XXXX-XXX-1301",
      "firstName": "Marta",
      "lastName": "G",
      "password": "00011190",
      "ratings": [
      ],
      "favbooks": [
        {
          "bookId": 5
        },
        {
          "bookId": 6
        }
      ],
      "id": 2,
      "email": "martag@email.com",
      "historysubs": [
        {
          "endDate": "15/12/2022",
          "price": 5.49,
          "userId": 1,
          "startDate": "15/11/2022"
        },
        {
          "endDate": "14/10/2022",
          "price": 5.49,
          "userId": 1,
          "startDate": "14/09/2022"
        }
      ],
      "userId": "martag13",
      "statistics": {
        "favgenre": "Romance",
        "audiolistened": 10,
        "minlistened": 403,
        "nbookread": 21,
        "hoursread": 168
      }
    }, {
      "bankAccount": "XXXX-XXX-4321",
      "firstName": "Alfredo",
      "lastName": "P",
      "password": "12345678",
      "ratings": [
        {
          "rate": 4.4,
          "comment": "Me encanta",
          "bookId": 4
        },
        {
          "rate": 4.5,
          "comment": "El mejor libro de este siglo!",
          "bookId": 5
        }
      ],
      "favbooks": [
        {
          "bookId": 3
        },
        {
          "bookId": 4
        }
      ],
      "id": 3,
      "email": "alfredop@email.com",
      "historysubs": [
        {
          "endDate": "14/04/2022",
          "price": 5.49,
          "userId": 1,
          "startDate": "14/03/2022"
        },
        {
          "endDate": "14/02/2022",
          "price": 5.49,
          "userId": 1,
          "startDate": "14/01/2022"
        }
      ],
      "userId": "alfredop",
      "statistics": {
        "favgenre": "Drama",
        "audiolistened": 4,
        "minlistened": 135,
        "nbookread": 45,
        "hoursread": 652
      }
    }];
    if (userId >= 1 & userId <= 3) {
      resolve([JSON.stringify("EL USUARIO "+ userId +" HA SIDO ELIMINADO\n"), examples[userId-1]]);
    } else {
      reject(JSON.stringify("No existe usuario con ese ID"));
    }  
  });
}


/**
 * Get user's favourite book's list
 * Returns the user's favourite book's list
 *
 * userId Integer User's ID needed to return his/her favourite book's list
 * returns List
 **/
exports.getFavBooks = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples  = [ {
      "favbooks": [
        {
          "bookId": 1
        },
        {
          "bookId": 2
        },
        {
          "bookId": 3
        },
        {
          "bookId": 4
        }
      ],
  }, {
    "favbooks": [
      {
        "bookId": 5
      },
      {
        "bookId": 6
      }
    ],
  }, {
    "favbooks": [
      {
        "bookId": 3
      },
      {
        "bookId": 4
      }
    ],
  }];
    if (userId >= 1 & userId <= 3) {
      resolve([JSON.stringify("LIBROS FAVORITOS DEL USUARIO " + userId + "\n"),examples[userId-1]]);
    } else {
      reject(JSON.stringify("No existe usuario con ese ID"));
    }
  });
}


/**
 * Get user suscriptions's history
 * Returns the user suscriptions's history
 *
 * userId Integer User's ID needed to return his/her suscriptions's history
 * returns List
 **/
exports.getHistSubs = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples  = [ {
      "historysubs": [
        {
          "endDate": "16/12/2022",
          "price": 5.49,
          "userId": 1,
          "startDate": "16/11/2022"
        },
        {
          "endDate": "16/11/2022",
          "price": 5.49,
          "userId": 1,
          "startDate": "16/10/2022"
        }
      ],
  }, {
    "historysubs": [
      {
        "endDate": "15/12/2022",
        "price": 5.49,
        "userId": 1,
        "startDate": "15/11/2022"
      },
      {
        "endDate": "14/10/2022",
        "price": 5.49,
        "userId": 1,
        "startDate": "14/09/2022"
      }
    ],
  }, {
    "historysubs": [
      {
        "endDate": "14/04/2022",
        "price": 5.49,
        "userId": 1,
        "startDate": "14/03/2022"
      },
      {
        "endDate": "14/02/2022",
        "price": 5.49,
        "userId": 1,
        "startDate": "14/01/2022"
      }
    ],
  }];
    if (userId >= 1 & userId <= 3) {
      resolve([JSON.stringify("HISTÓRICO DE SUSCRIPCIONES DEL USUARIO " + userId + "\n"),examples[userId-1]]);
    } else {
      reject(JSON.stringify("No existe un usuario con ese ID"));
    }
  });
}


/**
 * Get user statistics
 * Returns the user statistics data
 *
 * userId Integer User's ID needed to return his/her statistics
 * returns Statistics
 **/
exports.getStatistics = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples  = [ {
      "statistics": {
        "favgenre": "Fantasy",
        "audiolistened": 7,
        "minlistened": 285,
        "nbookread": 18,
        "hoursread": 137
      }
  }, {
    "statistics": {
      "favgenre": "Romance",
      "audiolistened": 10,
      "minlistened": 403,
      "nbookread": 21,
      "hoursread": 168
    }
  }, {
    "statistics": {
      "favgenre": "Drama",
      "audiolistened": 4,
      "minlistened": 135,
      "nbookread": 45,
      "hoursread": 652
    }
  }];
    if (userId >= 1 & userId <= 3) {
      resolve([JSON.stringify("ESTADÍSTICAS DE USO DEL USUARIO " + userId + "\n"),examples[userId - 1]]);
    } else {
      reject(JSON.stringify("No existe un usuario con ese ID"));
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
exports.getUser = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples  = [ {
      "bankAccount": "XXXX-XXX-1234",
      "firstName": "John",
      "lastName": "Doe",
      "password": "12345678",
      "ratings": [
        {
          "rate": 4.7,
          "comment": "I loved it!",
          "bookId": 1
        },
        {
          "rate": 4.3,
          "comment": "Me encanta",
          "bookId": 2
        }
      ],
      "favbooks": [
        {
          "bookId": 1
        },
        {
          "bookId": 2
        },
        {
          "bookId": 3
        },
        {
          "bookId": 4
        }
      ],
      "id": 1,
      "email": "johndoe@email.com",
      "historysubs": [
        {
          "endDate": "16/12/2022",
          "price": 5.49,
          "userId": 1,
          "startDate": "16/11/2022"
        },
        {
          "endDate": "16/11/2022",
          "price": 5.49,
          "userId": 1,
          "startDate": "16/10/2022"
        }
      ],
      "userId": "johndoe123",
      "statistics": {
        "favgenre": "Fantasy",
        "audiolistened": 7,
        "minlistened": 285,
        "nbookread": 18,
        "hoursread": 137
      }
  }, {
    "bankAccount": "XXXX-XXX-1301",
    "firstName": "Marta",
    "lastName": "G",
    "password": "00011190",
    "ratings": [
    ],
    "favbooks": [
      {
        "bookId": 5
      },
      {
        "bookId": 6
      }
    ],
    "id": 2,
    "email": "martag@email.com",
    "historysubs": [
      {
        "endDate": "15/12/2022",
        "price": 5.49,
        "userId": 1,
        "startDate": "15/11/2022"
      },
      {
        "endDate": "14/10/2022",
        "price": 5.49,
        "userId": 1,
        "startDate": "14/09/2022"
      }
    ],
    "userId": "martag13",
    "statistics": {
      "favgenre": "Romance",
      "audiolistened": 10,
      "minlistened": 403,
      "nbookread": 21,
      "hoursread": 168
    }
  }, {
    "bankAccount": "XXXX-XXX-4321",
    "firstName": "Alfredo",
    "lastName": "P",
    "password": "12345678",
    "ratings": [
      {
        "rate": 4.4,
        "comment": "Me encanta",
        "bookId": 4
      },
      {
        "rate": 4.5,
        "comment": "El mejor libro de este siglo!",
        "bookId": 5
      }
    ],
    "favbooks": [
      {
        "bookId": 3
      },
      {
        "bookId": 4
      }
    ],
    "id": 3,
    "email": "alfredop@email.com",
    "historysubs": [
      {
        "endDate": "14/04/2022",
        "price": 5.49,
        "userId": 1,
        "startDate": "14/03/2022"
      },
      {
        "endDate": "14/02/2022",
        "price": 5.49,
        "userId": 1,
        "startDate": "14/01/2022"
      }
    ],
    "userId": "alfredop",
    "statistics": {
      "favgenre": "Drama",
      "audiolistened": 4,
      "minlistened": 135,
      "nbookread": 45,
      "hoursread": 652
    }
  }];
    if (userId >= 1 & userId <= 3) {
      resolve(examples[userId-1]);
    } else {
      reject(JSON.stringify("No existe un usuario con ese ID"));
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
    if (password.length > 7) {
      resolve(JSON.stringify("Sesión iniciada: Bienvenid@ " + username));
    } else {
      reject(JSON.stringify("Contraseña incorrecta (PISTA:muy corta...)"));
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
    resolve(JSON.stringify("La sesión se ha cerrado"));
  });
}


/**
 * Add to favourites a Bookify's book
 * Returns the favourite book's id
 *
 * userId Integer User's ID needed to add to favourites list the book
 * bookId Integer ID of the book that need to be added
 * returns FavBook
 **/
exports.postFav = function(userId,bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {    
      "favbooks": [
        {
          "bookId": bookId
        },
      ]
    };
    if(userId < 4){
      if (bookId < 6) {
        resolve([JSON.stringify("AÑADIDO A FAVORITOS DEL USUARIO " + userId + " EL LIBRO "+ bookId + "\n"), examples]);
      } else {
        reject(JSON.stringify("El libro no se encuentra en Bookify"));
      }
    }
    else{
      reject(JSON.stringify("El usuario con el ID "+ userId + " no existe"));
    }
  });
}


/**
 * Rate a Bookify's book
 * Returns the user rating
 *
 * userId Integer User's ID needed to rate the book
 * bookId Integer ID of the book that need to be rated
 * returns Rating
 **/
exports.postRating = function(body,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {
      "rate": body.rate,
      "comment": body.comment,
      "bookId": body.bookId
    };
    if (userId < 4) {
      if (body.bookId < 7) {
        resolve([JSON.stringify("LIBRO " + body.bookId + " VALORADO\n"),examples]);
      } else {
        reject(JSON.stringify("No hay ningún libro con ese ID"));
      }
    }
    else{
      reject(JSON.stringify("El usuario con el ID "+ userId + " no existe"));
    }
  });
}


/**
 * Update user
 * This can only be done by the logged in user.
 *
 * body User Update an existent user in the app (optional)
 * no response value expected for this operation
 **/
exports.updateUser = function(body) {
  return new Promise(function(resolve, reject) {
    if (body.id < 3) {
      resolve([JSON.stringify("USUARIO " + body.id + " ACTUALIZADO"), body]);
    } else {
      reject(JSON.stringify("No hay ningún usuario con ese ID"));
    }
  });
}
