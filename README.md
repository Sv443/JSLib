## Sv443 JSLib - A JavaScript library that is used by most of my JS projects that makes coding a bit faster and takes away a bit of the pain in the butt

## To see some examples, please go to <a href="https://sv443.github.io/jslib/demo.html">this website</a>



# Installation:
- Just add this tag to your HTML header:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Sv443/jslib@1.3.0/jslib.js"></script>
```
- Then, add this to one of your scripts:
```javascript
function domcl() {
    //this function will be executed after the DOM content has loaded
    //not including this function will result in an error message
}
```



# Current Features:

## Included Scripts:
- js-cookie script - <a href="https://github.com/js-cookie/js-cookie">visit the GitHub page</a> to see examples and usage



## Shorter versions of most used functions:
```javascript
document.getElementById(id);  ->  gebid(id);
document.getElementsByClassName(class);  ->  gebcn(class);
document.getElementsByTagName(tagname);  ->  gebtn(tagname);
document.getElementById(id).innerHTML="";  ->  clearih(id);
document.getElementById(id).outerHTML="";  ->  clearoh(id);
document.body.innerHTML.includes(string);  ->  dbihi(string);
window.location.href.includes(string);  ->  wlhi(string);
console.log(string);  ->  clog(string);
if(string === undefined || string === null || string == ""){}  ->  if(isempty(string)){}
document.getElementById(id).style=style;  ->  stylebid(id, style);
var elements = document.getElementsByClassName(class); for(var i = 0;i < elements.length;i++){elements[i].style=style;} -> stylebcn(class, style);
```



## Menu API
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
```



## Audio API
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
```



## Element API
```javascript
Element.demonstrate();
// creates an element, changes its innerHTML and deletes it afterwards to show you what you can do with this API - try this first!

Element.new(id, type, append, content);
// creates a new HTML element - id is used to modify it later, type specifies the tag name ("a", "div", "iframe", ...), append specifies the ID of the element this new element will be appended to, content is just the innerHTML of the new element

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
```



## Copy to Clipboard
```javascript
copy(text);
//copies the specified text to the clipboard
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



## MetaSettings
HTML:
```html
<meta class="jsl_setting" name="your setting's name" content="the value of the setting">
```
JS:
```javascript
getMetaSettings(separation1, separation2);
//returns the following of all metas with the class="jsl_setting":
//name1 + separation1 + content1 + separation2 + name2 + separation1 + content2 + separation2, ...
//example: getMetaSettings(': ', '<br>'); with the meta tag in the code block above would return:
//"your setting's name: the value of the setting<br>"
//example 2: getMetaSettings(',', ';'); with the meta tag in the code block above would return:
//"your setting's name,the value of the setting;"

//an empty content will result in undefined
```



## Useful Variables
```javascript
ismobile = "true if the device is a phone or tablet, false if it is a PC";
qstr = "the website's query string (the part after the '?' in the URL), excluding the question mark, eg. 'q=example' in 'www.google.com/search?q=example'";
urlhost = "the websites hostname, eg. 'www.google.com' in 'www.google.com/search?q=example'";
urlpath = "the websites path, eg. '/search' in 'www.google.com/search?q=example'";
cururl = "the websites full URL without query string, eg. 'www.google.com/search' in 'www.google.com/search?q=example'";
fullurl = "the websites full URL, including query string, eg. 'www.google.com/search?q=example' in 'www.google.com/search?q=example'";
dummytext.tXY = "replace XY with 10, 30, 50, 70, 100, 150, 200 or 300 depending on how many words you want to get the Lorem Ipsum layout dummy text to test out layouts without having content yet - example HTML usage: <script>document.write(dummytext.t50);</script>";
```



# How to Report Bugs or Contribute to the Script:
- If you want to report a bug or want to send in code, please post it as an issue <a href="https://github.com/Sv443/jslib/issues">here</a>
- If you want to contact me privately, please e-mail me at: <a href="mailto:sven.fehler@web.de">sven.fehler@web.de</a>
## Thanks :)
