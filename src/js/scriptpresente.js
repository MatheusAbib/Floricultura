document.getElementById("searchInput").addEventListener("click", function(event) {
    var plantTable = document.getElementById("plantTable");
    plantTable.innerHTML = `
        <ul id="plantList" class="horizontal-list">
            <li onclick="selectPlant('matheus')">Brownie com flores comestiveis</li>
            <li onclick="selectPlant('matheus01')">Cesta de chocolates</li>
            <li onclick="selectPlant('matheus02')">Aperitivos</li>
            <li onclick="selectPlant('matheus03')">Coração do amor</li>
            <li onclick="selectPlant('matheus04')">Kit de sabores</li>
            <li onclick="selectPlant('matheus05')">Ferrero Rocher</li>
            <li onclick="selectPlant('matheus06')">Cesta café da manhã</li>
            <li onclick="selectPlant('matheus08')">Vinho Tinto</li>
            <li onclick="selectPlant('matheus09')">Passione de rosas</li>
            <li onclick="selectPlant('matheus10')">Ursinho de Pelucia</li>
            <li onclick="selectPlant('matheus11')">Chandon</li>

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

function selectPlant(cardId) {
    document.getElementById(cardId).scrollIntoView({behavior: "smooth", block: "start"});
    document.getElementById("searchInput").value = document.getElementById(cardId).getElementsByClassName("card-title")[0].innerText;
    var plantTable = document.getElementById("plantTable");
    plantTable.innerHTML = "";
}

document.querySelector(".btn-success").addEventListener("click", function(event) {
    search(); // Chamando a função search() ao clicar no botão "Buscar"
});

function search() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var plantas = document.getElementsByClassName("card-title");
    var encontrado = false;

    for (var i = 0; i < plantas.length; i++) {
        var planta = plantas[i].innerText.toLowerCase();
        if (planta.includes(input)) {
            var cardId = plantas[i].parentNode.parentNode.id;
            selectPlant(cardId);
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        alert("Desculpe, não temos essa planta em nosso site.");
    }
}
