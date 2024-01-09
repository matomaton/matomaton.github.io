document.addEventListener("DOMContentLoaded", function() {
    const imageStack = document.getElementById("imageStack");

    for (let i = 4; i <= 21; i++) {
        const img = document.createElement("img");
        img.src = `https://matomaton.github.io/assets/JSTOR%20platform%20story/${String(i).padStart(2, '0')}.png`;
        img.alt = `Image ${i}`;
        imageStack.appendChild(img);
    }
});

