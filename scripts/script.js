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
        if (Math.random() < 0.96) buffer32[i] = 0xff000000;

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

    experiments = [" the boundaries and weaknesses of systems", "the intersections between data and perception", "coding algorithms to deidentify and abstract humans", "the use of neural networks ", "the cinematic tropes of digital culture"];
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

// JQUERY TO MAKE ANCHOR LINKS WORK ON WORKS PAGE
$(document).ready(function() {
    $('.anchorLink').on('click', function() {

        var target = $(this).attr('href');
        console.log("clicked # " + target);
        $('.workbox').hide();
        $('.aboutWorks').hide();
        $(target).show();
    });


});