# baavlibuch-app


This is a sample Progressive Web App (PWA) built with React for the front end, Express.js for the backend, and Django for handling NLP comparisons.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- Accepts user input (ID, Photo, Friend ID, Password) and sends it to the backend.
- Logs the number of times a connection is made by the frontend and inserts it into a MongoDB Model.
- Receives text input from the frontend and inserts it into another MongoDB Model and Table.
- Calls a Django API using the most recent two strings and returns the n-grams to the frontend.
- Adds the user ID to MongoDB.
- Stores the encrypted photo in a directory on the disk using multer for the user.
- Updates the friend's friendList to include the user.

## Prerequisites

- Node.js and npm: [Node.js Download](https://nodejs.org/)
- MongoDB: [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/)
- Python and pip: [Python Download](https://www.python.org/downloads/)
- Django: Install Django using `pip install django`

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-app-name.git

## Usage

1. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the React PWA.

2. Fill out the form with the required information and submit it. The data will be processed by the backend.

## Built With

- [React](https://reactjs.org/) - Frontend library for building user interfaces.
- [Express.js](https://expressjs.com/) - Backend web application framework for Node.js.
- [Django](https://www.djangoproject.com/) - Web framework for Python.
- [MongoDB](https://www.mongodb.com/) - NoSQL database for storing data.
- [NLTK](https://www.nltk.org/) - Natural Language Toolkit for NLP comparisons.

