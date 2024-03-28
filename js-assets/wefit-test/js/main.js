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