let timer = () => {
    number = 0;
    return go = () => {
        document.body.textContent = `${number++} sekund`;
        document.body.style.fontSize = '60px';
        document.body.style.margin = '30px';
    }
}
timer();

setInterval(go, 1000);

//komentarz

//sprawdzam git

// pullowanie
