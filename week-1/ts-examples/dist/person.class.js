"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var myName = new Person("Caitlynne", "Johnson");
console.log("My name is ".concat(myName.firstName, " ").concat(myName.lastName));
