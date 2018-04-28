import { parser } from './jsonparse.js';

class Doctor {
  constructor(userInputName, userInputAilment) {
    this.userInputName = userInputName;
    this.userInputAilment = userInputAilment;
  }


  apiCall(userInputName, userInputAilment) {
    function urlConstructor(userInputName, userInputAilment) {
      Doctor.userInputName = userInputName;
      Doctor.userInputAilment = userInputAilment;
      Doctor.userInputName === undefined ? (Doctor.userInputName = '') : (Doctor.userInputName = '&name=' + Doctor.userInputName);
      Doctor.userInputAilment === undefined ? (Doctor.userInputAilment = '') : (Doctor.userInputAilment = '&query=' + Doctor.userInputAilment);
      return `https://api.betterdoctor.com/2016-03-01/doctors?${Doctor.userInputName}${Doctor.userInputAilment}&location=45.543%2C-122.794%2C100&user_location=45.543%2C-122.794&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
    }
    return new Promise(function(resolve, reject) {

      let xhr = new XMLHttpRequest();

      xhr.onload = function() {
        if (this.status === 200) {
          resolve(xhr.response);
        } else {
          reject(Error(xhr.statusText));
        }
      }

      xhr.open("GET", urlConstructor(userInputName, userInputAilment), true);
      xhr.send();
    });
  }
}

export { Doctor };
