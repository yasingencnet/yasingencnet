---
title: JSX Arrays and Forms (React Notes - 2)
description: My ReactJS learning journey. I take this notes for myself.
date: 2021-05-12
tags:
  - ReactJS
layout: layouts/post.njk
---

{{ description }}

### Add ReactJS
``` html
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

### Package Installation
Current dependencies and scripts on `package.json` config.
``` js
{
  "scripts": {
    "start": "live-server public",
    "babel": "npx babel src/app.js --out-file=public/scripts/app.js --watch"
  },
  "devDependencies": {
    "@babel/cli": "^7.13.16",
    "@babel/core": "^7.14.0",
    "@babel/preset-env": "^7.14.1",
    "@babel/preset-react": "^7.13.13"
  }
}
```

### HTML File
``` html
<div id="root"></div>
```

### JS
``` jsx
// JSX - JavaScript XML
const root = document.getElementById("root");

const app = {
  title: "Shopping List",
  description: "Best way to create shopping lists.",
  items: ["Meat", "Egg", "Butter", "Milk"]
}

let onFormSubmit = (event) => {
  event.preventDefault();

  let item = event.target.elements.txtItem.value;
  if(item){
    app.items.push(item);
    event.target.elements.txtItem.value = '';
    render();

    console.log(item);
    console.log(app.items);
  }
};

let clearItems = () => {
  app.items = [];
  render();
}

let clearLastItem = () => {
  app.items.pop();
  render();
}

let render = () => {

  let template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.description}</p>
      <ul>
        {app.items.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
      <div>
        <span>Total: {app.items.length}</span>
      </div>
      <hr/>
      <div>
        <button type="button" onClick={clearItems}>Clear All</button>
        <button type="button" onClick={clearLastItem}>Remove Last Item</button>
      </div>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="txtItem"/>
        <button type="submit">Add New Item</button>
      </form>
    </div>
    );

    ReactDOM.render(template, root);
  }

  render();
```
