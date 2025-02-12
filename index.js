const hearts = document.querySelectorAll(".hearts img");

let clickCount = 0;

var triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });

hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
        heart.style.visibility = "hidden";
        confetti({
            particleCount: 60,
            spread: 45,
            scalar: 1.5,
            shapes: [triangle],
            origin: {
                x: heart.getBoundingClientRect().left / window.innerWidth,
                y: heart.getBoundingClientRect().top / window.innerHeight,
            },
            colors: ["#ffaa00", "#ff00aa", "#aa00ff", "#aaff00", "00aaff"],
            gravity: 0.8,
        });

        clickCount++;

        if (clickCount === hearts.length) {
            setTimeout(() => {
                resetHearts();
            }, 200);
        }
    });
});

const resetHearts = () => {
    hearts.forEach(heart => {
        heart.style.visibility = "visible";

        const parent = heart.parentNode;
        parent.removeChild(heart);
        parent.appendChild(heart);
    })
}