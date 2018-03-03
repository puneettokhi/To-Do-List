
// second li- when an li is clicked inside a ul, run this code

// var li = $("li").on("click","li",function(){
var ul = $("ul").on("click","li",function(){
// 	if($(this).css("color") == "rgb(128, 128, 128)")
// 	{
// 		$(this).css("color","black");
// 		$(this).css("textDecoration","none");
// 	}

// 	else{

// 	$(this).css("color","grey")	
// 	$(this).css("textDecoration","line-through");
// }

// })

$(this).toggleClass("completed")

})

// var delet = $("span").on("click","li",function(e){
	var delet = $("ul").on("click","span",function(e){

	$(this).parent().fadeOut(1000,function(){
		(this).remove();
	});
	e.stopPropagation();  // stops from bubbling out to other elements
})

$("input[type='text']").on("keypress",function(e){
	if(e.which === 13){      // 13 is the enter key

		// grabs new ToDo text from input
		var val = $(this).val();

		// create a new li and add to ul

		$(this).val("");

		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + val + "</li");
	}
})


$("#icon").on("click",function(){
	// $("input[type='text']").on("keypress",function(e){
	// if(e.which === 13){      // 13 is the enter key

		// // grabs new ToDo text from input
		// var val = $("input[type='text']").val();

		// // create a new li and add to ul

		// $("input[type='text']").val("");

		// $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + val + "</li");

		$("input[type='text']").fadeToggle(100);



// console.log("dab");

});

// $("#icon").on("click",function()){
// 	$(this).val("");

// 		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + val + "</li");
// }