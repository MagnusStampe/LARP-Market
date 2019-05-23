document.addEventListener("DOMContentLoaded", init);

function init() {
    fitVideoToScreen();
}

function fitVideoToScreen() {
    var videoElement = document.querySelector("#video_container video");
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    //Resolution:   1920x1080
    //Aspect ratio: 16:9
    //Match = 1.777

    var windowMatchesVideo = 1920 / 1080;
    var windowRatio = windowWidth / windowHeight;

    //If window is wider than video
    if (windowRatio > windowMatchesVideo) {
        var heightDifference = windowRatio / windowMatchesVideo;
        videoElement.style.height = heightDifference * 100 + "vh";

        //If window is higher than video
    } else {
        var widthDifference = windowMatchesVideo / windowRatio;
        videoElement.style.width = widthDifference * 100 + "vw";
    }
}