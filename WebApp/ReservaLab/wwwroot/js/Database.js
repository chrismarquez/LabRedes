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

$(function() {
	$("#submit").click(function() {
		extractValues();
		return false;
	});
});