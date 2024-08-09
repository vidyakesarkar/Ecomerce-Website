var i=0;
var t="Give Yourself \n a new Style this year"
function typing(){
	if(i<t.length){
		document.getElementById("text").innerHTML += t.charAt(i);
		i++;
		setTimeout(typing,100)
	}
}
typing();