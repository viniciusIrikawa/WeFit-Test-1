// Menu
const transformIntoInlineMenu = () => {
    const menu = document.querySelector('.btn-group-vertical');
    menu.classList.remove("btn-group-vertical");
    menu.classList.add("btn-group-horizontal");
};

transformIntoInlineMenu();
