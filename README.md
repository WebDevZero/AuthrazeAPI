# AuthrazeAPI

![Node.js](https://img.shields.io/badge/Node.js-16.x-brightgreen.svg?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey.svg?logo=express)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Build Status](https://img.shields.io/badge/status-experimental-red)
![Version](https://img.shields.io/badge/version-1.4.0-green)


A simple and extensible backend service for a community message board application built with **Node.js**, **Express**, and **JSON file storage**. Front-End included too ('Public').

>  Great for learning backend fundamentals and full-stack prototyping.

---

> If you like the project consider following my github profile and starring the repo, it would help a lot! :)


## ⚙ Features

- **Post messages:** Users can create posts with a title, content, and their username.
- **View messages:** All messages are retrieved and displayed to users in real-time.
- **Delete messages:** Users can delete messages by title.
- **User accounts:** Basic user handling, with the ability to delete the user account and all their messages.
- **Timestamps:** Each message is timestamped to show when it was posted.
- **Frontend integration:** User interface with real-time updates and message display.
- **Responsive UI:** Works well on different screen sizes.
- **Local storage:** Uses browser local storage to keep the username logged in.
- **Basic Password Encryption:** Encrypts user passwords (BASE64).
- **Admin panel:** Lets you ban users.

---

##  Getting Started

### 📦 Prerequisites

- [Node.js](https://nodejs.org/) v16+
- npm (comes with Node)

### 🛠️ Installation

```bash
git clone https://github.com/WebDevZero/AuthrazeAPI.git
cd message-board-backend
npm install
node server.js
```
# AuthrazeAPI Backend API Documentation

Welcome to the **AuthrazeAPI** backend API documentation!  
This backend powers a community message board where users can delete messages, post messages, and manage their accounts.

---

##  POST /messages  
**Create a new message**

This endpoint allows a logged-in user to post a message with a title and content.

- **URL:** `/messages`  
- **Method:** POST  
- **Content-Type:** application/json  
- **Request Body:**  
```json
{
  "title": "Hello",
  "content": "First post!",
  "username": "john"
}
```


---

###  GET /messages
Get all messages.

Response: JSON array of messages:
- title
- content
- username
- timestamp

---

###  GET /users Get all users.

Response: JSON array of users:

username
password (encrypted password)

---

###  POST /delete-message
Delete a message by title and username.

Request Body (JSON):
{
  "title": "Hello",
  "username": "john"
}

---

###  POST /delete-account
Delete the user account and all messages by that user.

Request Body (JSON):
{
  "username": "john"
}

---

###  GET /admin/panel
Response: Admin panel:

-Ability to ban users.
**Note:** When logging in to admin panel make sure to use the **encoded** version of the password.

---

###  GET /backendinstructions
Shows Instructions on how to use backend.

---

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.  

Please follow standard GitHub flow:
- Fork the repo  
- Create a feature branch  
- Submit a pull request with a clear description of your changes

---


## License

This project is licensed under the [MIT License](LICENSE).  

You are free to use and modify this code, but please give appropriate credit.

---
##  Extensions & Improvements

This project is a simple, educational message board backend designed to teach core concepts. If you do want to extend it, here are a few things you could add:

###  Database Integration
- Replace the current JSON file storage with a real database such as:
  - [MongoDB](https://www.mongodb.com/)
  - [PostgreSQL](https://www.postgresql.org/)
  - [MySQL](https://www.mysql.com/)

###  User Authentication & Authorization
- Add secure user registration and login flows.
- Use password hashing.


###  Security Improvements
- Sanitize user input to prevent XSS and injection attacks.
- Implement rate limiting to protect from spam and abuse.



---

*Feel free to contribute or customize this project to fit your needs!*

## ⚠️ Important Notice


This project is intended for learning and educational purposes only.

If you're looking to add secure authentication and authorization, consider using:

- **JWT (JSON Web Tokens)**
- **Session-based auth with express-session**
- **OAuth**
- **Database-level user role verification**

Always sanitize and validate inputs. Make sure to follow best practices when handling user accounts. 

---
## Thanks!

Thanks for checking out this project — happy coding!

---





