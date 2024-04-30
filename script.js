document.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector("#videoElement");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (error) {
                console.log("Something went wrong:", error);
            });
    } else {
        console.log("getUserMedia is not supported on your browser");
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector("#videoElement");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (error) {
                console.log("Something went wrong:", error);
            });
    } else {
        console.log("getUserMedia is not supported on your browser");
    }

    const container = document.querySelector(".draggable");
    let isDragging = false;
    let offsetX, offsetY;

    function onMouseDown(event) {
        isDragging = true;
        offsetX = event.clientX - container.getBoundingClientRect().left;
        offsetY = event.clientY - container.getBoundingClientRect().top;
    }

    function onMouseMove(event) {
        if (isDragging) {
            let x = event.clientX - offsetX;
            let y = event.clientY - offsetY;
            container.style.left = `${x}px`;
            container.style.top = `${y}px`;
        }
    }

    function onMouseUp() {
        isDragging = false;
    }

    container.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
});

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector(".draggableI");
    let isDragging = false;
    let offsetX, offsetY;

    function onMouseDown(event) {
        isDragging = true;
        offsetX = event.clientX - container.getBoundingClientRect().left;
        offsetY = event.clientY - container.getBoundingClientRect().top;
    }

    function onMouseMove(event) {
        if (isDragging) {
            let x = event.clientX - offsetX;
            let y = event.clientY - offsetY;
            container.style.left = `${x}px`;
            container.style.top = `${y}px`;
        }
    }

    function onMouseUp() {
        isDragging = false;
    }

    container.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
});


document.addEventListener('DOMContentLoaded', function () {
    const duplicateButton = document.getElementById('duplicateButton');
    let clickCount = 0;
    const threshold = 20;

    duplicateButton.addEventListener('click', function() {
        clickCount++;

        if (clickCount >= threshold) {
            const confirmation = confirm("YOU ARE AN INTERNET SUPER STAR!!! ARE YOU READY TO KNOW WHAT'S BEHIND THIS?");
            
            if (confirmation) {
                window.location.href = "main.html"; 
            }
        }

        const newButton = document.createElement('button');
        newButton.textContent = 'MORE!!';
        newButton.classList.add('duplicate-button');

        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        newButton.style.backgroundColor = randomColor;

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const randomX = Math.floor(Math.random() * screenWidth);
        const randomY = Math.floor(Math.random() * screenHeight);
        newButton.style.position = 'absolute';
        newButton.style.left = randomX + 'px';
        newButton.style.top = randomY + 'px';

        document.body.appendChild(newButton);
    });
});

