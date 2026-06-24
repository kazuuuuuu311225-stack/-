/**
 * PHYSICS MISSION — 物理基礎クイズ（ミッション制）
 * PC: ↑↓ Enter / スマホ: タップ
 */
const MISSIONS = [
  {
    missionNumber: 1,
    chapter: '運動の表し方',
    questions: [
      {
        type: 'formula',
        question: '平均速度の定義として正しい式はどれか',
        choices: ['v = x/t', 'v = t/x', 'v = at', 'v = a/t'],
        answer: 0,
        explanation: '平均速度は距離÷時間',
      },
      {
        type: 'formula',
        question: '等速直線運動の位置の式はどれか',
        choices: ['x = vt', 'x = v/t', 'x = at', 'x = at^2'],
        answer: 0,
        explanation: '速度一定なので x = vt',
      },
      {
        type: 'formula',
        question: '等加速度運動における速度の式はどれか',
        choices: ['v = v0 + at', 'v = at^2', 'v = v0t', 'v = a/v0'],
        answer: 0,
        explanation: '基本公式',
      },
      {
        type: 'formula',
        question: '等加速度運動の位置の式はどれか',
        choices: ['x = v0t + (1/2)at^2', 'x = vt', 'x = at', 'x = v/a'],
        answer: 0,
        explanation: '代表的な運動方程式',
      },
      {
        type: 'formula',
        question: '時間を含まない速度の公式はどれか',
        choices: ['v^2 = v0^2 + 2ax', 'v = v0 + at', 'x = vt', 'a = v/t'],
        answer: 0,
        explanation: '等加速度運動の重要公式',
      },
      {
        type: 'meaning',
        question: '速度と速さの違いはどれか',
        choices: ['同じ意味', '速度はベクトル、速さはスカラー', '速さは方向を持つ', '速度は大きさのみ'],
        answer: 1,
        explanation: '速度は向きを持つ',
      },
      {
        type: 'meaning',
        question: '等速直線運動とは何か',
        choices: ['速さが変化する運動', '方向だけ変わる運動', '速度が一定の運動', '加速度が最大の運動'],
        answer: 2,
        explanation: '速さも向きも一定',
      },
      {
        type: 'meaning',
        question: '相対速度とは何か',
        choices: ['絶対的な速度', '他の物体から見た速度', '最大速度', '平均速度'],
        answer: 1,
        explanation: '観測者によって変わる',
      },
      {
        type: 'manipulation',
        question: 'v = x/t を x について解け',
        choices: ['x = vt', 'x = v/t', 'x = t/v', 'x = vt^2'],
        answer: 0,
        explanation: '両辺に t を掛ける',
      },
      {
        type: 'manipulation',
        question: '東3m/s, 北4m/sの合成速度の大きさはどれか',
        choices: ['5 m/s', '7 m/s', '1 m/s', '12 m/s'],
        answer: 0,
        explanation: '三平方の定理',
      },
    ],
  },
  {
    missionNumber: 2,
    chapter: '落体の運動（公式強化）',
    questions: [
      {
        type: 'formula',
        question: '自由落下の速度の式（初速度0）はどれか',
        choices: ['v = gt', 'v = g/t', 'v = gt^2', 'v = t/g'],
        answer: 0,
        explanation: '基本公式',
      },
      {
        type: 'formula',
        question: '自由落下の位置の式はどれか',
        choices: ['y = (1/2)gt^2', 'y = gt', 'y = g/t', 'y = vt'],
        answer: 0,
        explanation: '等加速度運動',
      },
      {
        type: 'formula',
        question: '鉛直投げ上げの速度の式（上向き正）はどれか',
        choices: ['v = v0 - gt', 'v = v0 + gt', 'v = gt', 'v = v0t'],
        answer: 0,
        explanation: '重力は下向き',
      },
      {
        type: 'formula',
        question: '鉛直投げ下ろしの速度の式はどれか',
        choices: ['v = v0 + gt', 'v = v0 - gt', 'v = gt^2', 'v = g/t'],
        answer: 0,
        explanation: '下向き加速',
      },
      {
        type: 'formula',
        question: '等加速度運動の基本式はどれか',
        choices: ['v^2 = v0^2 + 2gy', 'v = gt', 'y = vt', 'v = y/t'],
        answer: 0,
        explanation: '時間を含まない公式',
      },
      {
        type: 'formula',
        question: '水平投射の水平方向の位置の式はどれか',
        choices: ['x = v0 t', 'x = (1/2)gt^2', 'x = gt', 'x = v0t^2'],
        answer: 0,
        explanation: '等速運動',
      },
      {
        type: 'formula',
        question: '水平投射の鉛直方向の式はどれか',
        choices: ['y = (1/2)gt^2', 'y = v0 t', 'y = gt', 'y = v0/g'],
        answer: 0,
        explanation: '自由落下',
      },
      {
        type: 'formula',
        question: '斜方投射の初速度の分解はどれか',
        choices: [
          'v0x = v0cosθ, v0y = v0sinθ',
          'v0x = v0sinθ, v0y = v0cosθ',
          'v0x = v0θ, v0y = v0/θ',
          'v0x = v0^2, v0y = v0',
        ],
        answer: 0,
        explanation: '基本分解',
      },
      {
        type: 'formula',
        question: '斜方投射の水平方向の式はどれか',
        choices: ['x = v0cosθ t', 'x = v0sinθ t', 'x = gt', 'x = t/g'],
        answer: 0,
        explanation: '等速',
      },
      {
        type: 'formula',
        question: '斜方投射の鉛直方向の式はどれか',
        choices: ['y = v0sinθ t - (1/2)gt^2', 'y = v0cosθ t', 'y = gt', 'y = v0t'],
        answer: 0,
        explanation: '重力あり',
      },
      {
        type: 'formula',
        question: '斜方投射の最高点に到達する時間はどれか',
        choices: ['t = v0sinθ / g', 't = g / v0', 't = v0cosθ', 't = g^2'],
        answer: 0,
        explanation: 'vy=0になるとき',
      },
      {
        type: 'formula',
        question: '斜方投射の飛距離はどれか',
        choices: ['R = v0^2 sin2θ / g', 'R = v0 g', 'R = g / v0', 'R = v0 sinθ'],
        answer: 0,
        explanation: '重要公式',
      },
      {
        type: 'meaning',
        question: '水平投射で水平方向の加速度はどうなるか',
        choices: ['0', 'g', '増加', '減少'],
        answer: 0,
        explanation: '力が働かない',
      },
      {
        type: 'meaning',
        question: '鉛直方向の加速度は常にどうか',
        choices: ['g（下向き）', '0', '一定増加', '一定減少'],
        answer: 0,
        explanation: '常に重力',
      },
      {
        type: 'meaning',
        question: '水平投射の落下時間は何で決まるか',
        choices: ['高さ', '初速度', '質量', '角度'],
        answer: 0,
        explanation: '鉛直運動のみ',
      },
      {
        type: 'meaning',
        question: '斜方投射で水平方向の速度はどうなるか',
        choices: ['一定', '増加', '減少', '0になる'],
        answer: 0,
        explanation: '加速度なし',
      },
      {
        type: 'meaning',
        question: '最高点では鉛直方向速度はどうなるか',
        choices: ['0', '最大', '負になる', '一定'],
        answer: 0,
        explanation: '一瞬停止',
      },
      {
        type: 'meaning',
        question: '放物運動になる理由はどれか',
        choices: ['鉛直に加速度がある', '水平方向に加速度', '速度一定', '力ゼロ'],
        answer: 0,
        explanation: '縦だけ加速',
      },
      {
        type: 'meaning',
        question: '投げ上げと投げ下ろしの違いは何か',
        choices: ['初速度の向き', '重力', '時間', '距離'],
        answer: 0,
        explanation: '方向が違う',
      },
      {
        type: 'meaning',
        question: '水平投射と斜方投射の違いはどれか',
        choices: ['初速度の角度', '重力の有無', '加速度の大きさ', '時間'],
        answer: 0,
        explanation: '角度が違う',
      },
    ],
  },
  {
    missionNumber: 3,
    chapter: '力のつり合い',
    questions: [
      {
        type: 'formula',
        question: '力のつり合いの条件として正しいものはどれか',
        choices: ['合力が0', '力が最大', '力が一定', '速度が一定'],
        answer: 0,
        explanation: '合力が0なら加速度も0',
      },
      {
        type: 'meaning',
        question: '力とは何を表す量か',
        choices: ['スカラー量', 'ベクトル量', '時間', '距離'],
        answer: 1,
        explanation: '大きさと向きを持つ',
      },
      {
        type: 'formula',
        question: '重力の大きさを表す式はどれか',
        choices: ['W = mg', 'W = mv', 'W = ma^2', 'W = m/g'],
        answer: 0,
        explanation: '重さ = 質量×重力加速度',
      },
      {
        type: 'meaning',
        question: '重力の向きはどれか',
        choices: ['上向き', '下向き（地球の中心）', '右向き', '速度方向'],
        answer: 1,
        explanation: '常に地球の中心方向',
      },
      {
        type: 'formula',
        question: 'フックの法則を表す式はどれか',
        choices: ['F = kx', 'F = mx', 'F = kt^2', 'F = x/k'],
        answer: 0,
        explanation: 'ばねの復元力',
      },
      {
        type: 'meaning',
        question: 'フックの法則における k は何を表すか',
        choices: ['質量', 'ばね定数', '速度', '時間'],
        answer: 1,
        explanation: 'ばねの硬さ',
      },
      {
        type: 'meaning',
        question: '空気抵抗の性質として正しいものはどれか',
        choices: ['常に一定', '速度に依存する', '方向を持たない', '重力と同じ方向'],
        answer: 1,
        explanation: '速いほど大きくなる',
      },
      {
        type: 'formula',
        question: '力を角度θで分解したとき、水平方向はどれか',
        choices: ['F cosθ', 'F sinθ', 'F tanθ', 'F^2'],
        answer: 0,
        explanation: '横はcos',
      },
      {
        type: 'formula',
        question: '力を角度θで分解したとき、鉛直方向はどれか',
        choices: ['F sinθ', 'F cosθ', 'F θ', 'F^2'],
        answer: 0,
        explanation: '縦はsin',
      },
      {
        type: 'meaning',
        question: '斜面上の物体の重力の分解で斜面方向の成分はどれか',
        choices: ['mg sinθ', 'mg cosθ', 'mg', '0'],
        answer: 0,
        explanation: '斜面方向はsin',
      },
    ],
  },
];

const SCREENS = { HOME: 'home', MODE: 'mode', QUIZ: 'quiz', RESULT: 'result', SCORE: 'score' };
const MODES = { NORMAL: 'normal', RANDOM: 'random', REVIEW: 'review' };
const TYPE_LABELS = { formula: '公式', meaning: '意味', manipulation: '操作' };
const CHOICE_LABELS = ['A', 'B', 'C', 'D'];

const state = {
  screen: SCREENS.HOME,
  missionIndex: 0,
  missionSelection: 0,
  mode: MODES.NORMAL,
  menuSelection: 0,
  questions: [],
  currentIndex: 0,
  selectedIndex: 0,
  score: 0,
  lastAnswer: null,
  sessionResults: {},
  storedWrongIds: [],
};

const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
const app = document.getElementById('app');

function getStorageKey(missionNumber) {
  return 'physics-mission-' + missionNumber + '-wrong-ids';
}

function shuffleArray(items) {
  const arr = items.slice();
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function loadWrongIds(missionNumber) {
  try {
    const raw = localStorage.getItem(getStorageKey(missionNumber));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveWrongIds(missionNumber, ids) {
  localStorage.setItem(getStorageKey(missionNumber), JSON.stringify(ids));
}

function getRankMessage(score, total) {
  const ratio = score / total;
  if (ratio === 1) return '★ ミッションクリア！ ★';
  if (ratio >= 0.8) return 'よくできました！';
  if (ratio >= 0.6) return 'もう少し！';
  if (ratio >= 0.4) return '復習しよう';
  return 'がんばろう！';
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function missionData() {
  return MISSIONS[state.missionIndex];
}

function buildQuestionList(allQuestions, mode, wrongIds) {
  const withIds = allQuestions.map(function (q, index) {
    return Object.assign({}, q, { id: index });
  });
  if (mode === MODES.REVIEW) {
    const wrongSet = new Set(wrongIds);
    return withIds.filter(function (q) {
      return wrongSet.has(q.id);
    });
  }
  if (mode === MODES.RANDOM) return shuffleArray(withIds);
  return withIds;
}

function sessionWrongCount() {
  return Object.keys(state.sessionResults).filter(function (k) {
    return !state.sessionResults[k];
  }).length;
}

function menuItems() {
  return [
    { id: MODES.NORMAL, disabled: false },
    { id: MODES.RANDOM, disabled: false },
    { id: MODES.REVIEW, disabled: state.storedWrongIds.length === 0 },
  ];
}

function selectMission(index) {
  state.missionIndex = index;
  state.menuSelection = 0;
  state.storedWrongIds = loadWrongIds(MISSIONS[index].missionNumber);
  state.screen = SCREENS.MODE;
  render();
}

function startQuiz(selectedMode) {
  const mission = missionData();
  const activeMode = selectedMode || state.mode;
  const list = buildQuestionList(mission.questions, activeMode, state.storedWrongIds);
  if (list.length === 0) return;
  state.mode = activeMode;
  state.questions = list;
  state.currentIndex = 0;
  state.selectedIndex = 0;
  state.score = 0;
  state.lastAnswer = null;
  state.sessionResults = {};
  state.screen = SCREENS.QUIZ;
  render();
}

function handleAnswer(index) {
  const q = state.questions[state.currentIndex];
  if (!q) return;
  const isCorrect = index === q.answer;
  state.lastAnswer = index;
  if (isCorrect) state.score += 1;
  state.sessionResults[q.id] = isCorrect;
  state.screen = SCREENS.RESULT;
  render();
}

function handleNext() {
  const isLast = state.currentIndex + 1 >= state.questions.length;
  if (isLast) {
    const mission = missionData();
    const wrongSet = new Set(state.storedWrongIds);
    Object.keys(state.sessionResults).forEach(function (id) {
      const numId = Number(id);
      if (state.sessionResults[id]) wrongSet.delete(numId);
      else wrongSet.add(numId);
    });
    state.storedWrongIds = Array.from(wrongSet);
    saveWrongIds(mission.missionNumber, state.storedWrongIds);
    state.screen = SCREENS.SCORE;
    render();
    return;
  }
  state.currentIndex += 1;
  state.selectedIndex = 0;
  state.screen = SCREENS.QUIZ;
  render();
}

function renderHome() {
  var html = '<section class="screen fade-in"><div class="glass-card">';
  html += '<p class="badge">PHYSICS MISSION</p>';
  html += '<h1 class="app-title">PHYSICS MISSION</h1>';
  html += '<p class="app-subtitle">ミッションを選んでください</p>';
  html += '<ul class="menu-list mission-list">';
  MISSIONS.forEach(function (m, index) {
    var sel = state.missionSelection === index ? ' selected' : '';
    html += '<li class="menu-item mission-item' + sel + '" data-index="' + index + '">';
    html += '<span class="mission-number"><span class="mission-arrow">▶</span> MISSION ' + m.missionNumber + '</span>';
    html += '<span class="mission-name">（' + escapeHtml(m.chapter) + '）</span>';
    html += '<span class="mission-meta">' + m.questions.length + ' 問</span></li>';
  });
  html += '</ul>';
  html += '<button type="button" class="btn-primary" id="btnConfirmMission">ミッション開始</button>';
  html += isTouch
    ? '<p class="hint">ミッションをタップして開始</p>'
    : '<p class="hint">↑↓ で選択　Enter で決定</p>';
  html += '</div></section>';
  return html;
}

function renderMode() {
  var m = missionData();
  var items = [
    { id: 'normal', label: 'START', desc: '順番に出題' },
    { id: 'random', label: 'ランダム', desc: 'シャッフル出題' },
    {
      id: 'review',
      label: '復習モード',
      desc:
        state.storedWrongIds.length > 0
          ? '間違えた ' + state.storedWrongIds.length + ' 問'
          : '間違えた問題なし',
      disabled: state.storedWrongIds.length === 0,
    },
  ];
  var html = '<section class="screen fade-in"><div class="glass-card">';
  html += '<button type="button" class="btn-back-link" id="btnBackHome">← ミッション選択へ</button>';
  html += '<p class="badge">MISSION ' + m.missionNumber + ' · PHYSICS MISSION</p>';
  html += '<h1 class="app-title">' + escapeHtml(m.chapter) + '</h1>';
  html += '<p class="app-subtitle">全 ' + m.questions.length + ' 問 · 4択クイズ</p>';
  html += '<ul class="menu-list">';
  items.forEach(function (item, index) {
    var cls = 'menu-item';
    if (state.menuSelection === index) cls += ' selected';
    if (item.disabled) cls += ' disabled';
    html += '<li class="' + cls + '" data-menu="' + index + '">';
    html += '<span class="menu-label">' + item.label + '</span>';
    html += '<span class="menu-desc">' + item.desc + '</span></li>';
  });
  html += '</ul>';
  html += '<button type="button" class="btn-primary" id="btnStart">' + items[state.menuSelection].label + '</button>';
  html += isTouch
    ? '<p class="hint">モードを選んで START</p>'
    : '<p class="hint">↑↓ で選択　Enter で開始</p>';
  html += '</div></section>';
  return html;
}

function renderQuiz() {
  var m = missionData();
  var q = state.questions[state.currentIndex];
  var current = state.currentIndex + 1;
  var total = state.questions.length;
  var progress = ((current - 1) / total) * 100;
  var html = '<section class="screen fade-in"><div class="glass-card">';
  html += '<div class="quiz-header">';
  html += '<span class="type-badge">' + (TYPE_LABELS[q.type] || q.type) + '</span>';
  html += '<span class="progress-text">' + current + ' / ' + total + '</span></div>';
  html += '<div class="progress-bar"><div class="progress-fill" style="width:' + progress + '%"></div></div>';
  html += '<p class="mission-label">MISSION ' + m.missionNumber + ' · ' + escapeHtml(m.chapter) + '</p>';
  html += '<p class="question-text">' + escapeHtml(q.question) + '</p>';
  html += '<ul class="choices-list">';
  q.choices.forEach(function (choice, index) {
    var sel = state.selectedIndex === index ? ' selected' : '';
    html += '<li class="choice-item' + sel + '" data-choice="' + index + '">';
    html += '<span class="choice-label">' + CHOICE_LABELS[index] + '.</span>';
    html += '<span class="choice-text">' + escapeHtml(choice) + '</span></li>';
  });
  html += '</ul>';
  html += isTouch
    ? '<p class="hint">選択肢をタップして回答</p>'
    : '<p class="hint">↑↓ で選択　Enter で決定</p>';
  html += '</div></section>';
  return html;
}

function renderResult() {
  var q = state.questions[state.currentIndex];
  var isCorrect = state.lastAnswer === q.answer;
  var isLast = state.currentIndex + 1 >= state.questions.length;
  var html = '<section class="screen fade-in"><div class="glass-card card-result">';
  html += '<div class="result-icon ' + (isCorrect ? 'correct' : 'incorrect') + '">';
  html += isCorrect ? '✓' : '✗';
  html += '</div>';
  html += '<p class="result-label ' + (isCorrect ? 'correct' : 'incorrect') + '">';
  html += isCorrect ? '正解！' : '不正解…';
  html += '</p>';
  if (isCorrect) {
    html +=
      '<p class="result-detail correct-text">' +
      CHOICE_LABELS[q.answer] +
      '. ' +
      escapeHtml(q.choices[q.answer]) +
      '</p>';
  } else {
    html += '<p class="result-detail">';
    html +=
      '<span class="incorrect-text">あなたの回答: ' +
      CHOICE_LABELS[state.lastAnswer] +
      '. ' +
      escapeHtml(q.choices[state.lastAnswer]) +
      '</span><br>';
    html +=
      '<span class="correct-text">正解: ' +
      CHOICE_LABELS[q.answer] +
      '. ' +
      escapeHtml(q.choices[q.answer]) +
      '</span></p>';
  }
  html += '<div class="explanation-box"><p class="explanation-label">解説</p>';
  html += '<p class="explanation-text">' + escapeHtml(q.explanation) + '</p></div>';
  html += '<button type="button" class="btn-primary" id="btnNext">' + (isLast ? 'スコアを見る' : '次へ') + '</button>';
  if (!isTouch) html += '<p class="hint">Enter で次へ</p>';
  html += '</div></section>';
  return html;
}

function renderScore() {
  var m = missionData();
  var wrong = sessionWrongCount();
  var html = '<section class="screen fade-in"><div class="glass-card card-score">';
  html += '<p class="badge">MISSION COMPLETE</p>';
  html += '<h2 class="score-title">MISSION ' + m.missionNumber + ' · ' + escapeHtml(m.chapter) + '</h2>';
  html += '<div class="score-circle"><span class="score-value">' + state.score + '</span>';
  html += '<span class="score-total">/ ' + state.questions.length + '</span></div>';
  html += '<p class="score-rank">' + getRankMessage(state.score, state.questions.length) + '</p>';
  if (wrong > 0) html += '<p class="score-note">今回 ' + wrong + ' 問不正解</p>';
  html += '<div class="score-actions">';
  html += '<button type="button" class="btn-primary" id="btnRetry">もう一度</button>';
  if (state.storedWrongIds.length > 0) {
    html +=
      '<button type="button" class="btn-secondary" id="btnReview">間違えた問題を復習（' +
      state.storedWrongIds.length +
      '問）</button>';
  }
  html += '<button type="button" class="btn-secondary" id="btnBackMode">モード選択へ</button>';
  html += '<button type="button" class="btn-ghost" id="btnHome">ミッション選択へ</button>';
  html += '</div></div></section>';
  return html;
}

function render() {
  var html = '';
  if (state.screen === SCREENS.HOME) html = renderHome();
  else if (state.screen === SCREENS.MODE) html = renderMode();
  else if (state.screen === SCREENS.QUIZ) html = renderQuiz();
  else if (state.screen === SCREENS.RESULT) html = renderResult();
  else if (state.screen === SCREENS.SCORE) html = renderScore();
  app.innerHTML = html;
  bindEvents();
}

function bindEvents() {
  if (state.screen === SCREENS.HOME) {
    app.querySelectorAll('.mission-item').forEach(function (el) {
      el.addEventListener('click', function () {
        var index = Number(el.getAttribute('data-index'));
        state.missionSelection = index;
        if (isTouch) selectMission(index);
        else render();
      });
    });
    var btnConfirm = document.getElementById('btnConfirmMission');
    if (btnConfirm)
      btnConfirm.addEventListener('click', function () {
        selectMission(state.missionSelection);
      });
  }

  if (state.screen === SCREENS.MODE) {
    var btnBack = document.getElementById('btnBackHome');
    if (btnBack)
      btnBack.addEventListener('click', function () {
        state.missionSelection = state.missionIndex;
        state.screen = SCREENS.HOME;
        render();
      });
    app.querySelectorAll('[data-menu]').forEach(function (el) {
      el.addEventListener('click', function () {
        if (el.classList.contains('disabled')) return;
        state.menuSelection = Number(el.getAttribute('data-menu'));
        render();
      });
    });
    var btnStart = document.getElementById('btnStart');
    if (btnStart)
      btnStart.addEventListener('click', function () {
        var modes = [MODES.NORMAL, MODES.RANDOM, MODES.REVIEW];
        var item = menuItems()[state.menuSelection];
        if (!item.disabled) startQuiz(modes[state.menuSelection]);
      });
  }

  if (state.screen === SCREENS.QUIZ) {
    app.querySelectorAll('.choice-item').forEach(function (el) {
      el.addEventListener('click', function () {
        var index = Number(el.getAttribute('data-choice'));
        if (isTouch) handleAnswer(index);
        else if (state.selectedIndex === index) handleAnswer(index);
        else {
          state.selectedIndex = index;
          render();
        }
      });
    });
  }

  if (state.screen === SCREENS.RESULT) {
    var btnNext = document.getElementById('btnNext');
    if (btnNext) btnNext.addEventListener('click', handleNext);
  }

  if (state.screen === SCREENS.SCORE) {
    var btnRetry = document.getElementById('btnRetry');
    if (btnRetry)
      btnRetry.addEventListener('click', function () {
        startQuiz(state.mode);
      });
    var btnReview = document.getElementById('btnReview');
    if (btnReview)
      btnReview.addEventListener('click', function () {
        startQuiz(MODES.REVIEW);
      });
    var btnBackMode = document.getElementById('btnBackMode');
    if (btnBackMode)
      btnBackMode.addEventListener('click', function () {
        state.storedWrongIds = loadWrongIds(missionData().missionNumber);
        state.menuSelection = 0;
        state.screen = SCREENS.MODE;
        render();
      });
    var btnHome = document.getElementById('btnHome');
    if (btnHome)
      btnHome.addEventListener('click', function () {
        state.missionSelection = state.missionIndex;
        state.screen = SCREENS.HOME;
        render();
      });
  }
}

function handleKeydown(event) {
  if (['ArrowUp', 'ArrowDown', 'Enter', 'Escape'].indexOf(event.key) >= 0) {
    event.preventDefault();
  }

  if (state.screen === SCREENS.HOME) {
    if (event.key === 'ArrowUp') {
      state.missionSelection = (state.missionSelection - 1 + MISSIONS.length) % MISSIONS.length;
      render();
    } else if (event.key === 'ArrowDown') {
      state.missionSelection = (state.missionSelection + 1) % MISSIONS.length;
      render();
    } else if (event.key === 'Enter') {
      selectMission(state.missionSelection);
    }
    return;
  }

  if (state.screen === SCREENS.MODE) {
    var items = menuItems();
    if (event.key === 'Escape') {
      state.screen = SCREENS.HOME;
      render();
      return;
    }
    if (event.key === 'ArrowUp') {
      var nextUp = state.menuSelection;
      do {
        nextUp = (nextUp - 1 + items.length) % items.length;
      } while (items[nextUp].disabled && nextUp !== state.menuSelection);
      state.menuSelection = nextUp;
      render();
    } else if (event.key === 'ArrowDown') {
      var nextDown = state.menuSelection;
      do {
        nextDown = (nextDown + 1) % items.length;
      } while (items[nextDown].disabled && nextDown !== state.menuSelection);
      state.menuSelection = nextDown;
      render();
    } else if (event.key === 'Enter') {
      if (!items[state.menuSelection].disabled) {
        startQuiz([MODES.NORMAL, MODES.RANDOM, MODES.REVIEW][state.menuSelection]);
      }
    }
    return;
  }

  if (state.screen === SCREENS.QUIZ) {
    var q = state.questions[state.currentIndex];
    if (!q) return;
    var count = q.choices.length;
    if (event.key === 'ArrowUp') {
      state.selectedIndex = (state.selectedIndex - 1 + count) % count;
      render();
    } else if (event.key === 'ArrowDown') {
      state.selectedIndex = (state.selectedIndex + 1) % count;
      render();
    } else if (event.key === 'Enter') {
      handleAnswer(state.selectedIndex);
    }
    return;
  }

  if (state.screen === SCREENS.RESULT && event.key === 'Enter') {
    handleNext();
  }
}

document.addEventListener('keydown', handleKeydown);
render();
