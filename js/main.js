// var y_offset, x_offset, item;

// var currentMousePos = { x: -1, y: -1 };
//     $(document).on('mousemove', function(event) {
//         currentMousePos.x = event.pageX;
//         currentMousePos.y = event.pageY;
//     });

var pillsContainer = $('.nav-pills');

function randomizeDays(){
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
function setListeners(){
	console.log('button?');
	$('.container').on('click', 'a.btn-primary', function(){
		
		if (inOrder()){
			$('.modal-title').html('Well Done!')
			$('.modal-footer .btn-default').addClass('btn-next').html('Next Test!');
		} else {
			$('.modal-title').html('Oops, Not Quite!')
		}
	});
}

function inOrder(){
	var order = "MondayTuesdayWednesdayThursdayFridaySaturdaySunday";
	var pills = pillsContainer.find('li');
	var days ='';
	for ( i = 0; i <= pills.length - 1; i++) {
		var pill = $(pills[i]).find('a').html();
		days += pill;
	};
	if (days != order) return false;
	return true;

}
	
$(document).ready(function(){
		randomizeDays();
		pillsContainer.sortable({axis: "y", containment: pillsContainer});
		setListeners();
})