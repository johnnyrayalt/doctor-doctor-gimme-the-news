import { Doctor } from './apicall.js';
import './main.js';


function parser() {
  let openCall = new Doctor();
  let newRequest = openCall.apiCall();

  newRequest.then(
    function(response) {
      let body = JSON.parse(response);
      let resultsFirstName = body.data[0].profile.first_name;
      let resultsLastName = body.data[0].profile.last_name;
      let resultsAddress = body.data[0].practices[0].visit_address.street + ", " +
                           body.data[0].practices[0].visit_address.city + ", " +
                           body.data[0].practices[0].visit_address.state;
      let resultsPhone = body.data[0].practices[0].phones[0].number;
      let resultsWebsite = body.data[0].practices[0].website;
      let resultsAcceptsNewPatients = body.data[0].practices[0].accepts_new_patients;
      console.log(resultsFirstName, resultsLastName, resultsAddress, resultsPhone, resultsWebsite, resultsAcceptsNewPatients);
    },
    function(error) {
      $('#errorHandling').html(`There was an error processing your request: ${error.message}`)
    });
}
export { parser };
