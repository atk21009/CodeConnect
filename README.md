# Code Connect

Javascript was the primary language used in this application to add functionality to my web application to create an authentication system that stores users' emails and data, sends out emails to users, updates recent news articles, and additional features.

Code Connect is an open platform application aimed at beginner, intermediate, and advanced programmers. The idea of this program is to give resources to programmers so that they can connect with others and also improve their skills.

{Provide a link to your YouTube demonstration. It should be a 4-5 minute demo of the software running and a walkthrough of the code. Focus should be on sharing what you learned about the language syntax.}

[Software Demo Video](https://youtu.be/zmcMh3iCqRc)

# Development Environment

The main tools that I used to develop this software was react and express. I used react on the front end to create responsive front end that was quick to navigate and allowed for various functionality on the front end. I used Node express on the backend to create a rest api that I can use to query data against and pull data from various sources.

### Programming Languages

| Programming Languages |                                                                                                                                                                                                                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JavaScript            | JavaScript was the main programming language used in this application it is used in the front end and back end of this application. It is used to communicate from the backend to the front end and vice versa. As well as in rendering the content from different web pages. |
| Python                | Python was used very rarely in this application the main use of Python was in querying the CSV file for information. It was used to quickly query the data and return that data to the rest API.                                                                              |
| CSS                   | CSS was used in the front end of this application. It is used to style all the different components of the webpages.                                                                                                                                                          |
| HTML                  | HTML was used to add components to the React application. Most of the HTML code is located in the public index HTML file. However, different elements of HTML are located in the webpage files.                                                                               |

### Libraries

| Front End             |                                                                                                                                                          |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Axios                 | Axios was used to fetch information from the front end of the application to the backend of the application                                              |
| Bootstrap             | Bootstrap was used to help style this application. In the end I didn't use it that much. However, it is used variously around the application for design |
| History               | History was used in order to redirect the user to a different page after an axios request was made.                                                      |
| Http-proxy-middleware | Http proxy middleware was the middleware I used in order to communicate the axios request from the front end of the application to the backend           |
| React                 | React is the main package I used for this program it is used to render all the different webpages.                                                       |
| React-bootstrap       | React bootstrap was used for styling this application. However, in the end I didn't use it that much.                                                    |
| React-redux           | React redux was the package I used to help with user authentication. It helps to authenticate the user and is used for middleware for authentication.    |
| React-router-dom      | React router dom is what I used to navigate this application. I used this library to quickly navigate my site and render elements quickly.               |
| Redux                 | Redux is a package that assists in authentication and saving authentication.                                                                             |
| Redux-form            | Redux form is a package I used for authentication. I used redux form in logging in and signing up users.                                                 |
| Redux-thunk           | Redux thunk is a middleware that I used in order to assist in authentication and getting data from the backend to the frontend.                          |

| Back End       |                                                                                                                                                                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bcrypt         | I used Bcrypt to securely transfer user data from the backend to a database. I used this to encrypt and decrypt user's passwords.                                                                                                  |
| Cookie-session | Cookie session was used on the backend to save cookies to the users computer. The cookie session creates a cookie on the backend of the server and sends it to the front end users browser.                                        |
| Express        | Express is used as a rest API. I have different routes set up using express to get calls from the front end and perform different actions based on the routes specified.                                                           |
| Mongoose       | Mongoose is used for the database. I store users information inside of the data base and can retrieve the information by querying the database.                                                                                    |
| Nodemon        | Nodemon is used for real time update to the server. So if I need to change something on the server It will automatically be updated as file is saved.                                                                              |
| Passport-local | Passport local is a package I used for authentication on the backend of this application. It helps in getting and saving users information to the database.                                                                        |
| Python-shell   | Python shell is a package used to connect the backend rest api to python. I used this in the average salary page in which I queried the backend and the backend executed a python script and returned the result to the front end. |

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [React Official Website](https://react.dev/)
- [Logo](https://app.logo.com/business-name)
  - Amazing website to help design logos

# Future Work

- Build out more. I bit off a lot more then I could chew for this project. However, I want to keep building this project out and design more.
- Finish backend. There is a lot of future designs I want to implement in this project, and for that I need to do a lot more work on the backend. I need to work out implementation for authentication, databases, and more
- Polish front end. I want to make this site look clean and polished so I want to keep building out this project and polish off everything so it looks industry standard.
