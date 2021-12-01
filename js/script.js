// name button
$("#name-button").on("click", function myName() {
    let userName = document.getElementById("pet-name").value;
    if (userName !== "") {
        alert(`Your name is now "${userName}"`);
        document.createElement("h1").textContent = `.${userName}`;

    } else {
        let pet = "rocky";
        alert(`Your default name is rocky`);
        document.createElement("h1").textContent = `${pet}`;
    };
});

// hides start up page and initializes exp bar
// can also be called start up button
$("#play-button").on("click", function hidePlay() {
    let hideWelcome = document.querySelector(".welcome-page");
    if (hideWelcome.style.display == "none") {
        hideWelcome.style.display = "block";
    } else {
        hideWelcome.style.display = "none";
    }
    // maynot even need this function because we already disabled scrolling
    // which means we can just push the other pages out of the way with margin in css
    // or we can just dom the image and sound file
    // we still need to make a evolution 2 and evolution 3
    // we still need to css to make it look nice
    // we still need to create a win and lose page.
    // we still need to create a self destruct button
    // we still need to create a I don't want to play button.
    function startGame(eve) {
        eve.preventDefault();
        //  create hidden things in this function 

    }
    startGame();
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
                    ele.style.width = width +"%";
                    ele.innerHTML = width + "%";
                }
            }
        }
    }
    exp();
});

// don't play button
$("#noplay").on("click", function doNotPlay() {
    alert("why? I spent a lot of time on it :-(... pls try it out");
});


