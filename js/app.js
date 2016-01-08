$(document).ready( function() {
	
	$(".movie").submit(function(e) {
		e.preventDefault();
		var input = $(".input").val();
		console.log(input);
		getData(input)
	});

	function getData(input){
		var params={
			q:input,
			info:"1",
			k:"193001-Movies-EWYKEOWB",
			jsonp:'callback',
			
		}
		
		$.ajax({
			url:'https://www.tastekid.com/api/similar',
			data:params,
			dataType:'jsonp',
			type:'GET',
		}).done(function(data){
			$.each(data, function(i, recomend) {
				//var embed='<iframe width="560" height="315" src=' +"'" +recomend.yUrl+"'" +'frameborder="0" allowfullscreen></iframe>'
				//("#recomendations").append(embed),
				//console.log(recomend);
				var test= "<p>" + "hello" + "</p>"
				$(".recomendations").append("test");
			});
		});
	};
			
		
		


	


})