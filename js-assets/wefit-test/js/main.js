// Menu
const transformIntoInlineMenu = () => {
    const menu = document.querySelector('.btn-group-vertical');
    menu.classList.remove("btn-group-vertical");
    menu.classList.add("btn-group-horizontal");
};

transformIntoInlineMenu();

// Header
const moveContentToRight = () => {
    const jumbotron = document.querySelector('.jumbotron');
    const button = jumbotron.querySelector('.btn-primary'); 

    jumbotron.classList.add('bg-secondary', 'text-white', 'd-flex', 'justify-content-end', 'flex-column', 'align-items-end');
    button.classList.add('bg-success', 'border-0');
};
moveContentToRight();

// Cards
const changeOrderCards = () => {
    const cards = document.querySelectorAll('.col-lg-3');
    const firstCard = cards[0];
    const secondCard = cards[1];
    const thirdCard = cards[2];
    const fourthCard = cards[3];

    firstCard.querySelector('.btn-primary').classList.add('bg-success');

    secondCard.insertAdjacentElement('beforebegin', fourthCard);
    secondCard.insertAdjacentElement('beforebegin', thirdCard);
    firstCard.insertAdjacentElement('beforebegin', fourthCard);
};
changeOrderCards();

// Itens
const addItemsOnList = () => {
    const list = document.querySelector('.list-group');
    const fourthItem = document.createElement('li');
    const fifthItem = document.createElement('li');

    list.firstElementChild.classList.remove('active');
    
    fourthItem.classList.add('list-group-item', 'active');
    fifthItem.classList.add('list-group-item');

    fourthItem.innerHTML = 'Quarto item';
    fifthItem.innerHTML = 'Quinto item';

    list.appendChild(fourthItem)
    list.appendChild(fifthItem)
};
addItemsOnList();

