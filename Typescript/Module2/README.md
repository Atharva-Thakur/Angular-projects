
### Module 2: Advanced TypeScript Concepts

#### Overview
In this module, we'll delve into more advanced features of TypeScript, including interfaces, classes, and modules. We'll explore how to use these features to write more structured and maintainable code.

#### Topics
1. Interfaces
2. Classes
3. Inheritance and Polymorphism
4. Generics
5. Modules and Namespaces

#### Learning Objectives
- Understand and use interfaces to define custom types.
- Create and use classes, including constructors and methods.
- Implement inheritance and polymorphism in TypeScript.
- Utilize generics to write reusable and flexible components.
- Organize code using modules and namespaces.

### Section 2.1: Interfaces

**What are Interfaces?**
Interfaces define the structure of an object. They describe the shape of the data, specifying what properties an object should have and their types.

**Defining Interfaces:**
```typescript
interface Person {
    name: string;
    age: number;
    greet(): string;
}

const user: Person = {
    name: "John",
    age: 30,
    greet: () => "Hello, I'm John"
};
```

**Optional Properties and Readonly Properties:**
```typescript
interface Person {
    name: string;
    age?: number; // Optional property
    readonly id: number; // Readonly property
}
```

### Section 2.2: Classes

**Defining Classes:**
Classes in TypeScript are blueprints for creating objects. They can include properties, constructors, and methods.

```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

const dog = new Animal("Dog");
dog.move(10);
```

**Public, Private, and Protected Modifiers:**
```typescript
class Animal {
    public name: string;
    private age: number;
    protected species: string;

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
}
```

### Section 2.3: Inheritance and Polymorphism

**Inheritance:**
```typescript
class Bird extends Animal {
    fly(distance: number) {
        console.log(`${this.name} flew ${distance} meters.`);
    }
}

const parrot = new Bird("Parrot", 2, "Bird");
parrot.move(5);
parrot.fly(20);
```

**Polymorphism:**
Polymorphism allows objects to be treated as instances of their parent class rather than their actual class.

```typescript
class Fish extends Animal {
    swim(distance: number) {
        console.log(`${this.name} swam ${distance} meters.`);
    }
}

const fish: Animal = new Fish("Goldfish", 1, "Fish");
fish.move(3); // Calls move method from Animal class
```

### Section 2.4: Generics

**What are Generics?**
Generics provide a way to create reusable components. They allow a type to be a parameter when defining classes, interfaces, and functions.

**Generic Functions:**
```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);
```

**Generic Classes:**
```typescript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;
```

### Section 2.5: Modules and Namespaces

**Modules:**
Modules are files with their own scope. Variables, functions, classes, etc., declared in a module are not visible outside unless explicitly exported.

**Exporting and Importing:**
```typescript
// module.ts
export class MyClass {
    // ...
}

// main.ts
import { MyClass } from './module';
```

**Namespaces:**
Namespaces are a way to organize code in TypeScript. They are used to group related code.

```typescript
namespace MyNamespace {
    export class MyClass {
        // ...
    }
}

let myClassInstance = new MyNamespace.MyClass();
```

### Assignments

1. **Interfaces Assignment**:
   - Define an interface for a `Car` with properties like `make`, `model`, and `year`.
   - Create an object that implements this interface.
   - Extend the `Car` interface to include a method `start()`, and implement it.

2. **Classes Assignment**:
   - Create a class `Person` with properties `name` and `age`, and a method `introduce()`.
   - Create another class `Employee` that extends `Person` and adds a `salary` property and a method `work()`.
   - Instantiate objects of both classes and call their methods.

3. **Generics Assignment**:
   - Write a generic function `reverseArray` that takes an array of any type and returns a new array with the elements in reverse order.
   - Create a generic class `Stack` that allows pushing and popping elements.

### Project 2: Library Management System

**Project Description**:
Create a simple library management system using TypeScript. The system should manage books and patrons, allowing books to be checked out and returned.

**Requirements**:
- Define interfaces for `Book` and `Patron`.
- Create classes that implement these interfaces.
- Implement functionality to check out and return books.
- Handle scenarios such as trying to check out a book that's already checked out.

**Project Steps**:
1. Set up a new TypeScript project.
2. Define interfaces for `Book` and `Patron`.
3. Create classes `Library`, `Book`, and `Patron`.
4. Implement methods for checking out and returning books in the `Library` class.
5. Ensure each class and method has appropriate type annotations.
6. Test your classes and methods with different scenarios to verify they work correctly.

---

That's the end of Module 2. Once you've completed the assignments and project, you'll have a solid understanding of advanced TypeScript concepts. Let me know if you have any questions or need further clarification on any topic!