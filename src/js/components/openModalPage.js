import { Validator } from './falidation'
function openModalPage() {
  const openBtn = document.getElementById('open-modal')
  const closeBtn = document.getElementById('modal__close-btn')

  openBtn.addEventListener('click', () => {
    openModal()
  })

  closeBtn.addEventListener('click', () => {
    closeModal()
  })

  const openModal = () => {
    const modal = document.getElementById('modal-order')
    modal.classList.add('modal-order_open')
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    const modalOrder = document.getElementById('modal-order')
    document.body.classList.remove('modal-open')
    document.body.style.overflow = 'auto'
    modalOrder.classList.remove('modal-order_open')
    resetState()
  }

  const form = document.getElementById('modal-order-form')

  const resetState = () => {
    form.reset()
    Validator.clearErrorsAll()
  }

  if (form)
    form.onsubmit = (e) => {
      e.preventDefault()
      Validator.validate()
      Validator.setClearErrorsHandlers()
    }
}

export default openModalPage
