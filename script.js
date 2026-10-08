/* =========================================
   BIRTHDAY SURPRISE
========================================= */


/* =========================================
   PERSONAL INFORMATION
========================================= */

const birthdayPerson = "My Love ❤️";


/* =========================================
   SET NAME
========================================= */

document.getElementById("personName").textContent =
    birthdayPerson;

document.getElementById("finalName").textContent =
    birthdayPerson;


/* =========================================
   SCREEN NAVIGATION
========================================= */

function nextScreen(number) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });


    const next =
        document.getElementById(
            "screen" + number
        );


    if (next) {

        next.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =========================================
   OPEN GIFT
========================================= */

function openGift() {

    const gift =
        document.getElementById("giftBox");

    const hint =
        document.getElementById("giftHint");


    gift.style.transform =
        "scale(0.8) rotate(8deg)";


    hint.textContent =
        "✨ Opening your surprise...";


    setTimeout(function() {

        createConfetti();

        createLotsOfHearts();

        nextScreen(7);

    }, 900);

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );


    for (let i = 0; i < 120; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add(
            "confetti"
        );


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        piece.style.transform =
            "rotate(" +
            Math.random() * 360 +
            "deg)";


        container.appendChild(
            piece
        );


        setTimeout(function() {

            piece.remove();

        }, 4500);

    }

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.classList.add(
        "heart"
    );


    const hearts = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "💓",
        "✨"
    ];


    heart.textContent =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.animationDuration =
        (4 + Math.random() * 5) +
        "s";


    heart.style.fontSize =
        (15 + Math.random() * 25) +
        "px";


    document
        .getElementById(
            "hearts-container"
        )
        .appendChild(
            heart
        );


    setTimeout(function() {

        heart.remove();

    }, 10000);

}


/* =========================================
   CONTINUOUS HEARTS
========================================= */

setInterval(
    createHeart,
    900
);


/* =========================================
   EXTRA HEARTS
========================================= */

function createLotsOfHearts() {

    for (
        let i = 0;
        i < 30;
        i++
    ) {

        setTimeout(
            function() {

                createHeart();

            },
            i * 100
        );

    }

}


/* =========================================
   RESTART
========================================= */

function restartSurprise() {

    nextScreen(1);

}