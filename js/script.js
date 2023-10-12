setCookie("MujPc", "1", 365);
setCookie("MujPc2", "0", 365);
function darkmodeFun() {
	var element = document.body;
	element.classList.toggle("dark-mode");
	
	if (document.getElementById("dark").style.display == "block") {
		document.getElementById("dark").style.display = "none";
		document.getElementById("light").style.display = "block";
	} else {
		document.getElementById("dark").style.display = "block";
		document.getElementById("light").style.display = "none";
		console.log(getCookie("MujPc"));
    }
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}

function setCookie(name, value, daysToLive) {
	const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
	document.cookie = "${name}=${value}; expires=${expires}; path=/";
}

function deleteCookie(name){
    setCookie(name, null, null);
}

window.onload = function() {
	console.log(document.cookie);
	
	if (document.cookie == 1) {
		document.getElementById("dark").style.display = "block";
		document.getElementById("light").style.display = "none";
		document.body.classList.toggle("dark-mode");
	}
};