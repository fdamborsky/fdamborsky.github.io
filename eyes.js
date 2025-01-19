const eyeball = (event) => {
    const eyes = document.querySelectorAll(".eye");
    eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        // Calculate distance from center
        const deltaX = event.pageX - eyeX;
        const deltaY = event.pageY - eyeY;

        // Clamp the movement to the eye's radius
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), 20); // Adjusted for smaller eyes
        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        // Set pupil position (adjust ::before pseudo-element)
        eye.style.setProperty("--pupil-x", `${pupilX}px`);
        eye.style.setProperty("--pupil-y", `${pupilY}px`);
    });
};

// Attach mousemove event
document.querySelector("body").addEventListener("mousemove", eyeball);
