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
  let lastConditions = null;

  document.querySelectorAll(".modeBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".modeBtn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      mode = btn.dataset.mode;
    });
  });

  function showScreen(target) {
    [menuScreen, quizScreen, resultScreen].forEach(s => s.classList.add("hidden"));
    target.classList.remove("hidden");
  }

  function normalizeRange() {
    let start = Number(startInput.value);
    let end = Number(endInput.value);
    if (Number.isNaN(start)) start = 1301;
    if (Number.isNaN(end)) end = 1400;
    if (start > end) [start, end] = [end, start];
    startInput.value = start;
    endInput.value = end;
    return { start, end };
  }

  function buildList() {
    const { start, end } = normalizeRange();
    let list = dataSource.filter(item => item.no >= start && item.no <= end);
    if (mode === "random") {
      list = [...list];
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
    }
    currentList = list;
    currentIndex = 0;
    answers = {};
    score = 0;
    lastConditions = { start, end, mode };
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

    const answerState = answers[item.no];

    item.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choiceBtn";
      btn.textContent = choice;

      if (answerState) {
        if (choice === item.meaning) btn.classList.add("correct");
        else if (choice === answerState.selected) btn.classList.add("wrong");
        else btn.classList.add("dim");
      } else {
        btn.onclick = () => handleAnswer(choice);
      }

      choicesBox.appendChild(btn);
    });

    if (answerState) {
      feedbackBox.className = "feedback " + (answerState.correct ? "ok" : "ng");
      feedbackBox.innerHTML = `
        <div>${answerState.correct ? "正解！" : "不正解"}</div>
        <div>正解：${item.meaning}</div>
      `;
    }

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === currentList.length - 1;
  }

  function handleAnswer(choice) {
    const item = currentList[currentIndex];
    if (answers[item.no]) return;

    const correct = choice === item.meaning;
    answers[item.no] = { selected: choice, correct };
    recalcScore();
    renderQuestion();
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

  function restartSameConditions() {
    if (!lastConditions) return;
    mode = lastConditions.mode;
    document.querySelectorAll(".modeBtn").forEach(b => {
      b.classList.toggle("active", b.dataset.mode === mode);
    });
    startInput.value = lastConditions.start;
    endInput.value = lastConditions.end;
    buildList();
    showScreen(quizScreen);
    renderQuestion();
  }

  function backToMenu() {
    showScreen(menuScreen);
  }

  startBtn.onclick = () => {
    buildList();
    if (!currentList.length) return;
    showScreen(quizScreen);
    renderQuestion();
  };

  nextBtn.onclick = goNext;
  prevBtn.onclick = goPrev;
  restartBtn.onclick = restartSameConditions;
  retryRangeBtn.onclick = backToMenu;
  backMenuBtn.onclick = backToMenu;
  restartFromResultBtn.onclick = restartSameConditions;
  retryRangeFromResultBtn.onclick = backToMenu;
  backMenuFromResultBtn.onclick = backToMenu;

  if (speakBtn) {
    speakBtn.onclick = () => {
      const item = currentList[currentIndex];
      if (!item || !("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(item.word);
      u.lang = "en-US";
      window.speechSynthesis.speak(u);
    };
  }

  showScreen(menuScreen);
})();