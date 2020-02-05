const cursosData = [
    {
        nivel: 1,
        dia: 'Domingo',
        hora: '11:00 am',
        lugar: 'Ninano Cafe',
        cuposMax: 15,
        cuposNow: 9,
        precio: '250.000',
        estado: 'Abierto',
        duracion: 90,
        edad: '14+'
    },
    {
        nivel: 2,
        dia: 'Domingo',
        hora: '11:00 am',
        lugar: 'Ninano Cafe',
        cuposMax: 15,
        cuposNow: 9,
        precio: '250.000',
        estado: 'Abierto',
        duracion: 60,
        edad: '14+'
    },
   
];

const cursosWhiteBox = document.querySelector('#cursos-white-box');

function renderCursos (arr) {
    arr.forEach(curso => {
        const markup = `<div class="curso-card-body">
                            <h3 class="card-title"> <span class="nivel-span">Nivel ${curso.nivel}</span> - Conozcamos Coreano</h3>
                            <div class="card-content-container">
                                <div class="dia centrador-v">
                                    <div class="inner-category-div">
                                        <h5 class="category-label">Dia:</h5>
                                        <h5 class="category-item">${curso.dia}</h5>
                                    </div>
                                </div>
                                <div class="hora centrador-v">
                                    <div class="inner-category-div">
                                        <h5 class="category-label">Hora:</h5>
                                        <h5 class="category-item">${curso.hora}</h5>
                                    </div>
                                </div>
                                <div class="lugar centrador-v">
                                    <div class="inner-category-div">
                                        <h5 class="category-label">Lugar:</h5>
                                        <h5 class="category-item">${curso.lugar}</h5>
                                    </div>
                                </div>
                                <div class="cupos centrador-v">
                                    <div class="inner-category-div">
                                        <h5 class="category-label">Cupos:</h5>
                                        <h5 class="category-item">${curso.cuposNow}/${curso.cuposMax}</h5>
                                    </div>
                                </div>
                                <div class="precio centrador-v">
                                    <div class="inner-category-div">
                                        <h5 class="category-label">Precio:</h5>
                                        <h5 class="category-item">$${curso.precio}</h5>
                                    </div>
                                </div>
                                <div class="estado centrador-v">
                                    <div class="inner-category-div">
                                        <h5 class="category-label">Estado:</h5>
                                        <h5 class="category-item">${curso.estado}</h5>
                                    </div>
                                </div>
                                <div class="duracion centrador-v">
                                    <div class="inner-category-div">
                                        <h5 class="category-label">Duracion:</h5>
                                        <h5 class="category-item">${curso.duracion} Min</h5>
                                    </div>
                                </div>
                                <div class="edad centrador-v">
                                    <div class="inner-category-div">
                                        <h5 class="category-label">Edad:</h5>
                                        <h5 class="category-item">${curso.edad}</h5>
                                    </div>
                                </div>
                                <div class="boton">
                                    <a><div class='curso-btn'>Inscribirme!</div></a>
                                </div>
                            </div>
                        </div>`;
        cursosWhiteBox.insertAdjacentHTML("beforeend", markup);
    });
    
};

renderCursos(cursosData)