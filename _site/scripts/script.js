// JQUERY TO MAKE ANCHOR LINKS WORK ON WORKS PAGE
$(document).ready(function() {

    var hash = window.location.hash;
    console.log("loaded hash" + hash);
    $('.workbox').hide();
    $('#aboutWorks').hide();
    $(hash).show();

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




    // var link = $('a');
    // $('.anchorLink').click(function(e) {
    //     e.preventDefault();
    //     hash = link.attr("href");
    //     window.location = hash;
    // });


});

'use strict';

// requestAnimationFrame polyfill by Erik Möller.
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavic, Darius Bacon and Joan Alba Maldonado.
// Adapted from https://gist.github.com/paulirish/1579671 which derived from
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// Added high resolution timing. This window.performance.now() polyfill can be used: https://gist.github.com/jalbam/cc805ac3cfe14004ecdf323159ecf40e
// MIT license
// Gist: https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
(function() {
    var vendors = ['webkit', 'moz', 'ms', 'o'],
        vp = null;
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame && !window.cancelAnimationFrame; x++) {
        vp = vendors[x];
        window.requestAnimationFrame = window.requestAnimationFrame || window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window.cancelAnimationFrame || window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) //iOS6 is buggy.
    {
        var lastTime = 0;
        window.requestAnimationFrame = function(callback, element) {
            var now = window.performance.now();
            var nextTime = Math.max(lastTime + 16, now); //First time will execute it immediately but barely noticeable and performance is gained.
            return setTimeout(function() { callback(lastTime = nextTime); }, nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());

// Background Noise
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');


canvas.width = canvas.height = 800;

function noise(ctx) {

    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        idata = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(idata.data.buffer),
        len = buffer32.length,
        i = 0;

    for (; i < len; i++)
        if (Math.random() < 0.91) buffer32[i] = 0xff000000;


    ctx.putImageData(idata, 0, 0);

}

var toggle = true;


function resize() {
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
}
resize();
window.onresize = resize;

const framesPerSecond = 24;
(function loop() {
    setTimeout(function() {
        toggle = !toggle;


    }, 1000 / framesPerSecond);

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