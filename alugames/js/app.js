let number = 0;
function alterarStatus(id) {
    let clickRent = document.getElementById(`game-${id}`);
    let image = clickRent.querySelector('.dashboard__item__img');
    let button = clickRent.querySelector('.dashboard__item__button');
    if (button.classList.contains('dashboard__item__button--return')==false) {
        if (returnConfirm()==true) {
            number++;
            let wordRent = number > 1 ? 'Boardgames' : 'Boardgame';
            button.classList.add('dashboard__item__button--return');
            image.classList.add('dashboard__item__img--rented');
            button.textContent = 'Devolver';
            function numberRent() {
                console.log(`Foram alugados ${number} ${wordRent}`);
            }
            return numberRent();
        }
    } else {
        button.classList.remove('dashboard__item__button--return');
        image.classList.remove('dashboard__item__img--rented');
        button.textContent = 'Alugar';
    }
}

alterarStatus();

function returnConfirm() {
    return confirm('Alugar este item?');    
}

