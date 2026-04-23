const posterGames = [
  { date: 'Terça-feira, 02 de junho', time: '19:30', group: 'Final copa 1970', teamA: 'Brasil', teamB: 'Itália' },
  { date: 'Quarta-feira, 03 de junho', time: '19:30', group: 'Final copa 1994', teamA: 'Brasil', teamB: 'Itália' },
  { date: 'Quinta-feira, 04 de junho', time: '19:30', group: 'Final copa 2002', teamA: 'Brasil', teamB: 'Alemanha' },
  { date: 'Quinta-feira, 11 de junho', time: '16:00', group: 'Grupo A', teamA: 'México', teamB: 'África do Sul' },
  { date: 'Quinta-feira, 11 de junho', time: '23:00', group: 'Grupo A', teamA: 'República da Coreia', teamB: 'República Tcheca' },
  { date: 'Sexta-feira, 12 de junho', time: '16:00', group: 'Grupo B', teamA: 'Canadá', teamB: 'Bósnia e Herzegovina' },
  { date: 'Sexta-feira, 12 de junho', time: '22:00', group: 'Grupo D', teamA: 'Estados Unidos', teamB: 'Paraguai' },
  { date: 'Sábado, 13 de junho', time: '16:00', group: 'Grupo B', teamA: 'Catar', teamB: 'Suíça' },
  { date: 'Sábado, 13 de junho', time: '19:00', group: 'Grupo C', teamA: 'Brasil', teamB: 'Marrocos' },
  { date: 'Sábado, 13 de junho', time: '22:00', group: 'Grupo C', teamA: 'Haiti', teamB: 'Escócia' },
  { date: 'Domingo, 14 de junho', time: '14:00', group: 'Grupo E', teamA: 'Alemanha', teamB: 'Curaçao' },
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
  { date: 'Sábado, 20 de junho', time: '21:00', group: 'Grupo E', teamA: 'Equador', teamB: 'Curaçao' },
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
  'Brasil': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/br.png',
  'Itália': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/it.png',
  'México': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/mx.png',
  'África do Sul': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/za.png',
  'República da Coreia': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/kr.png',
  'República Tcheca': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/cz.png',
  'Canadá': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/ca.png',
  'Bósnia e Herzegovina': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/ba.png',
  'Estados Unidos': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/us.png',
  'Paraguai': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/py.png',
  'Catar': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/qa.png',
  'Suíça': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/ch.png',
  'Marrocos': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/ma.png',
  'Haiti': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/ht.png',
  'Escócia': 'https://raw.githubusercontent.com/hampusborgos/country-flags/main/png100px/gb-sct.png',
  'Alemanha': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/de.png',
  'Curaçao': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/cw.png',
  'Holanda': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/nl.png',
  'Japão': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/jp.png',
  'Costa do Marfim': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/ci.png',
  'Equador': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/ec.png',
  'França': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/fr.png',
  'Senegal': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/sn.png',
  'Iraque': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/iq.png',
  'Noruega': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/no.png',
  'Argentina': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/ar.png',
  'Argélia': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/dz.png',
  'Inglaterra': 'https://raw.githubusercontent.com/hampusborgos/country-flags/main/png100px/gb-eng.png',
  'Croácia': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/hr.png',
  'Gana': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/gh.png',
  'Panamá': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/pa.png',
  'Uzbequistão': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/uz.png',
  'Colômbia': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/co.png',
  'Austrália': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/au.png',
  'Suécia': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/se.png',
  'Tunísia': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/tn.png',
  'Espanha': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/es.png',
  'Arábia Saudita': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/sa.png',
  'Bélgica': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/be.png',
  'Irã': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/ir.png',
  'Uruguai': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/uy.png',
  'Cabo Verde': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/cv.png',
  'Portugal': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/pt.png',
  'Jordânia': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/jo.png',

  'Todas as seleções': 'https://via.placeholder.com/35x24?text=🌍'
};
const normalizedFlags = new Map(
  Object.entries(flags).map(([team, url]) => [
    team.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase(),
    url
  ])
);

function getFlagUrl(team) {
  const normalizedTeam = team.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
  return normalizedFlags.get(normalizedTeam) || flags[team] || 'https://via.placeholder.com/35x24?text=?';
}

const posterSchedule = document.getElementById('posterSchedule');
const teamSelectButton = document.getElementById('teamSelectButton');
const teamSelectMenu = document.getElementById('teamSelectMenu');
const teamSelectLabel = document.getElementById('teamSelectLabel');

const teams = Array.from(
  new Set(posterGames.flatMap(game => [game.teamA, game.teamB]))
).sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }));

let selectedTeam = '';

function renderPosterSchedule(filterTeam = '') {
  posterSchedule.innerHTML = '';
  const normalizedFilter = filterTeam.trim().toLowerCase();

  const filteredGames = posterGames.filter(game => {
    if (!normalizedFilter) return true;
    return game.teamA.toLowerCase() === normalizedFilter ||
      game.teamB.toLowerCase() === normalizedFilter;
  });

  if (filteredGames.length === 0) {
    posterSchedule.innerHTML = `
      <div class="poster-category">
        <div class="poster-category-header">
          <h2>Resultado da busca</h2>
        </div>
        <div class="poster-events">
          <div class="poster-event">
            <span class="event-time">--</span>
            <div>
              <p>Nenhum jogo encontrado para "${filterTeam || 'essa seleção'}".</p>
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  const dates = filteredGames.reduce((acc, game) => {
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
              <img src="${getFlagUrl(game.teamA)}" class="team-flag" alt="${game.teamA} flag">
              <span>${game.teamA}</span>
            </span>
            <span class="vs">VS</span>
            <span class="team-box">
              <img src="${getFlagUrl(game.teamB)}" class="team-flag" alt="${game.teamB} flag">
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

function buildTeamSelectMenu() {
  teamSelectMenu.innerHTML = '';

  const allOption = document.createElement('div');
  allOption.className = 'team-option' + (selectedTeam === '' ? ' active' : '');
  allOption.innerHTML = `
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ3XzU6GjhS_nny6-RkCmjrV8NT0StN2h8cA&s" alt="Todas as seleções" />
    <span>Todas as seleções</span>
  `;
  allOption.addEventListener('click', () => selectTeam(''));
  teamSelectMenu.appendChild(allOption);

  teams.forEach(team => {
    const item = document.createElement('div');
    item.className = 'team-option' + (selectedTeam === team ? ' active' : '');
    item.innerHTML = `
      <img src="${getFlagUrl(team)}" alt="${team} flag">
      <span>${team}</span>
    `;
    item.addEventListener('click', () => selectTeam(team));
    teamSelectMenu.appendChild(item);
  });
}

function selectTeam(team) {
  selectedTeam = team;
  teamSelectLabel.textContent = team || 'Todas as seleções';
  renderPosterSchedule(team);
  teamSelectMenu.classList.add('hidden');
}

teamSelectButton.addEventListener('click', () => {
  teamSelectMenu.classList.toggle('hidden');
});

document.addEventListener('click', event => {
  if (!teamSelectButton.contains(event.target) && !teamSelectMenu.contains(event.target)) {
    teamSelectMenu.classList.add('hidden');
  }
});

buildTeamSelectMenu();
renderPosterSchedule();
