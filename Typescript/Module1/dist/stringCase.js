"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringCase = void 0;
function stringCase(str, upper) {
    if (upper) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
}
exports.stringCase = stringCase;
