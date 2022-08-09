
function renderImage(src, canv) {
	let presetImage = new Image();
	presetImage.src = src;
	let ctx = canv.getContext("2d");
	presetImage.addEventListener("load", function(){
		let imgWidth = this.naturalWidth;
		let imgHeight = this.naturalHeight;
		canv.width = imgWidth;
		canv.height = imgHeight;
		ctx.drawImage(this, 0, 0);
	});
}

window.onload = function(){
	let canv = document.querySelector("canvas#image");
	renderImage("image/hamster.jpg", canv)
}
function uploadImage(){
	let canv = document.querySelector("canvas#image");
	let elem = document.querySelector("input#file-upload");
	let files = elem.files;
	let reader = new FileReader();
	reader.readAsDataURL(files[0]);
	reader.addEventListener('load', () => {
		renderImage(reader.result, canv);
	});


	console.log("File uploaded.");

}

function convertImage(){
	console.log("Hamster");

}




