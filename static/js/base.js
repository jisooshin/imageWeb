var data;
function renderImage(src, canv) {
	let presetImage = new Image();
	presetImage.src = src;
	if (!src.includes("image"))
	{
		window.alert("You have to upload image file.");
		throw "[ERROR] It can take image file only.";
	}

	let ctx = canv.getContext("2d");
	let imgWidth, imgHeight;

	presetImage.addEventListener("load", function(){
		imgWidth = this.naturalWidth;
		imgHeight = this.naturalHeight;
		canv.width = imgWidth;
		canv.height = imgHeight;
		ctx.drawImage(this, 0, 0);
		data = ctx.getImageData(0, 0, imgWidth, imgHeight).data;
	});
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



window.onload = function(){
	let canv = document.querySelector("canvas#image");
	renderImage("image/hamster.jpg", canv)
}





