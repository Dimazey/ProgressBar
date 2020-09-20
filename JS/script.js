
let lengthProgBar = 0; 

let delta = 0;

function doProgBar() { 
	lengthProgBar += delta;
	if (lengthProgBar >= 100) {lengthProgBar = 100;} 
	$("#my-progress-bar").width(`${lengthProgBar}%`);
	$("#my-progress-bar").text(`${lengthProgBar}%`);
}

$('.j-drop').click(function() {
		lengthProgBar = 0;
		delta = 0;
		doProgBar();
});

$('.j-one').click(() => {
		delta = 1;
		doProgBar();	
});


$('.j-three').click(() => {
		delta = 3;
		doProgBar();	
});

$('.j-seven').click(() => {
		delta = 7;
		doProgBar();	
});



