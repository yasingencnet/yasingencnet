---
title: JavaScript Interview Questions
description: A Guide to most asked JavaScript interview questions.
date: 2021-12-01
tags:
  - JavaScript
layout: layouts/post.njk
---

{{ description }}

1. What are the differences between variables created using `let`, `var` and `const`?
2. What's the difference between a variable that is: `null`, `undefined` or `undeclared`?
3. What's the difference between `==` and `===`?
4. What are the differences between `cookies`, `local storage`, and `session storage`?
5. What are `data types` in JavaScript?
6. What is Ecmascript? Differences between `ES5` and `ES6` ?
7. What is `hoisting` in JavaScript?
8. What is the `strict mode` mode in JavaScript?

---

## 1. What are the differences between variables created using `let`, `var` and `const`?

`let` and `const` are came with ES6 (Ecmascript 2015). Why we need them? What is the difference between them and `var`?

- `undefined` is a default value for `var` and `let`.
- `var` can be function scoped and globally scoped.
- `var` variables can be re-declared and updated.
- `var` and `let`can be declared without being initialized, const must be initialized during declaration.
- `let` variables can't be re-declared but updated.
- `let` and `const` are block scoped.
- `const` variables are immutable. They can't be re-declared or updated.

###### Variable Declaration
``` js
var fruit; // variable declaration
console.log(fruit); // undefined
```

###### Global Scope
``` js
var note = "Buy a bread and some cookies!"; // This is a global scope variable.

function readMyNote(){
  console.log(note);
}
readMyNote(); // Buy a bread and some cookies!
```

###### Function Scope
``` js
function readMyNote(){
  var note = "Buy a bread and some cookies!"; // This is a function scope variable.
  return note;
}
readMyNote(); // Buy a bread and some cookies!
console.log(note); // Uncaught ReferenceError: note is not defined
```

###### Block Scope
``` js
var a = 10;
{
  let b = 20; // This is block scope.
  console.log(b); // 20
}
console.log(a); // 10
console.log(b); // Uncaught ReferenceError: note is not defined
```

---

## 2. What's the difference between a variable that is: `null`, `undefined` or `undeclared`?

- A variable is `undeclared` if it's not declared. This variable is not exist.
- A variable is `undefined` if it hasn't been assigned a value. This variable is exist.
- Null is a data type and a type of object.

###### Undeclared
``` js
console.log(x); // Uncaught ReferenceError: r is not defined
```

###### Undefined
``` js
let y;
console.log(y); // undefined
```

###### Null
``` js
let z = null;
console.log(z); // null
```

---

## 3. What's the difference between `==` and `===`?

- Double equals (==) is a comparison operator.
- Triple equals (===) is a **strict equality** comparison operator.
- Triple equals (===) checks that two values are same or not. (eg: string vs string). The values must be equal in type as well.

``` js
0 == false   // true
0 === false  // false, because they are of a different type
1 == "1"     // true, automatic type conversion for value only
1 === "1"    // false, because they are of a different type
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
```

---

## 4. What are the differences between `cookies`, `local storage`, and `session storage`?

- **Cookies** can be stored in browser and server.
- If you want to control from backend use `cookies`.
- Expires.

&nbsp;

- **Local Storage** can be stored only in browser.
- Never expire until deleted.
- No data transfer to backend.

&nbsp;

- **Session Storage** Expires when you closed the tab or window.
- No data transfer to backend.

<div class="table-responsive">
    <table class="table table-striped table-hover table-bordered">
        <thead>
        <tr>
            <th></th>
            <th>Cookies</th>
            <th>Local storage</th>
            <th>Session storage</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th class="text-right">Capacity</th>
            <td>4KB</td>
            <td>10MB</td>
            <td>5MB</td>
        </tr>
        <tr>
            <th class="text-right">Accessible from</th>
            <td>Any window</td>
            <td>Any window</td>
            <td>Same tab</td>
        </tr>
        <tr>
            <th class="text-right">Expiration</th>
            <td>Manually set</td>
            <td>Never</td>
            <td>On tab close</td>
        </tr>
        <tr>
            <th class="text-right">Storage location</th>
            <td>Browser and server</td>
            <td>Browser only</td>
            <td>Browser only</td>
        </tr>
        <tr>
            <th class="text-right">Sent with requests</th>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
        </tr>
        <tr>
            <th class="text-right">Blockable by users</th>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        <tr>
            <th class="text-right">Editable by users</th>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        </tbody>
    </table>
</div>

---

## 5. What are `data types` in JavaScript?

There are total 7 data types in JavaScript.

1. Number
2. String
3. Boolean
4. Object
5. Undefined
6. Null
7. Symbol

---

## 6. What is Ecmascript? Differences between `ES5` and `ES6` ?

ECMAScript is a trademarked scripting language specification that is defined by ECMA International.

We have new features like;

- Template Literals
- Arrow functions
- Scoping
- Internationalization
- Localization

and more.

---

## 7. What is `hoisting` in JavaScript?

Variables, classses and functions can be used before they're declared. This behavior called hoisting.

---

## 8. What is the strict mode in JavaScript?

It's a way to better error checking into your code. You can enable strict mode by adding `use strict` at the beginning of a file.


