// Handles change elements style when button click on mobile 
function showDiv(index) {
    var list = document.getElementsByClassName("box");
    for (var i = 0; i < list.length; i++) {
        if (i === index) {
            list[i].style.display = 'inline-block';
        } else {
            list[i].style.display = 'none';
        }
    }
}