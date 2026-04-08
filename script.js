
const menuScreen = document.getElementById('menuScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

const startInput = document.getElementById('startInput');
const endInput = document.getElementById('endInput');
const startBtn = document.getElementById('startBtn');
const modeButtons = Array.from(document.querySelectorAll('.modeBtn'));

const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const scoreText = document.getElementById('scoreText');
const questionNo = document.getElementById('questionNo');
const wordText = document.getElementById('wordText');
const choices = document.getElementById('choices');
const feedback = document.getElementById('feedback');
const speakBtn = document.getElementById('speakBtn');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const retryRangeBtn = document.getElementById('retryRangeBtn');
const backMenuBtn = document.getElementById('backMenuBtn');

const finalScore = document.getElementById('finalScore');
const finalRate = document.getElementById('finalRate');
const restartFromResultBtn = document.getElementById('restartFromResultBtn');
const retryRangeFromResultBtn = document.getElementById('retryRangeFromResultBtn');
const backMenuFromResultBtn = document.getElementById('backMenuFromResultBtn');

const MIN_NO = 1301;
const MAX_NO = 1400;
const CHOICE_LABELS = ['A.', 'B.', 'C.', 'D.'];

let currentMode = 'order';
let currentSet = [];
let currentIndex = 0;
let userAnswers = [];
let lastSettings = null;

function showScreen(screen) {
  [menuScreen, quizScreen, resultScreen].forEach(section => section.classList.add('hidden'));
  screen.classList.remove('hidden');
}

function setMode(mode) {
  currentMode = mode;
  modeButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));
}

function shuffle(array) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function normalizeNumber(value) {
  return Number(String(value).trim());
}

function validateRange(start, end) {
  if (Number.isNaN(start) || Number.isNaN(end)) {
    alert('開始番号と終了番号を入力してください。');
    return false;
  }
  if (start < MIN_NO || end > MAX_NO) {
    alert(`範囲は ${MIN_NO}〜${MAX_NO} で指定してください。`);
    return false;
  }
  if (start > end) {
    alert('開始番号は終了番号以下にしてください。');
    return false;
  }
  return true;
}

function buildQuestionSet(settings) {
  const filtered = quizData.filter(item => item.no >= settings.start && item.no <= settings.end);
  if (filtered.length === 0) {
    alert('その範囲にはデータがありません。');
    return null;
  }
  return settings.mode === 'random' ? shuffle(filtered) : [...filtered].sort((a, b) => a.no - b.no);
}

function getMenuSettings() {
  const start = normalizeNumber(startInput.value);
  const end = normalizeNumber(endInput.value);
  if (!validateRange(start, end)) return null;
  return { start, end, mode: currentMode };
}

function startQuiz(useLastSettings = false) {
  if (!Array.isArray(quizData) || quizData.length === 0) {
    alert('データの読み込みに失敗しました。');
    return;
  }

  const settings = useLastSettings && lastSettings ? { ...lastSettings } : getMenuSettings();
  if (!settings) return;

  startInput.value = settings.start;
  endInput.value = settings.end;
  setMode(settings.mode);

  const questionSet = buildQuestionSet(settings);
  if (!questionSet) return;

  lastSettings = { ...settings };
  currentSet = questionSet;
  currentIndex = 0;
  userAnswers = currentSet.map(() => null);

  showScreen(quizScreen);
  renderQuestion();
}

function calculateScore() {
  return userAnswers.reduce((total, answer, index) => {
    const item = currentSet[index];
    return answer && item && answer === item.meaning ? total + 1 : total;
  }, 0);
}

function renderQuestion() {
  const item = currentSet[currentIndex];
  if (!item) return;

  const selectedAnswer = userAnswers[currentIndex];
  const answered = selectedAnswer !== null;

  progressText.textContent = `${currentIndex + 1} / ${currentSet.length}`;
  progressBar.style.width = `${((currentIndex + 1) / currentSet.length) * 100}%`;
  scoreText.textContent = `Score: ${calculateScore()}`;
  questionNo.textContent = `No.${item.no}`;
  wordText.textContent = item.word;

  choices.innerHTML = '';
  item.choices.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choiceBtn';
    btn.innerHTML = `<span class="choiceLabel">${CHOICE_LABELS[index]}</span><span>${choice}</span>`;

    if (!answered) {
      btn.addEventListener('click', () => handleAnswer(choice));
    } else {
      btn.disabled = true;
      if (choice === selectedAnswer) btn.classList.add('selected');
      if (choice === item.meaning) btn.classList.add('correct');
      if (choice === selectedAnswer && choice !== item.meaning) btn.classList.add('wrong');
    }

    choices.appendChild(btn);
  });

  if (!answered) {
    feedback.className = 'feedback hidden';
    feedback.innerHTML = '';
  } else {
    renderFeedback(item, selectedAnswer);
  }

  prevBtn.disabled = currentIndex === 0;
  nextBtn.textContent = currentIndex === currentSet.length - 1 ? '結果へ' : '次へ';
}

function renderFeedback(item, selectedAnswer) {
  const isCorrect = selectedAnswer === item.meaning;
  feedback.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
  feedback.innerHTML = `
    <div class="feedbackState">${isCorrect ? '○ 正解！' : '× 不正解'}</div>
    <div class="feedbackAnswer">正解：${item.meaning}</div>
    <div class="feedbackBlock">
      <span class="feedbackLabel">例文</span>
      <div>${item.sentence}</div>
    </div>
    <div class="feedbackBlock">
      <span class="feedbackLabel">和訳</span>
      <div>${item.translation}</div>
    </div>
  `;
  scoreText.textContent = `Score: ${calculateScore()}`;
}

function handleAnswer(choice) {
  if (userAnswers[currentIndex] !== null) return;
  userAnswers[currentIndex] = choice;
  renderQuestion();
}

function goPrev() {
  if (currentIndex === 0) return;
  currentIndex -= 1;
  renderQuestion();
}

function goNext() {
  if (currentIndex === currentSet.length - 1) {
    showResults();
    return;
  }
  currentIndex += 1;
  renderQuestion();
}

function showResults() {
  const score = calculateScore();
  const total = currentSet.length;
  const rate = total ? Math.round((score / total) * 100) : 0;
  finalScore.textContent = `${score} / ${total}`;
  finalRate.textContent = `正答率 ${rate}%`;
  showScreen(resultScreen);
}

function returnToMenu() {
  if (lastSettings) {
    startInput.value = lastSettings.start;
    endInput.value = lastSettings.end;
    setMode(lastSettings.mode);
  }
  showScreen(menuScreen);
}

function speakCurrentWord() {
  const item = currentSet[currentIndex];
  if (!item || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(item.word);
  utterance.lang = 'en-US';
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
}

modeButtons.forEach(btn => {
  btn.addEventListener('click', () => setMode(btn.dataset.mode));
});

startBtn.addEventListener('click', () => startQuiz(false));
prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);
speakBtn.addEventListener('click', speakCurrentWord);
restartBtn.addEventListener('click', () => startQuiz(true));
restartFromResultBtn.addEventListener('click', () => startQuiz(true));
retryRangeBtn.addEventListener('click', returnToMenu);
retryRangeFromResultBtn.addEventListener('click', returnToMenu);
backMenuBtn.addEventListener('click', returnToMenu);
backMenuFromResultBtn.addEventListener('click', returnToMenu);

showScreen(menuScreen);
