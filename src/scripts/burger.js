export const _renderBurger = () => {
  const openMenu = document.querySelector('.open-menu')
  const closeMenu = document.querySelector('.close-menu')

  const openMenuHandler = () => {
    openMenu.classList.add('open')
    document.body.classList.toggle('overflow-hidden')
  }
  const closeMenuHandler = () => {
    openMenu.classList.remove('open')
    document.body.classList.toggle('overflow-hidden')
  }

  openMenu.addEventListener('click', openMenuHandler)
  closeMenu.addEventListener('click', closeMenuHandler)
}
