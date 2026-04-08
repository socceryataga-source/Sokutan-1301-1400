(() => {
  if (!window.__authOK) return;

  const dataSource = (typeof quizData !== "undefined") ? quizData : window.quizData;
  if (!Array.isArray(dataSource)) {
    console.error("quizData not found");
    return;
  }

  const $ = (id) => document.getElementById(id);

  const menuScreen = $("menuScreen");
  const quizScreen = $("quizScreen");
  const resultScreen = $("resultScreen");

  const startInput = $("startInput");
  const endInput = $("endInput");
  const startBtn = $("startBtn");
  const wordText = $("wordText");
  const choicesBox = $("choices");
  const feedbackBox = $("feedback");
  const progressText = $("progressText");
  const scoreText = $("scoreText");
  const prevBtn = $("prevBtn");
  const nextBtn = $("nextBtn");
  const restartBtn = $("restartBtn");
  const retryRangeBtn = $("retryRangeBtn");
  const backMenuBtn = $("backMenuBtn");
  const restartFromResultBtn = $("restartFromResultBtn");
  const retryRangeFromResultBtn = $("retryRangeFromResultBtn");
  const backMenuFromResultBtn = $("backMenuFromResultBtn");
  const finalScore = $("finalScore");
  const speakBtn = $("speakBtn");

  let mode = "order";
  let currentList = [];
  let currentIndex = 0;
  let score = 0;
  let answers = {};

  function showScreen(target) {
    [menuScreen, quizScreen, resultScreen].forEach(s => s.classList.add("hidden"));
    target.classList.remove("hidden");
  }

  function buildList() {
    let start = Number(startInput.value);
    let end = Number(endInput.value);
    if (start > end) [start, end] = [end, start];

    let list = dataSource.filter(item => item.no >= start && item.no <= end);
    if (mode === "random") list.sort(() => Math.random() - 0.5);

    currentList = list;
    currentIndex = 0;
    answers = {};
    score = 0;
  }

  function recalcScore() {
    score = Object.values(answers).filter(a => a.correct).length;
  }

  function renderQuestion() {
    const item = currentList[currentIndex];
    if (!item) return;

    progressText.textContent = `${currentIndex + 1} / ${currentList.length}`;
    scoreText.textContent = `Score: ${score}`;
    wordText.textContent = item.word;

    choicesBox.innerHTML = "";
    feedbackBox.className = "feedback hidden";
    feedbackBox.innerHTML = "";

    item.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.className = "choiceBtn";
      btn.textContent = choice;
      btn.onclick = () => handleAnswer(choice);
      choicesBox.appendChild(btn);
    });
  }

  function handleAnswer(choice) {
    const item = currentList[currentIndex];
    if (answers[item.no]) return;

    const correct = choice === item.meaning;
    answers[item.no] = { selected: choice, correct };
    recalcScore();

    feedbackBox.className = "feedback " + (correct ? "ok" : "ng");
    feedbackBox.innerHTML = `
      <div>${correct ? "正解！" : "不正解"}</div>
      <div>正解：${item.meaning}</div>
    `;
  }

  function goNext() {
    if (currentIndex < currentList.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      recalcScore();
      finalScore.textContent = `${score} / ${currentList.length}`;
      showScreen(resultScreen);
    }
  }

  function goPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  }

  startBtn.onclick = () => {
    buildList();
    showScreen(quizScreen);
    renderQuestion();
  };

  nextBtn.onclick = goNext;
  prevBtn.onclick = goPrev;

  showScreen(menuScreen);
})();