const cursosBtn = document.querySelector('#cursos-btn');
const preguntasBtn = document.querySelector('#preguntas-btn');
const cursosBox = document.querySelector('#cursos-box');
const preguntasBox = document.querySelector('#preguntas-box');

preguntasBtn.addEventListener('click', () => {
    cursosBox.style.display = "none";
    preguntasBox.style.display = "grid";
    preguntasBtn.classList.add('control-active');
    cursosBtn.classList.remove('control-active');
});

cursosBtn.addEventListener('click', () => {
    cursosBox.style.display = "block";
    preguntasBox.style.display = "none";
    cursosBtn.classList.add('control-active');
    preguntasBtn.classList.remove('control-active');
});

// window.addEventListener('resize', () => {
//     if (document.documentElement.clientWidth >= 1100) {
//         preguntasBox.style.display = "block";
//         cursosBox.style.display = "block";
//     } 
//     else  {
//         if (preguntasBox.style.display === "block") {
//             cursosBox.style.display = "none";
//             preguntasBtn.classList.add('control-active');
//             cursosBtn.classList.remove('control-active');
//         } else {
//             cursosBox.style.display = "display";
//             preguntasBtn.classList.remove('control-active');
//             cursosBtn.classList.add('control-active');
//         };
//     }
// });

