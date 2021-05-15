---
title: JavaScript ES6 Classes
description: Classes are a template for creating objects. They encapsulate data with code to work on that data.
date: 2021-05-15
tags:
  - JavaScript
layout: layouts/post.njk
---

{{ description }}

### ES5 Class Declaration
``` js
var Person = function () {

}
```

### ES6 Class Declaration
``` js
class Person {

}
```

---

``` js
class Person {
    constructor(name = 'Guest', surname = 'Guest', birthday) {
        this.name = name;
        this.surname = surname;
        this.birthday = birthday;
    }
    greeting(text){
        return `${text} I'm ${this.name}`;
    }
}
```

``` js
const person1 = new Person("Yasin", "Genc", 1993);
console.log(person1);
console.log(person1.greeting("Good Morning"));
```

``Guest`` is our default value.

Here we're creating ``Student`` class from ``Person`` class. ``super`` calls the parent constructor.
``` js
class Student extends Person {
    constructor(name, surname, birthday, studentNumber) {
    super(name, surname, birthday);
        this.studentNumber = studentNumber;
    }
    greeting(text) {
        let str = super.greeting(text);
        str += `My number is ${this.studentNumber}`;
        return str;
    }
}
```

``` js
const student1 = new Student("Linda", "Schiffer", 2008, "123456");
console.log(student1);
console.log(student1.greeting("Hello"));
```
