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
zvukovichek('strela1', './sounds/strelki.mp3');
zvukovichek('strela2', './sounds/strelki.mp3');
zvukovichek('igolo1', './sounds/igolki.mp3');
zvukovichek('igolo2', './sounds/igolki.mp3');
zvukovichek('igolo3', './sounds/igolki.mp3');
zvukovichek('igolo4', './sounds/igolki.mp3');
zvukovichek('ekr7da3', './sounds/puzirki.mp3', 'swing');
zvukovichek('ekr7da4', './sounds/puzirki.mp3', 'swing');
zvukovichek('ekr7da5', './sounds/puzirki.mp3', 'swing');
zvukovichek('ekr7da6', './sounds/puzirki.mp3', 'swing');
zvukovichek('a8ekr3', './sounds/plenka.mp3', 'swing');
zvukovichek('le92', './sounds/pozitiv.mp3', 'swing');




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


const strela1 = document.getElementById('strela1');
const strela2 = document.getElementById('strela2');
const tatyshki = document.getElementById('tatyshki');

function toggleTattooSet() {
    tatyshki.classList.toggle('tattoo-set-1');
    tatyshki.classList.toggle('tattoo-set-2');
}

strela1.addEventListener('click', toggleTattooSet);
strela2.addEventListener('click', toggleTattooSet);


let currentPaint = 'lb';

function selectPaint(buttonId, paintKey) {
    const button = document.getElementById(buttonId);
    if (!button) return;

    button.addEventListener('click', () => {
        currentPaint = paintKey;
    });
}


selectPaint('here6ekol1', 'lb');
selectPaint('here6ekol2', 'hb');
selectPaint('here6ekol4', 'e');
selectPaint('here6ekol3', 'p');



const patterns = {
    contur1: {
        activeClass: 'pattern1-active',
        parts: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11'],
        files: {
            lb: {
                p1: './images/tatoo for 6E/light blue tatoo/1alb.svg',
                p2: './images/tatoo for 6E/light blue tatoo/1blb.svg',
                p3: './images/tatoo for 6E/light blue tatoo/1clb.svg',
                p4: './images/tatoo for 6E/light blue tatoo/1dlb.svg',
                p5: './images/tatoo for 6E/light blue tatoo/1elb.svg',
                p6: './images/tatoo for 6E/light blue tatoo/1flb.svg',
                p7: './images/tatoo for 6E/light blue tatoo/1glb.svg',
                p8: './images/tatoo for 6E/light blue tatoo/1hlb.svg',
                p9: './images/tatoo for 6E/light blue tatoo/1ilb.svg',
                p10: './images/tatoo for 6E/light blue tatoo/1jlb.svg',
                p11: './images/tatoo for 6E/light blue tatoo/1klb.svg'
            },
            hb: {
                p1: './images/tatoo for 6E/hard blue tatoo/1ahb.svg',
                p2: './images/tatoo for 6E/hard blue tatoo/1bhb.svg',
                p3: './images/tatoo for 6E/hard blue tatoo/1chb.svg',
                p4: './images/tatoo for 6E/hard blue tatoo/1dhb.svg',
                p5: './images/tatoo for 6E/hard blue tatoo/1ehb.svg',
                p6: './images/tatoo for 6E/hard blue tatoo/1fhb.svg',
                p7: './images/tatoo for 6E/hard blue tatoo/1ghb.svg',
                p8: './images/tatoo for 6E/hard blue tatoo/1hhb.svg',
                p9: './images/tatoo for 6E/hard blue tatoo/1ihb.svg',
                p10: './images/tatoo for 6E/hard blue tatoo/1jhb.svg',
                p11: './images/tatoo for 6E/hard blue tatoo/1khb.svg'
            },
            e: {
                p1: './images/tatoo for 6E/orange tatoo/1ae.svg',
                p2: './images/tatoo for 6E/orange tatoo/1be.svg',
                p3: './images/tatoo for 6E/orange tatoo/1ce.svg',
                p4: './images/tatoo for 6E/orange tatoo/1de.svg',
                p5: './images/tatoo for 6E/orange tatoo/1ee.svg',
                p6: './images/tatoo for 6E/orange tatoo/1fe.svg',
                p7: './images/tatoo for 6E/orange tatoo/1ge.svg',
                p8: './images/tatoo for 6E/orange tatoo/1he.svg',
                p9: './images/tatoo for 6E/orange tatoo/1ie.svg',
                p10: './images/tatoo for 6E/orange tatoo/1je.svg',
                p11: './images/tatoo for 6E/orange tatoo/1ke.svg'
            },
            p: {
                p1: './images/tatoo for 6E/pink tatoo/1ap.svg',
                p2: './images/tatoo for 6E/pink tatoo/1bp.svg',
                p3: './images/tatoo for 6E/pink tatoo/1cp.svg',
                p4: './images/tatoo for 6E/pink tatoo/1dp.svg',
                p5: './images/tatoo for 6E/pink tatoo/1ep.svg',
                p6: './images/tatoo for 6E/pink tatoo/1fp.svg',
                p7: './images/tatoo for 6E/pink tatoo/1gp.svg',
                p8: './images/tatoo for 6E/pink tatoo/1hp.svg',
                p9: './images/tatoo for 6E/pink tatoo/1ip.svg',
                p10: './images/tatoo for 6E/pink tatoo/1jp.svg',
                p11: './images/tatoo for 6E/pink tatoo/1kp.svg'
            }
        }
    },

    contur2: {
    activeClass: 'pattern3-active',
        parts: ['pin41', 'pin42', 'pin43'],
        files: {
            lb: {
                pin41: './images/tatoo for 6E/light blue tatoo/4alb.svg',
                pin42: './images/tatoo for 6E/light blue tatoo/4blb.svg',
                pin43: './images/tatoo for 6E/light blue tatoo/4clb.svg'
            },
            hb: {
                pin41: './images/tatoo for 6E/hard blue tatoo/4ahb.svg',
                pin42: './images/tatoo for 6E/hard blue tatoo/4bhb.svg',
                pin43: './images/tatoo for 6E/hard blue tatoo/4chb.svg'
            },
            e: {
                pin41: './images/tatoo for 6E/orange tatoo/4ae.svg',
                pin42: './images/tatoo for 6E/orange tatoo/4be.svg',
                pin43: './images/tatoo for 6E/orange tatoo/4ce.svg'
            },
            p: {
                pin41: './images/tatoo for 6E/pink tatoo/4ap.svg',
                pin42: './images/tatoo for 6E/pink tatoo/4bp.svg',
                pin43: './images/tatoo for 6E/pink tatoo/4cp.svg'
            }
        }
},

    contur3: {
        activeClass: 'pattern2-active',
    parts: ['pinkforstar1', 'pinkforstar2', 'pinkforstar3', 'pinkforstar4'],
    files: {
        lb: {
            pinkforstar1: './images/tatoo for 6E/light blue tatoo/3alb.svg',
            pinkforstar2: './images/tatoo for 6E/light blue tatoo/3blb.svg',
            pinkforstar3: './images/tatoo for 6E/light blue tatoo/3clb.svg',
            pinkforstar4: './images/tatoo for 6E/light blue tatoo/3dlb.svg'
        },
        hb: {
            pinkforstar1: './images/tatoo for 6E/hard blue tatoo/3ahb.svg',
            pinkforstar2: './images/tatoo for 6E/hard blue tatoo/3bhb.svg',
            pinkforstar3: './images/tatoo for 6E/hard blue tatoo/3chb.svg',
            pinkforstar4: './images/tatoo for 6E/hard blue tatoo/3dhb.svg'
        },
        e: {
            pinkforstar1: './images/tatoo for 6E/orange tatoo/3ae.svg',
            pinkforstar2: './images/tatoo for 6E/orange tatoo/3be.svg',
            pinkforstar3: './images/tatoo for 6E/orange tatoo/3ce.svg',
            pinkforstar4: './images/tatoo for 6E/orange tatoo/3de.svg'
        },
        p: {
            pinkforstar1: './images/tatoo for 6E/pink tatoo/3ap.svg',
            pinkforstar2: './images/tatoo for 6E/pink tatoo/3bp.svg',
            pinkforstar3: './images/tatoo for 6E/pink tatoo/3cp.svg',
            pinkforstar4: './images/tatoo for 6E/pink tatoo/3dp.svg'
        }
    }
    },

    contur4: {
    activeClass: 'pattern4-active',
    parts: ['pipi1', 'pipi2', 'pipi3', 'pipi4', 'pipi5', 'pipi6', 'pipi7'],
    files: {
        lb: {
            pipi1: './images/tatoo for 6E/light blue tatoo/2alb.svg',
            pipi2: './images/tatoo for 6E/light blue tatoo/2blb.svg',
            pipi3: './images/tatoo for 6E/light blue tatoo/2clb.svg',
            pipi4: './images/tatoo for 6E/light blue tatoo/2dlb.svg',
            pipi5: './images/tatoo for 6E/light blue tatoo/2elb.svg',
            pipi6: './images/tatoo for 6E/light blue tatoo/2flb.svg',
            pipi7: './images/tatoo for 6E/light blue tatoo/2glb.svg'
        },
        hb: {
            pipi1: './images/tatoo for 6E/hard blue tatoo/2ahb.svg',
            pipi2: './images/tatoo for 6E/hard blue tatoo/2bhb.svg',
            pipi3: './images/tatoo for 6E/hard blue tatoo/2chb.svg',
            pipi4: './images/tatoo for 6E/hard blue tatoo/2dhb.svg',
            pipi5: './images/tatoo for 6E/hard blue tatoo/2ehb.svg',
            pipi6: './images/tatoo for 6E/hard blue tatoo/2fhb.svg',
            pipi7: './images/tatoo for 6E/hard blue tatoo/2ghb.svg'
        },
        e: {
            pipi1: './images/tatoo for 6E/orange tatoo/2ae.svg',
            pipi2: './images/tatoo for 6E/orange tatoo/2be.svg',
            pipi3: './images/tatoo for 6E/orange tatoo/2ce.svg',
            pipi4: './images/tatoo for 6E/orange tatoo/2de.svg',
            pipi5: './images/tatoo for 6E/orange tatoo/2ee.svg',
            pipi6: './images/tatoo for 6E/orange tatoo/2fe.svg',
            pipi7: './images/tatoo for 6E/orange tatoo/2ge.svg'
        },
        p: {
            pipi1: './images/tatoo for 6E/pink tatoo/2ap.svg',
            pipi2: './images/tatoo for 6E/pink tatoo/2bp.svg',
            pipi3: './images/tatoo for 6E/pink tatoo/2cp.svg',
            pipi4: './images/tatoo for 6E/pink tatoo/2dp.svg',
            pipi5: './images/tatoo for 6E/pink tatoo/2ep.svg',
            pipi6: './images/tatoo for 6E/pink tatoo/2fp.svg',
            pipi7: './images/tatoo for 6E/pink tatoo/2gp.svg'
        }
    }
}
};


function setupPatternPainting(pattern) {
    pattern.parts.forEach(partId => {
        const part = document.getElementById(partId);
        if (!part) return;

        part.addEventListener('click', () => {
            part.src = pattern.files[currentPaint][partId];
            part.style.opacity = '1';
        });
    });
}

function resetPatternPainting(pattern) {
    pattern.parts.forEach(partId => {
        const part = document.getElementById(partId);
        if (!part) return;

        part.style.opacity = '0';
    });
}

function resetAllPatterns() {
    const ekran6 = document.getElementById('ekran6');
    if (!ekran6) return;

    Object.values(patterns).forEach(pattern => {
        resetPatternPainting(pattern);
        ekran6.classList.remove(pattern.activeClass);
    });
}

Object.values(patterns).forEach(pattern => {
    setupPatternPainting(pattern);
});


function chooseContour(buttonId, contourId, allContourIds) {
    const button = document.getElementById(buttonId);
    const contour = document.getElementById(contourId);
    const ekran6 = document.getElementById('ekran6');
    const pattern = patterns[contourId];

    if (!button || !contour || !ekran6 || !pattern) return;

    button.addEventListener('click', () => {
        allContourIds.forEach(id => {
            const item = document.getElementById(id);
            if (item) item.classList.remove('show');
        });

        resetAllPatterns();

        contour.classList.add('show');
        ekran6.classList.add(pattern.activeClass);
    });
}

const allContours = ['contur1', 'contur2', 'contur3', 'contur4'];

chooseContour('tatyshka1', 'contur1', allContours);
chooseContour('tatyshka2', 'contur2', allContours);
chooseContour('tatyshka3', 'contur3', allContours);
chooseContour('tatyshka4', 'contur4', allContours);


const items = document.querySelectorAll('#ekr7da3, #ekr7da4, #ekr7da5, #ekr7da6');

items.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('fade-out');

        setTimeout(() => {
            item.style.display = 'none';
        }, 400);
    });
});

const el = document.getElementById('a8ekr3');

document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('a8ekr3');

    el.addEventListener('click', () => {
        el.style.transform = 'translateX(38vw)';
    });
});

window.addEventListener('load', () => {
    const btn = document.getElementById('le92');
    const effect = document.getElementById('le93');
    const text = document.getElementById('simon');

    btn.onclick = () => {

        effect.style.opacity = '1';
        text.style.opacity = '1';

        effect.style.pointerEvents = 'auto';
        text.style.pointerEvents = 'auto';

        effect.style.animation = 'pulse 1s infinite ease-in-out';
    };
});