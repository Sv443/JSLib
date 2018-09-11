/*

JSLib v1.1.0 - JavaScript library that is used by most of Sv443's JS projects that makes coding a bit faster and takes away a bit of the pain in the butt
For full documentation please visit https://github.com/Sv443/jslib
To report bugs, suggest features or send in code, please go to https://github.com/Sv443/jslib/issues


v1.1.0 changelog:
	- added Menu.new(), Menu.open(), Menu.close(), Menu.theme() and Menu.demonstrate() to allow for custom menus to be created easily
	- added Audio.new(), Audio.play(), Audio.pause(), Audio.volume() and Audio.demonstrate() to allow for custom sounds to be created easily
	- added Notif.send() to allow for desktop notifications to be sent easily
*/




var jslversion = "1.1.0", jslname = "JSLib";
var qstr = window.location.search.substring(1); // this is the URL's query string (without question mark)
var urlhost = window.location.host, urlpath = window.location.pathname, cururl = urlhost + urlpath, fullurl = cururl + "?" + qstr;

// the various titles an error message can have - add new ones in your script by using errortitle.push("new title"); - you need to add a \n to the end to add a line break, or a blank space if you don't add a line break
var errortitle = ["Oh no! ", "Whoops! ", "Allan, please fix this.\n", ":(\n", "RIP :'(\n"];

var Menu = new Menu(), Lang = new Lang(), Notif = new Notif(), Audio = new Audio();
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

// use id "demo" to see an example menu
// the id will get used to identify the menu and open and close it
// innerhtml must contain a string of HTML code
function Menu(){
	this.styling = "position:fixed;width:80vw;height:80vh;z-index:5000;background-color:#cecece;border-radius:2em;border-style:solid;border-width:0.2em;border-color:black;border-radius:1.5em;";
	this.new = function(id, title, innerhtml){
		if(id != "demo"){if(isempty(id) || isempty(innerhtml)){error("values for Menu.new() can't be left undefined, empty or null!");return;}}
		if(id == "demo"){title="Demo Menu - Title";innerhtml="This is the content of the menu.<br>You can add <b>HTML</b> <i>tags</i> <u>of</u> <sup>all</sup> <sub>sorts</sub> here,<br>like <button>Buttons</button> or <input type='text' placeholder='Inputs'> or even iframes:<br><iframe src='https://www.example.com'></iframe><br><br>";}
		
		var menu = document.createElement("div");
		menu.id="jsl_menu" + id;
		menu.style=Menu.styling + "top:120vh;";
		menu.innerHTML='<div class="menu_title" style="font-size:1.5em;text-align:center;padding:0.2em;">' + title + '</div><div style="height:1em;"></div><div class="menu_content" style="font-size:1em;text-align:center;padding:0.2em;">' + innerhtml + '</div><img style="z-index:0;position:absolute;top:0px;right:0px;width:2em;height:2em;cursor:pointer;border-radius:20vw;" title="Close" src="https://raw.githubusercontent.com/Sv443/TextAdventureGame/master/raw_red.png" onclick="Menu.close(' + "'" + id + "'" + ');"></img><img style="z-index:1;position:absolute;top:0px;right:0px;width:2em;height:2em;cursor:pointer;border-radius:20vw;" title="Close" src="https://raw.githubusercontent.com/Sv443/TextAdventureGame/master/whitex.png" onclick="Menu.close(' + "'" + id + "'" + ');"></img>';
		document.body.appendChild(menu);
	}
	this.open = function(id){
		if(isempty(gebid("jsl_menu" + id))){error("you need to create the menu before you try to open it or you entered the wrong id");return;}
		stylebid("jsl_menu" + id, Menu.styling + "top:10vh;left:10vh;");
	}
	this.close = function(id){
		stylebid("jsl_menu" + id, Menu.styling + "top:120vh;");
	}
	this.theme = function(theme){
		if(theme == "light"){
			Menu.styling = "position:fixed;width:80vw;height:80vh;z-index:5000;background-color:#cecece;border-radius:2em;border-style:solid;border-width:0.2em;border-color:black;border-radius:1.5em;color:black;";
		}
		else if(theme == "dark"){
			Menu.styling = "position:fixed;width:80vw;height:80vh;z-index:5000;background-color:#353535;border-radius:2em;border-style:solid;border-width:0.2em;border-color:black;border-radius:1.5em;color:white;";
		}
	}
	this.demonstrate = function(){
		Menu.new('demo');
		Menu.open('demo');
	}
}

// use id "demo" to see an example audio
// the id will get used to identify the audio and play and pause it
// src must contain a URL to the audio file
// type must be either "ogg" or "mpeg", depending on the type of audio file used
function Audio(){
	this.new = function(id, src, type){
		if(id != "demo"){if(isempty(id) || isempty(src) || isempty(type)){error("values for Audio.new() can't be left undefined, empty or null!");return;}}
		if(id != "demo" && type != "ogg" && type != "mpeg"){error("type value for Audio.new() can only be 'ogg' or 'mpeg' and can't be left undefined, empty or null!");return;}
		if(id == "demo"){src="https://raw.githubusercontent.com/Sv443/TextAdventureGame/master/fallingtree0.mp3";}
		
		var audio = document.createElement("audio");
		audio.id="jsl_audio" + id;
		audio.innerHTML='<source src="' + src + '">';
		audio.style="display:none;";
		document.body.appendChild(audio);
	}
	this.play = function(id){
		gebid("jsl_audio" + id).play();
	}
	this.pause = function(id){
		gebid("jsl_audio" + id).pause();
	}
	this.volume = function(id, volume){ // volume must be a float (between 0 and 1.0)
		gebid("jsl_audio" + id).volume=volume;
	}
	this.demonstrate = function(){
		Audio.new('demo');
		alert("This demo will create the audio, play the audio for 2 seconds, pause it for 2 seconds, play it again for 2 seconds, then reduce the volume to 0.3 for 2 seconds and then increase the volume to 1 for the rest of the audio");
		Audio.play('demo');
		setTimeout(function(){Audio.pause('demo')}, 2000);
		setTimeout(function(){Audio.play('demo')}, 4000);
		setTimeout(function(){Audio.volume('demo', 0.3)}, 6000);
		setTimeout(function(){Audio.volume('demo', 1)}, 8000);
	}
}

// will be implemented soon!
function Lang(){
	
}

// to enable notifications, your manifest.json file must contain the following, else it won't work:         "permissions":{"desktop-notification":{}}
// more info over at https://developer.mozilla.org/en-US/docs/Web/API/notification
// use description to add a description and iconsrc to add an icon URL - both are optional and can be left empty, null or undefined to disable
function Notif(){
	this.send = function(title, description, iconsrc){
		if(isempty(description)) description = "";
		if(isempty(iconsrc)) iconsrc = "";
		if(!("Notification" in window)) {
			clog("This browser does not support desktop notifications");
		}
		else if (Notification.permission === "granted") {
			var notification = new Notification(title, {body: description, icon: iconsrc});
		}
		else if (Notification.permission !== 'denied') {
			Notification.requestPermission(function (permission) {
				if (permission === "granted") {
					var notification = new Notification(title, {body: description, icon: iconsrc});
				}
			});
		}
	}
}

// sends alert with randomized title, error cause and your contact info (can be left empty) 
function error(cause, contact) {
	var r = Math.floor(Math.random() * errortitle.length);
	if(isempty(contact)) contact = "";
	else contact = "(" + contact + ") ";
	alert(errortitle[r] + "The following error occured:\n\n" + cause + "\n\nPlease contact me " + contact + "with the above information and what you did before the error occured so I can fix it. Thanks!");
}
