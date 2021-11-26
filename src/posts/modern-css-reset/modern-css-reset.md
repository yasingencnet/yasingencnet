---
title: Modern CSS Reset
description: This most modern CSS reset yet is the first file you have to copy to your project
date: 2021-11-26
tags:
  - CSS
layout: layouts/post.njk
---

{{ description }}

For a long time, I used Eric Meyer’s [CSS Reset](https://meyerweb.com/eric/tools/css/reset/) and Andy Bell's [Modern CSS Reset](https://github.com/hankchizljaw/modern-css-reset). Today I saw Joshua Comeau's [Custom CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) blog post on Twitter. I decided to keep the best parts of these resets and create my own style file. I replaced my reset.css with this new one.

``` css
*, *::before, *::after {
  box-sizing: border-box;
}

body, h1, h2, h3, h4, h5, h6, p, li, figure, figcaption, blockquote, dl, dd {
  margin: 0;
}

ul[class],
ol[class] {
  padding-left: 0;
  list-style: none;
}

html{
  font-size: 62.5%;
}

html:focus-within {
  scroll-behavior: smooth;
}

html, body {
  height: 100%;
}

body {
  min-height: 100vh;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

table {
  border-collapse: collapse;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
