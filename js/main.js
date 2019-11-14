$("button").click( function(){
	
	$.getJSON("users.json", function(obj){
		
		$.each((obj, function(key, value){
			$("ul").append("<li>"+value.name+"</li>");
			
		});
	});
});