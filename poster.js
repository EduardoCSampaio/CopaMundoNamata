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
   🌍 FLAGS (100% estável)
========================= */
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
  'Colômbia': 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/co.png'
};

/* =========================
   🧠 FUNÇÃO SIMPLES (SEM MAP)
========================= */
function getFlagUrl(team) {
  return flags[team] || 'https://via.placeholder.com/35x24?text=?';
}

/* =========================
   🎯 RENDER
========================= */
const posterSchedule = document.getElementById('posterSchedule');

function renderPosterSchedule(filterTeam = '') {
  posterSchedule.innerHTML = '';

  const filtered = posterGames.filter(game =>
    !filterTeam ||
    game.teamA === filterTeam ||
    game.teamB === filterTeam
  );

  const grouped = filtered.reduce((acc, game) => {
    (acc[game.date] ||= []).push(game);
    return acc;
  }, {});

  Object.entries(grouped).forEach(([date, games]) => {
    const block = document.createElement('div');
    block.className = 'poster-category';

    block.innerHTML = `<div class="poster-category-header"><h2>${date}</h2></div>`;

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
