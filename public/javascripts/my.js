$("a").click(function()
{
	$('.active').toggleClass("active");
	$(this).parent().toggleClass("active");
});

function insertNewMessage(msg)
{
	/*
	var msg = $('<li class="media"> <div class="media-left"> <a href="#"><img class="media-object" src="/demo.jpg"></a></div> <div class="media-body"><h4>xxx</h4><p>content</p></div></li>');
	*/
	var ul = $("ul.media-list");
	$.post( "/post", {"message":msg}, function( data ) {
		$("ul.media-list").append(data);
});
}

function postmessage()
{
	var msg = $("#msgInput").val();
	console.log("post message: "+msg);
	insertNewMessage(msg);
	return false;
}
$( window ).resize(function() {
	var height = $(window).height();
	console.log($(window).width()+","+$(window).height());
	$("ul.media-list").height(height*0.5);
});