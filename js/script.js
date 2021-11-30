// name button
function myName() {
    let userName = document.getElementById("pet-name").value;
    if (userName !== "") {
        alert(`Your name is now "${userName}"`);
        document.createElement("h1").textContent = `.${userName}`

    } else {
        let pet = "rocky";
        alert(`Your default name is rocky`);
        document.createElement("h1").textContent = `${pet}`
    };
};

// hides welcome page
function hidePlay() {
    // maybe change class to id in css and html later depending on what I want later
    let hideWelcome = document.querySelector(".welcome-page");
    if (hideWelcome.style.display == "none") {
        hideWelcome.style.display = "block"
    } else {
        hideWelcome.style.display = "none"
    }
};

// don't play button
function doNotPlay() {
    alert("why? I spent a lot of time on it :-(... pls try it out");
};

// exp bar
function exp() {
    let i = 0;
    if (i == 0) {
        i = 1;
        let ele = document.getElementById("exp-bar");
        let width = 1;
        let id = setInterval(frame, 1000);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                ele.style.width = width +"%"
                ele.innerHTML = width + "%"
            }
        }
    }
}
