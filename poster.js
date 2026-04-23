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
  'Equador': 'ec',
  'França': 'fr',
  'Senegal': 'sn',
  'Iraque': 'iq',
  'Noruega': 'no',
  'Argentina': 'ar',
  'Argélia': 'dz',
  'Inglaterra': 'gb-eng',
  'Croácia': 'hr',
  'Gana': 'gh',
  'Panamá': 'pa',
  'Uzbequistão': 'uz',
  'Colômbia': 'co'
};

function normalize(text) {
  return text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
}

function getFlagUrl(team) {
  return flagCodes[team]
    ? `https://flagcdn.com/w40/${flagCodes[team]}.png`
    : 'https://via.placeholder.com/35x24?text=?';
}

/* =========================
   STATE
========================= */
let selectedTeam = '';

const posterSchedule = document.getElementById('posterSchedule');
const teamSelectButton = document.getElementById('teamSelectButton');
const teamSelectMenu = document.getElementById('teamSelectMenu');
const teamSelectLabel = document.getElementById('teamSelectLabel');

const teams = [...new Set(
  posterGames.flatMap(g => [g.teamA, g.teamB])
)].sort((a, b) => a.localeCompare(b, 'pt-BR'));

/* =========================
   RENDER
========================= */
function renderPosterSchedule(filterTeam = '') {
  posterSchedule.innerHTML = '';

  const filtered = !filterTeam
    ? posterGames
    : posterGames.filter(g =>
        normalize(g.teamA) === normalize(filterTeam) ||
        normalize(g.teamB) === normalize(filterTeam)
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

/* =========================
   MENU
========================= */
function buildTeamSelectMenu() {
  teamSelectMenu.innerHTML = '';

  const all = document.createElement('div');
  all.className = 'team-option' + (selectedTeam === '' ? ' active' : '');
  all.innerHTML = '🌍 Todas as seleções';
  all.onclick = () => selectTeam('');
  teamSelectMenu.appendChild(all);

  teams.forEach(team => {
    const item = document.createElement('div');
    item.className = 'team-option' + (selectedTeam === team ? ' active' : '');

    item.innerHTML = `
      <img src="${getFlagUrl(team)}">
      <span>${team}</span>
    `;

    item.onclick = () => selectTeam(team);
    teamSelectMenu.appendChild(item);
  });
}

function selectTeam(team) {
  selectedTeam = team;
  teamSelectLabel.textContent = team || 'Todas as seleções';

  renderPosterSchedule(team);
  teamSelectMenu.classList.add('hidden');

  buildTeamSelectMenu();
}

/* =========================
   EVENTS
========================= */
teamSelectButton.addEventListener('click', () => {
  teamSelectMenu.classList.toggle('hidden');
});

document.addEventListener('click', e => {
  if (!teamSelectButton.contains(e.target) &&
      !teamSelectMenu.contains(e.target)) {
    teamSelectMenu.classList.add('hidden');
  }
});

/* =========================
   INIT
========================= */
buildTeamSelectMenu();
renderPosterSchedule();
