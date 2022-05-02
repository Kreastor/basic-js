const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  console.log(domains);
  let returnObject = {};
    
  let countRu = 0;
  let countRuYandex = 0;
  let countYandexCode = 0;
  let countYandexMusic = 0;
  let countCom = 0;
  let countComEpam = 0;
  let countEpamCom = 0;

  for (let i = 0; i < domains.length; i++) {
    if (domains[i].includes('.ru') === true) {
      countRu += 1;
    }
    if (domains[i].includes('yandex.ru') === true) {
      countRuYandex += 1;
    }
    if (domains[i].includes('code.yandex.ru') === true) {
      countYandexCode += 1;
    }
    if (domains[i].includes('music.yandex.ru') === true) {
      countYandexMusic += 1;
    }
    if (domains[i].includes('.com') === true) {
      countCom += 1;
    }
    if (domains[i].includes('epam.com') === true) {
      countComEpam += 1;
    }
    if (domains[i].includes('com.epam') === true) {
      countEpamCom += 1;
    }
  }   


    if (countRu > 0) {
      returnObject['.ru'] = countRu;
    } 
    if (countRuYandex > 0) {
      returnObject['yandex.ru'] = countRuYandex;
    }
    if (countYandexCode > 0) {
      returnObject['code.yandex.ru'] = countYandexCode;
    }
    if (countYandexMusic > 0) {
      returnObject['music.yandex.ru'] = countYandexMusic;
    }
    if (countCom > 0) {
      returnObject['.com'] = countCom;
    }
    if (countComEpam > 0) {
      returnObject['epam.com'] = countComEpam;
    }
    if (countEpamCom > 0) {
      returnObject['come.epam'] = countEpamCom;
    }
  
  return returnObject
}

module.exports = {
  getDNSStats
};
