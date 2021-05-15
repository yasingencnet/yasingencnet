---
title: Differences Between Const, Var and Let
description: My notes about const, var and let. Not a guide. Just notes.
date: 2021-05-13
tags:
  - JavaScript
layout: layouts/post.njk
---

{{ description }}

### Var

``` js
var myName = 'Yasin';
console.log(myName);
```
You will see **Yasin** output in console.

``` js
var myName = 'Yasin';
myName = 'Dmitry';
console.log(myName);
```
You will see **Dmitry** output in console because we changed value of the variable.

``` js
var myName = 'Yasin';
var myName = 'Dmitry';
console.log(myName);
```
You will see **Dmitry** output in console because. You can redeclarate.

``` js
var myName = 'Yasin';
function logMyName() {
  console.log(myName);
};
logMyName();
```
In this example you will see **Yasin** output in console. You can reach variable even you in a scope.

``` js
var myName = 'Yasin';
function logMyName() {
  var myName = 'Dmitry';
  console.log(myName);
};
logMyName();
```
In this example you will see **Dmitry** output in console. You can reach variable in a scope and change it value.

---

### Let

``` js
let myName = 'Yasin';
let myName = 'Dmitry';
console.log(myName);
```
Redeclaration is not possible. This will throw an error.

---

### Const

``` js
const myName = 'Yasin';
myName = 'Dmitry';
console.log(myName);
```
Can't change the value of the const. This will throw an error.
