const kolokol1 = document.getElementById('kolokol1');
const sound = new Audio('./sounds/kolokolzvonit.mp3');

kolokol1.addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play();

    kolokol1.classList.remove('swing');
    void kolokol1.offsetWidth; // перезапуск анимации
    kolokol1.classList.add('swing');
});