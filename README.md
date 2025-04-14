# Revisit Category Management Dashboard

## Objective

Full-stack web application for Revisit, an e-commerce platform, focusing on creating a Category Management Dashboard. The primary goals are to implement user authentication, allow administrators to manage clothing categories (view, add, edit), and develop a clean and responsive user interface. Expected learning outcomes include proficiency in React.js, Node.js, Express.js, JWT-based authentication, database management (SQLite or MongoDB), and utilizing a CSS framework like TailwindCSS or Bootstrap.

## Live Demos

* **Frontend:** [ ( [(https://category-management-vrmp.onrender.com)]
* **Backend:** [( [(https://category-management-1.onrender.com)]

## GitHub Repository

* [GitHub Repository Link Here (https://github.com/PuneethKumarNL/Category-Management)]

## Tech Stack

* **Frontend:**
    * React.js
    * [CSS Framework Used: TailwindCSS or Bootstrap]
    * Axios (for API calls)
* **Backend:**
    * Node.js
    * Express.js
    * jsonwebtoken (for JWT authentication)
    * bcryptjs (for password hashing)
    * cors (for Cross-Origin Resource Sharing)
    * [Database and Driver Used:Mongoose (for MongoDB)]

## Features

* **User Authentication:** Secure signup and login functionality for administrators using JWT.
* **Category Management:**
    * **View Categories:** Display a list of existing clothing categories.
    * **Add Category:** Form to create new categories, including name and image upload.
    * **Edit Category:** Form to modify existing category details (name and image).
* **Clean and Responsive UI:** User-friendly interface built with [Specify CSS Framework Used] and designed to be responsive across different screen sizes.
* **Protected Routes:** Category management features are accessible only to authenticated administrators.
* **API Endpoints:** Well-defined RESTful API for frontend-backend communication.
* **Error Handling:** Robust error handling and input validation on both frontend and backend.

## How to Run Locally

Follow these steps to set up and run the Revisit Category Management Dashboard on your local machine:

### Prerequisites

* Node.js (version >= 16)
* npm (Node Package Manager) or yarn
* [If using MongoDB: Ensure you have a MongoDB instance running locally or have access to a MongoDB Atlas cluster.]

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    
    ```

2.  **Install backend dependencies:**
    ```bash
    npm install

    
    ```

5.  **Start the backend server:**
    ```bash
    npm startt
    ```
    The backend server should now be running at `http://localhost:4000` (or the port you specified).

### Frontend Setup

1.  **Navigate to the frontend directory:**3
    ```bash
    cd ../frontend
    ```

2.  **Install frontend dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
    The frontend application should now be running in your browser, usually at `http://localhost:5176`.

## Screenshots

Include screenshots of the key pages of your application here. For example:

* **Signup Page:**
    ![Signup Page Screenshot](https://res.cloudinary.com/dszd8jabc/image/upload/v1744613943/Screenshot_232_eqjd15.png)
* **Login Page:**
    ![Login Page Screenshot](https://res.cloudinary.com/dszd8jabc/image/upload/v1744613938/Screenshot_231_q8zdfl.png)
* **Dashboard (Category List):**
    ![Dashboard Screenshot](https://res.cloudinary.com/dszd8jabc/image/upload/v1744613944/Screenshot_234_lviivb.png)
* **Add Category Form:**
    ![Add Category Form Screenshot](https://res.cloudinary.com/dszd8jabc/image/upload/v1744613944/Screenshot_235_ytd8i7.png)
