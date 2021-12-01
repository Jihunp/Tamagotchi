
//object Shrock
class Shrock {
    constructor() {
        this.isAlive = true;
        this.evolveOne= "";
        this.evolveTwo= "";
    }
    evolve1() {
        $("#pet-rock").attr("src", `${this.evolveOne}`)
    }
    evolve2() {
        $("#pet-rock").attr("src", `${this.evolveTwo}`)
    }
    
}
let ogre = new Shrock();


//global variables

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
    exp(null);
//evolutions
    for (let i = 0; i < 4; i++) {
        setTimeout(function timer() {
            if (i === 1) {
                exp($("#pet-rock").attr("src", `https://tinyurl.com/yckr6pch`))
            }
            if (i === 2) {
                exp($("#pet-rock").attr("src", `https://tinyurl.com/3yjvufab`))
            }
            if (i === 3) {
                alert("you won!")
            }
        }, i * 10000)
    }
});
//exp bar

function exp(param) {
    let i = 0;
    if (i == 0) {
        i = 1;
        let ele = document.getElementById("exp-bar");
        let width = 1;
        let id = setInterval(frame, 100);
        function frame() {
            if (width >= 100) {
                param
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


// no play button. People who don't want to play my game get punished!
$("#no-play").on("click", function doNotPlay() {
    window.location ="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
});

// game time 



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

