---
title: Why I Use RGB Instead of HEX?
description: We used HEX colors for years in CSS, but It's time to replace them with RGB
date: 2020-09-25
categories:
    - CSS
tags:
  - CSS
layout: layouts/post.njk
---

Hex, rgb and hsl are just three different ways of defining a color. RGB and HSL has Alpha channel. So you can define opacity without creating new color variable.

## Example of Colors

``` css
// HEX
color: #0099ff;
```

``` css
// RGB
color: rgb(0,153,255);
```

``` css
// HSL
color: hsl(204,100%,50%)
```

## Opacity!

Defining `opacity` is my main reason to switch RGB from HEX. Let me show with a basic example.

``` css
// HEX
--color-primary: 0,153,255;

.element{
    background-color: rgb(var(--color-primary));
}
```
<div style="background-color: rgb(0,153,255);">Hello World!</div>

Now let's add some opacity.

``` css
// HEX
--color-primary: 0,153,255;

.element{
    background-color: rgba(var(--color-primary), .5);
}
```
<div style="background-color: rgba(0,153,255, .5);">Hello World!</div>

### Pros
* Defining only one color variable is enough to control all opacity levels.
* Can control each parameter (red, green, and blue).
* Tone selection is easier than hex.
### Cons
* Hard to read colors.

## What About HSL?
HSL is human friendly version of RGB. I could choose HSL, but I'm okay with RGB for now.
