$(document).ready(function () { //esperando al leer el documento
    var rutaDelAvion = {
        entry  : {
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x:100, y:-20},
                {x:300, y:10}
            ]
        },
        looping  : {
            curviness: 1.25,
            autoRotate: true,
            values: [
                { x: 510, y: 60 },
                { x: 620, y: -60 },
                { x: 500, y: -100 },
                { x: 380, y: 20 },
                { x: 500, y: 60 },
                { x: 580, y: 20 },
                { x: 620, y: 15 }
            ]
        },
        leave  : {
            curviness: 1.25,
            autoRotate: true,
            values: [
                { x: 660, y: 20 },
                { x: 800, y: 130 },
                { x: $(window).width() + 300, y: -100 },
            ]
        }
    };

    //iniciamos el controlador
    
    var controlador = new ScrollMagic.Controller();

    //vamos a crear la interpolación

    var interpolacion = new TimelineMax()
        .add(TweenMax.to($("#ovni"), 1.2, { css: { bezier: rutaDelAvion.entry }, ease: Power1.easeInOut }))
        .add(TweenMax.to($("#ovni"), 2, { css: { bezier: rutaDelAvion.looping }, ease: Power1.easeInOut }))
        .add(TweenMax.to($("#ovni"), 2.1, { css: { bezier: rutaDelAvion.leave }, ease: Power1.easeInOut }));
    
    //construyendo la escena 
    var escena = new ScrollMagic.Scene({ 
        triggerElement: "#trigger", 
        duration: 500, 
        offset:100
    })
        .setPin("#container")
        .setTween(interpolacion)
        .addTo(controlador);
})