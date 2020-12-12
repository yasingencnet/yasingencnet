---
title: Understanding JavaScript Callbacks
description: Callbacks are fundamental to asynchronous coding in JavaScript. In this post we try to understand callbacks with several examples.
date: 2020-12-12
categories:
  - JavaScript
tags:
  - JavaScript
layout: layouts/post.njk
---

{{description}}

## setTimeout
``` js
let logCallback = function(){
    console.log("logCallback function was called back.");
}
setTimeout(logCallback, 3000);

// or

setTimeout(function(){
    console.log("The function was called back.")
}, 3000);
```

## Event Listeners
``` html
<button type="button" id="my-button">CLICK HERE</button>
```
``` js
let myButton = document.getElementById("my-button");
myButton.addEventListener("click", function(){
    console.log("My Button was clicked.");
});
```

## Create Your Own Callback

You may choose to create your own callback. We've been using some functions available in JavaScript that accept callbacks as a parameter.
``` js
let people = [
    {name: "Yasin", age: 27, city: "Istanbul"},
    {name: "Natalia", age: 24, city: "Lutsk"},
    {name: "Json", age: 32, city: "Columbus"},
    {name: "Stefan", age: 29, city: "Istanbul"},
    {name: "Pimmy", age: 35, city: "Bangkok"},
    {name: "Rose", age: 37, city: "Novosibirsk"},
    {name: "Melis", age: 35, city: "Istanbul"},
    {name: "Linda", age: 19, city: "Birmingham"},
];

let processPeople = function(data, callback){
    for(let i = 0; i < data.length; i++){
        if(data[i].age < 30){
            if(typeof callback === "function"){
                callback(data[i]);
            }
        }
    }
}
```

``` js
//  Retrieve people from array who is younger than 30 years old.
processPeople(people, function(obj){
    console.log(obj)
});

//  Retrieve people from array who is younger than 30 years old & who lives in Istanbul
processPeople(people, function(obj){
    if (obj.city == "Istanbul"){
        console.log(obj)
    }
});

// Calculate age total + person count.
let determineTotal = function(){
    let ageTotal = 0,
        personCount = 0;

    processPeople(people, function(obj){
        ageTotal = ageTotal + obj.age;
        personCount++;
    });

    console.log("Age Total: " + ageTotal);
    console.log("Person Count: " + personCount);
}

determineTotal();
```

---
I wrote this blog post for consolidate my knowledge.
Main Source: https://www.youtube.com/watch?v=Nau-iEEgEoM
