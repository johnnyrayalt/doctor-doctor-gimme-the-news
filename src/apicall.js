class Doctor {
  apiCall() {
    return new Promise(function(resolve, reject) {
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.543%2C-122.794%2C100&user_location=45.543%2C-122.794&skip=0&limit=1&user_key=${process.env.exports.apiKey}`;
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
