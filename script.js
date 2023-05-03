function captionOn(text, image) {
    document.getElementById(text).style.color = 'white';
    document.getElementById(image).style.opacity = 0.4;
}

function captionOff(text, image) {
    document.getElementById(text).style.color = 'transparent';
    document.getElementById(image).style.opacity = 1;
}