---
title: Getting Started (React Notes - 1)
description: My ReactJS learning journey. I take these notes for myself.
date: 2021-05-10
tags:
  - ReactJS
layout: layouts/post.njk
---

{{ description }}

### Live Server Installation
Install live server globally on your computer. You won't want to refresh page manually on every change.
``` js
npm i -g live-server
```

***
### Hello React!

Add ReactJS with CDN links to your new shiny project. We just want to write 'Hello React' on page.
``` html
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

Create template element.
``` html
<div id="root"></div>
```

``` js
// JSX - JavaScript XML
let root = document.getElementById("root");

// JSX Syntax
// let template = <h1>Hello React! First App</h1>

// Compiled Original Syntax
let template = React.createElement(
    'h1',
    null,
    'Hello React! First App'
);

// ReactDOM
ReactDOM.render(template, root);
```

***
## Babel Installation & Usage
We need Babel to use modern JavaScript features. Create package.json file. Install cli and presets. Configure babel and run commands.

1. Create `package.json` and install babel packages locally.
``` js
npm init -y
npm install --save-dev @babel/core @babel/cli
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/preset-react
```

2. Create `.babelrc` file
``` js
{
"presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

3. Create Folder Structure
``` text
-public
    -scripts
        -app.js
-index.html
-src
    -app.js
```


4. `package.json` Scripts
``` js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "live-server public",
  "babel": "npx babel src/app.js --out-file=public/scripts/app.js --watch"
}
```

5. Run commands on Terminal
 ``` js
 npm run start
 npm run babel
 ```

***
## JSX Expressions
``` jsx
// JSX - JavaScript XML
let root = document.getElementById("root");


let product = {
  name: "Huawei P20 Pro",
  price: {
  value: 5000,
  currency: "USD"
  },
  stock: false
};

function formatPrice(p) {
  return p.price.value + ' ' + p.price.currency;
}

let productCard = (
<div>
  <h1>Name: {product.name}</h1>
  <p>Price: {formatPrice(product)}</p>
  <p>Stock: {product.stock ? "VAR" : "YOK"}</p>
</div>
);

// ReactDOM
ReactDOM.render(productCard, root);
```

***
## Conditional Statements
``` jsx
// JSX - JavaScript XML
let root = document.getElementById("root");

let product = {
  name: "Huawei P20 Pro",
  price: {
  value: 12000,
  currency: "GBP"
  },
  description: "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, color spectrum",
  stock: false,
  colors: ["red", "green", "blue"]
};

function getDescription(description) {
if(description){
  return <p>Description: {description}</p>;
} else{
    return 'no desc';
  }
};

let productCard = (
<div>
  <h1>Name: {product.name}</h1>
  {(product.price.value && product.price.value>5000) && <p>Price: {product.price.value}</p>}
  <p>Stock: {product.stock ? "VAR" : "YOK"}</p>
  {getDescription(product.description)}
  {(product.colors.length>0 ? "There are options" : "no options")}
</div>
);

// ReactDOM
ReactDOM.render(productCard, root);
```

***
## Events & Data Binding
``` jsx
// JSX - JavaScript XML
let root = document.getElementById("root");

let number = 0;
let btnAddClass = "button-increase";
let btnDecreaseClass = "button-decrease";

let addOne = () => {
    number++;
    renderApp();
}
let removeOne = () => {
    number--;
    renderApp();
}

function renderApp() {
    let template = (
        <div>
            <h1>Number: {number}</h1>
            <button type="button" id="increase" className={btnAddClass} onClick={addOne}>+1</button>
            <button type="button" id="decrease" className={btnDecreaseClass} onClick={removeOne}>-1</button>
        </div>
    );

    ReactDOM.render(template, root);
}

function tick() {
    var element = (
        <div>
            <h2>time is {new Date().toLocaleTimeString()}</h2>
        </div>
    );

    ReactDOM.render(element, root);
}
setInterval(tick, 1000);
```
