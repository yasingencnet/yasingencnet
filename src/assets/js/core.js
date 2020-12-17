"use strict";

let main = {
  primaryNav: function(){
    const primaryNavButton = document.getElementById("js-primary-button"),
      primaryNav = document.getElementById("js-primary-nav");

    primaryNavButton.onclick = function(){
      togglePrimaryNav();
      window.navigator.vibrate([200, 100, 200]);
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
  main.primaryNav();
});
