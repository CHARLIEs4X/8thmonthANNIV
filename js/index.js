// ================================
// CARD OPEN / CLOSE
// ================================

(function () {

    const card = document.getElementById("card");
    const open = document.getElementById("open");
    const close = document.getElementById("close");

    if (!card || !open || !close) return;

    open.addEventListener("click", function () {

        card.setAttribute("class", "open-half");

        setTimeout(function () {
            card.setAttribute("class", "open-fully");
        }, 1000);

    });

    close.addEventListener("click", function () {

        card.setAttribute("class", "close-half");

        setTimeout(function () {
            card.setAttribute("class", "");
        }, 1000);

    });

})();


// ================================
// MUSIC
// ================================

window.addEventListener("load", function () {

    const music = document.getElementById("bgmusic");

    if (music) {

        music.volume = 0.45;

        music.play().catch(() => {

            document.body.addEventListener("click", function () {
                music.play();
            }, { once: true });

        });

    }

});


// ================================
// FLOATING HEARTS
// ================================

function createHeart() {

    const heartsContainer = document.querySelector(".hearts");

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 450);


// ================================
// STORY BUTTON
// ================================

const storyBtn = document.getElementById("nextPage");
const storyBook = document.getElementById("storyBook");
const card = document.getElementById("card");

if (storyBtn) {

    storyBtn.onclick = function () {

        // Show story
        storyBook.style.display = "block";

        // Activate story mode
        card.classList.add("story-mode");

        // Remove ALL 3D transformations
        card.style.transform = "none";
        card.style.transformStyle = "flat";
        card.style.perspective = "none";

        storyBook.style.transform = "none";
        storyBook.style.transformStyle = "flat";

        // Make sure every story page is normal
        document.querySelectorAll(".story-page").forEach(page => {

            page.style.transform = "translateY(60px)";
            page.style.backfaceVisibility = "visible";
            page.style.webkitBackfaceVisibility = "visible";
            page.style.transformStyle = "flat";

        });

        // Scroll to story
        setTimeout(function () {

            storyBook.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    };

}

// ================================
// STORY PAGE FADE ANIMATION
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});


// ================================
// INITIAL STORY PAGE STATE
// ================================

document.querySelectorAll(".story-page").forEach(page => {

    page.style.opacity = "0";

    page.style.transform =
        "translateY(60px)";

    page.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(page);

});


// ================================
// END MESSAGE
// ================================

console.log(
    "❤️ Happy 8th Month Anniversary Urvi ❤️"
);
