var home = document.getElementById("home-button")
var resume = document.getElementById("resume-button")
var contact = document.getElementById("contact-button")
var subtext = document.getElementById("subtext")
var form = document.getElementById("form")
var resumeText = document.getElementById("resumeText")


var delayInMilliseconds = 7000;
var onLoad =  document.querySelectorAll(".onLoad")
setTimeout(function() {
    [].forEach.call(onLoad, function(items) {
        items.classList.remove("onLoad")
    });
      }, delayInMilliseconds);


function changeNavigationHighlight(newTab) {
    let navbar = document.querySelectorAll(".active");

    [].forEach.call(navbar, function(items) {
        items.classList.remove("active")
    });
    newTab.classList.add("active");
}

function changeContentOnNavigation(newTab) {
    subtext.style.display = "none";
    resumeText.style.display = "none";
    form.style.display = "none";

    newTab.style.display = "inline";
}

function removeNavigationClass() {
    var delayInMillisecondsNav = 1500;

    setTimeout(function() {
        document.getElementById("navbar").classList.remove("navigation");
    }, delayInMillisecondsNav);

}

      
contact.onclick = function(){

    document.getElementById("navbar").classList.add("navigation");
    document.getElementById("h1").innerHTML = "Contact Me.";

    changeContentOnNavigation(form);

    changeNavigationHighlight(contact);

    removeNavigationClass();

    return false;

}

home.onclick = function(){

    document.getElementById("navbar").classList.add("navigation");
    document.getElementById("h1").innerHTML = "Ryan Powell.";

    changeContentOnNavigation(subtext);

    changeNavigationHighlight(home);

    removeNavigationClass();

    return false;
    
}

resume.onclick = function(){

    document.getElementById("navbar").classList.add("navigation");
    document.getElementById("h1").innerHTML = "Resume.";

    changeContentOnNavigation(resumeText);

    changeNavigationHighlight(resume);

    removeNavigationClass();

    return false;
    
}