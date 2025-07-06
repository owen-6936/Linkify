# Linkify

## Description

Linkify is a modern, simple, and responsive URL shortening service. It allows users to transform long, cumbersome URLs into short, easy-to-share links. Built with a robust Node.js backend and a MySQL database, Linkify ensures efficient storage, retrieval, and redirection of links. Its intuitive frontend, crafted with vanilla JavaScript, HTML, and CSS, provides a seamless user experience for quickly generating and copying shortened URLs.

## Getting Started

Follow these steps to set up and run Linkify locally for development.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (LTS version recommended)
- **npm** (Node Package Manager - comes with Node.js)
- **MySQL** (running locally or accessible)
- **Live Server** (e.g., a VS Code extension, for serving the frontend files)

### Backend Setup (Node.js)

The backend handles API requests, database interactions, and the core URL shortening/redirection logic. You'll run this from your project's root directory.

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/owen-6936/linkify.git]
   cd Linkify
   ```

2. **Install backend dependencies:**

   ```bash
   npm install
   ```

3. **Configure Database Connection:**
   - Create a `.env` file in the root of the `Linkify` directory (where your `package.json` for the backend is located).
   - Populate it with your MySQL connection details (e.g., `DB_HOST=localhost`, `DB_USER=root`, `DB_PASSWORD=your_password`, `DB_NAME=linkify_db`).
4. **Start the backend server:**

   ```bash
   npm start
   ```

   The backend server will typically start and listen for connections on `http://localhost:3000`. You should see a confirmation message in your terminal.

### Frontend Setup (Vanilla JavaScript, HTML, CSS)

The frontend provides the interactive user interface. Since it's built with vanilla JavaScript, you can serve it directly using a simple local web server like Live Server.

1. **Ensure your backend server is running** (as per the steps above).
2. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

3. **Launch with Live Server:**
   - Using your preferred method (e.g., if using the VS Code Live Server extension, right-click on `index.html` and select "Open with Live Server").
   - This will open your Linkify frontend in your browser, typically at an address like `http://127.0.0.1:5500`.

#### Important Note for API Endpoint Configuration (Client-Side)

The frontend needs to know where to send its API requests.

- **For Local Development:** Your frontend JavaScript will be configured to make API calls directly to your local backend server. For example, in your `script.js` or a configuration file, ensure the API base URL is set to:

  ```javascript
  const API_BASE_URL = "http://localhost:3000/api";
  ```

- **For Production Deployment:** When deploying this application to a live production environment (e.g., `https://lnkfy.cfd`) behind a reverse proxy like Nginx, the frontend's API endpoint _must_ be updated to point to the live domain. Nginx will then proxy these requests to your backend.

  **Action Required:** Before deploying to production, modify the API base URL in your frontend JavaScript (e.g., in `script.js`) to reflect your production domain:

  ```javascript
  const API_BASE_URL = "https://lnkfy.cfd/api";
  ```

  _(Adjust `API_BASE_URL` and the specific file/variable name to match your code structure.)_
