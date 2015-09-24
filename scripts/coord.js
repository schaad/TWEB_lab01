function coord(event){
	var posX;
	var posY;

	posX = event.clientX;
	posY = event.clientY;

	$("#footer").html(posX + ", " + posY);
}