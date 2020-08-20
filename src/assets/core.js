'use strict';

var main = {
    primaryNavigation: function(){
        const primaryNavButton = document.getElementById("js-primary-button"),
            primaryNav = document.getElementById("js-primary-nav");

        primaryNavButton.onclick = function(){
            togglePrimaryNav();
        }
        function togglePrimaryNav(){
            if(primaryNav.classList.contains("is-active")){
                primaryNav.classList.remove("is-active")
            } else{
                primaryNav.classList.add("is-active")
            }
        }
    },
    worksAjax: function(){

        let request = new XMLHttpRequest();

        request.open('GET', 'assets/ajax/work.json', true);

        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                let data = JSON.parse(this.response);
                const moreButton = document.getElementById('button-load-work');
                const moreContainer = document.getElementById('work');
                let currentIndex = 0;

                function loadMore(){
                    let maxResults = 1;

                    if(currentIndex >= data.length){
                        moreButton.disabled = true;
                        return false;
                    }

                    for(let i = 0; i < maxResults; i++){
                        let work = data[i + currentIndex];

                        let markup = `
                            <figure class="work__figure" style="background-color:${work.bgColor};">
                                <a href="${work.url}" target="_blank" rel="noreferrer">
                                <picture>
                                    <source srcset="${work.figure.img}.webp" type="image/webp">
                                    <source srcset="${work.figure.img}.jpg" type="image/jpeg">
                                    <img src="${work.figure.img}.jpg" alt="${work.title}" loading="lazy" width="${work.figure.width}" height="${work.figure.height}">
                                </picture>
                                </a>
                            </figure>
                            <div class="work__caption">
                                <h4 class="work__title">${work.title}</h4>
                                <p class="work__description">${work.description}</p>
                                <a class="work__cta" href="${work.url}">Project Details</a>
                            </div>
                        `;

                        let node = document.createElement('div');
                        node.classList.add("work__item");
                        node.innerHTML = markup;
                        moreContainer.appendChild(node);
                    }

                    currentIndex += maxResults;
                }

                loadMore();
                moreButton.onclick = function(){
                    loadMore();
                }
            } else {
                // We reached our target server, but it returned an error
            }
        };

        request.onerror = function() {
            // There was a connection error of some sort
        };

        request.send();

    },
};

// Document.Ready
document.addEventListener("DOMContentLoaded", function() {
    main.primaryNavigation();
});