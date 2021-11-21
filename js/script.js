function sanity() {
    console.log("are we sane?");
};
sanity();
// name button
function myName() {
    let userName = document.getElementById("petName").value;
    alert(`Your name is now "${userName}"`);
    //resets name of your pet incase you want to change it
    document.getElementById("petName").value = '';
}