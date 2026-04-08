const posterGames = [
  { date: 'Quinta-feira, 11 de junho', time: '16:00', group: 'Grupo A', teamA: 'México', teamB: 'África do Sul' },
  { date: 'Quinta-feira, 11 de junho', time: '23:00', group: 'Grupo A', teamA: 'República da Coreia', teamB: 'República Tcheca' },
  { date: 'Sexta-feira, 12 de junho', time: '16:00', group: 'Grupo B', teamA: 'Canadá', teamB: 'Bósnia e Herzegovina' },
  { date: 'Sexta-feira, 12 de junho', time: '22:00', group: 'Grupo D', teamA: 'Estados Unidos', teamB: 'Paraguai' },
  { date: 'Sábado, 13 de junho', time: '16:00', group: 'Grupo B', teamA: 'Catar', teamB: 'Suíça' },
  { date: 'Sábado, 13 de junho', time: '19:00', group: 'Grupo C', teamA: 'Brasil', teamB: 'Marrocos' },
  { date: 'Sábado, 13 de junho', time: '22:00', group: 'Grupo C', teamA: 'Haiti', teamB: 'Escócia' },
  { date: 'Domingo, 14 de junho', time: '14:00', group: 'Grupo E', teamA: 'Alemanha', teamB: 'Curaçau' },
  { date: 'Domingo, 14 de junho', time: '17:00', group: 'Grupo F', teamA: 'Holanda', teamB: 'Japão' },
  { date: 'Domingo, 14 de junho', time: '20:00', group: 'Grupo E', teamA: 'Costa do Marfim', teamB: 'Equador' },
  { date: 'Terça-feira, 16 de junho', time: '16:00', group: 'Grupo I', teamA: 'França', teamB: 'Senegal' },
  { date: 'Terça-feira, 16 de junho', time: '19:00', group: 'Grupo I', teamA: 'Iraque', teamB: 'Noruega' },
  { date: 'Terça-feira, 16 de junho', time: '22:00', group: 'Grupo J', teamA: 'Argentina', teamB: 'Argélia' },
  { date: 'Quarta-feira, 17 de junho', time: '17:00', group: 'Grupo L', teamA: 'Inglaterra', teamB: 'Croácia' },
  { date: 'Quarta-feira, 17 de junho', time: '20:00', group: 'Grupo L', teamA: 'Gana', teamB: 'Panamá' },
  { date: 'Quarta-feira, 17 de junho', time: '21:00', group: 'Grupo K', teamA: 'Uzbequistão', teamB: 'Colômbia' },
  { date: 'Quinta-feira, 18 de junho', time: '16:00', group: 'Grupo B', teamA: 'Suíça', teamB: 'Bósnia e Herzegovina' },
  { date: 'Quinta-feira, 18 de junho', time: '19:00', group: 'Grupo B', teamA: 'Canadá', teamB: 'Catar' },
  { date: 'Quinta-feira, 18 de junho', time: '22:00', group: 'Grupo A', teamA: 'México', teamB: 'República da Coreia' },
  { date: 'Sexta-feira, 19 de junho', time: '16:00', group: 'Grupo D', teamA: 'Estados Unidos', teamB: 'Austrália' },
  { date: 'Sexta-feira, 19 de junho', time: '19:00', group: 'Grupo C', teamA: 'Escócia', teamB: 'Marrocos' },
  { date: 'Sexta-feira, 19 de junho', time: '21:30', group: 'Grupo C', teamA: 'Brasil', teamB: 'Haiti' },
  { date: 'Sábado, 20 de junho', time: '14:00', group: 'Grupo F', teamA: 'Holanda', teamB: 'Suécia' },
  { date: 'Sábado, 20 de junho', time: '17:00', group: 'Grupo E', teamA: 'Alemanha', teamB: 'Costa do Marfim' },
  { date: 'Sábado, 20 de junho', time: '21:00', group: 'Grupo E', teamA: 'Equador', teamB: 'Curaçau' },
  { date: 'Sábado, 20 de junho', time: '23:00', group: 'Grupo F', teamA: 'Tunísia', teamB: 'Japão' },
  { date: 'Domingo, 21 de junho', time: '13:00', group: 'Grupo H', teamA: 'Espanha', teamB: 'Arábia Saudita' },
  { date: 'Domingo, 21 de junho', time: '16:00', group: 'Grupo G', teamA: 'Bélgica', teamB: 'Irã' },
  { date: 'Domingo, 21 de junho', time: '19:00', group: 'Grupo H', teamA: 'Uruguai', teamB: 'Cabo Verde' },
  { date: 'Terça-feira, 23 de junho', time: '14:00', group: 'Grupo K', teamA: 'Portugal', teamB: 'Uzbequistão' },
  { date: 'Terça-feira, 23 de junho', time: '17:00', group: 'Grupo L', teamA: 'Inglaterra', teamB: 'Gana' },
  { date: 'Terça-feira, 23 de junho', time: '20:00', group: 'Grupo L', teamA: 'Panamá', teamB: 'Croácia' },
  { date: 'Quarta-feira, 24 de junho', time: '16:00', group: 'Grupo B', teamA: 'Suíça', teamB: 'Canadá' },
  { date: 'Quarta-feira, 24 de junho', time: '19:00', group: 'Grupo C', teamA: 'Escócia', teamB: 'Brasil' },
  { date: 'Quinta-feira, 25 de junho', time: '17:00', group: 'Grupo E', teamA: 'Equador', teamB: 'Alemanha' },
  { date: 'Quinta-feira, 25 de junho', time: '20:00', group: 'Grupo F', teamA: 'Japão', teamB: 'Suécia' },
  { date: 'Sexta-feira, 26 de junho', time: '16:00', group: 'Grupo I', teamA: 'Noruega', teamB: 'França' },
  { date: 'Sexta-feira, 26 de junho', time: '21:00', group: 'Grupo H', teamA: 'Uruguai', teamB: 'Espanha' },
  { date: 'Sábado, 27 de junho', time: '18:00', group: 'Grupo L', teamA: 'Panamá', teamB: 'Inglaterra' },
  { date: 'Sábado, 27 de junho', time: '20:30', group: 'Grupo K', teamA: 'Colômbia', teamB: 'Portugal' },
  { date: 'Sábado, 27 de junho', time: '23:00', group: 'Grupo J', teamA: 'Jordânia', teamB: 'Argentina' }
];

const flags = {
  'México': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/200px-Flag_of_Mexico.svg.png',
  'África do Sul': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/200px-Flag_of_South_Africa.svg.png',
  'República da Coreia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/200px-Flag_of_South_Korea.svg.png',
  'República Tcheca': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/200px-Flag_of_the_Czech_Republic.svg.png',
  'Canadá': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/200px-Flag_of_Canada.svg.png',
  'Bósnia e Herzegovina': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/200px-Flag_of_Bosnia_and_Herzegovina.svg.png',
  'Estados Unidos': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/200px-Flag_of_the_United_States.svg.png',
  'Paraguai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/200px-Flag_of_Paraguay.svg.png',
  'Catar': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/200px-Flag_of_Qatar.svg.png',
  'Suíça': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/200px-Flag_of_Switzerland.svg.png',
  'Brasil': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/200px-Flag_of_Brazil.svg.png',
  'Marrocos': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/200px-Flag_of_Morocco.svg.png',
  'Haiti': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/200px-Flag_of_Haiti.svg.png',
  'Escócia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/200px-Flag_of_Scotland.svg.png',
  'Alemanha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/200px-Flag_of_Germany.svg.png',
  'Curaçau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Flag_of_Cura%C3%A7ao.svg/200px-Flag_of_Cura%C3%A7ao.svg.png',
  'Holanda': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/200px-Flag_of_the_Netherlands.svg.png',
  'Japão': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/200px-Flag_of_Japan.svg.png',
  'Costa do Marfim': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Flag_of_Ivory_Coast.svg/200px-Flag_of_Ivory_Coast.svg.png',
  'Equador': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/200px-Flag_of_Ecuador.svg.png',
  'França': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/200px-Flag_of_France.svg.png',
  'Senegal': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/200px-Flag_of_Senegal.svg.png',
  'Iraque': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/200px-Flag_of_Iraq.svg.png',
  'Noruega': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/200px-Flag_of_Norway.svg.png',
  'Argentina': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png',
  'Argélia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/200px-Flag_of_Algeria.svg.png',
  'Inglaterra': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/200px-Flag_of_England.svg.png',
  'Croácia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/200px-Flag_of_Croatia.svg.png',
  'Gana': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/200px-Flag_of_Ghana.svg.png',
  'Panamá': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/200px-Flag_of_Panama.svg.png',
  'Uzbequistão': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/200px-Flag_of_Uzbekistan.svg.png',
  'Colômbia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png',
  'Bósnia e Herzegovina': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/200px-Flag_of_Bosnia_and_Herzegovina.svg.png',
  'Austrália': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/200px-Flag_of_Australia.svg.png',
  'Suécia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/200px-Flag_of_Sweden.svg.png',
  'Tunísia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/200px-Flag_of_Tunisia.svg.png',
  'Espanha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/200px-Flag_of_Spain.svg.png',
  'Arábia Saudita': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/200px-Flag_of_Saudi_Arabia.svg.png',
  'Bélgica': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/200px-Flag_of_Belgium.svg.png',
  'Irã': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/200px-Flag_of_Iran.svg.png',
  'Uruguai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/200px-Flag_of_Uruguay.svg.png',
  'Cabo Verde': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Flag_of_Cabo_Verde.svg/200px-Flag_of_Cabo_Verde.svg.png',
  'Portugal': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/200px-Flag_of_Portugal.svg.png',
  'Jordânia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/200px-Flag_of_Jordan.svg.png'
};

const posterSchedule = document.getElementById('posterSchedule');

function renderPosterSchedule() {
  posterSchedule.innerHTML = '';

  const dates = posterGames.reduce((acc, game) => {
    if (!acc[game.date]) acc[game.date] = [];
    acc[game.date].push(game);
    return acc;
  }, {});

  Object.entries(dates).forEach(([date, games]) => {
    const categoryCard = document.createElement('div');
    categoryCard.className = 'poster-category';

    categoryCard.innerHTML = `
      <div class="poster-category-header">
        <h2>${date}</h2>
      </div>
    `;

    const events = document.createElement('div');
    events.className = 'poster-events';

    games.forEach(game => {
      const eventCard = document.createElement('div');
      eventCard.className = 'poster-event';
      eventCard.innerHTML = `
        <span class="event-time">${game.time}</span>
        <div>
          <div class="event-teams">
            <span class="team-box">
              <img src="${flags[game.teamA] || 'https://via.placeholder.com/35x24?text=?'}" class="team-flag" alt="${game.teamA} flag">
              <span>${game.teamA}</span>
            </span>
            <span class="vs">VS</span>
            <span class="team-box">
              <img src="${flags[game.teamB] || 'https://via.placeholder.com/35x24?text=?'}" class="team-flag" alt="${game.teamB} flag">
              <span>${game.teamB}</span>
            </span>
          </div>
          <span class="poster-group">${game.group}</span>
        </div>
      `;
      events.appendChild(eventCard);
    });

    categoryCard.appendChild(events);
    posterSchedule.appendChild(categoryCard);
  });
}

renderPosterSchedule();