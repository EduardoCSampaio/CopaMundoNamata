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
  { date: 'Quarta-feira, 17 de junho', time: '21:00', group: 'Grupo K', teamA: 'Uzbequistão', teamB: 'Colômbia' }
];

/* =========================
   🏳️ FLAGS (ESTÁVEL)
========================= */
const flagCodes = {
  'Brasil': 'br',
  'Itália': 'it',
  'México': 'mx',
  'África do Sul': 'za',
  'República da Coreia': 'kr',
  'República Tcheca': 'cz',
  'Canadá': 'ca',
  'Bósnia e Herzegovina': 'ba',
  'Estados Unidos': 'us',
  'Paraguai': 'py',
  'Catar': 'qa',
  'Suíça': 'ch',
  'Marrocos': 'ma',
  'Haiti': 'ht',
  'Escócia': 'gb-sct',
  'Alemanha': 'de',
  'Curaçao': 'cw',
  'Holanda': 'nl',
  'Japão': 'jp',
  'Costa do Marfim': 'ci',
  'Equador': 'ec'
};

function getFlagUrl(team) {
  const code = flagCodes[team];
  return code
    ? `https://flagcdn.com/w40/${code}.png`
    : 'https://via.placeholder.com/35x24?text=?';
}

/* =========================
   📊 RENDER
========================= */
const posterSchedule = document.getElementById('posterSchedule');

function renderPosterSchedule(filterTeam = '') {
  posterSchedule.innerHTML = '';

  const filtered = posterGames.filter(game =>
    !filterTeam || game.teamA === filterTeam || game.teamB === filterTeam
  );

  const grouped = filtered.reduce((acc, game) => {
    (acc[game.date] ||= []).push(game);
    return acc;
  }, {});

  Object.entries(grouped).forEach(([date, games]) => {
    const block = document.createElement('div');
    block.className = 'poster-category';

    block.innerHTML = `
      <div class="poster-category-header">
        <h2>${date}</h2>
      </div>
    `;

    const container = document.createElement('div');
    container.className = 'poster-events';

    games.forEach(game => {
      const el = document.createElement('div');
      el.className = 'poster-event';

      el.innerHTML = `
        <span class="event-time">${game.time}</span>
        <div>
          <div class="event-teams">
            <span class="team-box">
              <img src="${getFlagUrl(game.teamA)}" class="team-flag">
              <span>${game.teamA}</span>
            </span>

            <span class="vs">VS</span>

            <span class="team-box">
              <img src="${getFlagUrl(game.teamB)}" class="team-flag">
              <span>${game.teamB}</span>
            </span>
          </div>
          <span class="poster-group">${game.group}</span>
        </div>
      `;

      container.appendChild(el);
    });

    block.appendChild(container);
    posterSchedule.appendChild(block);
  });
}

renderPosterSchedule();
