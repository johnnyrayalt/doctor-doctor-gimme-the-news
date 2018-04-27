# Doctor API Search


`$ git clone`

`$ npm install`

`$ npm run start`


| Description | Input | Output |
|-------------|-------|--------|
| A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query | Sore Throat | * Doctor A * Doctor B |
| A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query. | John Doe | Dr. John Doe |
| If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients | Sore Throat | Dr. John Doe, 1234 Main St., Portland, OR 90001, 555-5555, drjohndoe.com, accepting new patients |
| If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is | Server Error | Error: 404 |
| If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. | Dr. Johnny Alt | Sorry, there are no doctors in your area that meet that criteria |
