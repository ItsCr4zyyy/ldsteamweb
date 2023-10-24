function darkmodeFun() {
	var element = document.body;
	element.classList.toggle("dark-mode");
	
	if (document.getElementById("light").style.display == "none") {
		document.getElementById("dark").style.display = "none";
		document.getElementById("light").style.display = "block";
		if(localStorage.getItem('mode') == 'dark') {
			localStorage.setItem('mode', 'light')
		}
	} else {
		document.getElementById("dark").style.display = "block";
		document.getElementById("light").style.display = "none";
		if(localStorage.getItem('mode') == 'light') {
			localStorage.setItem('mode', 'dark')
		}
    }
}

function acceptCookie() {
	if (document.getElementById("dark").style.display == "block") {
		localStorage.setItem('mode', 'dark')
		document.getElementById("acceptallcookies").style.display = "none";
	} else {
		localStorage.setItem('mode', 'light')
		document.getElementById("acceptallcookies").style.display = "none";
	}
}
   
function checkLoad() {
    
	if(localStorage.getItem('mode') == 'dark') {
		document.body.classList.toggle("dark-mode");
		document.getElementById("acceptallcookies").style.display = "none";
		document.getElementById("dark").style.display = "block";
		document.getElementById("light").style.display = "none";
	}
	if(localStorage.getItem('mode') == 'light') {
		document.getElementById("dark").style.display = "none";
		document.getElementById("light").style.display = "block";
		document.getElementById("acceptallcookies").style.display = "none";
	}
}

window.onload = checkLoad;