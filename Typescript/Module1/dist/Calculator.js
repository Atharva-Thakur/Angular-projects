"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    if (b == 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
function Calculator(a, o, b) {
    switch (o) {
        case "+": return add(a, b);
        case "-": return sub(a, b);
        case "*": return mul(a, b);
        case "/": return div(a, b);
        default: throw new Error("Invalid operation");
    }
}
exports.Calculator = Calculator;
