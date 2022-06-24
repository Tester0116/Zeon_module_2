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

export default getLocation;