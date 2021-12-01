---
title: JavaScript Format Numbers as Currency Strings
description: As you know, JS has built-in objects. The ES6 Internationalization API helps us format numbers as currency strings.
date: 2021-12-02
tags:
  - JavaScript
layout: layouts/post.njk
---

{{ description }}

The `Intl.NumberFormat` object helps us here. Let's start with a basic example. Don't forget to check [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) for more details.

``` js
const number = 1250.00;

let amountUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number); // United States
let amountEUR = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number); // Germany
let amountTRY = new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(number); // Turkey

console.log(amountUSD); // Output: $1,250.00
console.log(amountEUR); // Output: 1.250,00 €
console.log(amountTRY); // Output: ₺1.250,00
```

That's nice. All vanilla JS. Let's try another option.

``` js
const number = 1250.00;
let amountTRY = new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', currencyDisplay: 'name' }).format(number); // Turkey
console.log(amountTRY); // Output: ₺123.456,00 Türk lirası
```

Here we added the `currencyDisplay` option. And output became `₺123.456,00 Türk lirası`.


