function randomName(){

	var parent = $("#gender");
	var enfant = $("#person");

	if(chance.gender() === 'Female'){
		parent.attr("class", "panel panel-danger");
		enfant.html(chance.name({ gender: "female" }) + " (Female)");
	} else {
		parent.attr("class", "panel panel-info");
		enfant.html(chance.name({ gender: "male" }) + " (Male)");
	}
}

function hideShowNames(){

	var div = $("#gender");

	if(div.is(":visible")){
		div.hide();
	} else {
		div.show();
	}
}