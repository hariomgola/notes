//Copyright @ 2021 Hariom Gola. All Right Reserved Not to be Used for Making profit
/**
 *JavaScript Notes
 */
//  for Vertical bar Navigation
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//Setting window height property
var w = window.innerWidth;
var h = window.innerHeight;
console.log("Width----->", w);
console.log("height----->", h);

function myFunction() {
    var cw = window.innerWidth;
    var ch = window.innerHeight;
    console.log("Change Width------>", cw);
    console.log("Change Height------>", ch);
}
//Copyright @ 2021 Hariom Gola. All Right Reserved Not to be Used for Making profit
