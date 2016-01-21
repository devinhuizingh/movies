$(document).ready( function() {
	
	$(".movie").submit(function(e) {
		e.preventDefault();
		$(".recomendations").html("");
		var input = $(".input").val();
		$(".recomendations").html("See results below...")
		getData(input)
		});

	function getData(input){
		var params={
			q:input,
			type:"movies",
			info:"1",
			limit:"6",
			k:"193001-Movies-EWYKEOWB",
			jsonp:'callback',
			
		}
		
		$.ajax({
			url:'https://www.tastekid.com/api/similar',
			data:params,
			dataType:'jsonp',
			type:'GET',
		}).done(function(data){
			$.each(data.Similar.Results, function(i, recomend) {
				var embed="<p>" + recomend.Name + "</p><br>" +'<iframe width="560" height="315" src="' +recomend.yUrl+'" frameborder="0" allowfullscreen></iframe>'
				$(".recomendations").append(embed);
				
				
				
			});
		});
	};
			
		
		


	


})