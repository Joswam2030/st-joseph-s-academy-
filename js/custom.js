function myFunction(imgs){
	var expandImg = document.getElementById("expandedImg");
	var imgText = document.getElementById("imgtext")
	expandImg.src = imgs.src;
	imgText.innerHTML = imgs.alt;
	$("#displaySection").modal();
}