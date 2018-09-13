/*

JSLib v1.2.0 - JavaScript library that is used by most of Sv443's JS projects that makes coding a bit faster and takes away a bit of the pain in the butt
For full documentation please visit https://github.com/Sv443/jslib
To report bugs, suggest features or send in code, please go to https://github.com/Sv443/jslib/issues


v1.2.0 changelog:
	- added Element.new(), Element.remove(), Element.removeOther(), Element.setAttribute(), Element.innerhtml() and Element.outerhtml() to add, remove and modify elements easily
	- added EventListener to close all opened menus if ESC is pressed
*/




var jslversion = "1.2.0", jslname = "JSLib";
var qstr = window.location.search.substring(1); // this is the URL's query string (without question mark)
var urlhost = window.location.host, urlpath = window.location.pathname, cururl = urlhost + urlpath, fullurl = cururl + "?" + qstr;

// the various titles an error message can have - add new ones in your script by using errortitle.push("new title"); - you need to add a \n to the end to add a line break, or a blank space if you don't add a line break
var errortitle = ["Oh no! ", "Whoops! ", "Allan, please fix this.\n", ":(\n", "RIP :'(\n"];

var Menu = new Menu(), Notif = new Notification(), Audio = new Audio(), Element = new Element();
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
		document.addEventListener("keydown", function(e){if(e.keyCode == 27){Menu.close(id);}});
	}
	this.close = function(id){
		if(isempty(gebid("jsl_menu" + id))){error("you need to create the menu before you try to close it or you entered the wrong id");return;}
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
		if(isempty(gebid("jsl_audio" + id))){error("you need to create the audio before you try to play it or you entered the wrong id");return;}
		gebid("jsl_audio" + id).play();
	}
	this.pause = function(id){
		if(isempty(gebid("jsl_audio" + id))){error("you need to create the audio before you try to pause it or you entered the wrong id");return;}
		gebid("jsl_audio" + id).pause();
	}
	this.volume = function(id, volume){ // volume must be a float (between 0 and 1.0)
		if(isempty(gebid("jsl_audio" + id))){error("you need to create the audio before you try to change the volume or you entered the wrong id");return;}
		gebid("jsl_audio" + id).volume=volume;
	}
	this.demonstrate = function(){
		Audio.new('demo');
		alert("This demo will create the audio, play the audio for 2 seconds, pause it for 2 seconds, play it again for 2 seconds, then reduce the volume to 0.1 for 4 seconds and then increase the volume to 1 for the rest of the audio");
		Audio.play('demo');
		setTimeout(function(){Audio.pause('demo')}, 2000);
		setTimeout(function(){Audio.play('demo')}, 4000);
		setTimeout(function(){Audio.volume('demo', 0.1)}, 6000);
		setTimeout(function(){Audio.volume('demo', 1)}, 10000);
	}
}

// to enable notifications, your manifest.json file must contain the following, else it won't work:         "permissions":{"desktop-notification":{}}
// more info over at https://developer.mozilla.org/en-US/docs/Web/API/notification
// use description to add a description and iconsrc to add an icon URL - both are optional and can be left empty, null or undefined to disable
function Notification(){
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

// use id "demo" to see an example
// type is the HTML tag name (for example "div", "a", or "iframe")
// append is on which parent node the new element will be appended (use "body" to append on the document body, "head" to append on the document head, or another string to append to an element by id)
// content is the initial innerHTML of the created element
// if you want to add attributes to the element, you have to use Element.setAttribute() after the creation of it
// use Element.removeOther() to remove an element by id that has not been created with the Element.new() function, but is instead part of the document already
// values that can be left empty: "content" in Element.new(), "content" in Element.innerhtml() and Element.outerhtml(), "attributevalue" in Element.setAttribute()
function Element(){
	this.new = function(id, type, append, content){
		if(id == "demo"){Element.demonstrate();return;}
		if(isempty(id)){error("id value of Element.new() can't be left empty, undefined or null");return;}
		if(isempty(append)){error("append value of Element.new() can't be left empty, undefined or null");return;}
		if(isempty(type)){error("type value of Element.new() can't be left empty, undefined or null, it must contain the desired HTML tag name");return;}
		var element = document.createElement(type);
		if(!dbihi("jsl_element" + id)){element.id="jsl_element" + id;}
		else{error("you can't create multiple elements with the same id!");return;}
		element.class="jsl_element";
		element.innerHTML=content;
		if(append == "body") document.body.appendChild(element);
		else if(append == "head") document.head.appendChild(element);
		else if(isempty(append)){error("append value of Element.new() can't be left empty, undefined or null");return;}
		else gebid(append).appendChild(element);
	}
	this.remove = function(id){
		if(isempty(id)){error("the id of the Element.remove() function can't be left empty, null or undefined");return;}
		var element = gebid("jsl_element" + id);
		element.parentNode.removeChild(element);
	}
	this.removeOther = function(id){
		if(isempty(id)){error("the id of the Element.removeOther() function can't be left empty, null or undefined");return;}
		var element = gebid(id);
		element.parentNode.removeChild(element);
	}
	this.outerhtml = function(id, content){
		if(isempty(id)){error("the id of the Element.outerhtml() function can't be left empty, null or undefined");return;}
		gebid("jsl_element" + id).outerHTML=content;
	}
	this.innerhtml = function(id, content){
		if(isempty(id)){error("the id of the Element.innerhtml() function can't be left empty, null or undefined");return;}
		gebid("jsl_element" + id).innerHTML=content;
	}
	this.setAttribute = function(id, attributename, attributevalue){
		if(isempty(id)){error("the id of the Element.setAttribute() function can't be left empty, null or undefined");return;}
		if(isempty(attributename)){error("the attributename of the Element.setAttribute() function can't be left empty, null or undefined");return;}
		gebid("jsl_element" + id).setAttribute(attributename, attributevalue);
	}
	this.demonstrate = function(){
		window.scrollTo(0,document.body.scrollHeight);
		alert("scroll to the bottom to see the demo element");
		Element.new('element_demo', 'div', 'body', '<b>this</b> <i>is</i> <u>the</u> <sub>innerHTML</sub> of the demo element');
		setTimeout(function(){Element.innerhtml('element_demo', 'utilizing Element.innerhtml(), you can change this value dynamically');},5000);
		setTimeout(function(){Element.innerhtml('element_demo', 'in five seconds, this element will be removed');},10000);
		setTimeout(function(){Element.remove('element_demo');},15000);
	}
}

// sends alert with randomized title, error cause and your contact info (can be left empty) 
function error(cause, contact) {
	var r = Math.floor(Math.random() * errortitle.length);
	if(isempty(contact)) contact = "";
	else contact = "(" + contact + ") ";
	alert(errortitle[r] + "The following error occured:\n\n" + cause + "\n\nPlease contact me " + contact + "with the above information and what you did before the error occured so I can fix it. Thanks!");
}
