





var thank_you = document.getElementById("thanks");
var submit_thanks = document.getElementById("submit-thanks");

function submit(){
    thank_you.classList.toggle("show");
}

// var search = document.getElementById("search");
var pop_up_form = document.getElementsByClassName("pop_up_form")[0];

function show_search(){
	pop_up_form.classList.toggle("show");
}


// var close = document.getElementById("close")
var pop_up_form = document.getElementsByClassName("pop_up_form")[0];
function closeit(){
	pop_up_form.classList.add("hidden");
	pop_up_form.classList.remove("show");

}


var hamburger = document.getElementsByClassName("small-nav")[0]
function show_small_menu(){
	hamburger.classList.remove("small-nav");
	hamburger.classList.add("show");
}

// var hamburger = document.getElementsByClassName("small-nav")[0];
function close_nav(){
	hamburger.classList.remove("show");
	hamburger.classList.add("hidden");
	

}
