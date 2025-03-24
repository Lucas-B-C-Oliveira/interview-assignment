# User Authentication System

This project is a simple implementation of a user authentication system using cookie-based sessions. The system allows users to log in, register an account, access a protected route, and log out securely. This solution leverages JWT for session management, Fastify for the API, and Next.js for the web client, all within a monorepo structure powered by TurboRepo.

## Project Structure

This project is divided into two main parts:

1. **Web Client** (`web`):
   - A Next.js app that handles user interactions, including login, registration, and profile management.
   - Uses cookies to store the JWT securely for authenticated sessions.

2. **API** (`@assignment/api`):
   - A Fastify-based server that handles authentication requests, including login, registration, and user profile management.
   - Uses Prisma for database interaction and bcryptjs for password hashing.

Both parts are managed under a monorepo structure using **TurboRepo**.

## Requirements

### 1. **Login Page (`/login`)**:
- A login form where users can provide their email and password.
- Upon successful login, the server sets a session cookie (e.g., `auth_token`) that holds the user's authentication token (JWT).
- If the login fails, an error message is displayed.

### 2. **Logout Page (`/logout`)**:
- A route to log the user out by clearing the authentication cookie (e.g., `auth_token`).

### 3. **User Registration (`/register`)**:
- Users can create a new account by providing a username, email, and password.
- The password is securely stored on the server after being hashed using `bcryptjs`.
- After registration, users are redirected to the login page.

### 4. **Protected Page (`/profile`)**:
- This page is accessible onlNext.jsy to authenticated users.
- Displays the user’s username or other relevant information (e.g., "Welcome, [username]!").
- If the user is not authenticated (i.e., no valid authentication cookie), they are redirected to the login page.

## Technologies Used

- **Next.js** for the frontend web client.
- **Fastify** for the backend API.
- **JWT** (JSON Web Token) for session management.
- **Prisma** for database ORM.
- **bcryptjs** for password hashing.
- **Docker** and **Docker Compose** for containerization and easy environment setup.

## Setup

### 1. **Clone the Repository**:

```bash 
git clone https://github.com/Lucas-B-C-Oliveira/interview-assignment
cd interview-assignment
```

### 2. **Setup Environment Variables**:
Copy the .env.example file to .env:

```bash 
cp .env.example .env
```
Edit the .env file to match your configuration:

```bash 
SERVER_PORT=3333
DATABASE_URL=<your-database-url>
JWT_SECRET=<your-jwt-secret>
JWT_ISSUER=<your-jwt-issuer>
JWT_AUDIENCE=<your-jwt-audience>
NEXT_PUBLIC_API_URL=<your-api-url>
```
Make sure to set the correct values for DATABASE_URL, JWT_SECRET, JWT_ISSUER, JWT_AUDIENCE, and NEXT_PUBLIC_API_URL.


### 3. **Run the Development Environment with Docker**:
Step 1: Start the API
Navigate to the API directory and install dependencies:

```bash 
cd api
pnpm install
```

Run Docker Compose to set up the backend and the database containers:

```bash 
docker compose up -d
```
Apply the Prisma migrations to the database:

```bash 
pnpm db:migrate
```
Start the backend API:

```bash 
pnpm dev
```
The backend API should now be running on http://localhost:3333.

Step 2: Start the Web Client
Navigate to the web client directory and install dependencies:

```bash 
cd ../web
pnpm install
```
Start the Next.js development server:

```bash 
pnpm dev
```
The web client should now be running on http://localhost:3000.

### 4. **API Documentation (Swagger)**:
The API is documented using Swagger. You can access the interactive API documentation by visiting:

```bash 
http://localhost:3333/docs
```
This provides a detailed view of all available API routes, request/response formats, and allows you to interact with the API directly from the browser.

## How It Works

1. **User Registration**:
   - The user submits their username, email, and password.
   - The password is hashed using `bcryptjs` before being stored in the database.
   - After successful registration, the user is redirected to the login page.

2. **Login**:
   - The user provides their email and password.
   - The password is compared to the stored hash in the database.
   - If the credentials are valid, a JWT is generated and sent to the client as an `auth_token` cookie.

3. **Protected Profile Page**:
   - The profile page can only be accessed by users with a valid `auth_token`.
   - If the user is authenticated, the page displays their username or relevant information.
   - If the user is not authenticated, they are redirected to the login page.

4. **Logout**:
   - The user can log out, which clears the authentication cookie and redirects them to the login page.

## Docker Setup

### Docker Compose:
Docker Compose is used to easily set up the development environment. It builds and runs both the API and the frontend client in isolated containers.

## Project Scripts

### Web Client (`web`):
- **`dev`**: Starts the Next.js development server.
- **`build`**: Builds the production version of the web client.
- **`start`**: Starts the production version of the web client.

### API (`@assignment/api`):
- **`dev`**: Starts the Fastify server in development mode.
- **`db:migrate`**: Runs the Prisma migrations.
- **`db:studio`**: Opens Prisma Studio to interact with the database.

## Conclusion

This project provides a simple, secure user authentication system with JWT-based cookie sessions, offering login, registration, and profile management functionality. It leverages modern web development tools and frameworks like Next.js, Fastify, Prisma, and Docker to provide a scalable and easy-to-maintain solution.
