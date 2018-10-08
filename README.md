[![Build Status](https://travis-ci.org/Sv443/JSLib.svg?branch=master)](https://travis-ci.org/Sv443/JSLib) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/badges/shields.svg)](https://github.com/Sv443/JSLib)

## Sv443 JSLib - A JavaScript library that makes coding a bit faster by taking away a bit of the workarounds and the resulting pain in the ass

## To see some examples, please go to <a href="https://sv443.github.io/JSLib/demo.html">this website</a>



# Installation:
- Using the JSDelivr CDN, just add this tag to your HTML header:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Sv443/jslib@1.3.0/jslib.js"></script>
```

- Using NPM (The NPM version is missing a few features):
```
> npm i svjsl --save
```
Importing it in your script:
```javascript
const jsl = require("svjsl");
```


# Current Features:

## Included Scripts:
- js-cookie script - <a href="https://github.com/js-cookie/js-cookie">visit the GitHub page</a> to see examples and usage



## Shorter versions of most used functions:
```javascript
document.getElementById(id);
//becomes
gebid(id);


document.getElementsByClassName(class);
//becomes
gebcn(class);


document.getElementsByTagName(tagname);
//becomes
gebtn(tagname);


document.getElementById(id).innerHTML="";
//becomes
clearih(id);


document.getElementById(id).outerHTML="";
//becomes
clearoh(id);


document.body.innerHTML.includes(string);
//becomes
dbihi(string);


window.location.href.includes(string);
//becomes
wlhi(string);


console.log(string);
//becomes
clog(string);


if(string === undefined || string === null || string == ""){}
//becomes
if(isempty(string)){}


document.getElementById(id).style=style;
//becomes
stylebid(id, style);


var elements = document.getElementsByClassName(class); for(var i = 0;i < elements.length;i++){elements[i].style=style;}
//becomes
stylebcn(class, style);
```



## Menu Class
```javascript
Menu.demonstrate();
// creates and opens a demo menu so you can look at what you can do with it - try this first!

Menu.theme("dark"); or Menu.theme("light");
// changes the theme of all menus

Menu.new(id, title, innerhtml);
// creates a new menu with specified id, title and content (string containing HTML code)

Menu.open(id);
// after you created a menu you can open it with this function utilizing the id

Menu.close(id);
// the menu already has a close button but you can also close it utilizing the id like this
// this function also gets called if the user presses the ESC key, closing all menus


//Example: https://sv443.github.io/JSLib/demo.html
```



## Audio Class
```javascript
Audio.demonstrate();
// creates and plays a demo audio and uses the below functions so you can hear what you can do with it - try this first!

Audio.new(id, src, type);
// creates a new audio with specified id, source URL and type (must be either "mpeg" or "ogg")

Audio.play(id);
// after you created an audio you can play it with this function utilizing the id

Audio.pause(id);
// while the audio is playing you can pause it with this function utilizing the id

Audio.volume(id, volume);
// after you created an audio you can change the volume of it with this function utilizing the id
// the volume attribute needs to be a float between 0.0 and 1.0


//Example: https://sv443.github.io/JSLib/demo.html
```



## Element Class
```javascript
Element.demonstrate();
// creates an element, changes its innerHTML and deletes it afterwards to show you what you can do with this API - try this first!

Element.new(id, type, append, content);
// creates a new HTML element - id is used to modify it later, type specifies the tag name ("a", "div", "iframe", ...), append specifies the ID of the element this new element will be appended to, content is just the innerHTML of the new element
// if append is "body", it will be appended to the document body, same for "head"

Element.remove(id);
// removes an element with the specified id

Element.removeOther(id);
// removes an element that was not created by the Element.new() function by its DOM ID

Element.innerhtml(id, content);
// changes the innerHTML of the element with the specified id

Element.outerhtml(id, content);
// changes the outerHTML of the element with the specified id

Element.setAttribute(id, attribute_name, attribute_value);
// adds or changes the attribute of the element with the specified id, the attribute name and attribute value


//Example: https://sv443.github.io/JSLib/demo.html
```



## Copy to Clipboard
```javascript
copy(text);
//copies the specified text to the clipboard
//Example: https://sv443.github.io/JSLib/demo.html
```



## Slightly more advanced error system
```javascript
error(cause, contact);
//alerts a message with a randomized title, the specified error cause and your contact info (can be left empty or null)
```



## URLify
```javascript
urlify(string, prefix, target);
//will turn a URL inside the specified string to an HTML anchor (<a>) tag with a specified prefix and target
//if prefix is left empty or null, it will not be used - if target is left empty or null, it will default to '_self'
```



## Collision Detection
```javascript
isColliding(element_a, element_b);
//will return true if element_a collides with element_b
//element_a and element_b need to be elements, not strings!
//that means an example usage would be isColliding(gebid("Player"), gebid("Enemy"));
//it can't parse an array yet though, so you'll have to do that yourself
//Example: https://sv443.github.io/JSLib/demo.html
```



## Useful Variables
```javascript
ismobile = "true if the device is a phone or tablet, false if it is a PC";
qstr = "the website's query string (the part after the '?' in the URL), excluding the question mark, eg. 'q=example' in 'www.google.com/search?q=example'";
urlhost = "the websites hostname, eg. 'www.google.com' in 'www.google.com/search?q=example'";
urlpath = "the websites path, eg. '/search' in 'www.google.com/search?q=example'";
cururl = "the websites full URL without query string, eg. 'www.google.com/search' in 'www.google.com/search?q=example'";
fullurl = "the websites full URL, including query string, eg. 'www.google.com/search?q=example' in 'www.google.com/search?q=example'";
```



# How to Report Bugs or Contribute to the Script:
- If you want to report a bug or want to send in code, please post it as an issue <a href="https://github.com/Sv443/jslib/issues">here</a>
- If you want to contact me privately, please e-mail me at: <a href="mailto:sven.fehler@web.de">sven.fehler@web.de</a>
## Thanks :)
