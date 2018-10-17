/*
For full documentation please visit https://github.com/Sv443/jslib
To report bugs, suggest features or send in code, please go to https://github.com/Sv443/jslib/issues


	Changelog:
	
		- added function to make audio loopable ( Audio.loop("id", true/false); )
		- fixed styling issues of menus
*/

"use-strict";





var jsli = new jslinfo();
function jslinfo(){this.version="1.5.0";this.name="JSLib";this.desc="JavaScript simplified";this.innerversion=this.version.replace(".", "").replace(".", "");}
var jslname = jsli.name, jslversion = jsli.version;

var qstr = window.location.search.substring(1); // this is the URL's query string (without question mark)
var urlhost = window.location.host, urlpath = window.location.pathname, cururl = urlhost + urlpath, fullurl = cururl + "?" + qstr;




// the various titles an error message can have - add new ones in your script by using errortitle.push("new title"); - you need to add a \n to the end to add a line break, or a blank space if you don't add a line break
var errortitle = ["Oh no! ", "Whoops! ", "Allan, please fix this.\n", ":(\n", "RIP :'(\n"];

var Menu = new Menu(), Audio = new Audio(), Element = new Element();
var clscel = gebtn("script"), cwm = false;for(var i = 0; i < clscel.length; i++){if(clscel[i].dataset.jsl_disablewatermark == "true") cwm = true;}
if(!cwm) console.log("%cPowered by " + jsli.name + " v" + jsli.version + " - (c) Sv443 / Sven Fehler 2018 ( https://www.github.com/Sv443 ) - licensed under the MIT license", "background-color:#454545;color:white;padding:0.2em;font-size:1.2em;");

// ismobile script
!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/IEMobile/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");return"undefined"!=typeof s[1]&&(r=s[0]),s=r.split("Twitter"),"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);
var ismobile;if(isMobile.any) ismobile = true;else ismobile = false;

// js-cookie script ( https://github.com/js-cookie/js-cookie )
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function g(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}return function e(l){function C(e,n,o){var t;if("undefined"!=typeof document){if(1<arguments.length){if("number"==typeof(o=g({path:"/"},C.defaults,o)).expires){var r=new Date;r.setMilliseconds(r.getMilliseconds()+864e5*o.expires),o.expires=r}o.expires=o.expires?o.expires.toUTCString():"";try{t=JSON.stringify(n),/^[\{\[]/.test(t)&&(n=t)}catch(e){}n=l.write?l.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i="";for(var c in o)o[c]&&(i+="; "+c,!0!==o[c]&&(i+="="+o[c]));return document.cookie=e+"="+n+i}e||(t={});for(var a=document.cookie?document.cookie.split("; "):[],s=/(%[0-9A-Z]{2})+/g,f=0;f<a.length;f++){var p=a[f].split("="),d=p.slice(1).join("=");this.json||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var u=p[0].replace(s,decodeURIComponent);if(d=l.read?l.read(d,u):l(d,u)||d.replace(s,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch(e){}if(e===u){t=d;break}e||(t[u]=d)}catch(e){}}return t}}return(C.set=C).get=function(e){return C.call(C,e)},C.getJSON=function(){return C.apply({json:!0},[].slice.call(arguments))},C.defaults={},C.remove=function(e,n){C(e,"",g(n,{expires:-1}))},C.withConverter=e,C}(function(){})});
if(Cookies.get('jsl_innerversion') < jsli.innerversion) clog("Successfully updated to a newer version");
Cookies.set('jsl_innerversion', jsli.innerversion, { expires: 0 });








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

// clears innerHTML of element with specified ID
function clearih(id) {
	gebid(id).innerHTML="";
}

// clears outerHTML of element with specified ID
function clearoh(id) {
	gebid(id).outerHTML="";
}

// short version of document.getElementById();
function gebid(id) {
	return document.getElementById(id);
}

// short version of document.getElementsByClassName();
function gebcn(classname) {
	return document.getElementsByClassName(classname);
}

// short version of document.getElementsByTagName();
function gebtn(tagname) {
	return document.getElementsByTagName(tagname);
}

// short version of document.body.innerHTML.includes();
function dbihi(string) {
	return document.body.innerHTML.includes(string);
}

// short version of window.location.href.includes();
function wlhi(string) {
	return window.location.href.includes(string);
}

// short version of console.log();
function clog(string) {
	console.log(string);
}

// returns true if string is undefined, null or empty ("")
function isempty(string) {
	if(string === undefined || string === null || string == "") return true;
	else return false;
}

// changes style of element with specified ID
function stylebid(id, style) {
	gebid(id).style=style;
}

// changes style of all elements with specified class
function stylebcn(classname, style) {
	var ell = gebcn(classname);for(var i = 0;i < ell.length;i++){ell[i].style=style;}
}

// changes style of all elements with specified tag name
function stylebtn(tagname, style) {
	var ell = gebtn(tagname);for(var i = 0;i < ell.length;i++){ell[i].style=style;}
}

// use id "demo" to see an example menu
// the id will get used to identify the menu and open and close it
// innerhtml must contain a string of HTML code
function Menu() {
	this.defaultstyling = "position:fixed;width:65vw;height:70vh;z-index:5000;background-color:#cecece;border-radius:2em;border-style:solid;border-width:0.2em;border-color:black;border-radius:1.5em;filter:drop-shadow(0.2em 0.2em 0.2em rgba(0,0,0,0.6));";
	this.new = function(id, title, innerhtml) {
		if(id != "demo"){if(isempty(id) || isempty(innerhtml)){error("values for Menu.new() can't be left undefined, empty or null!");return;}}
		if(id == "demo"){title="Demo Menu - Title";innerhtml="This is the content of the menu.<br>You can add <b>HTML</b> <i>tags</i> <u>of</u> <sup>all</sup> <sub>sorts</sub> here,<br>like <button>Buttons</button> or <input type='text' placeholder='Inputs'> or even iframes:<br><iframe src='https://www.example.com'></iframe><br><br>";}
		
		var menu = document.createElement("div");
		menu.id="jsl_menu" + id;
		menu.style=Menu.defaultstyling + "top:120vh;";
		menu.innerHTML='<div class="menu_title" style="font-size:1.5em;text-align:center;padding:0.2em;">' + title + '</div><div style="height:1em;"></div><div class="menu_content" style="font-size:1em;text-align:center;padding:0.2em;">' + innerhtml + '</div><img style="z-index:0;position:absolute;top:0px;right:0px;width:2em;height:2em;cursor:pointer;border-radius:20vw;" title="Close" src="https://raw.githubusercontent.com/Sv443/TextAdventureGame/master/raw_red.png" onclick="Menu.close(' + "'" + id + "'" + ');"></img><img style="z-index:1;position:absolute;top:0px;right:0px;width:2em;height:2em;cursor:pointer;border-radius:20vw;" title="Close" src="https://raw.githubusercontent.com/Sv443/TextAdventureGame/master/whitex.png" onclick="Menu.close(' + "'" + id + "'" + ');"></img>';
		document.body.appendChild(menu);
	}
	this.open = function(id) {
		if(isempty(gebid("jsl_menu" + id))){error("you need to create the menu before you try to open it or you entered the wrong id");return;}
		stylebid("jsl_menu" + id, Menu.defaultstyling + "top:15vh;left:17.5vw;");
		document.addEventListener("keydown", function(e){if(e.keyCode == 27){Menu.close(id);}});
	}
	this.close = function(id) {
		if(isempty(gebid("jsl_menu" + id))){error("you need to create the menu before you try to close it or you entered the wrong id");return;}
		stylebid("jsl_menu" + id, Menu.defaultstyling + "top:120vh;");
	}
	this.theme = function(theme) {
		if(theme == "light"){
			Menu.defaultstyling = "position:fixed;width:65vw;height:70vh;z-index:5000;background-color:#cecece;border-radius:2em;border-style:solid;border-width:0.2em;border-color:black;border-radius:1.5em;filter:drop-shadow(0.2em 0.2em 0.2em rgba(0,0,0,0.6));";
		}
		else if(theme == "dark") {
			Menu.defaultstyling = "position:fixed;width:65vw;height:70vh;z-index:5000;background-color:#353535;border-radius:2em;border-style:solid;border-width:0.2em;border-color:white;border-radius:1.5em;color:white;filter:drop-shadow(0.2em 0.2em 0.2em rgba(0,0,0,0.6));";
		}
	}
	this.demonstrate = function() {
		Menu.new('demo');
		Menu.open('demo');
	}
}

// use id "demo" to see an example audio
// the id will get used to identify the audio and play and pause it
// src must contain a URL to the audio file
function Audio(){
	this.new = function(id, src) {
		if(id != "demo"){if(isempty(id) || isempty(src)){error("values for Audio.new() can't be left undefined, empty or null!");return;}}
		if(id == "demo"){src="https://raw.githubusercontent.com/Sv443/TextAdventureGame/master/fallingtree0.mp3";}
		
		var audio = document.createElement("audio");
		audio.id="jsl_audio" + id;
		audio.innerHTML='<source src="' + src + '">';
		audio.style="display:none;";
		document.body.appendChild(audio);
	}
	this.play = function(id) {
		if(isempty(gebid("jsl_audio" + id))){error("you need to create the audio before you try to play it or you entered the wrong id");return;}
		gebid("jsl_audio" + id).play();
	}
	this.pause = function(id) {
		if(isempty(gebid("jsl_audio" + id))){error("you need to create the audio before you try to pause it or you entered the wrong id");return;}
		gebid("jsl_audio" + id).pause();
	}
	this.volume = function(id, volume) { // volume must be a float (between 0 and 1.0)
		if(isempty(gebid("jsl_audio" + id))){error("you need to create the audio before you try to change the volume or you entered the wrong id");return;}
		gebid("jsl_audio" + id).volume=volume;
	}
	this.loop = function(id, looping) {
		if(isempty(gebid("jsl_audio" + id))){error("you need to create the audio before you try to activate/deactivate the looping attribute or you entered the wrong id");return;}
		if(looping !== false && looping !== true){error("you need to enter either true or false in the Audio.loop() function");return;}
		if(looping) gebid("jsl_audio" + id).setAttribute("loop", "true");
		else gebid("jsl_audio" + id).removeAttribute("loop");
	}
	this.demonstrate = function() {
		Audio.new('demo');
		alert("This demo will create the audio, play the audio for 2 seconds, pause it for 2 seconds, play it again for 2 seconds, then reduce the volume to 0.1 for 4 seconds and then increase the volume to 1 for the rest of the audio");
		Audio.play('demo');
		setTimeout(function(){Audio.pause('demo')}, 2000);
		setTimeout(function(){Audio.play('demo')}, 4000);
		setTimeout(function(){Audio.volume('demo', 0.1)}, 6000);
		setTimeout(function(){Audio.volume('demo', 1)}, 10000);
	}
}


// use id "demo" to see an example
// type is the HTML tag name (for example "div", "a", or "iframe")
// append is on which parent node the new element will be appended (use "body" to append on the document body, "head" to append on the document head, or another string to append to an element by id)
// content is the initial innerHTML of the created element
// if you want to add attributes to the element, you have to use Element.setAttribute() after the creation of it
// use Element.removeOther() to remove an element by id that has not been created with the Element.new() function, but is instead part of the document already
// values that can be left empty: "content" in Element.new(), "content" in Element.innerhtml() and Element.outerhtml(), "attributevalue" in Element.setAttribute()
function Element() {
	this.new = function(id, type, append, content) {
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
	this.remove = function(id) {
		if(isempty(id)){error("the id of the Element.remove() function can't be left empty, null or undefined");return;}
		var element = gebid("jsl_element" + id);
		element.parentNode.removeChild(element);
	}
	this.removeOther = function(id) {
		if(isempty(id)){error("the id of the Element.removeOther() function can't be left empty, null or undefined");return;}
		var element = gebid(id);
		element.parentNode.removeChild(element);
	}
	this.outerhtml = function(id, content) {
		if(isempty(id)){error("the id of the Element.outerhtml() function can't be left empty, null or undefined");return;}
		gebid("jsl_element" + id).outerHTML=content;
	}
	this.innerhtml = function(id, content) {
		if(isempty(id)){error("the id of the Element.innerhtml() function can't be left empty, null or undefined");return;}
		gebid("jsl_element" + id).innerHTML=content;
	}
	this.setAttribute = function(id, attributename, attributevalue) {
		if(isempty(id)){error("the id of the Element.setAttribute() function can't be left empty, null or undefined");return;}
		if(isempty(attributename)){error("the attributename of the Element.setAttribute() function can't be left empty, null or undefined");return;}
		gebid("jsl_element" + id).setAttribute(attributename, attributevalue);
	}
	this.demonstrate = function() {
		window.scrollTo(0,document.body.scrollHeight);
		alert("scroll to the bottom to see the demo element");
		Element.new('element_demo', 'div', 'body', '<b>this</b> <i>is</i> <u>the</u> <sub>innerHTML</sub> of the demo element');
		setTimeout(function(){Element.innerhtml('element_demo', 'utilizing Element.innerhtml(), you can change this value dynamically');},5000);
		setTimeout(function(){Element.innerhtml('element_demo', 'in five seconds, this element will be removed');},10000);
		setTimeout(function(){Element.remove('element_demo');},15000);
	}
}

// copies the specified text to the clipboard
function copy(text) {
	var copyelem = document.createElement("textarea");
	copyelem.id="jsl_copyta";
	copyelem.innerHTML=text;
	document.body.appendChild(copyelem);
	gebid("jsl_copyta").select();
	document.execCommand("copy");
	clearih("jsl_copyta");
	clearoh("jsl_copyta");
}

// sends alert with randomized title, error cause and your contact info (can be left empty) 
function error(cause, contact) {
	var r = Math.floor(Math.random() * errortitle.length);
	if(isempty(contact)) contact = "";
	else contact = "(" + contact + ") ";
	alert(errortitle[r] + "The following error occured:\n\n" + cause + "\n\nPlease contact me " + contact + "with the above information and what you did before the error occured so I can fix it. Thanks!");
}

// tests if two elements are colliding - returns true / false - a and b have to be elements so an example usage would be: colliding(gebid("player"), gebcn("enemy"));

function isColliding(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}
