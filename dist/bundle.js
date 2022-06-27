/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/components/getLocation.js":
/*!******************************************!*\
  !*** ./src/js/components/getLocation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getLocation() {
  const links = document.querySelectorAll(".menu__link");

  links.forEach((element) => {
    console.log(window.location.href);
    if (element.href == window.location.href) {
      element.classList.add("menu__link--active");
    } else {
      element.classList.remove("menu__link--active");
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocation);

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalOrder": () => (/* binding */ ModalOrder)
/* harmony export */ });
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ "./src/js/components/validation.js");



const form = document.getElementById("modal-order-form");
const btnClose = document.getElementById("modal-order-btn-close");
const btnSubmit = document.getElementById("modal-order-btn-submit");
const labelSuccess = document.getElementById("modal-order-label-success");


const openModal = () => {
    const modal = document.getElementById("modal-order");
    modal.classList.add("modal-order_open");
    document.body.classList.add("modal-open");
};

const closeModal = () => {
    const modalOrder = document.getElementById("modal-order");
    document.body.classList.remove("modal-open");
    modalOrder.classList.remove("modal-order_open");
    resetState();
};

const resetState = () => {
    form.reset();
    _validation__WEBPACK_IMPORTED_MODULE_0__.Validator.clearErrorsAll();

    labelSuccess.style.visibility = "hidden";
    btnSubmit.innerText = "Отправить";
    btnSubmit.disabled = false;
};

const onFormSubmit = (e) => {
    e.preventDefault();
    _validation__WEBPACK_IMPORTED_MODULE_0__.Validator.clearErrorsAll();

    setTimeout(async () => {
        const isValid = _validation__WEBPACK_IMPORTED_MODULE_0__.Validator.validateAll();
        _validation__WEBPACK_IMPORTED_MODULE_0__.Validator.setClearErrorsHandlers();

        if (isValid) {
            btnSubmit.innerText = "Идет отправка...";
            btnSubmit.disabled = true;
            await postFormData();

            resetState();
            labelSuccess.style.visibility = "visible";
        }
    }, 70);
};

const postFormData = async () => {
    const formData = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        plan: form.elements.issue.value
    };

    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Posted Form Data", formData);
};


const render = () => {
    btnClose.onclick = closeModal;
    form.onsubmit = onFormSubmit
};


const ModalOrder = {
    openModal,
    closeModal,
    render
}

/***/ }),

/***/ "./src/js/components/openMenu.js":
/*!***************************************!*\
  !*** ./src/js/components/openMenu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openMenu);

/***/ }),

/***/ "./src/js/components/validation.js":
/*!*****************************************!*\
  !*** ./src/js/components/validation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validator": () => (/* binding */ Validator)
/* harmony export */ });
const Rule = Object.freeze({
    required: (value) => !value ? "поля обязательно*" : "",
});


const fields = Object.freeze({
    name: {
        elements: {
            input: document.getElementById("modal-order-input-name"),
            status: document.getElementById("modal-order-input-name-err")
        },
        rules: [Rule.required],
        errorText: ""
    },
    email: {
        elements: {
            input: document.getElementById("modal-order-input-email"),
            status: document.getElementById("modal-order-input-email-err")
        },
        rules: [Rule.required],
        errorText: ""
    },
    issueDescription: {
        elements: {
            input: document.getElementById("modal-order-text-issue"),
            status: document.getElementById("modal-order-text-issue-err")
        },
        rules: [Rule.required],
        errorText: ""
    }
});



const validateField = (fieldName) => {
    fields[fieldName].errorText = getErrorText(fieldName);
    renderError(fieldName);
};

const getErrorText = (fieldName) => {
    const rules = fields[fieldName].rules;
    const value = fields[fieldName].elements.input.value;

    let errorText = "";

    rules.some(rule => {
        errorText = rule(value);
        return errorText;
    });

    return errorText;
};

const renderError = (fieldName) => {
    const {status, input} = fields[fieldName].elements;
    const {errorText} = fields[fieldName];

    if (errorText)
        input.classList.add("modal-order__input_error");
    else
        input.classList.remove("modal-order__input_error");

    status.textContent = errorText;
};

const clearError = (fieldName) => {
    fields[fieldName].errorText = "";
    renderError(fieldName);
};


const Validator = {
    validateAll: () => {
        Object.keys(fields).forEach(field => validateField(field));
        return Object.values(fields).every(field => !field.errorText);
    },

    clearErrorsAll: () => {
        Object.keys(fields).forEach(fieldName => clearError(fieldName));
    },

    setClearErrorsHandlers: () => {
        Object.keys(fields)
            .forEach(fieldName => {
                fields[fieldName].elements.input
                    .addEventListener("input", () => clearError(fieldName));
            });
    },
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/css/main.scss */ "./src/css/main.scss");
/* harmony import */ var _src_js_components_getLocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js/components/getLocation */ "./src/js/components/getLocation.js");
/* harmony import */ var _src_js_components_openMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/js/components/openMenu */ "./src/js/components/openMenu.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.js");





_components_modal__WEBPACK_IMPORTED_MODULE_3__.ModalOrder.render();

const btnOpenModal = document.getElementById("open-modal-btn");
if (btnOpenModal) btnOpenModal.onclick = _components_modal__WEBPACK_IMPORTED_MODULE_3__.ModalOrder.openModal;
(0,_src_js_components_openMenu__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_src_js_components_getLocation__WEBPACK_IMPORTED_MODULE_1__["default"])()

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map