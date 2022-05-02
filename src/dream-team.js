const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  console.log(members) 
  let arr = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      for (let y = 0; y < members[i].length; y++) {
        if(members[i][y] === " ") {
          continue;
        } else {
        arr.push(members[i][y].toUpperCase());
        break;
        }
      }
    } 
  } 

  if (arr.length > 0) {
    return (arr.sort()).join("");
  } else 
    return false;
}

module.exports = {
  createDreamTeam
};
