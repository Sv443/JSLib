## Sv443 JSLib - A JavaScript library that is used by most of my JS projects that makes coding a bit faster and takes away a bit of the pain in the butt


# Current Features:

- Shorter versions of most used functions:
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



- Slightly more advanced error system
```javascript
error(cause, contact);
//alerts a message with a randomized title, the specified error cause and your contact info (can be left empty or null)
```



- URLify
```javascript
urlify(string, prefix, target);
//will turn a URL inside the specified string to an HTML anchor (<a>) tag with a specified prefix and target
//if prefix is left empty or null, it will not be used - if target is left empty or null, it will default to '_self'
```



- MetaSettings
```html
<meta class="jsl_setting" name="your setting's name" content="the value of the setting">
```
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



- Useful Variables
```javascript
qstr = "the website's query string (the part after the '?' in the URL), excluding the question mark, eg. 'q=example' in 'www.google.com/search?q=example'";
urlhost = "the websites hostname, eg. 'www.google.com' in 'www.google.com/search?q=example'";
urlpath = "the websites path, eg. '/search' in 'www.google.com/search?q=example'";
cururl = "the websites full URL without query string, eg. 'www.google.com/search' in 'www.google.com/search?q=example'";
fullurl = "the websites full URL, including query string, eg. 'www.google.com/search?q=example' in 'www.google.com/search?q=example'";
```





# Setup:
- Just add this tag to your HTML header:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Sv443/jslib@latest/jslib.js"></script>
```
- Then, add this to one of your scripts:
```javascript
function domcl() {
    //this function will be executed after the DOM content has loaded
    //not including this function will result in an error message
}
```




# How to Report Bugs or Contribute to the Script:
- If you want to report a bug or want to send in code, please post it as an issue <a href="https://github.com/Sv443/jslib/issues">here</a>
- If you want to contact me privately, please e-mail me at: <a href="mailto:sven.fehler@web.de">sven.fehler@web.de</a>
## Thanks :)
