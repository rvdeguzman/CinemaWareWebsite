const validator = require('validator');
/** Check validity of name and type. 
 * 
 * @param {string} username Name must be a non-empty, alphabetical string (no spaces or numbers)
 * @returns true if it is valid, false otherwise
 */
function isValidUserName(username) {
   return (typeof username === 'string' && username && validator.isAlphanumeric(username,'en-US'));
}

/**
 * Validates given first name and last name by verifying if they only contain letters and are not undefined.
 * @param {*} firstName: First name of user given as parameter
 * @param {*} lastName : last name of user given as parameter
 * @returns 
 */
 function isValidNames(firstName, lastName) {
   if (firstName!= undefined && lastName != undefined) {
       let isGoodFName = validator.isAlpha(firstName);
       let isGoodLName = validator.isAlpha(lastName);

       if (isGoodFName && isGoodLName){
           return true;
       }
       else{
           return false;
       }
   }
   else {
       return false;
   }
}

/**
 * Validates a given password if it is strong enough.
 * @param {*} password The password of the user. Must be minimum length of 8 characters, 1 uppercase, 1 lowercase and 1 symbol
 * @returns true if the password is strong (valid), and false if not
 */
function isValidPassword(password){
    const num = validator.isStrongPassword(password);
    if (num == false){
        return false;
    }
    else{
        return true;
    }
}

module.exports = {
   isValidUserName, 
   isValidNames,
   isValidPassword
}

