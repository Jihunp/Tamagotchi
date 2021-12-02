/* Ways to improve the game
have character limit for name input
create one function that combines the button clicking events for:
eat sleep and play

*/


//object ogre
const ogre = {
    alive:true,
    boredom: 7,
    hunger: 6,
    sleepiness: 7,
}

//global variables
let time = 0;
const increment = 10;


// name button
$("#name-button").on("click", function myName() {
    const userName = document.getElementById("pet-name").value;
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

// no play button. People who don't want to play my game get punished!
$("#no-play").on("click", function doNotPlay() {
    window.location ="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
});

// hides start up page and initializes exp bar (start up button)
$("#play-button").on("click", function hidePlay() {
    let hideWelcome = document.querySelector(".welcome-page");
    if (hideWelcome.style.display == "none") {
        hideWelcome.style.display = "block";
    } else {
        hideWelcome.style.display = "none";
    }
    //start game timer
    gameTimer();
    //start exp
    exp(null);
//evolutions
    for (let i = 0; i < 4; i++) {
        setTimeout(function timer() {
            if(ogre.alive === true) {
                if(i === 1) {
                    exp($("#pet-rock").attr("src", `https://tinyurl.com/yckr6pch`),
                     $("#myAudio").attr("src", "rock.mp3"))
                }
                if (i === 2) {
                    exp($("#pet-rock").attr("src", `https://tinyurl.com/3yjvufab`), 
                    $("#myAudio").attr("src", "shrek-classic.mp3"))
                }
                if (i === 3) {
                    alert("you won!")
                    showWin()
                }
                return;
            } else if(ogre.alive === false){
                return;
            }
        } , i * 10000);
    };
});

//exp bar
function exp(image, sound) {
    if (ogre.alive === false) {
        return;
    }
    else {
        let i = 0;
    if (i == 0) {
        i = 1;
        let ele = document.getElementById("exp-bar");
        let width = 1;
        let id = setInterval(frame, 100);
        function frame() {
            if (width >= 100) {
                image;
                sound; 
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
}

//win condition hide game gui
function showWin() {
    let hideGame = document.getElementById("evolution1");
    if (hideGame.style.display == "none") {
        hideGame.style.display = "block";
    } else {
        hideGame.style.display = "none";
    }
}
// lose condition hide win page
function showLose() {
    let loser = document.getElementById("win");
    if (loser.style.display == "none") {
        loser.style.display = "block";
    } else {
        loser.style.display = "none";
    }
}


// game time and subtracting 
function gameTimer() {
    const goTime = function goTime() {
        time++;
        // lose condition
        if(ogre.hunger === 0 || ogre.boredom === 0 || ogre.sleepiness === 0){
            let falsehood = ogre.alive = false
            falsehood;
            clearInterval(globalTimer);
            alert("you're dead kid")
            showWin();
            showLose();
            
        }
        // every some amount of seconds, ogre loses boredom and hunger
        if(time % 10 === 0 && ogre.boredom >= 1) {
            $("#bored").css('width', '-=' + increment +"%");
            ogre.boredom--;
        }
        if(time % 10 === 0 && ogre.hunger >= 1) {
            $("#hungry").css('width', '-=' + increment +"%");
            ogre.hunger--;

        }
        if(time % 10 === 0 && ogre.sleepiness >= 1) {
            $("#sleepy").css('width', '-=' + increment +"%");
            ogre.sleepiness--;
        }
    }
const globalTimer = setInterval(goTime, 100)
}


// play with pet button
$("#play").on("click",function playPet() {
    let boredBar = document.getElementById("bored")
        let width = boredBar.style.width.replace("%", "");
        if (width <= 100) {
            $("#bored").css('width', '+=' + increment +"%");
            ogre.boredom++;
        } else {
            alert("your tamagotchi is playing too much")
        }
})

// make pet eat 
$("#eat").on("click",function petEat() {
    let hungerBar = document.getElementById("hungry")
        let width = hungerBar.style.width.replace("%", "");
        if (width <= 100) {
            $("#hungry").css('width', '+=' + increment +"%");
            ogre.hunger++;
        } else {
            alert("your tamagotchi is eating too much")
        }
})

// make pet sleep
$("#sleep").on("click",function petSleep() {
    let sleepBar = document.getElementById("sleepy")
        let width = sleepBar.style.width.replace("%", "");
        if (width <= 100) {
            $("#sleepy").css('width', '+=' + increment +"%");
            ogre.sleepiness++;
        } else {
            alert("your tamagotchi is sleeping too much")
        }
})

