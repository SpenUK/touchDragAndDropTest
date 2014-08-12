// var y_offset, x_offset, item;

// var currentMousePos = { x: -1, y: -1 };
//     $(document).on('mousemove', function(event) {
//         currentMousePos.x = event.pageX;
//         currentMousePos.y = event.pageY;
//     });

var pillsContainer = $('.nav-pills');

function randomiseDays(){
	var pills = pillsContainer.find('li'),
			inOrder = "MondayTuesdayWednesdayThursdayFridaySaturdaySunday",
			i, days ='';

	for ( i = 0; i <= pills.length - 1; i++) {
		var pill = $(pills[i]).find('a').html();
		days += pill;
	};
	if (days != inOrder) return false;

	pills.detach();
	for ( i = pills.length - 1; i >= 0; i--) {
		var rand = Math.floor(Math.random() * pills.length);
		pillsContainer.append(pills.splice(rand, 1));
		
	};
	
}


	
$(document).ready(function(){
		randomiseDays();
		pillsContainer.sortable({axis: "y", containment: pillsContainer});
})