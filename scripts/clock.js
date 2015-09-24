function startClock(){
	var now = new Date();

	$("#clock").html(now.toString());

	setTimeout(function(){startClock()},1000);
}