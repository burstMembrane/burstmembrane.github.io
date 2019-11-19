// JQUERY TO MAKE ANCHOR LINKS WORK ON WORKS PAGE
$(document).ready(function() {


    $('.anchorLink').on('click', function() {

        var target = $(this).attr('href');
        console.log("clicked # " + target);
        $('.workbox').hide();
        $('#aboutWorks').hide();
        $(target).show();

    });

    $('#goFullScreen').on('click', function() {
        // if already full screen; exit
        // else go fullscreen
        console.log("you clicked");
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        ) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            element = $('.headbox').get(0);
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        }
    });



    // var hash = window.location.hash;
    // var link = $('a');
    // $('.anchorLink').click(function(e) {
    //     e.preventDefault();
    //     hash = link.attr("href");
    //     window.location = hash;
    // });


});



var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');


canvas.width = canvas.height = 500;

function noise(ctx) {

    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        idata = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(idata.data.buffer),
        len = buffer32.length,
        i = 0;

    for (; i < len; i++)
        if (Math.random() < 0.99) buffer32[i] = 0xff000000;

    ctx.putImageData(idata, 0, 0);

}

var toggle = true;


function resize() {
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
}
resize();
window.onresize = resize;

(function loop() {

    toggle = !toggle;
    if (toggle) {
        requestAnimationFrame(loop);
        return;
    }

    noise(ctx);

    requestAnimationFrame(loop);

})();


function randomExperiment() {

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    textSpace = document.getElementById('randomexperiment');

    experiments = ["manipulating YouTube algorithms", "the intersections between data and perception", "coding algorithms to deidentify and abstract humans", "the use of neural networks", "the cinematic tropes of digital culture", "analyzing the Spectacle in modern life", "creative web application programming", ];
    var i = 0;
    typeWriter();
    var speed = 3000; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < experiments.length) {
            tmp = getRndInteger(0, experiments.length);
            textSpace.innerHTML = experiments[tmp]
            i++;
            setTimeout(typeWriter, speed);

            if (i == experiments.length) {
                i = 0;
            }
        }
    }
}