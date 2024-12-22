# Functions and Methods in JavaScript

## Table of Contents
1. [Introduction](#introduction)
2. [Functions](#functions)
    - [Function Declaration](#function-declaration)
    - [Function Expression](#function-expression)
    - [Arrow Functions](#arrow-functions)
    - [Parameters and Arguments](#parameters-and-arguments)
    - [Return Statement](#return-statement)
    - [Function Scope](#function-scope)
    - [Hoisting](#hoisting)
3. [Methods](#methods)
    - [Defining Methods](#defining-methods)
    - [Calling Methods](#calling-methods)
    - [This Keyword](#this-keyword)
4. [Higher-Order Functions](#higher-order-functions)
5. [Built-in Methods](#built-in-methods)
6. [Conclusion](#conclusion)

## Introduction
Functions and methods are fundamental concepts in JavaScript that allow you to encapsulate code for reuse, organization, and modularity. This guide covers everything you need to know about functions and methods in JavaScript.

## Functions

### Function Declaration
A function declaration defines a named function. It consists of the `function` keyword, followed by the name of the function, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.

```javascript
function greet(name) {
     return `Hello, ${name}!`;
}
```

### Function Expression
A function expression defines a function as part of a larger expression, typically assigning it to a variable.

```javascript
const greet = function(name) {
     return `Hello, ${name}!`;
};
```

### Arrow Functions
Arrow functions provide a shorter syntax for writing functions. They are always anonymous and do not have their own `this` context.

```javascript
const greet = (name) => `Hello, ${name}!`;
```

### Parameters and Arguments
Parameters are variables listed as part of the function definition. Arguments are the actual values passed to the function when it is invoked.

```javascript
function add(a, b) {
     return a + b;
}

add(2, 3); // 5
```

### Return Statement
The `return` statement ends function execution and specifies a value to be returned to the function caller.

```javascript
function multiply(a, b) {
     return a * b;
}

const result = multiply(2, 3); // 6
```

### Function Scope
Functions in JavaScript have their own scope. Variables declared within a function are not accessible outside the function.

```javascript
function scopeExample() {
     let localVar = 'I am local';
     console.log(localVar);
}

scopeExample(); // I am local
console.log(localVar); // ReferenceError: localVar is not defined
```

### Hoisting
Function declarations are hoisted to the top of their containing scope. This means you can call a function before it is defined.

```javascript
console.log(hoistedFunction()); // Works!

function hoistedFunction() {
     return 'This function is hoisted!';
}
```

## Methods

### Defining Methods
Methods are functions that are properties of an object. They are defined within the object.

```javascript
const person = {
     name: 'Alice',
     greet: function() {
          return `Hello, my name is ${this.name}`;
     }
};
```

### Calling Methods
Methods are called using the dot notation.

```javascript
person.greet(); // Hello, my name is Alice
```

### This Keyword
The `this` keyword refers to the object that is calling the method.

```javascript
const person = {
     name: 'Alice',
     greet: function() {
          return `Hello, my name is ${this.name}`;
     }
};

person.greet(); // Hello, my name is Alice
```

## Higher-Order Functions
Higher-order functions are functions that take other functions as arguments or return functions as their result.

```javascript
function higherOrderFunction(callback) {
     return callback();
}

function sayHello() {
     return 'Hello!';
}

higherOrderFunction(sayHello); // Hello!
```

## Built-in Methods
JavaScript provides several built-in methods for different data types, such as arrays, strings, and objects.

```javascript
const arr = [1, 2, 3];
arr.forEach(num => console.log(num)); // 1 2 3

const str = 'Hello';
console.log(str.toUpperCase()); // HELLO
```

## Conclusion
Functions and methods are essential for writing modular and reusable code in JavaScript. Understanding their syntax, behavior, and scope will help you write more efficient and organized code.