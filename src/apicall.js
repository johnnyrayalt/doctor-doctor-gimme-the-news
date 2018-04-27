class Doctor {
  apiCall() {
    return new new Promise(function(resolve, reject) {
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=45.543%2C-122.794%2C100&user_location=45.543%2C-122.794&skip=0&limit=1&user_key=2d7e51a2fadacc4242b1c07238fd2680';
      let xhr = new XMLHttpRequest();

      xhr.onload = function() {
        if (this.status === 200) {
          resolve(xhr.response);
        } else {
          reject(Error(error.statusText));
        }
      }

      xhr.open("GET", url, true);
      xhr.send();
    });
  }
}

export { Doctor };
