// name button
function myName() {
    let userName = document.getElementById("pet-name").value;
    if (userName !== "") {
        alert(`Your name is now "${userName}"`);

    } else {
        let pet = "rocky";
        alert(`Your default name is rocky`);
    };
};



function play() {
    hideWelcome = document.getElementById("hidden-page");
    hideWelcome.style.display = "none";
};

// don't play button change it later
function doNotPlay() {
    console.log("why");
};