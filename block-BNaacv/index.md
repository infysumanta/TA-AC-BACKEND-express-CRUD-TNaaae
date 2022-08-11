writeCode

Q. create an express app named `user-diary` from scratch

- use ejs as template engine
- navigate to application

- create users router to handle routes for below tasks.
- handle the following routes inside users router:
  - list users
  - Get single user details
  - New user form
  - Delete user
  - update user

Handle above routes by rendering an appropriate template on webpages for them.

- GET '/users' => render `users.ejs` template with list of users
- GET '/users/:id' => render `singleUser.ejs` template with single user object
- GET '/users/new' => render `userForm.ejs` template

Add some basic `HTML` content through these templates which should be rendered on the webpage.
