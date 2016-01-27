$(document).ready(runApp);

function runApp() {
	
	$(".movie").submit(getData);
}

function getData(e) {
	e.preventDefault();
	$(".recomendations").html("");
	var input = $(".input").val();
	$(".recomendations").html("See results below...");
	
	var request={
		url:'https://www.tastekid.com/api/similar',
		data:{
			q:input,
			type:"movies",
			info:"1",
			limit:"6",
			k:"193001-Movies-EWYKEOWB",
			jsonp:'callback'
		},
		dataType:'jsonp',
		type:'GET'
	};

	$.ajax(request).done(addRecomendations);
}

function addRecomendations(data){
	$.each(data.Similar.Results, addOne);
}

function addOne(i, recomend) {
	var embed="<p>" + recomend.Name + "</p><br>" +'<iframe width="560" height="315" src="' +recomend.yUrl+'" frameborder="0" allowfullscreen></iframe>'
	$(".recomendations").append(embed);
}