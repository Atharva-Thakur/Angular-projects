"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function add(a, b) {
    return a + b;
}
exports.add = add;
let myAdd = (x, y) => { return x + y; };
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
