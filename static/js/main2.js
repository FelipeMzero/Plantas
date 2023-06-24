fetch('/static/data/plants.csv')
  .then(response => response.text())
  .then(data => {
    const lines = data.split('\n').slice(1); // Remove a primeira linha (cabeçalho)

    // Cria um card para cada planta
    lines.forEach(line => {
      const parts = line.split(',');

      const id = parseInt(parts[0]);
      const name = parts[1];
      const image = parts[2];
      const description = parts[3];
      const detailsLink = parts[4];

      // Cria os elementos HTML do card
      const card = document.createElement('div');
      card.classList.add('card');

      const img = document.createElement('img');
      img.setAttribute('src', image);
      img.classList.add('card-img-top');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = name;

      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = description;

      const detailsButton = document.createElement('a');
      detailsButton.setAttribute('href', detailsLink);
      detailsButton.classList.add('btn', 'btn-primary');
      detailsButton.textContent = 'Mais detalhes';

      // Adiciona os elementos ao card
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(detailsButton);

      card.appendChild(img);
      card.appendChild(cardBody);

      // Adiciona o card à página
      const plantsContainer = document.querySelector('#plants-container');
      plantsContainer.appendChild(card);
    });
  });
