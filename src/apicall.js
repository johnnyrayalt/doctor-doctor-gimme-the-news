import './main.js';


class Doctor {
  apiCall() {
    return new Promise(function(resolve, reject) {
      let searchQueryName = '&name=' + [(document.getElementById('doctorNameField').value).split(' ').join('%20')];
      let searchQueryAilment = '&query=' + [(document.getElementById('ailmentNameField').value).split(' ').join('%20')];
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?' + searchQueryName + searchQueryAilment + '&location=45.543%2C-122.794%2C100&user_location=45.543%2C-122.794&skip=0&limit=10&user_key=' + process.env.exports.apiKey;
      let xhr = new XMLHttpRequest();

      xhr.onload = function() {
        if (this.status === 200) {
          resolve(xhr.response);
        } else {
          reject(Error(xhr.statusText));
        }
      }

      xhr.open("GET", url, true);
      xhr.send();
    });
  }
}

export { Doctor };
