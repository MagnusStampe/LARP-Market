document.addEventListener("DOMContentLoaded", init);

function init() {
    fitVideoToScreen();
}

function fitVideoToScreen() {
    const videoElement = document.querySelector("#video_container video");
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    //Resolution:   1920x1080
    //Aspect ratio: 16:9
    //Match = 1.777

    const windowMatchesVideo = 1920 / 1080
    const windowRatio = windowWidth / windowHeight;

    //If window is wider than video
    if (windowRatio > windowMatchesVideo) {
        const heightDifference = windowRatio / windowMatchesVideo;
        videoElement.style.height = heightDifference * 100 + "vh";

        //If window is higher than video
    } else {
        const widthDifference = windowMatchesVideo / windowRatio;
        videoElement.style.width = widthDifference * 100 + "vw";
    }
}
