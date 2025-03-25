function animateNumber(element, end, duration = 2000) {
    let start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Use easing function for more natural animation
        const easeOutQuad = progress => progress * (2 - progress);
        const currentProgress = easeOutQuad(progress);
        
        const currentValue = Math.floor(currentProgress * end);
        element.textContent = currentValue.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = end.toLocaleString();
        }
    }
    
    requestAnimationFrame(update);
}

// Animate counters when page loads
document.addEventListener('DOMContentLoaded', () => {
    const institutionsElement = document.getElementById('institutionsCounter');
    const artifactsElement = document.getElementById('artifactsCounter');
    const revenueElement = document.getElementById('revenueCounter');

    // Animate to different numbers
    animateNumber(institutionsElement, 350);
    animateNumber(artifactsElement, 100000);
    animateNumber(revenueElement, 600000);

});