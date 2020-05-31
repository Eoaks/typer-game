var WORD_LIST = [];
window.onload = init;
// window.addEventListener('click', (e) => {
//     console.log(e.target)
//     if (e.target.id !== 'modal-content') {
//         closeModal();
//     }
// })
var wordIndex = 0;
var wordCount = 0;
var timer = 30;
var running = false;
getList();

function init() {
    var input = document.getElementById('text');
    input.focus();
    var wordContainer = document.getElementById('current-word');
    var nextWordContainer = document.getElementById('next-word');
    wordContainer.textContent = WORD_LIST[wordIndex];
    nextWordContainer.textContent = `-> ${WORD_LIST[wordIndex + 1]}`;
    var highscore = window.localStorage.getItem('highscore');
    document.getElementById('highscore').textContent = window.localStorage.getItem('highscore') || 0;
}

function handleInput(event) {
    if (!running) {
        running = true;
        beginCountdown();
    }
    text = event.target.value;

    if (WORD_LIST[wordIndex].indexOf(text) !== 0) {
        event.target.style.border = '1px solid red';
    }
    if (WORD_LIST[wordIndex].indexOf(text) === 0) {
        event.target.style.border = '1px solid rgb(118, 118, 118)';
    }
    if (text === WORD_LIST[wordIndex]) {
        wordIndex++;
        score();
        event.target.value = '';
        setWord();
    }
}
function setWord() {
    var wordContainer = document.getElementById('current-word');
    var nextWordContainer = document.getElementById('next-word');
    wordContainer.textContent = WORD_LIST[wordIndex];
    nextWordContainer.textContent = `-> ${WORD_LIST[wordIndex + 1]}`;
    document.getElementById('text').style.border = '1px solid rgb(118, 118, 118)';
    document.getElementById('word-count').textContent = wordCount;
}
function beginCountdown() {
    var interval = window.setInterval(() => {
        timer--;
        document.getElementById('timer').textContent = timer;
        if (timer <= 0) {
            clearInterval(interval)
            openModal();
        }
    }, 1000);
}
function score() {
    wordCount++;
    document.getElementById('word-count').textContent = wordCount;
}

function openModal() {
    document.getElementById('score-modal').style.display = 'block';
    document.getElementById('score').textContent = wordCount;
    document.getElementById('text').blur()
    updateHighScore();
}
function closeModal() {
    document.getElementById('score-modal').style.display = 'none';
}
function replay() {
    wordIndex = 0;
    wordCount = 0;
    timer = 30;
    running = false;
    getList();
    var input = document.getElementById('text');
    input.value = '';
    input.focus();
    var wordContainer = document.getElementById('current-word');
    wordContainer.textContent = WORD_LIST[wordIndex];
    closeModal();
}
function updateHighScore() {
    let hs = window.localStorage.getItem('highscore');
    if ((hs && (wordCount > hs)) || !hs) {
        window.localStorage.setItem('highscore', wordCount);
    }
    document.getElementById('highscore').textContent = window.localStorage.getItem('highscore');
}
function getList() {
    WORD_LIST = shuffle([
        'Long',
        'tooth',
        'soul',
        'Longing',
        'another',
        'Lurch',
        'into',
        'fray',
        'Weapon',
        'belly',
        'Warrior',
        'struggling',
        'remain',
        'consequential',
        'Bellow',
        'aloud',
        'Bold',
        'proud',
        'where',
        'been',
        'here',
        'Beating',
        'chest',
        'drums',
        'Beating',
        'tired',
        'bones',
        'again',
        'battle',
        'mine',
        'Weapon',
        'belly',
        'Tales',
        'told',
        'battles',
        'things',
        'done',
        'Caligula',
        'would',
        'grin',
        'Beating',
        'tired',
        'bones',
        'Tripping',
        'through',
        'remember',
        'when',
        'Once',
        'invincible',
        'armors',
        'wearing',
        'thin',
        'Heavy',
        'shield',
        'down',
        'Warrior',
        'struggling',
        'remain',
        'relevant',
        'Warrior',
        'struggling',
        'remain',
        'consequential',
        'aloud',
        'Bold',
        'proud',
        'where',
        'been',
        'here',
        'Where',
        'Warrior',
        'struggling',
        'remain',
        'relevant',
        'Warrior',
        'struggling',
        'remain',
        'consequential',
        'Tears',
        'eyes',
        'Chasing',
        'Ponce',
        'Leons',
        'phantoms',
        'filled',
        'with',
        'hope',
        'taste',
        'mythical',
        'fountains',
        'False',
        'hope',
        'perhaps',
        'truth',
        'never',
        'Before',
        'feel',
        'sting',
        'Feeling',
        'time',
        'bearing',
        'down',
        'Tears',
        'eyes',
        'Chasing',
        'Ponce',
        'Leons',
        'phantoms',
        'filled',
        'with',
        'hope',
        'taste',
        'mythical',
        'fountains',
        'False',
        'hope',
        'perhaps',
        'truth',
        'never',
        'Before',
        'feel',
        'sting',
        'Feeling',
        'time',
        'bearing',
        'down',
        'False',
        'hope',
        'perhaps',
        'truth',
        'never',
        'Before',
        'feel',
        'sting',
        'Feeling',
        'time',
        'bearing',
        'down',
        'Bearing',
        'down',
    ])
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.map(word => word.toLowerCase());
}