(() => {
  if (!window.__authOK) return;
  if (!Array.isArray(window.quizData)) {
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

    start = Math.max(1301, Math.min(1400, start));
    end = Math.max(1301, Math.min(1400, end));

    if (start > end) [start, end] = [end, start];

    startInput.value = start;
    endInput.value = end;
    return { start, end };
  }

  function buildList() {
    const { start, end } = normalizeRange();
    let list = quizData.filter(item => item.no >= start && item.no <= end);

    if (mode === "random") {
      list = [...list];
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
    }

    lastConditions = { start, end, mode };
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
    feedbackBox.className = "feedback hidden";
    feedbackBox.innerHTML = "";

    const answerState = answers[item.no];
    choicesBox.innerHTML = "";

    item.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choiceBtn";
      btn.textContent = choice;

      if (answerState) {
        if (choice === item.meaning) btn.classList.add("correct");
        else if (choice === answerState.selected && choice !== item.meaning) btn.classList.add("wrong");
        else btn.classList.add("dim");
      } else {
        btn.addEventListener("click", () => handleAnswer(choice));
      }

      choicesBox.appendChild(btn);
    });

    if (answerState) {
      showFeedback(item, answerState.correct);
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
    scoreText.textContent = `Score: ${score}`;
    renderQuestion();
  }

  function showFeedback(item, correct) {
    feedbackBox.className = `feedback ${correct ? "ok" : "ng"}`;
    feedbackBox.innerHTML = `
      <div class="fbTitle">${correct ? "正解！" : "不正解"}</div>
      <div class="fbAnswer">正解：${item.meaning}</div>
      <div class="fbExample"><strong>例文：</strong>${item.sentence}</div>
      <div class="fbTranslation"><strong>和訳：</strong>${item.translation}</div>
    `;
  }

  function goNext() {
    if (currentIndex < currentList.length - 1) {
      currentIndex += 1;
      renderQuestion();
    } else {
      recalcScore();
      finalScore.textContent = `${score} / ${currentList.length}`;
      showScreen(resultScreen);
    }
  }

  function goPrev() {
    if (currentIndex > 0) {
      currentIndex -= 1;
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

  startBtn.addEventListener("click", () => {
    buildList();
    if (!currentList.length) return;
    showScreen(quizScreen);
    renderQuestion();
  });

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);
  restartBtn.addEventListener("click", restartSameConditions);
  retryRangeBtn.addEventListener("click", backToMenu);
  backMenuBtn.addEventListener("click", backToMenu);
  restartFromResultBtn.addEventListener("click", restartSameConditions);
  retryRangeFromResultBtn.addEventListener("click", backToMenu);
  backMenuFromResultBtn.addEventListener("click", backToMenu);

  speakBtn.addEventListener("click", () => {
    const item = currentList[currentIndex];
    if (!item || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const uttr = new SpeechSynthesisUtterance(item.word);
    uttr.lang = "en-US";
    window.speechSynthesis.speak(uttr);
  });

  showScreen(menuScreen);
})();
