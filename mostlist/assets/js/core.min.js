"use strict";

var main = {
    init: function () {
        AOS.init({
            duration: 1000,
            once: true
        });

        // Fancybox
        $(document).on("afterLoad.fb", function () {
            $(".fancybox-content").css("padding-right", $("body").css("margin-right"));
        });

        // Print Page
        $("[data-print]").on({
            click: function(){
                window.print();
            }
        });
    },
    ieDetection: function () {
        if (navigator.userAgent.indexOf('MSIE') !== -1
            || navigator.appVersion.indexOf('Trident/') > -1) {
            $("html").addClass("browser-ie");
        }
    },
    themeSwitcher: function () {
        var themeButton = $(".js-theme-switch");
        themeButton.on({
            click: function () {
                var currentTheme = $("html").attr("data-theme");
                var desiredTheme = currentTheme === "light" ? "dark" : "light";

                localStorage.setItem('data-theme', desiredTheme);
                $("html").attr("data-theme", desiredTheme);
                $(".text", themeButton).html(currentTheme + " Mode");
            }
        });
        var themeStatus = localStorage.getItem('data-theme'),
            nextStatus = themeStatus === "light" ? "dark" : "light";
        if (themeStatus !== null) {
            $("html").attr("data-theme", themeStatus);
            $(".text", themeButton).html(nextStatus + " Mode");
        }
    },
    sidebarThings: function () {
        $(".button-nav").on({
            click: function () {
                $(".sidebar").toggleClass("d-none is-active");
                $("html, body").toggleClass("is-locked");
            }
        });
    },
};

$(function () {
    main.init();
    main.ieDetection();
    main.themeSwitcher();
    main.sidebarThings();
});