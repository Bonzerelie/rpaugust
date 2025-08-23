document.addEventListener('DOMContentLoaded', () => {
  const startScreen = document.getElementById('main-menu');
  const modeSelectScreen = document.getElementById('mode-select-screen');
  const gameScreen = document.getElementById('game-screen');
  const noteButtonsContainer = document.getElementById('note-buttons-container');
  const promptText = document.getElementById('prompt');
  const playScaleBtn = document.getElementById('play-scale');
  const replayNoteBtn = document.getElementById('replay-note');
  const nextBtn = document.getElementById('next-button');
  const resetScoreBtn = document.getElementById('reset-score');
  const backButton = document.getElementById('back-button');
  const backToScaleSelect = document.getElementById('back-to-scale-select');
  const displayNotesBtn = document.getElementById('display-notes');
  const displayDegreesBtn = document.getElementById('display-degrees');
  const scaleLabel = document.getElementById('scale-label');
  const octaveLabel = document.getElementById('octave-label');
  const correctCount = document.getElementById('correct-count');
  const incorrectCount = document.getElementById('incorrect-count');
  const totalCount = document.getElementById('total-count');
  const reallyQuickBtn = document.getElementById('really-quick-counting-btn');
const reallyQuickSelectScreen = document.getElementById('really-quick-counting-select-screen');
const reallyQuickGameScreen = document.getElementById('really-quick-counting-game');
const playReallyQuickBtn = document.getElementById('play-really-quick-audio');
const nextReallyQuickBtn = document.getElementById('next-really-quick');
const reallyQuickFeedback = document.getElementById('really-quick-feedback');
const reallyQuickAnswerContainer = document.getElementById('really-quick-answer-buttons');
const reallyQuickPrompt = document.getElementById('really-quick-prompt');
const reallyQuickCorrect = document.getElementById('really-quick-correct');
const reallyQuickIncorrect = document.getElementById('really-quick-incorrect');
const reallyQuickTotal = document.getElementById('really-quick-total');
const reallyQuickAccuracy = document.getElementById('really-quick-accuracy');
  const accuracyDisplay = document.getElementById('accuracy');
  const addNoteBtn = document.getElementById('add-note');
  const removeNoteBtn = document.getElementById('remove-note');
  const selectedScaleLabel = document.getElementById('selected-scale-label');
  const aboutBtn = document.getElementById('about-btn');
  const chordVisualBtn = document.getElementById('chord-visual-btn');
const chordVisualSelect = document.getElementById('chord-visual-select-screen');
const chordVisualGame = document.getElementById('chord-visual-game');
const chordVisualImage = document.getElementById('chord-visual-image');
const chordVisualPrompt = document.getElementById('chord-visual-prompt');
const chordVisualAnswers = document.getElementById('chord-visual-answers');
const nextChordVisualBtn = document.getElementById('next-chord-visual');
const chordVisualFeedback = document.getElementById('chord-visual-feedback');
const chordVisualCorrect = document.getElementById('chord-visual-correct');
const chordVisualIncorrect = document.getElementById('chord-visual-incorrect');
const chordVisualTotal = document.getElementById('chord-visual-total');
const chordVisualAccuracy = document.getElementById('chord-visual-accuracy');
const aboutPage = document.getElementById('about-page');
const backToHomeFromAbout = document.getElementById('back-to-home-from-about');
const compareScreen = document.getElementById('comparison-game');
const compareBtn = document.getElementById('compare-mode-btn');
const quickBtn = document.getElementById('quick-counting-btn');
const quickSelectScreen = document.getElementById('quick-counting-select-screen');
const quickGameScreen = document.getElementById('quick-counting-game');
const playQuickBtn = document.getElementById('play-quick-audio');
const nextQuickBtn = document.getElementById('next-quick');
const quickFeedback = document.getElementById('quick-feedback');
const quickAnswerContainer = document.getElementById('quick-answer-buttons');
const quickPrompt = document.getElementById('quick-prompt');
const quickCorrect = document.getElementById('quick-correct');
const quickIncorrect = document.getElementById('quick-incorrect');
const quickTotal = document.getElementById('quick-total');
const quickAccuracy = document.getElementById('quick-accuracy');
const backFromCompare = document.getElementById('back-to-home-from-compare');
const playComparisonBtn = document.getElementById('play-comparison');
const compareAnswerButtons = document.querySelectorAll('.compare-answer');
const compareCorrect = document.getElementById('compare-correct');
const compareIncorrect = document.getElementById('compare-incorrect');
const compareTotal = document.getElementById('compare-total');
const compareAccuracy = document.getElementById('compare-accuracy');
const nextCompareBtn = document.getElementById('next-comparison');
const resetCompareScoreBtn = document.getElementById('reset-compare-score');
const compareFeedback = document.getElementById('compare-feedback');
const nextMajMinBtn = document.getElementById('majmin-next');
const majminBtn = document.getElementById('major-minor-btn');
const majminScreen = document.getElementById('major-minor-game');
const playMajMinBtn = document.getElementById('play-majmin-chord');
const majminPrompt = document.getElementById('majmin-prompt');
const majminFeedback = document.getElementById('majmin-feedback');
const majminAnswerBtns = document.querySelectorAll('.majmin-answer');
const majminCorrect = document.getElementById('majmin-correct');
const majminIncorrect = document.getElementById('majmin-incorrect');
const majminTotal = document.getElementById('majmin-total');
const majminAccuracy = document.getElementById('majmin-accuracy');
const majminReset = document.getElementById('majmin-reset');
const backFromMajMin = document.getElementById('back-to-home-from-majmin');
// ---- D7/M7 INTRO (new) ----
const d7m7IntroScreen   = document.getElementById('d7m7-intro');
const d7m7IntroHomeBtn  = document.getElementById('d7m7-intro-home');
const d7m7BeginBtn      = document.getElementById('d7m7-begin');
const d7m7IntroRefDom   = document.getElementById('d7m7-intro-ref-dom');
const d7m7IntroRefMaj   = document.getElementById('d7m7-intro-ref-maj');


// ================================
// Dominant 7th or Major 7th? NEW
// ================================
const d7m7MenuBtn   = document.getElementById('d7m7-menu-btn');
const d7m7Screen    = document.getElementById('d7m7-game');
const d7m7HomeBtn   = document.getElementById('d7m7-home');

const d7m7RefDomBtn = document.getElementById('d7m7-ref-dom');
const d7m7RefMajBtn = document.getElementById('d7m7-ref-maj');

const d7m7PlayBtn   = document.getElementById('d7m7-play');
const d7m7NextBtn   = document.getElementById('d7m7-next');

const d7m7AnsDomBtn = document.getElementById('d7m7-answer-dom');
const d7m7AnsMajBtn = document.getElementById('d7m7-answer-maj');

const d7m7Feedback  = document.getElementById('d7m7-feedback');

const d7m7Correct   = document.getElementById('d7m7-correct');
const d7m7Incorrect = document.getElementById('d7m7-incorrect');
const d7m7Total     = document.getElementById('d7m7-total');
const d7m7Accuracy  = document.getElementById('d7m7-accuracy');
const d7m7Reset     = document.getElementById('d7m7-reset');
// ---- D7/M7 "More Information" screen ----
const d7m7MoreInfoBtn       = document.getElementById('d7m7-moreinfo');
const d7m7StructureScreen   = document.getElementById('d7m7-structure');
const d7m7StructureHomeBtn  = document.getElementById('d7m7-structure-home');
const d7m7StructureBackBtn  = document.getElementById('d7m7-structure-back');


// dedicated audio channels
let d7m7Audio = new Audio();
let d7m7FeedbackAudio = new Audio();

// state
let d7m7CurrentType = null;      // 'dom' or 'maj'
let d7m7CurrentFile = '';        // filename including .mp3
let d7m7Locked = false;
const d7m7Score = { correct: 0, incorrect: 0 };


// ================================
// Major or Minor Scale?  (NEW)
// ================================
const mosMenuBtn = document.getElementById('major-or-minor-scale-btn');
const mosScreen  = document.getElementById('mos-game');

const mosPlay1  = document.getElementById('mos-play-1');
const mosPlay2  = document.getElementById('mos-play-2');
const mosNext   = document.getElementById('mos-next');
const mosHome   = document.getElementById('mos-home');

const mosAnswers = document.querySelectorAll('#mos-answer-buttons .mos-answer');
const mosFeedback = document.getElementById('mos-feedback');

const mosCorrect   = document.getElementById('mos-correct');
const mosIncorrect = document.getElementById('mos-incorrect');
const mosTotal     = document.getElementById('mos-total');
const mosAccuracy  = document.getElementById('mos-accuracy');
const mosReset     = document.getElementById('mos-reset');
const mosRef   = document.getElementById('mos-ref');


let mosAudio = new Audio();
let mosMap = { 1: '', 2: '' };    // which filename is bound to each play button
let mosCorrectChoice = 0;          // 1 or 2
let mosLocked = false;

let mosFeedbackAudio = new Audio();  // NEW: separate audio channel for feedback

function mosStopFeedbackAudio() {     // NEW: stop feedback audio on any other click
  if (mosFeedbackAudio && !mosFeedbackAudio.paused) {
    mosFeedbackAudio.pause();
    mosFeedbackAudio.currentTime = 0;
  }
}



const mosScore = { correct: 0, incorrect: 0 };

// Utility
function mosRandInt(max) { return Math.floor(Math.random() * max) + 1; }

function mosUpdateScore() {
  const total = mosScore.correct + mosScore.incorrect;
  mosCorrect.textContent = mosScore.correct;
  mosIncorrect.textContent = mosScore.incorrect;
  mosTotal.textContent = total;
  mosAccuracy.textContent = total ? ((mosScore.correct / total) * 100).toFixed(1) + '%' : '0.0%';
}

function mosStopAudio() {
  if (mosAudio && !mosAudio.paused) {
    mosAudio.pause();
    mosAudio.currentTime = 0;
  }
}

function playUiSound(filename) {
  try {
    const a = new Audio(`audio/${filename}`);
    a.play();
  } catch (e) {
    // silently ignore if audio can't play
  }
}

/* ================================
 * Intervals (IVL) – namespaced
 * ================================ */

const ivlMenuBtn        = document.getElementById('intervals-menu-btn');
const ivlIntro          = document.getElementById('ivl-intro');
const ivlSelect         = document.getElementById('ivl-select');
const ivlGame           = document.getElementById('ivl-game');

const ivlHomeFromIntro  = document.getElementById('ivl-home-from-intro');
const ivlHomeFromSelect = document.getElementById('ivl-home-from-select');
const ivlHomeFromGame   = document.getElementById('ivl-home-from-game');

const ivlBackToIntro    = document.getElementById('ivl-back-to-intro');
const ivlBackToSelect   = document.getElementById('ivl-back-to-select');

const ivlBegin          = document.getElementById('ivl-begin');
const ivlCountButtons   = document.querySelectorAll('.ivl-mode-button');

const ivlPlayBtn        = document.getElementById('ivl-play');
const ivlNextBtn        = document.getElementById('ivl-next');
const ivlPrompt         = document.getElementById('ivl-prompt');
const ivlFeedback       = document.getElementById('ivl-feedback');
const ivlAnswerContainer = document.getElementById('ivl-answer-buttons');

const ivlRemoveBtn      = document.getElementById('ivl-remove');
const ivlAddBtn         = document.getElementById('ivl-add');
const ivlCountLabel     = document.getElementById('ivl-count-label');

const ivlCorrect        = document.getElementById('ivl-correct');
const ivlIncorrect      = document.getElementById('ivl-incorrect');
const ivlTotal          = document.getElementById('ivl-total');
const ivlAccuracy       = document.getElementById('ivl-accuracy');
const ivlReset          = document.getElementById('ivl-reset');

// dedicated audio
let ivlAudio1 = new Audio();
let ivlAudio2 = new Audio();
let ivlFeedbackAudio = new Audio();

function ivlStopAllAudio() {
  try { if (ivlAudio1 && !ivlAudio1.paused) { ivlAudio1.pause(); ivlAudio1.currentTime = 0; } } catch(e){}
  try { if (ivlAudio2 && !ivlAudio2.paused) { ivlAudio2.pause(); ivlAudio2.currentTime = 0; } } catch(e){}
  try { if (ivlFeedbackAudio && !ivlFeedbackAudio.paused) { ivlFeedbackAudio.pause(); ivlFeedbackAudio.currentTime = 0; } } catch(e){}
}

// --------------------
// Data + state
// --------------------
const IVL_ALL = [
  { code:'P1',   name:'perfect unison', semitones:0  },
  { code:'m2',   name:'minor second',   semitones:1  },
  { code:'M2',   name:'major second',   semitones:2  },
  { code:'m3',   name:'minor third',    semitones:3  },
  { code:'M3',   name:'major third',    semitones:4  },
  { code:'P4',   name:'perfect fourth', semitones:5  },
  { code:'A4/d5',name:'tritone',        semitones:6  },
  { code:'P5',   name:'perfect fifth',  semitones:7  },
  { code:'m6',   name:'minor sixth',    semitones:8  },
  { code:'M6',   name:'major sixth',    semitones:9  },
  { code:'m7',   name:'minor seventh',  semitones:10 },
  { code:'M7',   name:'major seventh',  semitones:11 },
  { code:'P8',   name:'perfect octave', semitones:12 },
];

let ivlCount = 13; // how many of the FIRST intervals are active (3..13)
let ivlBuilt = false;

const IVL_MIN_COUNT = 3;
const IVL_MAX_COUNT = 13;

// Range boundaries (inclusive)
const IVL_MIN_NOTE = 'g3';
const IVL_MAX_NOTE = 'g5';

// Score
const ivlScore = { correct: 0, incorrect: 0 };

// Current question
let ivlCurrent = {
  low: '', high: '', // 'c4' style, lowercase
  interval: IVL_ALL[0] // object from IVL_ALL
};

// --------------------
// Helpers
// --------------------
const IVL_PC = ['c','c#','d','d#','e','f','f#','g','g#','a','a#','b'];

function ivlMidi(note) {
  const m = note.match(/^([a-g]#?)(\d)$/i);
  if (!m) return 0;
  const pc = m[1].toLowerCase();
  const oct = parseInt(m[2], 10);
  const base = {c:0,d:2,e:4,f:5,g:7,a:9,b:11}[pc[0]];
  const sharp = pc.includes('#') ? 1 : 0;
  return 12 * (oct + 1) + base + sharp; // same mapping your app uses elsewhere; local name to avoid collisions :contentReference[oaicite:6]{index=6}
}

function ivlFromMidi(m) {
  const oct = Math.floor(m/12) - 1;
  const pc  = m % 12;
  return `${IVL_PC[pc]}${oct}`;
}

function ivlUpdateScore() {
  const total = ivlScore.correct + ivlScore.incorrect;
  ivlCorrect.textContent = ivlScore.correct;
  ivlIncorrect.textContent = ivlScore.incorrect;
  ivlTotal.textContent = total;
  ivlAccuracy.textContent = total ? ((ivlScore.correct / total) * 100).toFixed(1) + '%' : '0.0%';
}

function ivlSetFeedback(t) { ivlFeedback.textContent = t; }

function ivlEnableAnswers(enable) {
  const btns = ivlAnswerContainer.querySelectorAll('.ivl-answer');
  btns.forEach(b => {
    b.disabled = !enable;
    b.classList.remove('correct','incorrect');
  });
}

// --------------------
// Build / refresh answers
// --------------------
function ivlBuildAnswersIfNeeded() {
  if (ivlBuilt) return;
  ivlAnswerContainer.innerHTML = '';
  IVL_ALL.forEach((itv, idx) => {
    const b = document.createElement('button');
    b.className = 'ivl-green-button ivl-answer wide-answer-button';
    b.textContent = itv.code;
    b.setAttribute('data-index', String(idx));
    ivlAnswerContainer.appendChild(b);
  });
  // Set listeners once
  ivlAnswerContainer.querySelectorAll('.ivl-answer').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!ivlNextBtn.disabled) return; // already answered
      const idx = parseInt(btn.getAttribute('data-index'));
      const guess = IVL_ALL[idx];

      // Stop interval playback
      ivlStopAllAudio();

      // lock answers
      ivlEnableAnswers(false);

      // Disable Play until Next (your requirement)
      ivlPlayBtn.disabled = true;

      const correct = (guess.code === ivlCurrent.interval.code);
      const low = ivlCurrent.low;
      const high = ivlCurrent.high;
      const niceName = ivlCurrent.interval.name;
      const short = ivlCurrent.interval.code;

      if (correct) {
        ivlScore.correct++;
        btn.classList.add('correct');
        ivlSetFeedback(`Correct! ✅ The two notes were '${low}' and '${high}', which make an interval of a ${niceName} (${short}).`);
        ivlFeedbackAudio.src = 'audio/correct1.mp3';
      } else {
        ivlScore.incorrect++;
        btn.classList.add('incorrect');
        // also mark the correct one
        const correctIdx = IVL_ALL.findIndex(x => x.code === ivlCurrent.interval.code);
        const correctBtn = ivlAnswerContainer.querySelector(`.ivl-answer[data-index="${correctIdx}"]`);
        if (correctBtn) correctBtn.classList.add('correct');
        ivlSetFeedback(`Incorrect! ❌ The two notes were '${low}' and '${high}', which make an interval of a ${niceName} (${short}).`);
        ivlFeedbackAudio.src = 'audio/incorrect1.mp3';
      }
      ivlFeedbackAudio.play();

      ivlUpdateScore();
      ivlNextBtn.disabled = false;
      ivlNextBtn.classList.add('pop-animation');
      setTimeout(() => ivlNextBtn.classList.remove('pop-animation'), 300);
    });
  });
  ivlBuilt = true;
}

function ivlRefreshAnswerVisibility() {
  const btns = ivlAnswerContainer.querySelectorAll('.ivl-answer');
  btns.forEach((b, i) => {
    b.style.display = (i < ivlCount) ? '' : 'none';
  });
  ivlCountLabel.textContent = String(ivlCount);
}

// --------------------
// Round generation
// --------------------
function ivlNewRound() {
  ivlStopAllAudio();

  ivlSetFeedback('Awaiting your answer...');
  ivlEnableAnswers(true);

  // Next stays disabled until you answer (matches other modes)
  ivlNextBtn.disabled = true;

  // Play enabled at the start of a round
  ivlPlayBtn.disabled = false;

  // pick a random interval from the ACTIVE front slice
  const list = IVL_ALL.slice(0, ivlCount);
  const itv = list[Math.floor(Math.random() * list.length)];
  const d = itv.semitones;

  // choose a low note so that high <= g5 and low >= g2
  const minM = ivlMidi(IVL_MIN_NOTE);
  const maxM = ivlMidi(IVL_MAX_NOTE);
  const lowMin = minM;
  const lowMax = maxM - d;

  let lowM = lowMin;
  if (lowMax >= lowMin) {
    const span = lowMax - lowMin + 1;
    lowM = lowMin + Math.floor(Math.random() * span);
  }
  const highM = lowM + d;

  // Build names (always lowercase, URL-encode # on play)
  const lowName  = ivlFromMidi(lowM);
  const highName = ivlFromMidi(highM);

  // For P1: second is the same (still valid)
  ivlCurrent = { low: lowName, high: highName, interval: itv };
}

// --------------------
// Playback
// --------------------
function ivlPlayInterval() {
  // Safety: if both notes weren’t generated yet
  if (!ivlCurrent.low || !ivlCurrent.high) return;

  const f1 = `audio/${encodeURIComponent(ivlCurrent.low)}.mp3`;
const f2 = `audio/${encodeURIComponent(ivlCurrent.high)}.mp3`;

  ivlStopAllAudio();
  ivlAudio1 = new Audio(f1);
  ivlAudio2 = new Audio(f2);

  // preload then play sequentially (mirrors your comparison game timing) :contentReference[oaicite:7]{index=7}
  Promise.all([
    new Promise(res => { ivlAudio1.oncanplaythrough = res; ivlAudio1.load(); }),
    new Promise(res => { ivlAudio2.oncanplaythrough = res; ivlAudio2.load(); }),
  ]).then(() => {
    setTimeout(() => {
      ivlAudio1.play();
      setTimeout(() => ivlAudio2.play(), 900);
    }, 200);
  });
}

// --------------------
// Adjust controls
// --------------------
function ivlUpdateAdjustButtonsState() {
  ivlRemoveBtn.disabled = (ivlCount <= IVL_MIN_COUNT);
  ivlAddBtn.disabled    = (ivlCount >= IVL_MAX_COUNT);
}

ivlRemoveBtn && ivlRemoveBtn.addEventListener('click', () => {
  if (ivlCount > IVL_MIN_COUNT) {
    ivlCount--;
    ivlRefreshAnswerVisibility();
    ivlUpdateAdjustButtonsState();
    // reset question to respect new set
    ivlNewRound();
  }
});

ivlAddBtn && ivlAddBtn.addEventListener('click', () => {
  if (ivlCount < IVL_MAX_COUNT) {
    ivlCount++;
    ivlRefreshAnswerVisibility();
    ivlUpdateAdjustButtonsState();
    ivlNewRound();
  }
});

// --------------------
// Buttons & Navigation
// --------------------
ivlPlayBtn && ivlPlayBtn.addEventListener('click', () => {
  ivlPlayInterval();
});

ivlNextBtn && ivlNextBtn.addEventListener('click', () => {
  ivlNewRound();          // sets up low/high + enables Play for the new round
  ivlPlayInterval();      // 👈 auto-play immediately so the user doesn’t have to press Play
});


// Score reset
ivlReset && ivlReset.addEventListener('click', () => {
  ivlScore.correct = 0;
  ivlScore.incorrect = 0;
  ivlUpdateScore();
});

// Menu button (from home)
ivlMenuBtn && ivlMenuBtn.addEventListener('click', () => {
  hideAllScreens();
  ivlIntro.classList.remove('hidden');
  window.scrollTo(0, 0);
});

// Intro -> Select
ivlBegin && ivlBegin.addEventListener('click', () => {
  hideAllScreens();
  ivlSelect.classList.remove('hidden');
  window.scrollTo(0, 0);
});

// Select a count -> Game
ivlCountButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    ivlCount = parseInt(btn.getAttribute('data-count'), 10);
    hideAllScreens();
    ivlGame.classList.remove('hidden');
    window.scrollTo(0, 0);

    ivlBuildAnswersIfNeeded();
    ivlRefreshAnswerVisibility();
    ivlUpdateAdjustButtonsState();
    ivlUpdateScore();

    // start a fresh question
    ivlNewRound();
  });
});

// Back/Home (all back buttons play back1.mp3)
function ivlGoHome() {
  ivlStopAllAudio();
  hideAllScreens();
  document.getElementById('main-menu').classList.remove('hidden');
  window.scrollTo(0, 0);
}

[ivlHomeFromIntro, ivlHomeFromSelect, ivlHomeFromGame].forEach(b => {
  b && b.addEventListener('click', ivlGoHome);
});

ivlBackToIntro && ivlBackToIntro.addEventListener('click', () => {
  ivlStopAllAudio();
  playUiSound('back1.mp3');
  hideAllScreens();
  ivlIntro.classList.remove('hidden');
  window.scrollTo(0, 0);
});

ivlBackToSelect && ivlBackToSelect.addEventListener('click', () => {
  ivlStopAllAudio();
  playUiSound('back1.mp3');
  hideAllScreens();
  ivlSelect.classList.remove('hidden');
  window.scrollTo(0, 0);
});

// -----------------------------------------------------
// Integrate with your existing hideAllScreens() safely:
// add the new screens to the list + stop our audio too.
// -----------------------------------------------------
(function patchHideAllScreensForIVL(){
  const _orig = hideAllScreens;
  window.hideAllScreens = function() {
    try { ivlStopAllAudio(); } catch(e){}
    _orig.call(window);
    // Also hide our screens explicitly in case your ID list changes elsewhere:
    [ivlIntro, ivlSelect, ivlGame].forEach(el => el && el.classList.add('hidden'));
  };
})();



function mosSetFeedback(text) {
  mosFeedback.textContent = text;
}

function mosEnableAnswers(enable) {
  mosAnswers.forEach(btn => {
    btn.disabled = !enable;
    btn.classList.remove('correct', 'incorrect');
  });
}

function mosNewRound() {
  mosStopFeedbackAudio();   
  mosLocked = false;
  mosSetFeedback('Awaiting your answer...');
  mosEnableAnswers(true);
  mosNext.disabled = true;

  mosPlay1.disabled = false;
  mosPlay2.disabled = false;

  // pick one major and one non-major
  const majorFile = `majorscale${mosRandInt(19)}`;
  const notFile   = `notmajorscale${mosRandInt(19)}`;

  // Randomly assign which is Scale 1 and Scale 2
  if (Math.random() < 0.5) {
    mosMap[1] = majorFile;
    mosMap[2] = notFile;
    mosCorrectChoice = 1;
  } else {
    mosMap[1] = notFile;
    mosMap[2] = majorFile;
    mosCorrectChoice = 2;
  }
}

function mosPlay(which) {
  const file = mosMap[which];
  if (!file) return;
  mosStopAudio();
  mosAudio.src = `audio/${encodeURIComponent(file)}.mp3`;
  mosAudio.play();
}

// Answer flow
mosAnswers.forEach(btn => {
  btn.addEventListener('click', () => {
    if (mosLocked) return;
    const choice = Number(btn.getAttribute('data-choice'));
    mosLocked = true;
    mosEnableAnswers(false);

    mosStopAudio();

    mosStopFeedbackAudio && mosStopFeedbackAudio();

    mosPlay1.disabled = true;
    mosPlay2.disabled = true;

    mosStopFeedbackAudio();

    if (choice === mosCorrectChoice) {
      mosScore.correct++;
      btn.classList.add('correct');
      mosSetFeedback(`Correct! ✅ Scale ${mosCorrectChoice} was the major scale!`);
      mosFeedbackAudio.src = 'audio/correct1.mp3';   // NEW
      mosFeedbackAudio.play();
    } else {
      mosScore.incorrect++;
      btn.classList.add('incorrect');
      mosSetFeedback(`Incorrect! ❌ Scale ${mosCorrectChoice} was the major scale!`);
      mosFeedbackAudio.src = 'audio/incorrect1.mp3'; // NEW
      mosFeedbackAudio.play();
    }

    mosUpdateScore();
    mosNext.disabled = false;
    mosNext.classList.add('pop-animation');
    setTimeout(() => mosNext.classList.remove('pop-animation'), 300);
  });
});

// Buttons
mosPlay1.addEventListener('click', () => {
  mosStopFeedbackAudio();          // NEW
  mosPlay(1);
});
mosPlay2.addEventListener('click', () => {
  mosStopFeedbackAudio();          // NEW
  mosPlay(2);
});

// Next
mosNext.addEventListener('click', () => {
  mosStopFeedbackAudio();          // NEW
  mosStopAudio();
  mosNewRound();
});

// Reset
mosReset.addEventListener('click', () => {
  mosStopFeedbackAudio();          // NEW
  mosScore.correct = 0;
  mosScore.incorrect = 0;
  mosUpdateScore();
});

// Nav
mosMenuBtn.addEventListener('click', () => {
  hideAllScreens();
  mosScreen.classList.remove('hidden');
  window.scrollTo(0, 0);
  mosNewRound();        // start fresh question
});

mosHome.addEventListener('click', () => {
  mosStopFeedbackAudio();          // NEW
  mosStopAudio();
  hideAllScreens();
  document.getElementById('main-menu').classList.remove('hidden');
  window.scrollTo(0, 0);
});


const majMinChords = [
  "c", "csharp", "d", "dsharp", "e", "f", "fsharp", "g", "gsharp", "a", "asharp", "b"
];
let currentMajMinChord = '';
let majMinScore = { correct: 0, incorrect: 0 };

majminAnswerBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (!currentMajMinChord) return;

    const guess = btn.getAttribute('data-answer');
const correctAnswer = currentMajMinChord.includes('major') ? 'major' : 'minor';

const match = currentMajMinChord.match(/^(.*?)(major|minor)$/);
let root = match ? match[1] : currentMajMinChord;
let quality = match ? match[2] : '';

const enharmonicMap = {
  "C#": "Db", "Db": "C#",
  "D#": "Eb", "Eb": "D#",
  "F#": "Gb", "Gb": "F#",
  "G#": "Ab", "Ab": "G#",
  "A#": "Bb", "Bb": "A#"
};

root = root.replace("sharp", "#").replace("flat", "b").toUpperCase();

// Add enharmonic equivalent if available
const enharmonic = enharmonicMap[root];
const displayRoot = enharmonic ? `${root}/${enharmonic}` : root;
quality = quality.charAt(0).toUpperCase() + quality.slice(1);

if (guess === correctAnswer) {
  majMinScore.correct++;
  btn.classList.add('correct');
  majminFeedback.textContent = `Correct! ✅ The chord played was ${displayRoot} ${quality}.`;
  majminFeedback.classList.add('visible');
} else {
  majMinScore.incorrect++;
  btn.classList.add('incorrect');
  majminFeedback.textContent = `Incorrect! ❌ The chord played was ${displayRoot} ${quality}.`;
  majminFeedback.classList.add('visible');
}

    majminAnswerBtns.forEach(b => b.disabled = true);
    updateMajMinScoreDisplay();

    nextMajMinBtn.disabled = false;
    nextMajMinBtn.classList.add('pop-animation');
    setTimeout(() => nextMajMinBtn.classList.remove('pop-animation'), 300);
  });
});

function loadMajMinChord() {
  nextMajMinBtn.disabled = true;
  nextMajMinBtn.classList.remove('pop-animation');

  const root = majMinChords[Math.floor(Math.random() * majMinChords.length)];
  const quality = Math.random() < 0.5 ? "major" : "minor";
  currentMajMinChord = `${root}${quality}`;

  const prefix = useLargerChords ? 'largerchord' : 'chord';
playNote(`${prefix}${currentMajMinChord}`);

  majminFeedback.textContent = '';
  majminFeedback.classList.remove('visible');
  majminPrompt.textContent = "Does the chord sound major or minor?";

  majminAnswerBtns.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('correct', 'incorrect');
  });
}


nextMajMinBtn.addEventListener('click', () => {
  loadMajMinChord();
});

function updateMajMinScoreDisplay() {
  const total = majMinScore.correct + majMinScore.incorrect;
  majminCorrect.textContent = majMinScore.correct;
  majminIncorrect.textContent = majMinScore.incorrect;
  majminTotal.textContent = total;
  majminAccuracy.textContent = total ? ((majMinScore.correct / total) * 100).toFixed(1) + '%' : '0.0%';
}

majminBtn.addEventListener('click', () => {
  hideAllScreens();
  document.getElementById('majmin-select-screen').classList.remove('hidden');
  window.scrollTo(0, 0);

  playNote('majorminorchordsintro'); // plays audio/majorminorchordsintro.mp3
});

document.getElementById('majmin-simple-btn').addEventListener('click', () => {
  useLargerChords = false;
  startMajMinGame();
});

document.getElementById('majmin-larger-btn').addEventListener('click', () => {
  useLargerChords = true;
  startMajMinGame();
});

document.getElementById('back-to-home-from-majmin-select').addEventListener('click', () => {
  hideAllScreens();
  document.getElementById('main-menu').classList.remove('hidden');
});

document.getElementById('back-to-majmin-select-game').addEventListener('click', () => {
hideAllScreens();
document.getElementById('majmin-select-screen').classList.remove('hidden');
});

playMajMinBtn.addEventListener('click', () => {
  playNote(`${useLargerChords ? 'largerchord' : 'chord'}${currentMajMinChord}`);
});

majminReset.addEventListener('click', () => {
  majMinScore.correct = 0;
  majMinScore.incorrect = 0;
  updateMajMinScoreDisplay();
});

backFromMajMin.addEventListener('click', () => {
  hideAllScreens();
  document.getElementById('main-menu').classList.remove('hidden');
  window.scrollTo(0, 0);
});


  let audio = new Audio();
  let correct = 0;
  let incorrect = 0;
  let isAnswered = false;
  let showDegrees = false;
  let currentMode = 8;
  let currentNotes = [];
  let currentNote = '';
  let currentChordVisualAnswer = null;
  let useLargerChords = false;
  let currentReallyQuickAnswer = 0;
let reallyQuickScore = { correct: 0, incorrect: 0 };
  let currentScale = '';
  let maxQuickCount = 8;
let currentQuickAnswer = 0;
let quickScore = { correct: 0, incorrect: 0 };
  let lastTwoNotes = [];
  let compareNote1 = '';
let compareNote2 = '';
let compareScore = { correct: 0, incorrect: 0 };
let currentChordCount = 7;
let currentChord = '';
let currentChordOptions = [];
let chordVisualAudio = null;
let inChordMode = false;
let selectedChordScale = '';
let playRefBtn = document.getElementById('play-reference');
function hideAllScreens() {
  // Stop any currently playing audio (null-safe)
  try { if (typeof audio !== 'undefined' && audio && !audio.paused) { audio.pause(); audio.currentTime = 0; } } catch (e) {}
  try { if (typeof mosFeedbackAudio !== 'undefined' && mosFeedbackAudio && !mosFeedbackAudio.paused) { mosFeedbackAudio.pause(); mosFeedbackAudio.currentTime = 0; } } catch (e) {}
  try { if (typeof mosAudio !== 'undefined' && mosAudio && !mosAudio.paused) { mosAudio.pause(); mosAudio.currentTime = 0; } } catch (e) {}
  try { if (typeof chordVisualAudio !== 'undefined' && chordVisualAudio && !chordVisualAudio.paused) { chordVisualAudio.pause(); chordVisualAudio.currentTime = 0; } } catch (e) {}
  try { if (typeof d7m7Audio !== 'undefined' && d7m7Audio && !d7m7Audio.paused) { d7m7Audio.pause(); d7m7Audio.currentTime = 0; } } catch (e) {}
  try { if (typeof d7m7FeedbackAudio !== 'undefined' && d7m7FeedbackAudio && !d7m7FeedbackAudio.paused) { d7m7FeedbackAudio.pause(); d7m7FeedbackAudio.currentTime = 0; } } catch (e) {}
  

  // Hide the scale diagram if present
  (function(){ const d = document.getElementById('scale-diagram'); if (d) d.classList.add('hidden'); })();

  // Hide all known screens (null-safe; doesn't care if some are missing)
  const __ids = [
    'main-menu',
    'major-scale-menu',
    'chromatic-scale-menu',
    'mode-select-screen',
    'game-screen',
    'about-page',
    'comparison-game',
    'chord-mode-select',
    'chord-scale-menu',
    'major-minor-game',
    'majmin-select-screen',
    'quick-counting-select-screen',
    'quick-counting-game',
    'really-quick-counting-select-screen',
    'really-quick-counting-game',
    'chord-visual-select-screen',
    'chord-visual-game',
    'mos-game',
    'd7m7-game',
    'd7m7-intro',
    'd7m7-structure',
    'ivl-intro',
'ivl-select',
'ivl-game',
    
  ];
  for (const id of __ids) {
    const el = document.getElementById(id);
    if (el && !el.classList.contains('hidden')) el.classList.add('hidden');
  }
}

  const scaleData = {
    "C": {
      noteMap: { "C": ['c4', 'c5'], "D": ['d4'], "E": ['e4'], "F": ['f4'], "G": ['g4'], "A": ['a4'], "B": ['b4'] },
      degreeMap: { "C": '1st', "D": '2nd', "E": '3rd', "F": '4th', "G": '5th', "A": '6th', "B": '7th' },
      noteOrder: ["C", "D", "E", "F", "G", "A", "B"],
      referenceNote: 'c4',
      scaleAudio: 'cmajorscale',
      label: 'C Major Scale (Ionian Mode)',
      octave: 'One Octave (Notes C4–C5)'
    },
    "G": {
      noteMap: { "G": ['g3', 'g4'], "A": ['a3'], "B": ['b3'], "C": ['c4'], "D": ['d4'], "E": ['e4'], "F#": ['f#4'] },
      degreeMap: { "G": '1st', "A": '2nd', "B": '3rd', "C": '4th', "D": '5th', "E": '6th', "F#": '7th' },
      noteOrder: ["G", "A", "B", "C", "D", "E", "F#"],
      referenceNote: 'g3',
      scaleAudio: 'gmajorscale',
      label: 'G Major Scale (Ionian Mode)',
      octave: 'Notes G3–G4'
    },
    "D": {
      noteMap: { "D": ['d3', 'd4'], "E": ['e3'], "F#": ['f#3'], "G": ['g3'], "A": ['a3'], "B": ['b3'], "C#": ['c#4'] },
      degreeMap: { "D": '1st', "E": '2nd', "F#": '3rd', "G": '4th', "A": '5th', "B": '6th', "C#": '7th' },
      noteOrder: ["D", "E", "F#", "G", "A", "B", "C#"],
      referenceNote: 'd3',
      scaleAudio: 'dmajorscale',
      label: 'D Major Scale (Ionian Mode)',
      octave: 'Notes D3–D4'
    },
    "A": {
      noteMap: { "A": ['a3', 'a4'], "B": ['b3'], "C#": ['c#4'], "D": ['d4'], "E": ['e4'], "F#": ['f#4'], "G#": ['g#4'] },
      degreeMap: { "A": '1st', "B": '2nd', "C#": '3rd', "D": '4th', "E": '5th', "F#": '6th', "G#": '7th' },
      noteOrder: ["A", "B", "C#", "D", "E", "F#", "G#"],
      referenceNote: 'a3',
      scaleAudio: 'amajorscale',
      label: 'A Major Scale (Ionian Mode)',
      octave: 'Notes A3–A4'
    },
    "E": {
      noteMap: { "E": ['e3', 'e4'], "F#": ['f#3'], "G#": ['g#3'], "A": ['a3'], "B": ['b3'], "C#": ['c#4'], "D#": ['d#4'] },
      degreeMap: { "E": '1st', "F#": '2nd', "G#": '3rd', "A": '4th', "B": '5th', "C#": '6th', "D#": '7th' },
      noteOrder: ["E", "F#", "G#", "A", "B", "C#", "D#"],
      referenceNote: 'e3',
      scaleAudio: 'emajorscale',
      label: 'E Major Scale (Ionian Mode)',
      octave: 'Notes E3–E4'
    },
    "F": {
      noteMap: { "F": ['f3', 'f4'], "G": ['g3'], "A": ['a3'], "Bb": ['a#3'], "C": ['c4'], "D": ['d4'], "E": ['e4'] },
      degreeMap: { "F": '1st', "G": '2nd', "A": '3rd', "Bb": '4th', "C": '5th', "D": '6th', "E": '7th' },
      noteOrder: ["F", "G", "A", "Bb", "C", "D", "E"],
      referenceNote: 'f3',
      scaleAudio: 'fmajorscale',
      label: 'F Major Scale (Ionian Mode)',
      octave: 'Notes F3–F4'
    },
    "Bb": {
      noteMap: { "Bb": ['a#3', 'a#4'], "C": ['c4'], "D": ['d4'], "Eb": ['d#4'], "F": ['f4'], "G": ['g4'], "A": ['a4'] },
      degreeMap: { "Bb": '1st', "C": '2nd', "D": '3rd', "Eb": '4th', "F": '5th', "G": '6th', "A": '7th' },
      noteOrder: ["Bb", "C", "D", "Eb", "F", "G", "A"],
      referenceNote: 'a#3',
      scaleAudio: 'bbmajorscale',
      label: 'Bb Major Scale (Ionian Mode)',
      octave: 'Notes Bb3–Bb4'
    },
    "Eb": {
      noteMap: { "Eb": ['d#3', 'd#4'], "F": ['f3'], "G": ['g3'], "Ab": ['g#3'], "Bb": ['a#3'], "C": ['c4'], "D": ['d4'] },
      degreeMap: { "Eb": '1st', "F": '2nd', "G": '3rd', "Ab": '4th', "Bb": '5th', "C": '6th', "D": '7th' },
      noteOrder: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
      referenceNote: 'd#3',
      scaleAudio: 'ebmajorscale',
      label: 'Eb Major Scale (Ionian Mode)',
      octave: 'Notes Eb3–Eb4'
    },
    "Ab": {
      noteMap: { "Ab": ['g#3', 'g#4'], "Bb": ['a#3'], "C": ['c4'], "Db": ['c#4'], "Eb": ['d#4'], "F": ['f4'], "G": ['g4'] },
      degreeMap: { "Ab": '1st', "Bb": '2nd', "C": '3rd', "Db": '4th', "Eb": '5th', "F": '6th', "G": '7th' },
      noteOrder: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
      referenceNote: 'g#3',
      scaleAudio: 'abmajorscale',
      label: 'Ab Major Scale (Ionian Mode)',
      octave: 'Notes Ab3–Ab4'
    },
    "B": {
      noteMap: { "B": ['b3', 'b4'], "C#": ['c#4'], "D#": ['d#4'], "E": ['e4'], "F#": ['f#4'], "G#": ['g#4'], "A#": ['a#4'] },
      degreeMap: { "B": '1st', "C#": '2nd', "D#": '3rd', "E": '4th', "F#": '5th', "G#": '6th', "A#": '7th' },
      noteOrder: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
      referenceNote: 'b3',
      scaleAudio: 'bmajorscale',
      label: 'B Major Scale (Ionian Mode)',
      octave: 'Notes B3–B4'
    },
    "F#": {
      noteMap: { "F#": ['f#3', 'f#4'], "G#": ['g#3'], "A#": ['a#3'], "B": ['b3'], "C#": ['c#4'], "D#": ['d#4'], "E#": ['f4'] },
      degreeMap: { "F#": '1st', "G#": '2nd', "A#": '3rd', "B": '4th', "C#": '5th', "D#": '6th', "E#": '7th' },
      noteOrder: ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
      referenceNote: 'f#3',
      scaleAudio: 'fsharpmajorscale',
      label: 'F# Major Scale (Ionian Mode)',
      octave: 'Notes F#3–F#4'
    },
    "C#": {
      noteMap: { "C#": ['c#3', 'c#4'], "D#": ['d#3'], "E#": ['f3'], "F#": ['f#3'], "G#": ['g#3'], "A#": ['a#3'], "B#": ['c4'] },
      degreeMap: { "C#": '1st', "D#": '2nd', "E#": '3rd', "F#": '4th', "G#": '5th', "A#": '6th', "B#": '7th' },
      noteOrder: ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
      referenceNote: 'c#3',
      scaleAudio: 'csharpmajorscale',
      label: 'C# Major Scale (Ionian Mode)',
      octave: 'Notes C#3–C#4'
    },

    "Chromatic": {
  noteMap: {
    "C": ["c3", "c4"],
    "C#": ["c#3"],
    "D": ["d3"],
    "D#": ["d#3"],
    "E": ["e3"],
    "F": ["f3"],
    "F#": ["f#3"],
    "G": ["g3"],
    "G#": ["g#3"],
    "A": ["a3"],
    "A#": ["a#3"],
    "B": ["b3"]
  },
  degreeMap: {
    "C": "1st",
    "C#": "♯2nd",
    "D": "2nd",
    "D#": "♯3rd",
    "E": "3rd",
    "F": "4th",
    "F#": "♯5th",
    "G": "5th",
    "G#": "♯6th",
    "A": "6th",
    "A#": "♯7th",
    "B": "7th"
  },
  noteOrder: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  referenceNote: "c3",
  scaleAudio: "", // Optional: Add "chromaticscale" if you have this audio
  label: "Chromatic Scale (One Octave C3–C4)",
  octave: "One Octave (Notes C3–C4)"
},

"ChromaticExtended": {
  noteMap: {
    "C": ["c3", "c4", "c5", "c6"],
    "C#": ["c#3", "c#4", "c#5"],
    "D": ["d3", "d4", "d5"],
    "D#": ["d#3", "d#4", "d#5"],
    "E": ["e3", "e4", "e5"],
    "F": ["f3", "f4", "f5"],
    "F#": ["f#3", "f#4", "f#5"],
    "G": ["g3", "g4", "g5"],
    "G#": ["g#3", "g#4", "g#5"],
    "A": ["a3", "a4", "a5"],
    "A#": ["a#3", "a#4", "a#5"],
    "B": ["b3", "b4", "b5"]
  },
  degreeMap: {
    "C": "1st",
    "C#": "♯2nd",
    "D": "2nd",
    "D#": "♯3rd",
    "E": "3rd",
    "F": "4th",
    "F#": "♯5th",
    "G": "5th",
    "G#": "♯6th",
    "A": "6th",
    "A#": "♯7th",
    "B": "7th"
  },
  noteOrder: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  referenceNote: "c3",
  scaleAudio: "",
  label: "Chromatic Scale (Three Octaves C3–C6)",
  octave: "Three Octaves (Notes C3–C6)"
}
};

const chordData = {
  "C": {
    chordMap: {
      "I": ["c3major", "c4major"],
      "ii": ["d3minor"],
      "iii": ["e3minor"],
      "IV": ["f3major"],
      "V": ["g3major"],
      "vi": ["a3minor"],
      "vii": ["b3diminished"]
    },
    chordOrder: ["I", "ii", "iii", "IV", "V", "vi", "vii"],
    referenceChord: "c3major",
    allChordsAudio: "cmajordiatonicall",
    label: "C Major Diatonic Chords",
    scaleReference: "cmajorscale"
  },
  "D": {
    chordMap: {
      "I": ["d3major", "d4major"],
      "ii": ["e3minor"],
      "iii": ["fsharp3minor"],
      "IV": ["g3major"],
      "V": ["a3major"],
      "vi": ["b3minor"],
      "vii": ["csharp4diminished"]
    },
    chordOrder: ["I", "ii", "iii", "IV", "V", "vi", "vii"],
    referenceChord: "d3major",
    allChordsAudio: "dmajordiatonicall",
    label: "D Major Diatonic Chords",
    scaleReference: "dmajorscale"
  },
  "E": {
    chordMap: {
      "I": ["e3major", "e4major"],
      "ii": ["fsharp3minor"],
      "iii": ["gsharp3minor"],
      "IV": ["a3major"],
      "V": ["b3major"],
      "vi": ["csharp4minor"],
      "vii": ["dsharp4dimished"]
    },
    chordOrder: ["I", "ii", "iii", "IV", "V", "vi", "vii"],
    referenceChord: "e3major",
    allChordsAudio: "emajordiatonicall",
    label: "E Major Diatonic Chords",
    scaleReference: "emajorscale"
  },
  "F": {
    chordMap: {
      "I": ["f3major", "f4major"],
      "ii": ["g3minor"],
      "iii": ["a3minor"],
      "IV": ["asharp3major"],  // Bb
      "V": ["c4major"],
      "vi": ["d4minor"],
      "vii": ["e4diminished"]
    },
    chordOrder: ["I", "ii", "iii", "IV", "V", "vi", "vii"],
    referenceChord: "f3major",
    allChordsAudio: "fmajordiatonicall",
    label: "F Major Diatonic Chords",
    scaleReference: "fmajorscale"
  },
  "G": {
    chordMap: {
      "I": ["g3major", "g4major"],
      "ii": ["a3minor"],
      "iii": ["b3minor"],
      "IV": ["c4major"],
      "V": ["d4major"],
      "vi": ["e4minor"],
      "vii": ["fsharp4diminished"]
    },
    chordOrder: ["I", "ii", "iii", "IV", "V", "vi", "vii"],
    referenceChord: "g3major",
    allChordsAudio: "gmajordiatonicall",
    label: "G Major Diatonic Chords",
    scaleReference: "gmajorscale"
  },
  "A": {
    chordMap: {
      "I": ["a3major", "a4major"],
      "ii": ["b3minor"],
      "iii": ["csharp4minor"],
      "IV": ["d4major"],
      "V": ["e4major"],
      "vi": ["fsharp4minor"],
      "vii": ["gsharp4diminished"]
    },
    chordOrder: ["I", "ii", "iii", "IV", "V", "vi", "vii"],
    referenceChord: "a3major",
    allChordsAudio: "amajordiatonicall",
    label: "A Major Diatonic Chords",
    scaleReference: "amajorscale"
  },
  "B": {
    chordMap: {
      "I": ["b3major", "b4major"],
      "ii": ["csharp4minor"],
      "iii": ["dsharp4minor"],
      "IV": ["e4major"],
      "V": ["fsharp4major"],
      "vi": ["gsharp4minor"],
      "vii": ["asharp4diminished"]
    },
    chordOrder: ["I", "ii", "iii", "IV", "V", "vi", "vii"],
    referenceChord: "b3major",
    allChordsAudio: "bmajordiatonicall",
    label: "B Major Diatonic Chords",
    scaleReference: "bmajorscale"
  },
  "Bb": {
    chordMap: {
      "I": ["asharp3major", "asharp4major"],  // Bb
      "ii": ["c4minor"],
      "iii": ["d4minor"],
      "IV": ["dsharp4major"],  // Eb
      "V": ["f4major"],
      "vi": ["g4minor"],
      "vii": ["a4diminished"]
    },
    chordOrder: ["I", "ii", "iii", "IV", "V", "vi", "vii"],
    referenceChord: "asharp3major",
    allChordsAudio: "asharpmajordiatonicall",
    label: "Bb Major Diatonic Chords",
    scaleReference: "asharpmajorscale"
  },
  "Eb": {
    chordMap: {
      "I": ["dsharp3major", "dsharp4major"],  // Eb
      "ii": ["f3minor"],
      "iii": ["g3minor"],
      "IV": ["gsharp3major"],  // Ab
      "V": ["asharp3major"],  // Bb
      "vi": ["c4minor"],
      "vii": ["d4diminished"]
    },
    chordOrder: ["I", "ii", "iii", "IV", "V", "vi", "vii"],
    referenceChord: "dsharp3major",
    allChordsAudio: "dsharpmajordiatonicall",
    label: "Eb Major Diatonic Chords",
    scaleReference: "dsharpmajorscale"
  },
  "Ab": {
    chordMap: {
      "I": ["gsharp3major", "gsharp4major"],  // Ab
      "ii": ["asharp3minor"],  // Bb minor
      "iii": ["c4minor"],
      "IV": ["csharp4major"],  // Db
      "V": ["dsharp4major"],  // Eb
      "vi": ["f4minor"],
      "vii": ["g4diminished"]
    },
    chordOrder: ["I", "ii", "iii", "IV", "V", "vi", "vii"],
    referenceChord: "gsharp3major",
    allChordsAudio: "gsharpmajordiatonicall",
    label: "Ab Major Diatonic Chords",
    scaleReference: "gsharpmajorscale"
  },
  "F#": {
    chordMap: {
      "I": ["fsharp3major", "fsharp4major"],
      "ii": ["gsharp3minor"],
      "iii": ["asharp3minor"],
      "IV": ["b3major"],
      "V": ["csharp4major"],
      "vi": ["dsharp4minor"],
      "vii": ["f4diminished"]
    },
    chordOrder: ["I", "ii", "iii", "IV", "V", "vi", "vii"],
    referenceChord: "fsharp3major",
    allChordsAudio: "fsharpmajordiatonicall",
    label: "F# Major Diatonic Chords",
    scaleReference: "fsharpmajorscale"
  },
  "C#": {
    chordMap: {
      "I": ["csharp3major", "csharp4major"],
      "ii": ["dsharp3minor"],
      "iii": ["f3minor"],  // E#
      "IV": ["fsharp3major"],
      "V": ["gsharp3major"],
      "vi": ["asharp3minor"],
      "vii": ["c4diminished"]  // B#
    },
    chordOrder: ["I", "ii", "iii", "IV", "V", "vi", "vii"],
    referenceChord: "csharp3major",
    allChordsAudio: "csharpmajordiatonicall",
    label: "C# Major Diatonic Chords",
    scaleReference: "csharpmajorscale"
  }
};

const chordVisualFilenames = [
  "C_Major", "C_Minor", "Csharp_Db_Major", "Csharp_Db_Minor",
  "D_Major", "D_Minor", "Dsharp_Eb_Major", "Dsharp_Eb_Minor",
  "E_Major", "E_Minor", "F_Major", "F_Minor",
  "Fsharp_Gb_Major", "Fsharp_Gb_Minor", "G_Major", "G_Minor",
  "Gsharp_Ab_Major", "Gsharp_Ab_Minor", "A_Major", "A_Minor",
  "Asharp_Bb_Major", "Asharp_Bb_Minor", "B_Major", "B_Minor"
];


currentChordVisualAnswer = '';
let chordVisualScore = { correct: 0, incorrect: 0 };


  function playNote(noteFile) {
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
    audio.src = `audio/${encodeURIComponent(noteFile)}.mp3`;
    audio.play();
  }

  function formatChordName(filename) {
    return filename
      .replace(/_/g, ' ')
      .replace(/sharp/g, '#')
      .replace(/\b([A-G]#) ([A-G]b)\b/, '$1/$2');  // adds slash between enharmonic names
  }
  

  function generateNoteRangeText() {
    const data = scaleData[currentScale];
    const noteNames = data.noteOrder.slice(0, currentMode);
    const tonic = noteNames[0];
    const tonicFiles = data.noteMap[tonic];

    if (currentMode === 8 && tonicFiles.length === 2) {
      const [note1, note2] = tonicFiles.map(f => f.match(/\d+/)?.[0]);
      return `${data.octave} — the ${tonic} button works for both ${tonic}${note1} and ${tonic}${note2}!`;
    }

    const formattedList = noteNames.length === 2
      ? `${noteNames[0]} and ${noteNames[1]}`
      : `${noteNames.slice(0, -1).join(', ')} and ${noteNames[noteNames.length - 1]}`;
    return `Notes ${formattedList} from one octave`;
  }

  function getNoteName(filename, scale) {
    const reverseMap = {};
    const map = scaleData[scale].noteMap;
    for (const [name, files] of Object.entries(map)) {
      files.forEach(file => reverseMap[file] = name);
    }
    return reverseMap[filename] || '';
  }

  function buildNoteButtons() {
    noteButtonsContainer.innerHTML = '';
    const data = scaleData[currentScale];
    const keys = data.noteOrder.slice(0, currentMode);
    currentNotes = keys.flatMap((key, index) => {
      const files = data.noteMap[key];
      // Special handling:
      if (currentScale !== "Chromatic" && index === 0 && currentMode !== 8 && files.length > 1) {
        return [files[0]]; // Use only first root note (e.g., d3)
      }
      return files;
    });
  
    const enharmonics = {
      "C#": "C#/Db",
      "D#": "D#/Eb",
      "F#": "F#/Gb",
      "G#": "G#/Ab",
      "A#": "A#/Bb"
    };
  
    keys.forEach(note => {
      const btn = document.createElement('button');
      btn.className = 'blue-button';
if ((currentScale === "Chromatic" || currentScale === "ChromaticExtended") && !showDegrees && enharmonics[note]) {
  btn.classList.add('wide-chromatic');
}
      btn.setAttribute('data-note', note);
  
      btn.textContent = showDegrees
  ? (currentMode === 8 && note === data.noteOrder[0] ? '1st/8th' : data.degreeMap[note])
  : ((currentScale === "Chromatic" || currentScale === "ChromaticExtended") && enharmonics[note] ? enharmonics[note] : note);
  
      if (currentMode === 8 && showDegrees && note === data.noteOrder[0]) {
        btn.classList.add('wide-label');
      }
  
      btn.addEventListener('click', handleAnswer);
      noteButtonsContainer.appendChild(btn);
    });
  }

  function startReallyQuickGame(max) {
    hideAllScreens();
    reallyQuickGameScreen.classList.remove('hidden');
    generateReallyQuickRound(max);
    reallyQuickScore.correct = 0;
    reallyQuickScore.incorrect = 0;
    updateReallyQuickScoreDisplay();
    window.scrollTo(0, 0);
  }
  
  function generateReallyQuickRound(max) {
    nextReallyQuickBtn.disabled = true;
    reallyQuickFeedback.textContent = 'Awaiting your answer...';
  
    currentReallyQuickAnswer = Math.floor(Math.random() * max) + 1;
    playNote(`realbounce${currentReallyQuickAnswer}`);
  
    reallyQuickAnswerContainer.innerHTML = '';
    for (let i = 1; i <= max; i++) {
      const btn = document.createElement('button');
      btn.className = 'blue-button';
      btn.textContent = i;
      btn.addEventListener('click', () => handleReallyQuickAnswer(i, max));
      reallyQuickAnswerContainer.appendChild(btn);
    }
  }
  
  function handleReallyQuickAnswer(guess, max) {
    const buttons = reallyQuickAnswerContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
  
    if (guess === currentReallyQuickAnswer) {
      reallyQuickScore.correct++;
      reallyQuickFeedback.textContent = `✅ Correct! It was ${currentReallyQuickAnswer} notes.`;
    } else {
      reallyQuickScore.incorrect++;
      reallyQuickFeedback.textContent = `❌ Incorrect. It was ${currentReallyQuickAnswer} notes.`;
    }
  
    updateReallyQuickScoreDisplay();
    nextReallyQuickBtn.disabled = false;
    nextReallyQuickBtn.classList.add('pop-animation');
    setTimeout(() => nextReallyQuickBtn.classList.remove('pop-animation'), 300);
  }

  function d7m7Stop(audioEl) {
    try {
      if (audioEl && !audioEl.paused) {
        audioEl.pause();
        audioEl.currentTime = 0;
      }
    } catch (e) {}
  }
  
  function d7m7StopAllAudio() {
    d7m7Stop(d7m7Audio);
    d7m7Stop(d7m7FeedbackAudio);
  }
  
  function d7m7UpdateScore() {
    const total = d7m7Score.correct + d7m7Score.incorrect;
    d7m7Correct.textContent = d7m7Score.correct;
    d7m7Incorrect.textContent = d7m7Score.incorrect;
    d7m7Total.textContent = total;
    d7m7Accuracy.textContent = total ? ((d7m7Score.correct / total) * 100).toFixed(1) + '%' : '0.0%';
  }
  
  function d7m7SetFeedback(text) {
    d7m7Feedback.textContent = text;
  }
  
  function d7m7EnableAnswers(enable) {
    d7m7AnsDomBtn.disabled = !enable;
    d7m7AnsMajBtn.disabled = !enable;
    d7m7AnsDomBtn.classList.remove('correct', 'incorrect');
    d7m7AnsMajBtn.classList.remove('correct', 'incorrect');
  }
  
  function d7m7RandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
  function d7m7PickNew() {
    d7m7Locked = false;
    d7m7SetFeedback('Awaiting your answer...');
    d7m7EnableAnswers(true);
  
    // choose type & file
    if (Math.random() < 0.5) {
      d7m7CurrentType = 'dom';
      d7m7CurrentFile = `dominant7th${d7m7RandomInt(18)}.mp3`;
    } else {
      d7m7CurrentType = 'maj';
      d7m7CurrentFile = `major7th${d7m7RandomInt(18)}.mp3`;
    }
  
    d7m7PlayBtn.disabled = false;
    d7m7NextBtn.disabled = true;
    d7m7NextBtn.classList.remove('pop-animation');
  }

  function d7m7HandleAnswer(choice) { // 'dom' or 'maj'
    if (d7m7Locked) return;
    d7m7Locked = true;
    d7m7EnableAnswers(false);
    d7m7PlayBtn.disabled = true;
  
    d7m7StopAllAudio();
  
    const correct = (choice === d7m7CurrentType);
    if (correct) {
      d7m7Score.correct++;
      (choice === 'dom' ? d7m7AnsDomBtn : d7m7AnsMajBtn).classList.add('correct');
      d7m7SetFeedback(
        d7m7CurrentType === 'dom'
          ? 'Correct! ✅ That was a dominant 7th chord!'
          : 'Correct! ✅ That was a major 7th chord!'
      );
      d7m7FeedbackAudio.src = 'audio/correct1.mp3'; // you already use these in MOS
    } else {
      d7m7Score.incorrect++;
      (choice === 'dom' ? d7m7AnsDomBtn : d7m7AnsMajBtn).classList.add('incorrect');
      d7m7SetFeedback(
        d7m7CurrentType === 'dom'
          ? 'Incorrect! ❌ That was a dominant 7th chord!'
          : 'Incorrect! ❌ That was a major 7th chord!'
      );
      d7m7FeedbackAudio.src = 'audio/incorrect1.mp3';
    }
    d7m7FeedbackAudio.play();
  
    d7m7UpdateScore();
    d7m7NextBtn.disabled = false;
    d7m7NextBtn.classList.add('pop-animation');
  }
  
  // Event listeners
  d7m7PlayBtn && d7m7PlayBtn.addEventListener('click', d7m7PlayCurrent);
  d7m7NextBtn && d7m7NextBtn.addEventListener('click', () => {
    d7m7StopAllAudio();
    d7m7PickNew();      // new random dominant/major 7th
    d7m7PlayCurrent();  // play immediately
  });
  
  d7m7AnsDomBtn && d7m7AnsDomBtn.addEventListener('click', () => d7m7HandleAnswer('dom'));
  d7m7AnsMajBtn && d7m7AnsMajBtn.addEventListener('click', () => d7m7HandleAnswer('maj'));
  
  // Reference examples
  d7m7RefDomBtn && d7m7RefDomBtn.addEventListener('click', () => {
    d7m7StopAllAudio();
    d7m7Audio.src = 'audio/dominant7threference.mp3';
    d7m7Audio.play();
  });
  
  d7m7RefMajBtn && d7m7RefMajBtn.addEventListener('click', () => {
    d7m7StopAllAudio();
    d7m7Audio.src = 'audio/major7threference.mp3';
    d7m7Audio.play();
  });
  
  // Score reset
  d7m7Reset && d7m7Reset.addEventListener('click', () => {
    d7m7Score.correct = 0;
    d7m7Score.incorrect = 0;
    d7m7UpdateScore();
  });
  
  // Navigation from main menu -> intro screen
d7m7MenuBtn && d7m7MenuBtn.addEventListener('click', () => {
  hideAllScreens();
  d7m7IntroScreen.classList.remove('hidden');
  window.scrollTo(0, 0);
});

  
  d7m7HomeBtn && d7m7HomeBtn.addEventListener('click', () => {
    d7m7StopAllAudio();
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
    window.scrollTo(0, 0);
  });
  
  
  function d7m7PlayCurrent() {
    d7m7StopAllAudio();
    d7m7Audio.src = `audio/${encodeURIComponent(d7m7CurrentFile)}`;
    d7m7Audio.play();
  }
  
  
  function updateReallyQuickScoreDisplay() {
    const total = reallyQuickScore.correct + reallyQuickScore.incorrect;
    reallyQuickCorrect.textContent = reallyQuickScore.correct;
    reallyQuickIncorrect.textContent = reallyQuickScore.incorrect;
    reallyQuickTotal.textContent = total;
    reallyQuickAccuracy.textContent = total ? ((reallyQuickScore.correct / total) * 100).toFixed(1) + '%' : '0.0%';
  }

  function loadNewNote() {
    isAnswered = false;
    buildNoteButtons();
    const buttons = noteButtonsContainer.querySelectorAll('.blue-button');
    buttons.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('correct', 'incorrect');
    });
    const candidates = [...currentNotes];
    if (currentMode === 8 && scaleData[currentScale].noteMap[scaleData[currentScale].noteOrder[0]].length === 2) {
      candidates.push(scaleData[currentScale].noteMap[scaleData[currentScale].noteOrder[0]][1]);
    }
    do {
      currentNote = candidates[Math.floor(Math.random() * candidates.length)];
    } while (
      lastTwoNotes.length >= 2 &&
      lastTwoNotes[0] === currentNote &&
      lastTwoNotes[1] === currentNote &&
      candidates.length > 1
    );
    lastTwoNotes.push(currentNote);
    if (lastTwoNotes.length > 2) lastTwoNotes.shift();
    playNote(currentNote);
    promptText.textContent = 'Which note was played?';
    nextBtn.disabled = true;
    updateModeButtonsState();
  }

  function handleAnswer(e) {
    if (isAnswered) return;
    isAnswered = true;
    const selected = e.target.getAttribute('data-note');
    const correctName = getNoteName(currentNote, currentScale);
    if (selected === correctName) {
      correct++;
      e.target.classList.add('correct');
      promptText.textContent = showDegrees
        ? `Correct! ✅ The note was the ${currentMode === 8 && correctName === scaleData[currentScale].noteOrder[0] ? '1st/8th' : scaleData[currentScale].degreeMap[correctName]} scale degree`
        : `Correct! ✅ The note was ${correctName}`;
    } else {
      incorrect++;
      e.target.classList.add('incorrect');
      const correctBtn = [...noteButtonsContainer.querySelectorAll('.blue-button')]
        .find(btn => btn.getAttribute('data-note') === correctName);
      if (correctBtn) correctBtn.classList.add('correct');
      promptText.textContent = showDegrees
        ? `Incorrect! ❌ The note was the ${currentMode === 8 && correctName === scaleData[currentScale].noteOrder[0] ? '1st/8th' : scaleData[currentScale].degreeMap[correctName]} scale degree`
        : `Incorrect! ❌ The note played was actually ${correctName}`;
    }
    updateScore();
    nextBtn.disabled = false;
    nextBtn.classList.add('pop-animation');
    setTimeout(() => nextBtn.classList.remove('pop-animation'), 300);
    [...noteButtonsContainer.querySelectorAll('.blue-button')].forEach(btn => btn.disabled = true);
  }

  function updateScore() {
    const total = correct + incorrect;
    correctCount.textContent = correct;
    incorrectCount.textContent = incorrect;
    totalCount.textContent = total;
    accuracyDisplay.textContent = total ? ((correct / total) * 100).toFixed(1) + '%' : '0.0%';
  }

  function resetScore() {
    correct = 0;
    incorrect = 0;
    updateScore();
  }

  function toggleDisplay(mode) {
    showDegrees = mode === 'degrees';
    displayNotesBtn.classList.toggle('selected', !showDegrees);
    displayDegreesBtn.classList.toggle('selected', showDegrees);
    scaleLabel.textContent = scaleData[currentScale].label;
    if (!(currentScale === "C" && currentChordCount)) {
      octaveLabel.textContent = generateNoteRangeText();
    }
    playRefBtn.textContent = `Play Reference (${scaleData[currentScale].noteOrder[0]} - Tonic)`;
    promptText.textContent = isAnswered ? promptText.textContent : 'Which note was played?';
    refreshNoteButtons();
    if (currentScale === "Chromatic") {
      document.getElementById('adjust-controls').classList.add('hidden');
    } else {
      document.getElementById('adjust-controls').classList.remove('hidden');
    }
  }

  function updateNoteButtonLabels() {
    const buttons = noteButtonsContainer.querySelectorAll('.blue-button');
    const data = scaleData[currentScale];
    buttons.forEach(btn => {
      const note = btn.getAttribute('data-note');
      btn.textContent = showDegrees
        ? (currentMode === 8 && note === data.noteOrder[0] ? '1st/8th' : data.degreeMap[note])
        : note;
      btn.classList.toggle('wide-label', showDegrees && currentMode === 8 && note === data.noteOrder[0]);
      btn.style.display = 'none';
      btn.offsetHeight;
      btn.style.display = '';
    });
  }

  function refreshNoteButtons() {
    buildNoteButtons();
    const buttons = noteButtonsContainer.querySelectorAll('.blue-button');
    buttons.forEach(btn => {
      const note = btn.getAttribute('data-note');
      if (isAnswered) {
        btn.disabled = true;
        btn.classList.remove('correct', 'incorrect');
        if (note === getNoteName(currentNote, currentScale)) {
          btn.classList.add('correct');
        }
      } else {
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect');
      }
    });
    nextBtn.disabled = !isAnswered;
    updateNoteButtonLabels();
  }

  function updateModeButtonsState() {
    if (inChordMode) {
      if (fullOctaveMode) {
        addNoteBtn.disabled = true;
        removeNoteBtn.disabled = false; // ✅ allow going back
      } else {
        addNoteBtn.disabled = currentChordCount > 7;
        removeNoteBtn.disabled = currentChordCount <= 2;
      }
    } else {
      addNoteBtn.disabled = currentMode >= 8;
      removeNoteBtn.disabled = currentMode <= 2;
    }
  }

  function getRandomNote(filenameRange) {
    return filenameRange[Math.floor(Math.random() * filenameRange.length)];
  }
  
  function playComparisonNotes() {
    const allNotes = [
      "c3", "c#3", "d3", "d#3", "e3", "f3", "f#3", "g3", "g#3", "a3", "a#3", "b3",
      "c4", "c#4", "d4", "d#4", "e4", "f4", "f#4", "g4", "g#4", "a4", "a#4", "b4",
      "c5"
    ];
  
    let valid = false;
    while (!valid) {
      compareNote1 = getRandomNote(allNotes);
      compareNote2 = getRandomNote(allNotes);
      const distance = Math.abs(midi(compareNote1) - midi(compareNote2));
      if (distance <= 2) {
        valid = true;
      }
    }
  
    playStoredComparisonNotes();
  }
  
  function playStoredComparisonNotes() {
    const note1 = new Audio(`audio/${compareNote1.replace('#', '%23')}.mp3`);
    const note2 = new Audio(`audio/${compareNote2.replace('#', '%23')}.mp3`);
  
    Promise.all([
      new Promise(resolve => { note1.oncanplaythrough = resolve; note1.load(); }),
      new Promise(resolve => { note2.oncanplaythrough = resolve; note2.load(); })
    ]).then(() => {
      setTimeout(() => {
        note1.play();
        setTimeout(() => {
          note2.play();
        }, 900); // delay between notes
      }, 200); // delay before starting
    });
  }
  
  function updateCompareScoreDisplay() {
    const total = compareScore.correct + compareScore.incorrect;
    compareCorrect.textContent = compareScore.correct;
    compareIncorrect.textContent = compareScore.incorrect;
    compareTotal.textContent = total;
    compareAccuracy.textContent = total ? ((compareScore.correct / total) * 100).toFixed(1) + '%' : '0.0%';
  }

  function startMajMinGame() {
    hideAllScreens();
    majminScreen.classList.remove('hidden');
    majMinScore.correct = 0;
    majMinScore.incorrect = 0;
    updateMajMinScoreDisplay();
    loadMajMinChord();
    window.scrollTo(0, 0);
  }

  function midi(note) {
    const map = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 };
    const match = note.match(/^([a-g]#?)(\d)$/i);
    if (!match) return 0;
    const name = match[1].toLowerCase();
    const octave = parseInt(match[2], 10);
    return 12 * (octave + 1) + map[name[0]] + (name.includes('#') ? 1 : 0);
  }

  function setupChordGame() {
    showDegrees = false;
    scaleLabel.textContent = chordData[currentScale].label;
octaveLabel.textContent = `First ${currentChordCount} chords of the ${currentScale} Major scale`;
document.getElementById('scale-diagram').classList.add('hidden');
document.getElementById('chord-detail-feedback').textContent = '';
document.getElementById('adjust-controls').classList.remove('hidden');
document.getElementById('play-scale').classList.add('hidden'); // Hide default Play Scale button
    document.getElementById('display-toggle').classList.add('hidden'); // no toggle
    document.querySelector('#adjust-controls p').textContent = "Adjust chord range:";
    document.getElementById('replay-note').textContent = "Replay Chord";
    promptText.textContent = 'Which chord was played?';
  
    playRefBtn.textContent = "Play reference, I chord";
    playRefBtn.onclick = () => playNote(chordData[currentScale].referenceChord);

    const existingBtn = document.getElementById('play-scale-ref');
if (existingBtn) {
  existingBtn.onclick = () => playNote(chordData[currentScale].scaleReference);
} else {
  const scaleRefBtn = document.createElement('button');
  scaleRefBtn.textContent = "Play reference, scale";
  scaleRefBtn.className = "green-button";
  scaleRefBtn.id = "play-scale-ref";
  scaleRefBtn.onclick = () => playNote(chordData[currentScale].scaleReference);
  playRefBtn.parentNode.insertBefore(scaleRefBtn, playRefBtn.nextSibling);
}

    const allChordsFile = chordData[currentScale].allChordsAudio;
    if (fullOctaveMode) {
      octaveLabel.textContent = `Full Octave: I to I (+1 octave) of the ${currentScale} Major scale`;
    } else {
      octaveLabel.textContent = `First ${currentChordCount} chords of the ${currentScale} Major scale`;
    }
    if (!document.getElementById('play-all-chords')) {
      const allRefBtn = document.createElement('button');
      allRefBtn.textContent = "Play reference, all chords";
      allRefBtn.className = "green-button";
      allRefBtn.id = "play-all-chords";
      allRefBtn.onclick = () => playNote(chordData[currentScale].allChordsAudio);
      playRefBtn.parentNode.insertBefore(allRefBtn, playRefBtn.nextSibling);
    }
  
    buildChordButtons();
    loadNewChord();
  }

  function buildChordButtons() {
    noteButtonsContainer.innerHTML = '';
    const keys = chordData[currentScale].chordOrder.slice(0, currentChordCount);
    currentChordOptions = keys.flatMap(k => {
      const files = chordData[currentScale].chordMap[k];
      if (fullOctaveMode && k === "I" && files.length > 1) {
        return files; // include both root and octave
      }
      return [files[0]]; // only the lower root for other chords
    });
    if (fullOctaveMode) {
      octaveLabel.textContent = `Full Octave: I to I (+1 octave) of the ${currentScale} Major scale`;
    }
  
    keys.forEach(chord => {
      const btn = document.createElement('button');
      btn.className = 'blue-button';
      btn.setAttribute('data-chord', chord);
      btn.textContent = chord;
      btn.addEventListener('click', handleChordAnswer);
      noteButtonsContainer.appendChild(btn);
    });
  }

  function handleChordAnswer(e) {
    if (isAnswered) return;
    isAnswered = true;
  
    const selected = e.target.getAttribute('data-chord');
    const correctChord = getChordLabel(currentChord);
  
    if (selected === correctChord) {
      correct++;
      e.target.classList.add('correct');
      promptText.textContent = `Correct! ✅ That was the ${correctChord} chord`;
    } else {
      incorrect++;
      e.target.classList.add('incorrect');
      const correctBtn = [...noteButtonsContainer.querySelectorAll('.blue-button')]
        .find(btn => btn.getAttribute('data-chord') === correctChord);
      if (correctBtn) correctBtn.classList.add('correct');
      promptText.textContent = `Incorrect! ❌ That was actually the ${correctChord} chord`;
    }

    const chordFiles = chordData[currentScale].chordMap[correctChord];
    const chordName = formatChordName(chordFiles[0], currentScale);
document.getElementById('chord-detail-feedback').textContent =
  `In the key of ${currentScale} Major, the ${correctChord} chord is ${chordName}.`;
  
    updateScore();
    nextBtn.disabled = false;
    nextBtn.classList.add('pop-animation');
    setTimeout(() => nextBtn.classList.remove('pop-animation'), 300);
    [...noteButtonsContainer.querySelectorAll('.blue-button')].forEach(btn => btn.disabled = true);
  }

  function getChordLabel(file) {
    for (const [label, files] of Object.entries(chordData[currentScale].chordMap)) {
      if (files.includes(file)) return label;
    }
    return '';
  }

  function loadNewChord() {
    isAnswered = false;
    buildChordButtons();
    const buttons = noteButtonsContainer.querySelectorAll('.blue-button');
    buttons.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('correct', 'incorrect');
    });
  
    do {
      currentChord = currentChordOptions[Math.floor(Math.random() * currentChordOptions.length)];
    } while (
      lastTwoNotes.length >= 2 &&
      lastTwoNotes[0] === currentChord &&
      lastTwoNotes[1] === currentChord &&
      currentChordOptions.length > 1
    );
  
    lastTwoNotes.push(currentChord);
    if (lastTwoNotes.length > 2) lastTwoNotes.shift();
  
    playNote(currentChord);
    promptText.textContent = 'Which chord was played?';
    nextBtn.disabled = true;
    updateModeButtonsState();
  }

  function startQuickGame() {
    hideAllScreens();
    quickGameScreen.classList.remove('hidden');
    resetQuickScore();
    loadQuickQuestion();
    window.scrollTo(0, 0);
  }
  
  function loadQuickQuestion() {
    quickPrompt.textContent = "How many notes did you hear?";
    quickFeedback.textContent = "Awaiting your answer...";
    nextQuickBtn.disabled = true;
    nextQuickBtn.classList.remove('pop-animation');
  
    currentQuickAnswer = Math.floor(Math.random() * maxQuickCount) + 1;
    playNote(`bounce${currentQuickAnswer}`);
  
    quickAnswerContainer.innerHTML = '';
    for (let i = 1; i <= maxQuickCount; i++) {
      const btn = document.createElement('button');
      btn.className = 'green-button';
      btn.textContent = i;
      btn.addEventListener('click', () => handleQuickAnswer(i, btn));
      quickAnswerContainer.appendChild(btn);
    }
  }
  
  function handleQuickAnswer(guess, button) {
    const allButtons = quickAnswerContainer.querySelectorAll('button');
    allButtons.forEach(b => b.disabled = true);
  
    if (guess === currentQuickAnswer) {
      quickScore.correct++;
      button.classList.add('correct');
      quickFeedback.textContent = `Correct! ✅ It was ${currentQuickAnswer} notes.`;
    } else {
      quickScore.incorrect++;
      button.classList.add('incorrect');
      quickFeedback.textContent = `Incorrect! ❌ It was ${currentQuickAnswer} notes.`;
      const correctBtn = [...allButtons].find(b => parseInt(b.textContent) === currentQuickAnswer);
      if (correctBtn) correctBtn.classList.add('correct');
    }
  
    updateQuickScore();
    nextQuickBtn.disabled = false;
    nextQuickBtn.classList.add('pop-animation');
    setTimeout(() => nextQuickBtn.classList.remove('pop-animation'), 300);
  }
  
  nextQuickBtn.addEventListener('click', loadQuickQuestion);
  playQuickBtn.addEventListener('click', () => playNote(`bounce${currentQuickAnswer}`));
  
  function updateQuickScore() {
    const total = quickScore.correct + quickScore.incorrect;
    quickCorrect.textContent = quickScore.correct;
    quickIncorrect.textContent = quickScore.incorrect;
    quickTotal.textContent = total;
    quickAccuracy.textContent = total ? ((quickScore.correct / total) * 100).toFixed(1) + '%' : '0.0%';
  }
  
  document.getElementById('reset-quick-score').addEventListener('click', resetQuickScore);
  
  function resetQuickScore() {
    quickScore.correct = 0;
    quickScore.incorrect = 0;
    updateQuickScore();
  }
  
  function startChordVisualGame() {
    hideAllScreens();
    chordVisualGame.classList.remove('hidden');
    chordVisualScore.correct = 0;
    chordVisualScore.incorrect = 0;
    updateChordVisualScore();
    generateChordVisualQuestion();
    window.scrollTo(0, 0);
  }
  
  function generateChordVisualQuestion() {
    nextChordVisualBtn.disabled = true;
    chordVisualFeedback.textContent = 'Awaiting your answer...';
  
    const correct = chordVisualFilenames[Math.floor(Math.random() * chordVisualFilenames.length)];
    currentChordVisualAnswer = correct;
    chordVisualImage.src = `images/${encodeURIComponent(correct)}.png`;
  
    // 🔇 Stop any previous audio
    if (chordVisualAudio) {
      chordVisualAudio.pause();
      chordVisualAudio.currentTime = 0;
    }
  
    // 🔊 Play matching audio
    const audioFile = chordVisualToAudioFilename(correct);
    chordVisualAudio = new Audio(`audio/${audioFile}`);
    chordVisualAudio.play().catch(err => {
      console.warn('Audio playback failed:', err);
    });
  
    // 🧠 Create answer options
    const options = new Set([correct]);
    while (options.size < 4) {
      const choice = chordVisualFilenames[Math.floor(Math.random() * chordVisualFilenames.length)];
      options.add(choice);
    }
  
    const shuffled = Array.from(options).sort(() => Math.random() - 0.5);
    chordVisualAnswers.innerHTML = '';
    shuffled.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'blue-button wide-answer-button';
      btn.textContent = formatChordName(option);
      btn.dataset.answer = option;
      btn.addEventListener('click', handleChordVisualAnswer);
      chordVisualAnswers.appendChild(btn);
    });
  }
  
  
  
  function handleChordVisualAnswer(event) {
    const selectedText = event.target.textContent;
    const correctText = formatChordName(currentChordVisualAnswer);
  
    const allButtons = chordVisualAnswers.querySelectorAll('button');
  
    allButtons.forEach(btn => {
      const btnText = btn.textContent;
      if (btnText === correctText) {
        btn.classList.add('correct');
      } else if (btnText === selectedText) {
        btn.classList.add('incorrect');
      } else {
        btn.classList.add('disabled-button');
      }
      btn.disabled = true;
    });
  
    // ✅ Score logic:
    if (selectedText === correctText) {
      chordVisualScore.correct++;
    } else {
      chordVisualScore.incorrect++;
    }
  
    // ✅ Update score display
    updateChordVisualScoreDisplay();
  
    // ✅ Enable "Next" button
    nextChordVisualBtn.disabled = false;
  }
  
  
  function chordVisualToAudioFilename(visualName) {
    if (!visualName || typeof visualName !== 'string') {
      console.error('Invalid visual name:', visualName);
      return null;
    }
  
    const parts = visualName.split('_');
    let root, quality;
  
    if (parts.length === 3) {
      // Format: "Csharp_Db_Minor"
      root = parts[0];
      quality = parts[2];
    } else if (parts.length === 2) {
      // Format: "B_Minor"
      root = parts[0];
      quality = parts[1];
    } else {
      console.error('Unexpected chord name format:', visualName);
      return null;
    }
  
    const formattedRoot = root
      .toLowerCase()
      .replace('sharp', 'sharp')
      .replace('flat', ''); // no flat audio files
  
    return `chord${formattedRoot}${quality.toLowerCase()}.mp3`;
  }

  // Intro page actions
d7m7BeginBtn && d7m7BeginBtn.addEventListener('click', () => {
  hideAllScreens();
  d7m7Screen.classList.remove('hidden');
  window.scrollTo(0, 0);
  d7m7PickNew();      // choose a new random dom/maj file
  d7m7PlayCurrent();  // and play it immediately
});

d7m7IntroHomeBtn && d7m7IntroHomeBtn.addEventListener('click', () => {
  d7m7StopAllAudio();
  hideAllScreens();
  document.getElementById('main-menu').classList.remove('hidden');
  window.scrollTo(0, 0);
});

d7m7IntroRefDom && d7m7IntroRefDom.addEventListener('click', () => {
  d7m7StopAllAudio();
  d7m7Audio.src = 'audio/dominant7threference.mp3';
  d7m7Audio.play();
});

d7m7IntroRefMaj && d7m7IntroRefMaj.addEventListener('click', () => {
  d7m7StopAllAudio();
  d7m7Audio.src = 'audio/major7threference.mp3';
  d7m7Audio.play();
});

  
  function updateChordVisualScore() {
    const total = chordVisualScore.correct + chordVisualScore.incorrect;
    chordVisualCorrect.textContent = chordVisualScore.correct;
    chordVisualIncorrect.textContent = chordVisualScore.incorrect;
    chordVisualTotal.textContent = total;
    chordVisualAccuracy.textContent = total ? ((chordVisualScore.correct / total) * 100).toFixed(1) + '%' : '0.0%';
  }
  
  function updateChordVisualScoreDisplay() {
    const correct = chordVisualScore.correct;
    const incorrect = chordVisualScore.incorrect;
    const total = correct + incorrect;
    const accuracy = total > 0 ? ((correct / total) * 100).toFixed(1) + '%' : '0.0%';
  
    document.getElementById('chord-visual-correct').textContent = correct;
    document.getElementById('chord-visual-incorrect').textContent = incorrect;
    document.getElementById('chord-visual-total').textContent = total;
    document.getElementById('chord-visual-accuracy').textContent = accuracy;
  }

  document.getElementById('reset-chord-visual-score').addEventListener('click', () => {
    chordVisualScore.correct = 0;
    chordVisualScore.incorrect = 0;
    updateChordVisualScoreDisplay();
  });
  

  function formatChordNameWithKey(fileName, key) {
    const rootMap = {
      c: "C", csharp: "C#", d: "D", dsharp: "D#",
      e: "E", f: "F", fsharp: "F#", g: "G",
      gsharp: "G#", a: "A", asharp: "A#", b: "B"
    };
  
    const match = fileName.match(/^([a-g]sharp|[a-g])\d(major|minor|diminished)$/);
    if (!match) return "";
  
    const [ , rootRaw, quality ] = match;
    const rootUnnormalized = rootMap[rootRaw] || rootRaw;
    const root = normalizeChordName(rootUnnormalized, key);
  
    const qualityCapitalized = quality.charAt(0).toUpperCase() + quality.slice(1);
return `${root} ${qualityCapitalized}`;
  }

  function normalizeChordName(root, key) {
    // Use flats for flat keys
    const useFlats = ["F", "Bb", "Eb", "Ab", "Db"];
  
    const flatMap = {
      "C#": "Db", "D#": "Eb", "F#": "Gb",
      "G#": "Ab", "A#": "Bb"
    };
  
    const sharpMap = {
      "Db": "C#", "Eb": "D#", "Gb": "F#",
      "Ab": "G#", "Bb": "A#"
    };
  
    if (useFlats.includes(key)) {
      return flatMap[root] || root;
    } else {
      return sharpMap[root] || root;
    }
  }

  function handleReferenceNoteClick() {
    playNote(scaleData[currentScale].referenceNote);
  }

  document.querySelectorAll('.scale-select').forEach(btn => {
    btn.addEventListener('click', () => {
      currentScale = btn.getAttribute('data-scale');
      hideAllScreens(); // <-- ensures only one screen is shown
      selectedScaleLabel.textContent = scaleData[currentScale].label;
      modeSelectScreen.classList.remove('hidden');
      playNote(scaleData[currentScale].scaleAudio);
    });
  });

  function setupGame() {
    toggleDisplay('notes');
    scaleLabel.textContent = scaleData[currentScale].label;
    octaveLabel.textContent = generateNoteRangeText();
    loadNewNote();
  }
    
  document.querySelectorAll('.chord-mode-button').forEach(btn => {
    btn.addEventListener('click', () => {
      inChordMode = true;
      document.getElementById('chord-mode-select').classList.add('hidden');
      currentChordCount = parseInt(btn.getAttribute('data-chord-count'));
      hideAllScreens();
      document.getElementById('game-screen').classList.remove('hidden');
      const val = parseInt(btn.getAttribute('data-chord-count'));
    fullOctaveMode = (val === 71);
      currentScale = selectedChordScale;
      resetScore();
      setupChordGame();
      window.scrollTo(0, 0);
    });
  });

  chordVisualBtn.addEventListener('click', () => {
    hideAllScreens();
    chordVisualSelect.classList.remove('hidden');
  });
  
  document.getElementById('chord-visual-continuous-btn').addEventListener('click', startChordVisualGame);
  
  document.getElementById('back-to-home-from-chord-visual').addEventListener('click', () => {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
  });
  
  document.getElementById('back-to-chord-visual-select').addEventListener('click', () => {
    hideAllScreens();
    chordVisualSelect.classList.remove('hidden');
  });
  
  nextChordVisualBtn.addEventListener('click', () => {
    generateChordVisualQuestion();
  });

  mosRef.addEventListener('click', () => {
    mosStopFeedbackAudio();
    mosStopAudio();
    mosAudio.src = 'audio/majorscalereference.mp3';
    mosAudio.play();
  });
  

  document.querySelectorAll('.chord-scale-select').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedChordScale = btn.getAttribute('data-scale');
      document.getElementById('chord-scale-title').textContent = `${selectedChordScale} Major Diatonic Chords`;
      hideAllScreens();
      document.getElementById('chord-scale-menu').classList.add('hidden'); // 👈 hides the scale menu
      document.getElementById('chord-mode-select').classList.remove('hidden');
      document.getElementById('chord-detail-feedback').textContent = '';
      window.scrollTo(0, 0);
    });
  });

  document.querySelectorAll('.mode-button').forEach(btn => {
    btn.addEventListener('click', () => {
      currentMode = parseInt(btn.getAttribute('data-mode'), 10);
      modeSelectScreen.classList.add('hidden');
      gameScreen.classList.remove('hidden');
      resetScore();
      document.getElementById('replay-note').textContent = "Replay Note";
      const existingScaleRef = document.getElementById('play-scale-ref');
if (existingScaleRef) existingScaleRef.remove();

    // Show/hide controls based on scale
    const isChromatic = currentScale === "Chromatic";
    document.getElementById('play-scale').classList.toggle('hidden', isChromatic);
    document.getElementById('adjust-controls').classList.toggle('hidden', isChromatic);
    document.getElementById('display-toggle').classList.toggle('hidden', isChromatic);

    toggleDisplay('notes');
    scaleLabel.textContent = scaleData[currentScale].label;
    backButton.textContent = "← Back";

    const diagram = document.getElementById('scale-diagram');
    if (isChromatic) {
      diagram.classList.add('hidden');
    } else {
      diagram.src = `images/${encodeURIComponent(currentScale)}Major.png`;
      diagram.classList.remove('hidden');
      diagram.alt = `${currentScale} Major Scale Diagram`;
    }

    playRefBtn.textContent = isChromatic
      ? `Play Reference (${scaleData[currentScale].noteOrder[0]})`
      : `Play Reference (${scaleData[currentScale].noteOrder[0]} - Tonic)`;

      playRefBtn.replaceWith(playRefBtn.cloneNode(true)); // Reset all event listeners
playRefBtn = document.getElementById('play-reference'); // Reassign the button reference
playRefBtn.addEventListener('click', handleReferenceNoteClick);

    loadNewNote();
    });
  });

  backToScaleSelect.addEventListener('click', () => {
    modeSelectScreen.classList.add('hidden');
    document.getElementById('major-scale-menu').classList.remove('hidden');
    playNote('majorscalespage'); // Optional: play audio when returning to major scale select
    window.scrollTo(0, 0);
  });
  
  if (reallyQuickBtn) reallyQuickBtn.addEventListener('click', () => {
    hideAllScreens();
    reallyQuickSelectScreen.classList.remove('hidden');
    window.scrollTo(0, 0);
  });
  
  document.querySelectorAll('.really-quick-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const max = parseInt(btn.getAttribute('data-max'));
      startReallyQuickGame(max);
    });
  });
  
  const __bthr = document.getElementById('back-to-home-from-really-quick');
  if (__bthr) __bthr.addEventListener('click', () => {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
  });
  
  const __btrqs = document.getElementById('back-to-really-quick-select');
  if (__btrqs) __btrqs.addEventListener('click', () => {
    hideAllScreens();
    reallyQuickSelectScreen.classList.remove('hidden');
  });
  
  if (playReallyQuickBtn) playReallyQuickBtn.addEventListener('click', () => {
    playNote(`realbounce${currentReallyQuickAnswer}`);
  });
  
  if (nextReallyQuickBtn) nextReallyQuickBtn.addEventListener('click', () => {
    generateReallyQuickRound(currentReallyQuickAnswer > 20 ? 28 : currentReallyQuickAnswer);
  });
  
  // From intro -> More Information page (and play select1.mp3)
d7m7MoreInfoBtn && d7m7MoreInfoBtn.addEventListener('click', () => {
  // stop any game audio if you have a helper for that
  if (typeof d7m7StopAllAudio === 'function') d7m7StopAllAudio();

  playUiSound('select1.mp3');
  hideAllScreens();
  d7m7StructureScreen.classList.remove('hidden');
  window.scrollTo(0, 0);
});

// More Information page -> Home
d7m7StructureHomeBtn && d7m7StructureHomeBtn.addEventListener('click', () => {
  if (typeof d7m7StopAllAudio === 'function') d7m7StopAllAudio();
  hideAllScreens();
  document.getElementById('main-menu').classList.remove('hidden');
  window.scrollTo(0, 0);
});

// More Information page -> Back (to intro) and play back1.mp3
d7m7StructureBackBtn && d7m7StructureBackBtn.addEventListener('click', () => {
  if (typeof d7m7StopAllAudio === 'function') d7m7StopAllAudio();

  playUiSound('back1.mp3');
  hideAllScreens();
  d7m7IntroScreen.classList.remove('hidden');
  window.scrollTo(0, 0);
});


  backButton.addEventListener('click', () => {
    gameScreen.classList.add('hidden');
    const allChordsBtn = document.getElementById('play-all-chords');
if (allChordsBtn) allChordsBtn.remove();
    if (currentScale === "Chromatic" || currentScale === "ChromaticExtended") {
      document.getElementById('chromatic-scale-menu').classList.remove('hidden');
      playNote('chromaticpage');
    } else if (inChordMode) {
      document.getElementById('chord-mode-select').classList.remove('hidden');
    } else {
      modeSelectScreen.classList.remove('hidden');
      playNote(scaleData[currentScale].scaleAudio);
    }
  
    window.scrollTo(0, 0);
  });
  

  playRefBtn.addEventListener('click', () => playNote(scaleData[currentScale].referenceNote));
  playScaleBtn.addEventListener('click', () => playNote(scaleData[currentScale].scaleAudio));
  replayNoteBtn.addEventListener('click', () => {
    if (inChordMode) {
      playNote(currentChord);
    } else {
      playNote(currentNote);
    }
  });
  nextBtn.addEventListener('click', () => {
    document.getElementById('chord-detail-feedback').textContent = '';
    if (inChordMode) {
      loadNewChord();
    } else {
      loadNewNote();
    }
  });
  resetScoreBtn.addEventListener('click', resetScore);
  displayNotesBtn.addEventListener('click', () => toggleDisplay('notes'));
  displayDegreesBtn.addEventListener('click', () => toggleDisplay('degrees'));
  
  document.getElementById('diatonic-chords-btn').addEventListener('click', () => {
    hideAllScreens();
    document.getElementById('chord-scale-menu').classList.remove('hidden');
    playNote('diatonicselectmenu3');
    window.scrollTo(0, 0);
  });

  const __bthq = document.getElementById('back-to-home-from-quick');
  if (__bthq) __bthq.addEventListener('click', () => {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
  });
  
  document.getElementById('back-to-quick-select').addEventListener('click', () => {
    hideAllScreens();
    quickSelectScreen.classList.remove('hidden');
  });
  
  document.querySelectorAll('.quick-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      maxQuickCount = parseInt(btn.getAttribute('data-max'));
      startQuickGame();
    });
  });
  

  quickBtn.addEventListener('click', () => {
    hideAllScreens();
    quickSelectScreen.classList.remove('hidden');
    window.scrollTo(0, 0);
  })

  document.getElementById('back-to-home-from-chord-scale').addEventListener('click', () => {
    hideAllScreens();
    document.getElementById('chord-scale-menu').classList.add('hidden'); // 👈 explicitly hide this
    document.getElementById('main-menu').classList.remove('hidden');
  });

  document.getElementById('major-scales-btn').addEventListener('click', () => {
    hideAllScreens();
    document.getElementById('major-scale-menu').classList.remove('hidden');
    playNote('majorscalespage');
    window.scrollTo(0, 0);
  });

  document.getElementById('back-to-home-from-chords').addEventListener('click', () => {
    inChordMode = false;
    hideAllScreens();
    document.getElementById('chord-scale-menu').classList.remove('hidden');
    window.scrollTo(0, 0);
    playNote('diatonicselectmenu3');
  });
  
  document.getElementById('chromatic-btn').addEventListener('click', () => {
    currentScale = "Chromatic";
    currentMode = 12;
    hideAllScreens();
    document.getElementById('game-screen').classList.remove('hidden');
    resetScore();
    toggleDisplay('notes');
  
    // Re-hide after toggleDisplay
    document.getElementById('adjust-controls').classList.add('hidden');
    document.getElementById('play-scale').classList.add('hidden');
    document.getElementById('display-toggle').classList.add('hidden');
  
    backButton.textContent = "← Back";
    scaleLabel.textContent = scaleData[currentScale].label;
    octaveLabel.textContent = scaleData[currentScale].octave;
    playRefBtn.textContent = `Play Reference (${scaleData[currentScale].noteOrder[0]})`;
    document.getElementById('scale-diagram').classList.add('hidden');
    loadNewNote();
    window.scrollTo(0, 0);
  });

  document.getElementById('chromatic-extended-btn').addEventListener('click', () => {
    currentScale = "ChromaticExtended";
    currentMode = 12;
    hideAllScreens();
    document.getElementById('game-screen').classList.remove('hidden');
    resetScore();
    toggleDisplay('notes');
  
    document.getElementById('adjust-controls').classList.add('hidden');
    document.getElementById('play-scale').classList.add('hidden');
    document.getElementById('display-toggle').classList.add('hidden');
  
    backButton.textContent = "← Back";
    scaleLabel.textContent = scaleData[currentScale].label;
    octaveLabel.textContent = scaleData[currentScale].octave;
    playRefBtn.textContent = `Play Reference (${scaleData[currentScale].noteOrder[0]})`;
    document.getElementById('scale-diagram').classList.add('hidden');
    loadNewNote();
    window.scrollTo(0, 0);
  });
  
  document.getElementById('back-to-home-from-major').addEventListener('click', () => {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
    window.scrollTo(0, 0);
  });
  
  aboutBtn.addEventListener('click', () => {
    hideAllScreens();
    aboutPage.classList.remove('hidden');
    window.scrollTo(0, 0);
  });
  
  backToHomeFromAbout.addEventListener('click', () => {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
    window.scrollTo(0, 0);
  });

  document.getElementById('chromatic-menu-btn').addEventListener('click', () => {
    hideAllScreens();
    document.getElementById('chromatic-scale-menu').classList.remove('hidden');
    playNote('chromaticpage');
    window.scrollTo(0, 0);
  });
  
  document.getElementById('back-to-home-from-chromatic').addEventListener('click', () => {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
    window.scrollTo(0, 0);
  });

  document.getElementById('chord-visual-answers').addEventListener('click', function (e) {
    if (!e.target.classList.contains('chord-visual-answer')) return;
  
    const selectedAnswer = e.target.dataset.answer;
    const isCorrect = selectedAnswer === currentChordAnswer; // this variable must be set before
  
    if (isCorrect) {
      e.target.classList.add('correct');
      chordVisualScore.correct++;
    } else {
      e.target.classList.add('incorrect');
      chordVisualScore.incorrect++;
    }
  
    chordVisualScore.total++;
    updateChordVisualScoreDisplay();
    document.getElementById('next-chord-visual').disabled = false;
  });
  

  compareBtn.addEventListener('click', () => {
    hideAllScreens();
    compareScreen.classList.remove('hidden');
  
    // Reset scores and feedback
    compareScore.correct = 0;
    compareScore.incorrect = 0;
    updateCompareScoreDisplay();
  
    // Reset note state and button UI
    compareNote1 = '';
    compareNote2 = '';
    compareFeedback.textContent = "Awaiting your answer...";
    compareAnswerButtons.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('correct', 'incorrect');
    });
  
    nextCompareBtn.disabled = true;
    playComparisonNotes();
    window.scrollTo(0, 0);
  });
  
  backFromCompare.addEventListener('click', () => {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
  
    // Optional: clear state to ensure fresh entry later
    compareNote1 = '';
    compareNote2 = '';
    nextCompareBtn.disabled = true;
    compareAnswerButtons.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('correct', 'incorrect');
    });
    compareFeedback.textContent = "Awaiting your answer...";
  
    window.scrollTo(0, 0);
  })
  
  playComparisonBtn.addEventListener('click', () => {
    if (compareNote1 && compareNote2) {
      playStoredComparisonNotes(); // replay same notes
    } else {
      playComparisonNotes(); // first time
    }
  });
  
  compareAnswerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!compareNote1 || !compareNote2) return;
      if (!nextCompareBtn.disabled) return; // Prevent double answers
  
      const guess = btn.getAttribute('data-answer');
  
      const n1 = midi(compareNote1);
      const n2 = midi(compareNote2);
      const correctAnswer = n2 > n1 ? 'higher' : n2 < n1 ? 'lower' : 'same';
  
      const readableNote1 = compareNote1.toUpperCase();
      const readableNote2 = compareNote2.toUpperCase();
  
      if (guess === correctAnswer) {
        compareScore.correct++;
        btn.classList.add('correct');
        compareFeedback.textContent = `Correct! ✅ The first note was ${readableNote1}, the second was ${readableNote2}.`;
      } else {
        compareScore.incorrect++;
        btn.classList.add('incorrect');
        document.querySelector(`.compare-answer[data-answer="${correctAnswer}"]`).classList.add('correct');
        compareFeedback.textContent = `Incorrect! ❌ The first note was ${readableNote1}, the second was ${readableNote2}. The correct answer was "${correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1)}".`;
      }
  
      compareAnswerButtons.forEach(b => b.disabled = true);
      updateCompareScoreDisplay();
      nextCompareBtn.disabled = false;
      nextCompareBtn.classList.add('pop-animation');
      setTimeout(() => nextCompareBtn.classList.remove('pop-animation'), 300);
    });
  });


nextCompareBtn.addEventListener('click', () => {
  compareNote1 = '';
  compareNote2 = '';
  playComparisonNotes();
  nextCompareBtn.disabled = true;
  nextCompareBtn.classList.remove('pop-animation');
  compareAnswerButtons.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('correct', 'incorrect');
  });
  compareFeedback.textContent = "Awaiting your answer...";
});
  
  resetCompareScoreBtn.addEventListener('click', () => {
    compareScore.correct = 0;
    compareScore.incorrect = 0;
    updateCompareScoreDisplay();
  });

  removeNoteBtn.addEventListener('click', () => {
    if (inChordMode) {
      if (fullOctaveMode) {
        fullOctaveMode = false;
        currentChordCount = 7;
        resetScore();
        setupChordGame();
        return; // ✅ Prevents falling through and double-decrementing
      }
  
      if (currentChordCount > 2) {
        currentChordCount--;
        resetScore();
        setupChordGame();
      }
    } else {
      if (currentMode > 2) {
        currentMode--;
        resetScore();
        setupGame();
      }
    }
  });

  addNoteBtn.addEventListener('click', () => {
    if (inChordMode) {
      if (!fullOctaveMode) {
        if (currentChordCount < 7) {
          currentChordCount++;
          resetScore();
          setupChordGame();
        } else if (currentChordCount === 7) {
          fullOctaveMode = true;
          resetScore();
          setupChordGame();
        }
      }
    } else {
      if (currentMode < 8) {
        currentMode++;
        resetScore();
        setupGame();
      }
    }
  });
  
});

