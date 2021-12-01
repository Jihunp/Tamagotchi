

// play button
$("#play").on("click",function playPet() {
    let boredBar = document.getElementById("bored")
        let increment = 10;
        let width = boredBar.style.width.replace("%", "");
        console.log(width)
        if (width <= 100) {
            $("#bored").css('width', '+=' + increment +"%");
        } else {
            alert("your tamagotchi is playing too much")
        }
})


// name button
$("#name-button").on("click", function myName() {
    let userName = document.getElementById("pet-name").value;
    if (userName !== "") {
        alert(`Your name is now "${userName}"`);
        document.getElementById("pet").innerHTML = `${userName}`
        document.createElement("h1").textContent = `.${userName}`;

    } else {
        let pet = "rocky";
        alert(`Your default name is rocky`);
        document.getElementById("pet").innerHTML = pet
    };
});

// hides start up page and initializes exp bar (start up button)
$("#play-button").on("click", function hidePlay() {
    let hideWelcome = document.querySelector(".welcome-page");
    if (hideWelcome.style.display == "none") {
        hideWelcome.style.display = "block";
    } else {
        hideWelcome.style.display = "none";
    }
    // exp bar
    function exp() {
        let i = 0;
        if (i == 0) {
            i = 1;
            let ele = document.getElementById("exp-bar");
            let width = 1;
            let id = setInterval(frame, 10);
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
$("#no-play").on("click", function doNotPlay() {
    window.location =""

    alert("why? I spent a lot of time on it :-(... pls try it out");
});


