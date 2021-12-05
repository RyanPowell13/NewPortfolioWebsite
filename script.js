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


      
contact.onclick = function(){

    var navbar = document.querySelectorAll(".active")
    var delayInMilliseconds = 1500;

    document.getElementById("navbar").classList.add("navigation");
    document.getElementById("h1").innerHTML = "Contact Me.";
    subtext.style.display = "none";
    resumeText.style.display = "none";
    form.style.display = "block";
    [].forEach.call(navbar, function(items) {
        items.classList.remove("active")
    });
    contact.classList.add("active")

    setTimeout(function() {
        document.getElementById("navbar").classList.remove("navigation");
      }, delayInMilliseconds);

    return false;

}

home.onclick = function(){

    var navbar = document.querySelectorAll(".active")
    var delayInMilliseconds = 1500;

    document.getElementById("navbar").classList.add("navigation");
    document.getElementById("h1").innerHTML = "Ryan Powell.";
    subtext.style.display = "inline";
    form.style.display = "none";
    resumeText.style.display = "none";
    [].forEach.call(navbar, function(items) {
        items.classList.remove("active")
    });
    home.classList.add("active")

    setTimeout(function() {
        document.getElementById("navbar").classList.remove("navigation");
      }, delayInMilliseconds);

    return false;
    
}

resume.onclick = function(){

    var navbar = document.querySelectorAll(".active")
    var delayInMilliseconds = 1500;

    document.getElementById("navbar").classList.add("navigation");
    document.getElementById("h1").innerHTML = "Resume.";
    subtext.style.display = "none";
    form.style.display = "none";
    resumeText.style.display = "inline";
    [].forEach.call(navbar, function(items) {
        items.classList.remove("active")
    });
    resume.classList.add("active")

    setTimeout(function() {
        document.getElementById("navbar").classList.remove("navigation");
      }, delayInMilliseconds);

    return false;
    
}