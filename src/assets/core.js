'use strict';

var main = {
    greetingVisitor: function(){
        const greetingText = document.getElementById("greeting-text");
        let visitorClock = new Date().getHours();
        let visitorMessage = "";

        if(visitorClock <= 12){
            visitorMessage = "Good morning";
        } else if (visitorClock <= 18){
            visitorMessage = "Good afternoon";
        } else {
            visitorMessage = "Good evening";
        }

        greetingText.innerHTML = visitorMessage;
    },
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
    }
};

// Document.Ready
document.addEventListener("DOMContentLoaded", function() {
    main.greetingVisitor();
    main.primaryNavigation();
});