let isDone: boolean = false;
const pi: number = 3.14;
let color: string = "blue";
let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 42];
enum Direction { Up, Down, Left, Right }
let direction: Direction = Direction.Up;
let notSure: any = 4;
notSure = "maybe a string instead";

console.log("isDone:", isDone);
console.log("pi:", pi);
console.log("color:", color);
console.log("numbers:", numbers);
console.log("tuple:", tuple);
console.log("direction:", direction);
console.log("notSure:", notSure);