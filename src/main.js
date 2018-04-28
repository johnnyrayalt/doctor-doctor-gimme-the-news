import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { parser } from './jsonparse.js';


$(document).ready(function() {
  $('#doctorSearchForm').submit(function(event) {
    event.preventDefault();
    let userInputName = [$('#doctorNameField').val().split(' ').join('%20')];
    let userInputAilment = [$('#ailmentNameField').val().split(' ').join('%20')];
    parser(userInputName, userInputAilment);
    });
});
