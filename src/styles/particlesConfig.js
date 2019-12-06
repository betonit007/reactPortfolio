
//import clouds from './images/clouds.svg';

export const particlesConfig = {

    "particles": {
        "number": { "value": 38, "density": { "enable": true, "value_area": 4005.992965476349 } },
        "color": { "value": "#3740d9" },
        "shape": {
            "type": "image", "stroke": { "width": 15, "color": "#000000" },
            "polygon": { "nb_sides": 6 }, "image": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Antu_weather-many-clouds.svg/800px-Antu_weather-many-clouds.svg.png",
                "width": 15, "height": 15
            }
        },
        "opacity": {
            "value": 0.5, "random": false,
            "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
        },
        "size": { "value": 272.4075216523917, "random": false, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
        "move": {
            "enable": true, "speed": 6, "direction": "right", "random": false, "straight": false, "out_mode": "out", "bounce": false,
            "attract": { "enable": false, "rotateX": 3124.6745130715526, "rotateY": 3365.0340910001337 }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }, "resize": true
        },
        "modes": {
            "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
            "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
            "repulse": { "distance": 200, "duration": 0.4 },
            "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 }
        }
    },
    "retina_detect": true
}
