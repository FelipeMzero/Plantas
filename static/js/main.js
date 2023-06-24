// main.js

// Função para ler o arquivo CSV
function readCSVFile(file, callback) {
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status === 200) {
        const allText = rawFile.responseText;
        callback(allText);
      }
    };
    rawFile.send(null);
  }
  
  // Função para criar o card da planta com os dados do CSV
  function createPlantCard(plantData) {
    const plantCard = document.createElement("div");
    plantCard.classList.add("plant-card");
  
    const img = document.createElement("img");
    img.src = plantData.image;
    img.alt = plantData.name;
    plantCard.appendChild(img);
  
    const h3 = document.createElement("h3");
    h3.textContent = plantData.name;
    plantCard.appendChild(h3);
  
    const p = document.createElement("p");
    p.textContent = plantData.description;
    plantCard.appendChild(p);
  
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = "Saiba mais";
    plantCard.appendChild(a);
  
    return plantCard;
  }
  
  // Função para adicionar os cards das plantas na página
  function addPlantCards(plants) {
    const plantDetailsSection = document.querySelector(".plant-details");
  
    plants.forEach(function (plant) {
      const plantCard = createPlantCard(plant);
      plantDetailsSection.appendChild(plantCard);
    });
  }
  
  // Carregar e processar o arquivo CSV ao carregar a página
  window.addEventListener("DOMContentLoaded", function () {
    const csvFile = "/data/plants.csv";
    readCSVFile(csvFile, function (csvData) {
      // Converter os dados do CSV para objetos JavaScript
      const plants = convertCSVToObjects(csvData);
      // Adicionar os cards das plantas na página
      addPlantCards(plants);
    });
  });
  