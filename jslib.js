var jslversion = "1.0.0", jslname = "JSLib";
var qstr = window.location.search.substring(1); // this is the URL's query string (without question mark)
var urlhost = window.location.host, urlpath = window.location.pathname, cururl = urlhost + urlpath, fullurl = cururl + "?" + qstr;

// the various titles an error message can have - add new ones in your script by using errortitle.push("new title"); - you need to add a \n to the end to add a line break, or a blank space if you don't add a line break
var errortitle = ["Oh no! ", "Whoops! ", "Dang it! ", "Houston, we have a problem!\n", "Allan, please fix this.\n", ":(\n", "RIP :'(\n"];

var Menu = new Menu(), Lang = new Lang(), Notif = new Notif();
console.log("Powered by " + jslname + " v" + jslversion + " - (c) Sv443 / Sven Fehler 2018 ( https://www.github.com/Sv443 ) - licensed under the MIT license");


// gets the contents of all meta tags with the name="jsl_setting" attribute and adds customizable separators between them
function getMetaSettings(separation1, separation2){
	if(separation1 === undefined || separation1 === null || separation1 == 0){separation1 = ":";}
	if(separation2 === undefined || separation2 === null || separation1 == 0){separation2 = ",";}
	var metas = document.getElementsByClassName("jsl_setting");
	var output = "";
	for(var i = 0; i < metas.length; i++){
		if(metas[i].content != ""){
			output += metas[i].name + separation1 + metas[i].content + separation2;
		}
		else {
			output += metas[i].name + separation1 + undefined + separation2;
		}
	}
	return output;
}


// element with class="loadfocus" will be automatically focused on page load (useful for <input type="text"> tags)
document.addEventListener("DOMContentLoaded", function(){
	if(document.getElementsByClassName("loadfocus")[0] !== null && document.getElementsByClassName("loadfocus")[0].nodeName == "INPUT"){
		document.getElementsByClassName("loadfocus")[0].focus();
	}
});


// converts URL inside string to an HTML anchor tag with optional prefix and target attribute
function urlify(string, prefix, target) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
	if(prefix == "" || prefix === undefined || prefix === null){prefix = "";}
	else{prefix += "&nbsp;";}
	if(target == "" || target === undefined || target === null){target = "self_";}
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




/*----------------------------------------------------------------------Demonstration Purposes--------------------------------------------------------------------------------------*/

function demonstrateSettings(){
	var result = getMetaSettings(": ", "<br>");
	document.getElementById("settingsoutput").innerHTML = result;
}

// getMetaSettings
//
// var x = getMetaSettings(first separator, second separator);                                       set to undefined, null or 0 to use default value, set to "" to set no separator at all
// will fetch settings from an HTML file. HTML formatting to be recognized by this script:           <meta class="jsl_setting" name="setting_name" content="setting_value">
//
// Example:            var x = getMetaSettings(": ", "<br>");
//
// Example Result:     var x equals to "setting1_name: setting1_value<br>setting2_name: setting2_value<br>" and so on
//
// can be split to an array to parse better by using      var x = getMetaSettings(separator1, separator2).split(separator2);
// and then splitting like the following example          var y = x.split(separator2);
//
// side note: if a setting's content is left empty, the constant "undefined" will be returned as that setting's content - it will not break!





// autofocus
//
// <input type="text" id="keyfocus loadfocus"></input>
// id loadfocus will focus on the input element on page load, keyfocus will focus on the element if a (letter) key is pressed (this only has a handful of applications but i included it anyway)





function demonstrateUrlify() {
	var result = urlify(document.getElementById("urlifyinput").value, "", "blank_");
	document.getElementById("urlifyoutput").innerHTML = result;
	
	document.getElementById("urlifyoutput2").innerHTML = document.getElementById("urlifyinput").value; //raw value without urlify
}

// urlify
//
// var x = urlify(string, prefix, target);                                       set prefix to undefined, null or "" to disable it (example for a prefix: "[URL]") - target can be "blank_" or "self_"
// will convert a URL inside the string to an HTML anchor tag URL
//
// Example:         var string = "blah blah blah https://www.duckduckgo.com/ blah";
//                  var x = urlify(string, "[URL]", "blank_");
//
// Example Result:  var x equals to 'blah blah blah [URL] <a href="https://www.duckduckgo.com/" target="blank_">https://www.duckduckgo.com/</a> blah'
// 
// side note: if the target is left empty, it will default to "self_"