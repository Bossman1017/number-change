let mainNum = document.querySelector('.numbers').textContent;
document.querySelector('.less').addEventListener('click', (event) => {
    event.preventDefault();
    mainNum--
    document.querySelector('.mainNum').textContent = mainNum;
});
document.querySelector('.more').addEventListener('click', (event) => {
    event.preventDefault();
    mainNum++
    document.querySelector('.mainNum').textContent = mainNum;
});