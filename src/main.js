import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Doctor } from './apicall.js';

$(document).ready(function() {
  $('#doctorSearchForm').submit(function(event) {
    event.preventDefault();
    let openCall = new Doctor();
    let newRequest = openCall.apiCall();

    newRequest.then(
      function(response) {
        let body = JSON.parse(response);
        let results = body;
        console.log(results);
        // $('#doctorsView').html(`<p>${results}</p>`);
      }
    )
  })
});
