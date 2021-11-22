---
title: How to Display Instagram Posts on Your Website?
description: We're fetching (scraping) data from Instagram and inserting it into HTML.
date: 2020-09-27
categories:
    - JavaScript
tags:
  - JavaScript
layout: layouts/post.njk
---

We're basically fetching (scraping) data from Instagram (https://www.instagram.com/username/?__a=1) and insert it into HTML. Dirty but simple solution to show your Instagram posts on your website.

## HTML
``` html
<div class="gallery" id="gallery"></div>
```

## JavaScript
``` js
let request = new XMLHttpRequest();
request.open('GET', 'https://www.instagram.com/username/?__a=1', true);
request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        let dataSource = JSON.parse(this.response);
        let galleryContainer = document.getElementById("gallery");
        for(let i = 0; i < 3; i++){
            let data = dataSource.graphql.user.edge_owner_to_timeline_media.edges[i].node;

            let markup = `
                <figure class="gallery__item">
                    <a href="https://www.instagram.com/p/${data.shortcode}/" target="_blank" rel="noreferrer">
                        <span class="gallery__like">${data.edge_liked_by.count}</span>
                        <img src="${data.thumbnail_src}" alt="${data.accessibility_caption}" loading="lazy">
                    </a>
                </figure>
            `;

            galleryContainer.insertAdjacentHTML('beforeend', markup);
        }
    } else {
        // We reached our target server, but it returned an error
    }
};
request.onerror = function() {
    // There was a connection error of some sort
};
request.send();
```

This method might not work in the future. Take a look at the Instagram API page for best solution.
