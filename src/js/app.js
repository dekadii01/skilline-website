if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  var sections = document.querySelectorAll("section");
  var currentSection = "";

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  var navLinks = navbar.querySelectorAll("a");
  navLinks.forEach(function (link) {
    link.classList.remove("navbar-active");
  });

  var activeLink = navbar.querySelector('a[href="#' + currentSection + '"]');
  if (activeLink) {
    activeLink.classList.add("navbar-active");
  }
});

// navbar fixed

window.onscroll = function () {
  const header = document.querySelector("nav");
  const fixNav = header.offsetTop;
  // const toTop = document.querySelector("#to-top");

  if (window.scrollY > fixNav) {
    header.classList.add("navbar-fixed");
    // toTop.classList.remove("hidden");
    // toTop.classList.add("block");
  } else {
    header.classList.remove("navbar-fixed");
    // toTop.classList.add("hidden");
    // toTop.classList.remove("block");
  }
};
