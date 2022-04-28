
/* Canvas Grafico */
    //Better to construct options first and then pass it as a parameter
$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault();
        let input = $('input').val();
        $.ajax({
            type: 'GET',
            url:`https://pokeapi.co/api/v2/pokemon/${input}`,
            dateType: 'JSON'
        }).done(function(data){
            const nombre = data.name;
            const imagen = data.sprites.front_default;
            const peso = data.weight;
            
            $('#pokemon').html(`
                <h4>${nombre}</h4>
                <img src="${imagen}" alt="Imagen Pokemon ${nombre}">
                <p>Peso: ${peso}</p>
            `);
            let estadisticas = []
            data.stats.forEach(e => {
                estadisticas.push({label:e.stat.name, y: e.base_stat})
            })
            var options = {
                title: {
                    text: "Column Chart in jQuery CanvasJS"              
                },
                animationEnabled:true,
                data: [              
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints: estadisticas
                }
                ]
            };
            $("#estadisticas_pokemon").CanvasJSChart(options);    
            console.log(data)
        })
    })
})   
function fade(){
    $('button').fadeOut(1000,function(){
        $(this).fadeIn(1000)
    })
}
let n = 0;
let id = setInterval(fade,1000)
console.log(id)
while(n++<10){
}
id.clearInterval();

