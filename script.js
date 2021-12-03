var contact = document.getElementById("contact-button")
var subtext = document.getElementById("subtext")
var form = document.getElementById("form")
var navbar = document.querySelectorAll(".active")

contact.onclick = function(){

    document.getElementById("h1").innerHTML = "Contact Me.";
    subtext.style.display = "none";
    form.style.display = "inline";
    [].forEach.call(navbar, function(items) {
        items.classList.remove("active")
    });
    contact.classList.add("active")
    return false;
    
}