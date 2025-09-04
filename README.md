# Linkify Backend

## Overview

This is the robust backend for the Linkify URL shortening service, developed as a key component of my full-stack development portfolio. The backend is responsible for all the core logic, including API request handling, database management, and URL redirection.

## Features

* **URL Shortening API:** An endpoint to accept a long URL and return a unique, short version.

* **Efficient Redirection:** A redirection service that takes a short code and redirects users to the original long URL.

* **MySQL Integration:** Persists all original and shortened URLs in a relational database for reliable storage.

* **Environment Variables:** Securely manages sensitive data like database credentials using a `.env` file.

## Technology Stack

* **Node.js:** The JavaScript runtime environment for building the server.

* **Express.js:** A fast and minimalist web framework for handling routes and requests.

* **MySQL:** The relational database for storing link data.

* **dotenv:** A module to load environment variables from a `.env` file.

## Getting Started

Follow these steps to set up and run the Linkify backend locally for development.

### Prerequisites

* **Node.js** (LTS version recommended)

* **npm** (Node Package Manager)

* **MySQL** (running locally or accessible)

### Setup

1. **Clone the Repository:**

```bash
git clone [https://github.com/owen-6936/linkify-backend.git](https://www.google.com/search?q=https://github.com/owen-6936/linkify-backend.git)
cd linkify-backend
```

2. **Install Dependencies:**

```bash
npm install
```

3. **Configure Database Connection:**

* Create a `.env` file in the root directory.

* Add your MySQL connection details to this file, as shown in the example below.

```bash
DB\_HOST=localhost
DB\_USER=root
DB\_PASSWORD=your\_password
DB\_NAME=linkify\_db
```

*(Remember to create the `linkify_db` database in your MySQL instance.)*

4. **Start the Backend Server:**

```bash
npm start
```

The server will start and listen on port `3000`. You're now ready to use this backend with your frontend or test it with an API client like Postman.
