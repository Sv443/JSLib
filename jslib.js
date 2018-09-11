/*

JSLib v1.0.1 - JavaScript library that is used by most of Sv443's JS projects that makes coding a bit faster and takes away a bit of the pain in the butt
For full documentation please visit https://github.com/Sv443/jslib
To report bugs, suggest features or send in code, please go to https://github.com/Sv443/jslib/issues


v1.0.1 changelog:
	- removed loadfocus, since it is easy to do yourself and it always throws errors
	- modified a few comments
	- removed demo functions

*/




var jslversion = "1.0.1", jslname = "JSLib";
var qstr = window.location.search.substring(1); // this is the URL's query string (without question mark)
var urlhost = window.location.host, urlpath = window.location.pathname, cururl = urlhost + urlpath, fullurl = cururl + "?" + qstr;

// the various titles an error message can have - add new ones in your script by using errortitle.push("new title"); - you need to add a \n to the end to add a line break, or a blank space if you don't add a line break
var errortitle = ["Oh no! ", "Whoops! ", "Allan, please fix this.\n", ":(\n", "RIP :'(\n"];

var Menu = new Menu(), Lang = new Lang(), Notif = new Notif();
console.log("Powered by " + jslname + " v" + jslversion + " - (c) Sv443 / Sven Fehler 2018 ( https://www.github.com/Sv443 ) - licensed under the MIT license");


// gets the contents of all meta tags with the class="jsl_setting" attribute and adds customizable separators between them
function getMetaSettings(separation1, separation2){
	if(separation1 === undefined || separation1 === null || separation1 == 0){separation1 = ":";}
	if(separation2 === undefined || separation2 === null || separation1 == 0){separation2 = ",";}
	var metas = document.getElementsByClassName("jsl_setting");
	var output = "";
	for(var i = 0; i < metas.length; i++){
		if(!isempty(metas[i].content)){
			output += metas[i].name + separation1 + metas[i].content + separation2;
		}
		else {
			output += metas[i].name + separation1 + undefined + separation2;
		}
	}
	return output;
}

// converts URL inside string to an HTML anchor tag with optional prefix and target attribute
function urlify(string, prefix, target) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
	if(isempty(prefix)){prefix = "";}
	else{prefix += "&nbsp;";}
	if(isempty(target)){target = "self_";}
	if(target != "blank_" || target != "self_"){target = "self_";}
    return string.replace(urlRegex, function(url) {
        return prefix + '<a href="' + url + '" target="' + target + '">' + url + '</a>';
    });
}


// executes domcl() on DOM content load (you need to add domcl() to your script or else it will throw an error)
document.addEventListener("DOMContentLoaded", function(){domcl();});

// clears innerHTML of element with specified ID
function clearih(id){
	gebid(id).innerHTML="";
}

// clears outerHTML of element with specified ID
function clearoh(id){
	gebid(id).outerHTML="";
}

// short version of document.getElementById();
function gebid(id){
	return document.getElementById(id);
}

// short version of document.getElementsByClassName();
function gebcn(classname){
	return document.getElementsByClassName(classname);
}

// short version of document.getElementsByTagName();
function gebtn(tagname){
	return document.getElementsByTagName(tagname);
}

// short version of document.body.innerHTML.includes();
function dbihi(string){
	return document.body.innerHTML.includes(string);
}

// short version of window.location.href.includes();
function wlhi(string){
	return window.location.href.includes(string);
}

// short version of console.log();
function clog(string){
	console.log(string);
}

// returns true if string is undefined, null or empty ("")
function isempty(string){
	if(string === undefined || string === null || string == "") return true;
	else return false;
}

// changes style of element with specified ID
function stylebid(id, style){
	gebid(id).style=style;
}

// changes style of all elements with specified class
function stylebcn(classname, style){
	ell = gebcn(classname);for(var i = 0;i < ell.length;i++){ell[i].style=style;}
}

// for full documentation on these functions please visit the github repo (URL in line 2 of this document)
function Menu(){
	this.new = function(id){
		
	}
	this.open = function(id){
		
	}
	this.close = function(id){
		
	}
}

// for full documentation on these functions please visit the github repo (URL in line 2 of this document)
function Lang(){

}

// for full documentation on these functions please visit the github repo (URL in line 2 of this document)
function Notif(){
	this.send = function(title, msg){
		
	}
}

// sends alert with randomized title, error cause and your contact info (can be left empty) 
function error(cause, contact) {
	var r = Math.floor(Math.random() * errortitle.length);
	if(isempty(contact)) contact = "";
	else contact = "(" + contact + ") ";
	alert(errortitle[r] + "The following error occured:\n\n" + cause + "\n\nPlease contact me " + contact + "with the above information and what you did before the error occured so I can fix it. Thanks!");
}