### Module 3: TypeScript with Node.js

#### Overview
In this module, we’ll learn how to use TypeScript with Node.js to build server-side applications. We'll cover setting up a Node.js project with TypeScript, using TypeScript features to create robust APIs, and handling asynchronous code with proper types.

#### Topics
1. Setting up a Node.js and TypeScript project
2. Creating a simple HTTP server
3. Working with Express.js and TypeScript
4. Handling asynchronous code
5. Using TypeScript with databases

#### Learning Objectives
- Set up a Node.js project with TypeScript.
- Create and type a simple HTTP server.
- Use Express.js with TypeScript to create APIs.
- Handle asynchronous code in TypeScript.
- Integrate TypeScript with databases.

### Section 3.1: Setting Up a Node.js and TypeScript Project

**Step-by-Step Guide:**

1. **Initialize a New Node.js Project**:
   ```bash
   mkdir my-node-app
   cd my-node-app
   npm init -y
   ```

2. **Install TypeScript and Necessary Dependencies**:
   ```bash
   npm install typescript ts-node @types/node --save-dev
   ```

3. **Create a `tsconfig.json` File**:
   ```bash
   npx tsc --init
   ```

4. **Configure `tsconfig.json`**:
   ```json
   {
     "compilerOptions": {
       "target": "ES6",
       "module": "commonjs",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true
     },
     "include": ["src/**/*"]
   }
   ```

5. **Set Up the Project Structure**:
   ```bash
   mkdir src
   touch src/index.ts
   ```

### Section 3.2: Creating a Simple HTTP Server

**Example: Creating a Simple HTTP Server with TypeScript**:
```typescript
import http from 'http';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
```

**Running the Server**:
Add a script to `package.json` to run the server:
```json
"scripts": {
  "start": "ts-node src/index.ts"
}
```
Run the server:
```bash
npm start
```

### Section 3.3: Working with Express.js and TypeScript

**Installing Express.js and TypeScript Definitions**:
```bash
npm install express
npm install @types/express --save-dev
```

**Creating an Express Server with TypeScript**:
```typescript
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express and TypeScript!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
```

### Section 3.4: Handling Asynchronous Code

**Using Async/Await in TypeScript**:
```typescript
import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.get('/data', async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://api.example.com/data');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
```

### Section 3.5: Using TypeScript with Databases

**Example with MongoDB and Mongoose**:

1. **Install Mongoose and TypeScript Definitions**:
   ```bash
   npm install mongoose
   npm install @types/mongoose --save-dev
   ```

2. **Connecting to MongoDB and Defining a Schema**:
   ```typescript
   import mongoose, { Schema, Document } from 'mongoose';

   interface IUser extends Document {
       name: string;
       email: string;
       age: number;
   }

   const UserSchema: Schema = new Schema({
       name: { type: String, required: true },
       email: { type: String, required: true },
       age: { type: Number, required: true },
   });

   const User = mongoose.model<IUser>('User', UserSchema);

   mongoose.connect('mongodb://localhost:27017/mydatabase', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   }).then(() => {
       console.log('MongoDB connected');

       const newUser = new User({ name: 'John Doe', email: 'john@example.com', age: 30 });
       newUser.save().then(() => console.log('User saved'));
   }).catch(err => console.log(err));
   ```

### Assignments

1. **Simple HTTP Server Assignment**:
   - Create a simple HTTP server that responds with "Welcome to TypeScript with Node.js!".
   - Add a route that returns a JSON object with your name and favorite programming language.

2. **Express.js Assignment**:
   - Create an Express server with a route that returns a list of users.
   - Define a TypeScript interface for the user object and use it to type the response.

3. **Asynchronous Code Assignment**:
   - Create an Express server with a route that fetches data from an external API and returns it.
   - Handle possible errors and type the response appropriately.

### Project 3: RESTful API with Express and TypeScript

**Project Description**:
Create a RESTful API using Express and TypeScript. The API should manage a collection of resources (e.g., users, tasks, or products).

**Requirements**:
- Set up an Express server with TypeScript.
- Define routes for CRUD operations (Create, Read, Update, Delete).
- Use MongoDB (or another database) to persist data.
- Handle asynchronous operations with proper type annotations.
- Implement error handling and validation.

**Project Steps**:
1. Set up a new Node.js and TypeScript project.
2. Install and configure Express.js.
3. Define TypeScript interfaces for your data models.
4. Implement CRUD routes and connect them to a database.
5. Test your API using a tool like Postman or Insomnia.
6. Add error handling and data validation.

---
