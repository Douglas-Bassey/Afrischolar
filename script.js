// =====================================
// AOS ANIMATION
// =====================================

AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// =====================================
// NAVBAR SCROLL EFFECT
// =====================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.style.background = "#08182d";
    navbar.style.padding = "12px 0";
  } else {
    navbar.style.background = "rgba(8,24,45,.85)";
    navbar.style.padding = "18px 0";
  }
});

// =====================================
// SMOOTH SCROLL
// =====================================

document.querySelectorAll(".nav-link").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const section = document.querySelector(this.getAttribute("href"));

    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// =====================================
// ACTIVE NAVIGATION
// =====================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
  let current = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// =====================================
// COUNTER
// =====================================

const counters = document.querySelectorAll(".stats h2");

let started = false;

window.addEventListener("scroll", function () {
  const stats = document.querySelector(".stats");

  if (window.scrollY >= stats.offsetTop - 400 && !started) {
    counters.forEach(function (counter) {
      const target = parseInt(counter.innerText);

      let count = 0;

      const update = function () {
        count += Math.ceil(target / 80);

        if (count < target) {
          counter.innerText = count + "+";

          requestAnimationFrame(update);
        } else {
          counter.innerText = target + "+";
        }
      };

      update();
    });

    started = true;
  }
});

// =====================================
// CONTACT FORM
// =====================================

const button = document.querySelector(".contact button");

button.addEventListener("click", function () {
  const name = document.querySelector('input[type="text"]');
  const email = document.querySelector('input[type="email"]');
  const message = document.querySelector("textarea");

  if (name.value === "" || email.value === "" || message.value === "") {
    alert("Please fill in all fields.");

    return;
  }

  alert("Thank you! Your message has been received.");

  name.value = "";
  email.value = "";
  message.value = "";
});

// =====================================
// SCROLL TO TOP BUTTON
// =====================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#0F766E";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

// =====================================
// FOOTER YEAR
// =====================================

const footer = document.querySelector("footer p:last-child");

footer.innerHTML = `© ${new Date().getFullYear()} Afrischolar Discovery. All Rights Reserved.`;
