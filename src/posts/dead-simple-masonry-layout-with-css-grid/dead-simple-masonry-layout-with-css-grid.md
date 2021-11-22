---
title: Dead Simple Masonry Layout With CSS Grid
description: When I renew my website I've made a photo grid on the about page. I decided to explain how you can implement the same layout on your project.
date: 2020-09-25
categories:
  - CSS
tags:
  - CSS
layout: layouts/post.njk
---

{{ description }}

## HTML Layout

``` html
<div class="photo-grid">
    <figure class="span-2">
      <img src="https://picsum.photos/800/600" alt="Picture" loading="lazy">
    </figure>
    <figure >
      <img src="https://picsum.photos/800/600" alt="Picture" loading="lazy">
    </figure>
    <figure class="span-3">
      <img src="https://picsum.photos/800/600" alt="Picture" loading="lazy">
    </figure>
    <figure>
      <img src="https://picsum.photos/800/600" alt="Picture" loading="lazy">
    </figure>
    <figure class="span-2">
      <img src="https://picsum.photos/800/600" alt="Picture" loading="lazy">
    </figure>
    <figure>
      <img src="https://picsum.photos/800/600" alt="Picture" loading="lazy">
    </figure>
</div>
```

`.photo-grid` is our grid wrapper. `<figure>` items grid items. As you can see some items have `.span-2` or `.span-3` classes. This classes makes our layout looks like a masonry.

## SCSS

``` scss
.photo-grid{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
    grid-auto-flow: dense;
    padding: 15px;

    @media screen and (min-width: 768px){
        grid-template-columns: repeat(3, 1fr);
        .span-2 {
          grid-column-end: span 2;
          grid-row-end: span 2;
        }
        .span-3 {
          grid-column-end: span 3;
          grid-row-end: span 4;
        }
    }

    figure{
    position: relative;
    }
    img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    }
}
```

That's all!

## Demo

[Click here for demo](/about)

I copied this layout idea from someone's blog post. I can't remember who is it. Thank you 🙏
