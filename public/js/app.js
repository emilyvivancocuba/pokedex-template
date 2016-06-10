// $(document).ready(function() {
// 	$.ajax({
// 		url: "pokemon.json"
// 	}).done(function(data) {
// 		console.log(data)
// 	})
// })




// $(document).ready(function() {
// 	$.ajax('pokemon.json').done(function(data) {
// 		console.log(data)
// 	})
// })





//get pasa los parámetros por url,
//entonces si usaramos get para contraseñar, mi contraseña se veria en la URL
//post pasa los parámetros mediante cabeceras, no se muestran en el url

var pokemon='<div class="row">'+
          '<div class="col-lg-3">'+
            '<div class="pokemon panel panel-primary">'+
              '<div class="panel-heading">'+
                '<h1>'+
                  '__nombre__'+
                  '<small>Seed Pokémon</small>'+
                  '<span class="label label-primary pull-right">#101</span>'+
                '</h1>'+
              '</div>'+
              '<div class="panel-body">'+
                '<a href="/pokemon/bulbasaur">'+
                  '<img class="avatar center-block" src="img/pokemons/'+'__nombre__'+'.jpg">'+
                '</a>'+
              '</div>'+
              '<div class="panel-footer">'
                '<div class="text-center">'+
                  '<a href="/grass">'+
                    '<span class="label type type-grass">'+
                      'Grass'+
                    '</span>'+
                   '</a>'+
                  '<a href="/poison">'+
                    '<span class="label type type-poison">'+
                      'Poison'+
                    '</span>'+
                  '</a>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'



$(document).ready(function() {
	$.get('pokemon.json').done(function(data) {
		var totalPokemon=data.length;
		for (var i = 0; i < totalPokemon; i++) {
			$('#lista-pokemon').append(
				pokemon
				.replace('__nombre__', data[i].name)
				.replace('__nombre__', data[i].name)
			);
		}
	})
})