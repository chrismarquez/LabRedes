var firebase = new Firebase("https://redestecgda.firebaseio.com/");


function SimpleDate(dateArray) {
	this.year = dateArray[0];
	this.month = dateArray[1];
	this.day = dateArray[2];
}

SimpleDate.prototype = {
	constructor : SimpleDate,
	getDay: function() {
		return this.day;
	},
	getMonth: function() {
		return this.month;
	},
	getYear: function() {
		return this.year;
	},
	compareTo: function(date) { 
		
	}
};

function SimpleTime(timeArray) {
	this.hour = timeArray[0];
	this.min = timeArray[1];
}

function getReserved() {

}

function setReservation() { 
	firebase.push({
		time : extractValues(),
		students : addStudents()
	});
}

function extractValues() {
	var dateString = $("#datepicker").val();
	var date = new SimpleDate(dateString.split("-"));
	console.log(date.getDay());
	var startTime = $("#startTime").val();
	var endTime = $("#endTime").val();
	return [dateString, startTime, endTime];

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

function addStudents() {
	var data = $("#students").val().split("\n");
	var students = [];
	for (var i = 0; i < data.length; i++) {
		var split = data[i].indexOf("A0");
		var name = data[i].substring(0, split - 1);
		var id = data[i].substring(split, data[i].length);
		students[i] = {name: name, id : id};
	}
	return students;
}

$(function() {
	$("#submit").click(function() {
		setReservation();
		return false;
	});
	$("#submitItem").click(function() {
		addItem();
		return false;
	});
});