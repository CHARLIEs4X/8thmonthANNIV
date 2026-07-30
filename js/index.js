// ================================
// CARD OPEN / CLOSE
// ================================

(function () {

    var card = document.getElementById("card");
    var open = document.getElementById("open");
    var close = document.getElementById("close");

    open.addEventListener("click", function () {

        card.setAttribute("class", "open-half");

        if (card.className === "open-half") {

            setTimeout(function () {
                card.setAttribute("class", "open-fully");
            }, 1000);

        }

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

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heart.style.animationDuration = (5 + Math.random() * 6) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 450);


// ================================
// STORY BUTTON
// ================================

const storyBtn = document.getElementById("nextPage");

if (storyBtn) {

    storyBtn.onclick = function () {

        document.getElementById("storyBook").style.display = "block";

        document.getElementById("storyBook").scrollIntoView({

            behavior: "smooth"

        });

    };

}


// ================================
// PHOTO FADE ANIMATION
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

document.querySelectorAll(".story-page").forEach(page => {

    page.style.opacity = 0;
    page.style.transform = "translateY(60px)";
    page.style.transition = "1s";

    observer.observe(page);

});


// ================================
// END MESSAGE
// ================================

console.log("❤️ Happy 8th Month Anniversary Urvi ❤️");
