// Handles change to second element when button click on mobile 
function showSecondDiv() {
    var div1 = document.getElementsByClassName("box").item(0);
    div1.style.display = "none";
    var div2 = document.getElementsByClassName("box").item(1);
    div2.style.display = "inline-block";

};


// Handles change to third element when button click on mobile 
function showThirdDiv() {
    var div1 = document.getElementsByClassName("box").item(1);
    div1.style.display = "none";
    var div2 = document.getElementsByClassName("box").item(2);
    div2.style.display = "inline-block";
};



