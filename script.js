document.getElementById("start-btn").addEventListener("click", function() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("countdown-container").classList.remove("hidden");
    document.getElementById("photo-rows-container").classList.remove("hidden");
    startCountdown();
});

function startCountdown() {
    let count = 10;
    const countdownEl = document.getElementById("countdown");
    
    const interval = setInterval(() => {
        countdownEl.innerText = count;
        count--;

        if (count < 0) {
            clearInterval(interval);
            document.getElementById("countdown-container").classList.add("hidden");
            startCelebration();
        }
    }, 1000);
}

function startCelebration() {
    const birthdaySong = document.getElementById("birthday-song");
    birthdaySong.play();

    // Display the singing cat GIF and start photo rows when the song starts
    document.getElementById("singing-cat").classList.remove("hidden");
    document.getElementById("photo-rows-container").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("celebration-container").classList.remove("hidden");
    }, 6000);

    birthdaySong.addEventListener("ended", () => {
        document.getElementById("celebration-container").classList.add("hidden");
        document.getElementById("singing-cat").classList.add("hidden");
        const video = document.getElementById("video");
        video.classList.remove("hidden");
        video.play();
        document.getElementById("birthday-message").classList.remove("hidden");
        document.getElementById("birthday-message2").classList.remove("hidden");

        const backgroundMusic = document.getElementById("song");
        backgroundMusic.play();

        backgroundMusic.addEventListener("ended", () => {
            video.classList.add("hidden");
            document.getElementById("birthday-message").classList.add("hidden");
            document.getElementById("birthday-message2").classList.add("hidden");

            document.getElementById("kissing-gif").classList.remove("hidden");
            const kissSound = document.getElementById("kiss-sound");
            kissSound.loop = true; 
            kissSound.play();
        });
    });
}