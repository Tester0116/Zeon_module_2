import '/src/css/main.scss';
import getLocation from '/src/js/components/getLocation';
import openMenu from '/src/js/components/openMenu';
import { ModalOrder } from './components/modal';

ModalOrder.render();

const btnOpenModal = document.getElementById("open-modal-btn");
if (btnOpenModal) btnOpenModal.onclick = ModalOrder.openModal;
openMenu()
getLocation()
