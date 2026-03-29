function zvukovichek (elementId, soundPath, animationClass = '') {
    const element = document.getElementById(elementId);
    if (!element) return;

    const sound = new Audio(soundPath);

    element.addEventListener('click', () => {
        sound.currentTime = 0;
        sound.play();

        if (animationClass) {
            element.classList.remove(animationClass);
            void element.offsetWidth;
            element.classList.add(animationClass);
        }
    });
}

zvukovichek('kolokol1', './sounds/kolokolzvonit.mp3', 'swing');
zvukovichek('chasiki', './sounds/tiktak.mp3');
zvukovichek('ribkakartinka', './sounds/puzirki.mp3', 'swing');
zvukovichek('yzorik', './sounds/drevostyk.mp3', 'swing');
zvukovichek('palitra1', './sounds/kaplya.mp3');
zvukovichek('palitra2', './sounds/kaplya.mp3');
zvukovichek('palitra3', './sounds/kaplya.mp3');
zvukovichek('palitra4', './sounds/kaplya.mp3');




function showElementsOnClick(buttonId, soundPath, elementIds) {
    const button = document.getElementById(buttonId);
    const sound = new Audio(soundPath);

    if (!button) return;

    button.addEventListener('click', () => {
        sound.currentTime = 0;
        sound.play();

        elementIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.classList.add('show');
            }
        });
    });
}

showElementsOnClick('zvonok', './sounds/dzinkanie.mp3', [
    'viktorkot',
    'firstwords',
    'truewords',
    'falsewords'
]);

function changeTextOnAnswer(buttonId, answerId, oldIds) {
    const button = document.getElementById(buttonId);
    const answer = document.getElementById(answerId);

    if (!button || !answer) return;

    button.addEventListener('click', () => {
        oldIds.forEach(id => {
            const oldElement = document.getElementById(id);
            if (oldElement) {
                oldElement.classList.add('hide');
            }
        });

        answer.classList.add('show-answer');
    });
}

changeTextOnAnswer('truewords', 'truewordsotvet', [
    'firstwords',
    'truewords',
    'falsewords'
]);

changeTextOnAnswer('falsewords', 'falsewordsotvet', [
    'firstwords',
    'truewords',
    'falsewords'
]);


const podskazka = document.getElementById('podskazka1');
const okno = document.getElementById('okno2');
const text = document.getElementById('help1otvet');

let hintVisible = false;

if (podskazka) {
    podskazka.addEventListener('click', () => {
        hintVisible = !hintVisible;

        if (hintVisible) {
            okno.classList.add('show-hint');
            text.classList.add('show-hint');
        } else {
            okno.classList.remove('show-hint');
            text.classList.remove('show-hint');
        }
    });
}

const needles = document.querySelectorAll('#igolo1, #igolo2, #igolo3, #igolo4');

needles.forEach(needle => {
    needle.addEventListener('click', () => {
        needles.forEach(item => item.classList.remove('active'));
        needle.classList.add('active');
    });
});


function makePaletteClick(elementId) {
    const palette = document.getElementById(elementId);

    if (!palette) return;

    let step = 0;
    const maxStep = 5;

    palette.addEventListener('click', () => {
        if (step < maxStep) {
            step++;
            palette.style.backgroundPositionX = `${-step * 10}vw`;
        }
    });
}
makePaletteClick('palitra1');
makePaletteClick('palitra2');
makePaletteClick('palitra3');
makePaletteClick('palitra4');
