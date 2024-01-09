document.addEventListener("DOMContentLoaded", function() {
    const imageStack = document.getElementById("imageStack");

    for (let i = 1; i <= 18; i++) {
        const img = document.createElement("img");
        img.src = `https://matomaton.github.io/assets/AMBUX/${String(i).padStart(2, '0')}.png`;
        img.alt = `Image ${i}`;
        imageStack.appendChild(img);
    }
});
