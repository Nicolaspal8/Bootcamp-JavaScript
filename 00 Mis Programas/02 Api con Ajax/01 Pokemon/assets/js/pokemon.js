
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
                estadisticas.push({ y: e.base_stat,label:e.stat.name})
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
