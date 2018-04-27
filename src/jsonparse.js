import { Doctor } from './apicall.js';
import './main.js';
import $ from 'jquery';

function parser() {
  let openCall = new Doctor();
  let newRequest = openCall.apiCall();

  newRequest.then(
    function(response) {
      let body = JSON.parse(response);
      let resultsSetLimit = body.meta.limit;
      let resultsTotal = body.meta.total;
      if (resultsTotal === 0) {
        $('#doctorsView').html('<p>There were no results matching your input</p>');
      } else {
        for (let i = 0; i < resultsSetLimit; i++) {
          let resultsFirstName = body.data[i].profile.first_name;
          let resultsLastName = body.data[i].profile.last_name;
          let resultsAddress = body.data[i].practices[0].visit_address.street + ", " +
                               body.data[i].practices[0].visit_address.city + ", " +
                               body.data[i].practices[0].visit_address.state;
          let resultsPhone = body.data[i].practices[0].phones[0].number;
          let resultsWebsite = body.data[i].practices[0].website;
          let resultsAcceptsNewPatients = body.data[i].practices[0].accepts_new_patients;

          $('#doctorsView').append(`<p class="showDoc">Name: Dr. ${resultsFirstName} ${resultsLastName}<br />
              Address: ${resultsAddress}<br />
              Phone Number: ${resultsPhone}<br />
              Website: ${resultsWebsite}<br />
              Accepting New Patients? ${resultsAcceptsNewPatients}</p>`);
        }
      }
    },
    function(error) {
      $('#errorHandling').html(`There was an error processing your request: ${error.message}`)
    });
}
export { parser };
