var audio;

//hide pause during startup
$('#pause').hide();

initAudio($('#playlist li:first-child'));

function initAudio(element){
	var song = element.attr('song');
	var title = element.text();
	var cover = element.attr('cover');
	var artist = element.attr('artist');

	//create audio object
	audio = new Audio('media/'+song);

	//Insert audio info
	$('.artist').text(artist);

	//Insert title info
	$('.title').text(title);

	//Insert cover
	$('img.cover').attr('src','images/covers/'+cover);

	//removing the active class
	$('#playlist li').removeClass('active');
	//adding it on the element or song that is selected
	element.addClass('active');
}





//when 'play' is clicked, the audio play() implemented

$('#play').click(function(){
	audio.play();
	$('#pause').show();
	$('#play').hide();
	showDuration();

});

//when 'pause' is clicked, 'play' is stopped

$('#pause').click(function(){
	audio.pause();
	$('#play').show();
	$('#pause').hide();
});

//when 'stop' button is clicked, 'play' should stop

$('#stop').click(function(){
	audio.pause();
	audio.currentTime = 0;
	$('#play').show();
	$('#pause').hide();
});

//next button
$('#next').click(function(){
	audio.pause();
	var next = $('#playlist li.active').next();
	if(next.length === 0){
		next = $('#playlist li:first-child');
	}
	initAudio(next);
	audio.play();
	showDuration();
});


//prev button
$('#prev').click(function(){
	audio.pause();
	var prev = $('#playlist li.active').prev();
	if(prev.length === 0){
		prev = $('#playlist li:last-child');
	}
	initAudio(prev);
	audio.play();
	showDuration();
});

//playlist song click..implementing the click functionality
$('#playlist li').click(function(){
	audio.pause();
	initAudio($(this));
	$('#play').hide();
	$('#pause').show();
	audio.play();
	showDuration();
});


//volume control

$('#volume').change(function() {
	audio.volume = parseFloat(this.value / 10);
});

//Time/Duration 

function showDuration(){
	$(audio).bind('timeupdate',function(){
		//Get minutes and seconds
		var s = parseInt(audio.currentTime % 60);
		var m = parseInt(audio.currentTime / 60) % 60;
		if(s < 10 ){
			s = '0' + s;
		}
		$('#duration').html(m+":"+s);
		var value = 0;
		if(audio.currentTime > 0 ){
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		$('#progress').css('width',value+'%');
	});
}
