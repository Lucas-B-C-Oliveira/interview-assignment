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