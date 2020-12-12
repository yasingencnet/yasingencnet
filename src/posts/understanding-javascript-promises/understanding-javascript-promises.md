---
title: Understanding JavaScript Promises
description: Many people struggle with understand how Promises work (including me). Promises are fundamental to asynchronous coding in JavaScript. In this post we try to understand promises with basic examples.
date: 2020-12-13
categories:
  - JavaScript
tags:
  - JavaScript
layout: layouts/post.njk
---

## What are JavaScript promises?
{{description}}

## Basic Example
``` js
let testPromise = new Promise((resolve, reject) =>{
    let a = 1 + 1;
    if (a == 2){
        resolve("Success")
    } else {
        reject("Fail")
    }
});

testPromise.then((result) => {
    console.log("This is then: " + result);
}).catch((result) => {
    console.log("This is catch: " + result);
});
```

## Moderate Example
``` js
const userLeft = false;
const userWatchingMeme = true;

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft){
            reject({
            name: "User Left",
            message: "Farawell! :("
            })
        } else if(userWatchingMeme){
           reject({
           name: "User busy with memes",
           message: "Let's wait her :/"
           })
       } else {
           resolve("My dear friend! You're here ♥");
       }
    })
};

watchTutorialPromise().then((message) => {
    console.log("Success: " + message)
}).catch((error) => {
    console.log(error.name + " " + error.message);
});
```

## Promise.all()
``` js
const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve("Video 3 Recorded");
});

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
});

// With setTimeout

const promise1 = new Promise((resolve, reject) => {
  resolve(1);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve(2), 100);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve(3), 100);
});
Promise.all([
    promise1,
    promise2,
    promise3
]).then((messages) => {
    console.log("All Resolved. " + messages);
});
```

## Promise.race()
``` js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve(2), 100);
});
const promise2 = new Promise((resolve, reject) => {
  resolve(1);
});
Promise.race([
    promise1,
    promise2
]).then((res) => {
    console.log(res);
})
```
