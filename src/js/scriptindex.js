document.getElementById("searchInput").addEventListener("click", function(event) {
    var plantTable = document.getElementById("plantTable");
    plantTable.innerHTML = `
        <ul id="plantList" class="horizontal-list">
            <li onclick="selectPlant('Lirio da paz')">Lirio da paz</li>
            <li onclick="selectPlant('Asplenio')">Asplenio</li>
            <li onclick="selectPlant('Cactus')">Cactus</li>
            <li onclick="selectPlant('Bonsai')">Bonsai</li>
            <li onclick="selectPlant('Bromelia')">Bromelia</li>
            <li onclick="selectPlant('Peperomia')">Peperomia</li>
            <li onclick="selectPlant('Orquidea')">Orquidea</li>
            <li onclick="selectPlant('Anturio')">Anturio</li>
            <li onclick="selectPlant('Espada de São Jorge')">Espada de São Jorge</li>
            <li onclick="selectPlant('Begônia')">Begônia</li>
            <li onclick="selectPlant('Aglaonema')">Aglaonema</li>
            <li onclick="selectPlant('Kalanchoe')">Kalanchoe</li>
            <li onclick="selectPlant('Bamboo')">Bamboo</li>
            <li onclick="selectPlant('Rosas Colombianas')">Rosas Colombianas</li>
            <li onclick="selectPlant('Samambaia')">Samambaia</li>
            <li onclick="selectPlant('Costela de Adão')">Costela de Adão</li>
            <li onclick="selectPlant('Jiboia')">Jiboia</li>
            <li onclick="selectPlant('Pata de Elefante')">Pata de Elefante</li>
            <li onclick="selectPlant('Raphis')">Raphis</li>
            <li onclick="selectPlant('Zamioculca')">Zamioculca</li>
            <li onclick="selectPlant('Broto de babosa')">Broto de babosa</li>
            <li onclick="selectPlant('Crisatêmo')">Crisatêmo</li>
            <li onclick="selectPlant('Planta aranha')">Planta aranha</li>
            <li onclick="selectPlant('Dracaena')">Dracaena</li>
            <li onclick="selectPlant('Vasos de barro')">Vasos de barro</li>
            <li onclick="selectPlant('Suculenta')">Suculenta</li>
        </ul>
    `;
});

document.addEventListener("click", function(event) {
    var targetElement = event.target; 
    if (targetElement.id !== "searchInput" && targetElement.parentNode.id !== "plantTable") {
        var plantTable = document.getElementById("plantTable");
        plantTable.innerHTML = "";
    }
});

document.getElementById("plantTable").addEventListener("click", function(event) {
    event.stopPropagation();
});

document.getElementById("searchInput").addEventListener("mouseleave", function() {
    var plantTable = document.getElementById("plantTable");
    plantTable.hideTimeout = setTimeout(function() {
        plantTable.innerHTML = "";
    }, 300);
});

document.getElementById("searchInput").addEventListener("mouseenter", function() {
    clearTimeout(document.getElementById("plantTable").hideTimeout);
});

document.getElementById("plantTable").addEventListener("mouseenter", function() {
    clearTimeout(this.hideTimeout);
});

document.getElementById("plantTable").addEventListener("mouseleave", function() {
    var plantTable = document.getElementById("plantTable");
    plantTable.hideTimeout = setTimeout(function() {
        plantTable.innerHTML = "";
    }, 300);
});

function selectPlant(plantName) {
    document.getElementById("searchInput").value = plantName;
    var plantTable = document.getElementById("plantTable");
    plantTable.innerHTML = "";
}

document.querySelector(".btn-success").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado
    search(); // Chamando a função search() ao clicar no botão "Buscar"
});

function search() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var plantas = document.getElementsByClassName("card-title");
    var encontrado = false;

    for (var i = 0; i < plantas.length; i++) {
        var planta = plantas[i].innerText.toLowerCase();
        if (planta.includes(input)) {
            plantas[i].scrollIntoView({behavior: "smooth", block: "center"});
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        alert("Desculpe, não temos essa planta em nosso site.");
    }
}
