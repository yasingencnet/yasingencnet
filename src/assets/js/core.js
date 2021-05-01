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
  },
  todaysDate: function (date){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = dd + '.' + mm + '.' + yyyy;

    return today;
  }
};


// Document.Ready
document.addEventListener("DOMContentLoaded", function() {
  main.primaryNav();
});
