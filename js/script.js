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
    let hideWelcome = document.querySelector(".hidden-page");
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