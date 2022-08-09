var c = document.querySelector("canvas#shader");
var gl = c.getContext("webgl");

function convertImage(){
	if (!gl){
		console.log("gl Load failed.")
	} else {
		console.log("gl load success.")
	}
}