document.addEventListener("DOMContentLoaded", function() {
    eventListeners();
});


function eventListeners() {
    mobileMenu();
    darkMode();
    crearMapa();
}



function crearMapa() {
    const mapa = L.map('map').setView([19.879447983232513, -103.59169788829476], 16 );
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    const greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const marker = L.marker([19.879447983232513, -103.59169788829476], { icon: greenIcon }).addTo(mapa);
}


function mobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.addEventListener("click", mostrarNavegacionResponsive);
}

function darkMode() {
    const darkMode = document.querySelector(".dark-mode");
    darkMode.addEventListener("click", modoOscuroTodo);

    const preferDarkModeOption = window.matchMedia("(prefers-color-scheme: dark)");

    // console.log(preferDarkModeOption);
    preferDarkMode(preferDarkModeOption.matches);
    preferDarkModeOption.addEventListener("change", preferDarkMode(preferDarkModeOption.matches));
}



/* Funciones auxiliares */
function mostrarNavegacionResponsive() {
    const navegacion = document.querySelector(".navegacion");

    if (navegacion.classList.contains("mostrar")) {
        navegacion.classList.remove("mostrar");
    } else {
        navegacion.classList.add("mostrar");
    }
}


function modoOscuroTodo() {
    document.body.classList.toggle("oscuro");
}


function preferDarkMode(preference) {
    if (preference) {
        document.body.classList.add("oscuro");
    } else {
        document.body.classList.remove("oscuro");
    }
}