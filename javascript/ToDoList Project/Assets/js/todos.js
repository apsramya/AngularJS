
//check of specific lis to create a line through
//$("li").on("click",function(){     its the same as click , it wont
	//work for future lis ..
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Click on X to delete ToDo
//$("span").on("click",function(event){
$("ul").on("click","span",function(event){
	/*use parent() to retrieve the li*/
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();/*to stop the activation of parent 
	events or listeners*/
});

//Capture the input value
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
	var todoList = $(this).val();
	$("ul").append("<li>"+
		"<span><i class='fa fa-trash' aria-hidden='true'></i></span> "+
		todoList+"</li>");
	$(this).val("");
	}
});

//to fade in and out when you click on the plus sign

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

/*if li is gray
		turn it black
	else
		turn it gray
	*/

	/*if($(this).css("color") === "rgb(128, 128, 128)" ){
		$(this).css({
		color:"black",
		textDecoration : "none"
		});
	}

	else {
		$(this).css({
		color:"gray",
		textDecoration : "line-through"
		});
	}*//*This can be converted into a single statement using toggle class*/

	/*$(this).css("color","gray");
	$(this).css("text-decoration","line-through");*/