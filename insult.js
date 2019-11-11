document.getElementById("button-1").onclick = function () {
	DisplayText();
};

var part1 = [ "you are ","your website is ", "your coding is "];
var part2 = [ "garbage!","illogical!", "does not compute!"];


function DisplayText () {
	var x=Math.floor(Math.random()*part1.length);
	var y=Math.floor(Math.random()*part2.length);
	document.getElementById("output").innerHTML = (part1[x]+part2[y]);
}






