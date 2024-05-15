 # Udemy Clone

This repository contains the code for a Udemy clone project. The project aims to replicate the functionality and user experience of the popular online learning platform Udemy, with a focus on both frontend and backend development.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Contributing](#contributing)

## Introduction

The Udemy Clone project is a web application designed to provide users with a platform to discover, purchase, and engage with online courses on various topics. It includes features such as course listings, user authentication, course enrollment, and more.

## Features

- User authentication: Users can sign up, log in, and log out.
- Course listings: Users can browse through a list of available courses.
- Course details: Users can view detailed information about each course.
- Course enrollment: Users can enroll in courses they are interested in.
- Instructor dashboard: Instructors can create and manage courses.
- Payment integration: Users can make payments for course enrollment.

## Technologies Used

- **Frontend**: React
- **Backend**: PHP
- **Database**: MySQL
- **Styling**: CSS, Tailwind
- **Authentication**: JSON Web Tokens (JWT)

## Setup Instructions

To set up and run the Udemy Clone project locally, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/udemy-clone.git
   ```

2. Navigate to the project directory:
   ```bash
   cd udemy-clone
   ```

3. Install frontend dependencies:
   ```bash
   npm install
   ```

4. Install backend dependencies:
   ```bash
   cd backend
   composer install
   ```

5. Set up the database:
   - Create a MySQL database and import the provided SQL file.

6. Configure environment variables:
   - Create a `.env` file in the `backend` directory and set the necessary environment variables.

7. Start the frontend development server:
   ```bash
   npm start
   ```

8. Start the backend server:
   ```bash
   cd backend
   php -S localhost:8000
   ```

9. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions to the Udemy Clone project are welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.