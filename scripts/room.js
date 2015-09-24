function displayRoom(){

	/*var rooms = $.ajax({
 		dataType: "json",
 		url: "room.json",
 		data: data,
 		success: success
	});*/

	var rooms = $.getJSON("room.json").done(function(data){

		

		var result = "";

		for(var i = 0 ; i < data.room.length ; ++i){
			result += "room " + data.room[i].roomNr + " " + data.room[i].capacity + "<br />";
		}


		$("#room").html(result);
	});
}