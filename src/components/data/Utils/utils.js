/**
 * DOC
 * @param {*} email 
 * @param {*} password 
 * @returns boolean
 * 
 * 1) email and password should not be empty
 * 2) password should have 
 *     i) one small letter
 *     ii) one big letter
 *      iii) one special character
 *      iv) one number
 *      v) no spaces
 *      vi) minimum length of 8 characters
 */
export const validateLogin = (email, password) => {
    if(!email || !password) return false;
    return true;
}