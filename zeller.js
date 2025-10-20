// https://www.perplexity.ai/search/what-is-meaning-of-idempotant-mWBqiadPRx2A.2ZMvtjctA


// CQRS Pattern

// Event sourcing

// Duplicate payment how we can restrict it through database locking concept.


// Given an array of integers, return all triplets [a, b, c] such that a + b + c = 0 
// Input: nums = [0, -1, 2, -3, 1]
// Output: [[-3, 1, 2], [-1, 0, 1]]




// In RESTful API context, the difference between PUT and PATCH is: 

// - PUT replaces the entire resource with the data sent. It requires the full resource representation.
// - PATCH updates only specific fields given in the request. It applies partial modifications.

// Example:

// PUT /users/1  
// Request body:  
// ```json
// {
//   "name": "Alice",
//   "email": "alice@example.com"
// }
// ```
// This replaces the whole user resource with name and email.

// PATCH /users/1  
// Request body:  
// ```json
// {
//   "email": "alice@newdomain.com"
// }
// ```
// This updates only the email field, leaving other fields unchanged.

// In short, PUT = full replacement, PATCH = partial update. PUT is idempotent; PATCH generally is not.