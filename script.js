var L1=label("label","for","firstname","Firstname");
var br1=linebreaker("br");
var I1=inputelement("input","type","firstname","id","firstname");
var br2=linebreaker("br");

 var l2=label("lable","for","Midilename","MidileName");
 var br3=linebreaker("br");
 var I2=inputelement("input","type","Midiletname","id","MidletName");
var br4=linebreaker("br")

var L3=label("label","for","lastname","LastName");
var br5=linebreaker("br");
var I3=inputelement("input","type","lastname","id","LastName");
var br6=linebreaker("br");

var L4=label("lable","for","email","Email");
var br7=linebreaker("br");
var I4=inputelement("input","type","email","id","Email");
var br8=linebreaker("br");

var L5=label("lable","for", "contact","Contact");
var br9=linebreaker("br");
var I5=inputelement("input","type","contact","id","Contact")
var br10=linebreaker("br")

document.body.append(L1,br1,I1,br2,l2,br3,I2,br4,L3,br5,I3,br6,L4,br7,I4,br8,L5,br9,I5,br10);

function label(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
     ele.setAttribute(attrname,attrvalue);
     ele.innerHTML=content;
     return ele;
}
function linebreaker(element){
    var ele=document.createElement(element);
    return ele;
    }
    function inputelement(tagname,attrname,attrvalue,attrname1,attrvalue1){
        var ele=document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        ele.setAttribute(attrname1,attrvalue1);
        return ele;
        
        }