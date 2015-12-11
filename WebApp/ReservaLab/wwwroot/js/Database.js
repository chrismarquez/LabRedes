var firebase = new Firebase("https://redestecgda.firebaseio.com/");


function getReserved() {

}

function setReservation() { 

}

function extractValues() {
	var dateString = $("#datepicker").val().split("-");
	var year = dateString[0];
	var month = dateString[1];
	var day = dateString[2];
	console.log(dateString);
}
function addItem() {
	var item = $("#item").val();
	var number = $("#itemNumber").val();
	if (item != "default" && parseInt(number) > 0) {
		var last = $("#addedItems").html() + "<br>";
		$("#addedItems").html(last + item + ": " + number);
		$("#itemNumber").val("0");
		$("#item").val("default");
	}
	
}

$(function() {
	$("#submit").click(function() {
		extractValues();
		return false;
	});
	$("#submitItem").click(function() {
		addItem();
		return false;
	});
});