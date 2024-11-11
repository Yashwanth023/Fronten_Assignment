# User Registration Application

This is a full-stack user registration application built with React for the frontend and Node.js with Express for the backend. It uses MongoDB as the database.

## Prerequisites

- Node.js (v14 or later)
- MongoDB

## Project Structure

user-registration-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md

## Setup

1. Clone the repository:
   git clone <repository-url>
   cd user-registration-app

2. Install dependencies:
   cd backend && npm install
   cd ../frontend && npm install

3. Set up the database:
   - Make sure MongoDB is running on your local machine
   - Create a `.env` file in the `backend` folder with the following content:
     MONGODB_URI=mongodb://localhost:27017/user_registration
     PORT=5000

## Running the application

1. Start the backend server:
   cd backend
   npm start
   The server will run on http://localhost:5000

2. Start the frontend development server:
   cd frontend
   npm start
   The frontend will be accessible at http://localhost:3000

## Building for production

To create a production build of the frontend:

1. Navigate to the frontend folder:
   cd frontend

2. Run the build command:
   npm run build

This will create a `build` folder in the frontend directory with production-ready static files.

## Deployment

### Backend Deployment
1. Choose a hosting provider that supports Node.js applications (e.g., Heroku, DigitalOcean, AWS).
2. Set up environment variables on your hosting platform, including `MONGODB_URI`.
3. Deploy the contents of the `backend` folder.

### Frontend Deployment
1. Choose a static site hosting service (e.g., Netlify, Vercel, GitHub Pages).
2. Deploy the contents of the `frontend/build` folder.
3. Ensure that the backend URL is correctly set in the frontend code before building.

## Features

- View a list of registered users in a responsive grid layout
- Add a new user with Name, Email, and Date of Birth
- Update existing user information
- Delete a user from the list

## Technologies Used

- Frontend: React, React Router, Axios, Styled Components
- Backend: Node.js, Express, Mongoose
- Database: MongoDB

## API Endpoints

- GET /api/users - Retrieve all users
- POST /api/users - Create a new user
- PUT /api/users/:id - Update a user
- DELETE /api/users/:id - Delete a user

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
