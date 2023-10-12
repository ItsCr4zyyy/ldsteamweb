function darkmodeFun() {
	var element = document.body;
	element.classList.toggle("dark-mode");
	
	if (document.getElementById("dark").style.display == "block") {
		document.getElementById("dark").style.display = "none";
		document.getElementById("light").style.display = "block";
		if(accept != "" && accept != null) {
			accept = "light";
			setCookie("firstName", accept, 365);
		}
	} else {
		document.getElementById("dark").style.display = "block";
		document.getElementById("light").style.display = "none";
		if(accept != "" && accept != null) {
			accept = "dark";
			setCookie("firstName", accept, 365);
		}
    }
}

function acceptCookie() {
	var accept = getCookie("firstName");
	if (document.getElementById("dark").style.display == "block") {
		accept = "dark";
	} else {
		accept = "light";
	}
	setCookie("firstName", accept, 365);
}

function setCookie(name, value, daysToLive) {
	var cookie = name + "=" + encodeURIComponent(value);
	if(typeof daysToLive === "number") {
		cookie += "; max-age=" + (daysToLive*24*60*60);
		document.cookie = cookie;
	}
	document.getElementById("acceptallcookies").style.display = "none";
}

function getCookie(name) {
	var cookieArr = document.cookie.split(";");
    
	for(var i = 0; i < cookieArr.length; i++) {
		var cookiePair = cookieArr[i].split("=");
		if(name == cookiePair[0].trim()) {
			return decodeURIComponent(cookiePair[1]);
		}
	}
	return null;
}
    
function checkCookie() {
	var accept = getCookie("firstName");
    
	if(accept == "dark") {
		document.getElementById("acceptallcookies").style.display = "none";
		document.getElementById("dark").style.display = "block";
		document.getElementById("light").style.display = "none";
		document.body.classList.toggle("dark-mode");
	} else {
		document.getElementById("acceptallcookies").style.display = "none";
		document.getElementById("dark").style.display = "none";
		document.getElementById("light").style.display = "block";
	}
}

window.onload = checkCookie;