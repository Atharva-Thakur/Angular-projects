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

console.log(user.greet());
