
### Module 1: Introduction to TypeScript

#### Overview
TypeScript is a superset of JavaScript that adds static typing. It enables developers to catch errors early through type checking and improve code readability and maintainability.

#### Topics
1. What is TypeScript?
2. Setting up a TypeScript development environment
3. Basic types
4. Variable declarations
5. Functions and their types

#### Learning Objectives
- Understand what TypeScript is and its benefits.
- Set up a TypeScript development environment.
- Use basic types in TypeScript.
- Declare variables with appropriate types.
- Define functions with typed parameters and return types.

### Section 1.1: What is TypeScript?

**What is TypeScript?**
TypeScript is an open-source programming language developed and maintained by Microsoft. It is a typed superset of JavaScript, meaning any valid JavaScript code is also valid TypeScript code.

**Why Use TypeScript?**
- **Static Typing**: Catch errors at compile time.
- **Improved IDE Support**: Enhanced code navigation, refactoring, and autocompletion.
- **Modern JavaScript Features**: Use the latest JavaScript features and transpile to older JavaScript versions if needed.

### Section 1.2: Setting up a TypeScript Development Environment

**Step-by-Step Guide:**

1. **Install Node.js and npm**: TypeScript requires Node.js and npm.
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Install TypeScript Compiler**: 
   - Open your terminal and run: 
     ```bash
     npm install -g typescript
     ```

3. **Set Up a TypeScript Project**:
   - Create a new directory for your project.
   - Initialize a new Node.js project:
     ```bash
     npm init -y
     ```
   - Create a `tsconfig.json` file to configure the TypeScript compiler:
     ```bash
     tsc --init
     ```

### Section 1.3: Basic Types

**Common Basic Types in TypeScript:**
- `boolean`: `true` or `false`
- `number`: Floating point numbers
- `string`: Textual data
- `array`: Arrays of a particular type
- `tuple`: Fixed number of elements with known types
- `enum`: Enumeration of named constants
- `any`: Any type (opt-out of type checking)
- `void`: No type (usually for functions that don't return a value)
- `null` and `undefined`: Their respective types
- `object`: Non-primitive types

### Section 1.4: Variable Declarations

**Variable Declarations:**
- `let`: Block-scoped variable.
- `const`: Block-scoped constant.
- `var`: Function-scoped variable (not recommended in modern TypeScript).

**Examples:**
```typescript
let isDone: boolean = false;
const pi: number = 3.14;
let color: string = "blue";
let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 42];
enum Direction { Up, Down, Left, Right }
let direction: Direction = Direction.Up;
let notSure: any = 4;
notSure = "maybe a string instead";
```

### Section 1.5: Functions and Their Types

**Typed Functions:**
- Define parameter types and return types.
- Optional and default parameters.

**Examples:**
```typescript
function add(x: number, y: number): number {
    return x + y;
}

let myAdd: (x: number, y: number) => number = function (x, y) { return x + y; };

function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}
```

### Assignments

1. **Setup Assignment**: Set up a TypeScript project following the steps outlined in Section 1.2.
2. **Basic Types Assignment**:
   - Create a TypeScript file and declare variables using all the basic types mentioned in Section 1.3.
   - Practice type assertions and type inference.

3. **Functions Assignment**:
   - Write a function that takes two numbers and returns their sum.
   - Write a function that takes a string and an optional boolean. If the boolean is true, return the string in uppercase; otherwise, return it in lowercase.

### Project 1: Simple Calculator

**Project Description**: 
Create a simple calculator in TypeScript that performs basic arithmetic operations (addition, subtraction, multiplication, division).

**Requirements**:
- The calculator should have functions for each arithmetic operation.
- It should accept input values as numbers.
- It should handle errors gracefully (e.g., division by zero).

**Project Steps**:
1. Set up a new TypeScript project.
2. Create functions for addition, subtraction, multiplication, and division.
3. Ensure each function has appropriate type annotations.
4. Test your functions with different inputs to verify they work correctly.
5. Handle possible errors, such as division by zero.

---

That's the end of Module 1. Once you've completed the assignments and project, we can move on to Module 2, where we'll cover more advanced topics like interfaces, classes, and modules. Let me know if you have any questions or need further clarification on any topic!