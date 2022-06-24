function toggleMenu(){
    const menu=document.querySelector(".mobail-menu");
    const burgerBtn=document.querySelector('.burger');

    burgerBtn.classList.toggle("active");
    menu.classList.toggle("mobail-menu--active");
}
function openMenu() {
    const burgerBtn=document.querySelector('.burger');
    const closeMenu=document.querySelector(".mobail-menu__close");

    closeMenu.addEventListener("click", ()=> {
        toggleMenu();
        document.body.style.overflow = "auto"
    }) 
    burgerBtn.addEventListener("click", ()=> {
        toggleMenu();
        document.body.style.overflow = "hidden"
    }) 
}

export default openMenu;