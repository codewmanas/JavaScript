# Variables and Data Types in JavaScript

JavaScript, as a dynamic programming language, offers powerful and flexible ways to work with variables and data. This document covers **everything you need to know** about variables and data types in JavaScript.

## 1. Variables in JavaScript

Variables are containers for storing data values. In JavaScript, you can declare variables using three keywords:

### 1.1. `var`
- Introduced in **ES3**.
- Function-scoped.
- Can be redeclared and updated.
- Hoisted (can be used before declaration).

Example:
```javascript
var name = "John";
console.log(name); // Output: John

var name = "Doe"; // Redeclaration allowed
console.log(name); // Output: Doe
```

### 1.2. `let`
- Introduced in **ES6**.
- Block-scoped.
- Cannot be redeclared within the same scope but can be updated.
- Not hoisted like `var` (you cannot use it before declaration).

Example:
```javascript
let age = 25;
console.log(age); // Output: 25

age = 30; // Update allowed
console.log(age); // Output: 30

let age = 35; // Error: Identifier 'age' has already been declared
```

### 1.3. `const`
- Introduced in **ES6**.
- Block-scoped.
- Cannot be updated or redeclared after initialization.
- Must be initialized during declaration.

Example:
```javascript
const PI = 3.14159;
console.log(PI); // Output: 3.14159

PI = 3.14; // Error: Assignment to constant variable
const PI = 3.15; // Error: Identifier 'PI' has already been declared
```

### 1.4. Scope in JavaScript

#### Function Scope
- Variables declared with `var` are accessible within the function in which they are declared.

#### Block Scope
- Variables declared with `let` and `const` are only accessible within the block where they are defined.

Example:
```javascript
{
    let blockScoped = "This is block scoped";
    console.log(blockScoped); // Output: This is block scoped
}

console.log(blockScoped); // Error: blockScoped is not defined
```

### 1.5. Hoisting
- JavaScript moves variable and function declarations to the top of their scope during compilation.
- Variables declared with `var` are hoisted but initialized as `undefined`.
- Variables declared with `let` and `const` are hoisted but not initialized (temporal dead zone).

Example:
```javascript
console.log(a); // Output: undefined
var a = 10;

console.log(b); // Error: Cannot access 'b' before initialization
let b = 20;
```

## 2. Data Types in JavaScript

JavaScript supports both **primitive data types** and **reference data types**.

### 2.1. Primitive Data Types
These are immutable and stored directly in the variable:

1. **String**
   - Represents text data.
   - Declared using single (`'`) or double (`"`) quotes or template literals (`` ` ``).

   Example:
   ```javascript
   let name = 'John';
   let greeting = `Hello, ${name}!`;
   console.log(greeting); // Output: Hello, John!
   ```

2. **Number**
   - Represents numeric values (both integers and floating-point numbers).
   - Supports special values: `Infinity`, `-Infinity`, and `NaN` (Not-a-Number).

   Example:
   ```javascript
   let num = 42;
   let pi = 3.14;
   console.log(num + pi); // Output: 45.14
   ```

3. **BigInt**
   - Represents integers larger than `Number.MAX_SAFE_INTEGER`.
   - Declared by appending `n` to the number.

   Example:
   ```javascript
   let bigNumber = 123456789012345678901234567890n;
   console.log(bigNumber); // Output: 123456789012345678901234567890n
   ```

4. **Boolean**
   - Represents logical values: `true` or `false`.

   Example:
   ```javascript
   let isActive = true;
   console.log(isActive); // Output: true
   ```

5. **Undefined**
   - A variable declared but not assigned a value.

   Example:
   ```javascript
   let uninitialized;
   console.log(uninitialized); // Output: undefined
   ```

6. **Null**
   - Represents an intentional absence of value.

   Example:
   ```javascript
   let empty = null;
   console.log(empty); // Output: null
   ```

7. **Symbol**
   - A unique and immutable identifier.

   Example:
   ```javascript
   let sym = Symbol('description');
   console.log(sym); // Output: Symbol(description)
   ```

### 2.2. Reference Data Types
These are mutable and stored as references (pointers to memory locations):

1. **Object**
   - Used to store collections of data and more complex entities.

   Example:
   ```javascript
   let person = {
       name: 'John',
       age: 30
   };
   console.log(person.name); // Output: John
   ```

2. **Array**
   - An ordered collection of values (can contain mixed data types).

   Example:
   ```javascript
   let fruits = ['Apple', 'Banana', 'Cherry'];
   console.log(fruits[1]); // Output: Banana
   ```

3. **Function**
   - A block of reusable code.

   Example:
   ```javascript
   function greet() {
       console.log('Hello, World!');
   }
   greet(); // Output: Hello, World!
   ```

### 2.3. Type Conversion
JavaScript can convert values between types automatically (**type coercion**) or explicitly.

#### Implicit Conversion
```javascript
let result = '5' + 2;
console.log(result); // Output: 52 (string concatenation)
```

#### Explicit Conversion
```javascript
let num = Number('42');
console.log(num); // Output: 42
```

### 2.4. Checking Data Types
Use the `typeof` operator:

Example:
```javascript
console.log(typeof 'Hello'); // Output: string
console.log(typeof 42);      // Output: number
console.log(typeof true);    // Output: boolean
console.log(typeof {});      // Output: object
console.log(typeof null);    // Output: object (quirk of JavaScript)
console.log(typeof undefined); // Output: undefined
```

---
