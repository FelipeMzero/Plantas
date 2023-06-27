// main3.js

// Dados fictícios dos vendedores
const vendors = [
    {
      name: "Vendedor 1",
      phone: "123456789",
      address: "Endereço 1",
      plantTypes: ["Planta A", "Planta B", "Planta C"]
    },
    {
      name: "Vendedor 2",
      phone: "987654321",
      address: "Endereço 2",
      plantTypes: ["Planta D", "Planta E"]
    },
    {
      name: "Vendedor 3",
      phone: "456789123",
      address: "Endereço 3",
      plantTypes: ["Planta F", "Planta G", "Planta H"]
    },
    {
      name: "Vendedor 4",
      phone: "321654987",
      address: "Endereço 4",
      plantTypes: ["Planta I", "Planta J", "Planta K"]
    },
    {
      name: "Vendedor 4",
      phone: "321654987",
      address: "Endereço 4",
      plantTypes: ["Planta I", "Planta J", "Planta K"]
    },
    
    // Adicione mais objetos de vendedores conforme necessário
  ];
  
  // Função para criar um elemento HTML de card de vendedor
  function createVendorCard(vendor) {
    const card = document.createElement("div");
    card.classList.add("vendor-card");
  
    const name = document.createElement("h3");
    name.textContent = vendor.name;
  
    const phone = document.createElement("p");
    phone.textContent = "Telefone: " + vendor.phone;
  
    const address = document.createElement("p");
    address.textContent = "Endereço: " + vendor.address;
  
    const plantTypes = document.createElement("p");
    plantTypes.textContent = "Tipos de Plantas: " + vendor.plantTypes.join(", ");
  
    card.appendChild(name);
    card.appendChild(phone);
    card.appendChild(address);
    card.appendChild(plantTypes);
  
    return card;
  }
  
  // Função para exibir os cards dos vendedores na página
  function displayVendorCards() {
    const container = document.querySelector(".intro-section .container");
    let row;
  
    vendors.forEach((vendor, index) => {
      if (index % 5 === 0) {
        // Iniciar uma nova linha (div.row) a cada 4 vendedores
        row = document.createElement("div");    
        row.classList.add("row");
        container.appendChild(row);
      }
  
      const col = document.createElement("div");
      col.classList.add("col");
  
      const card = createVendorCard(vendor);
      col.appendChild(card);
      row.appendChild(col);
    });
  }
  
  // Executar a função para exibir os cards dos vendedores ao carregar a página
  window.addEventListener("DOMContentLoaded", displayVendorCards);
  