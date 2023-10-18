let menu_button_function = () => {
  let button = document.getElementsByClassName("fa-bars")[0];
  button.addEventListener("click", () => {
    let menu = document.getElementsByClassName("menu_2")[0];
    if (menu.classList.contains("height_100")) {
      menu.classList.remove("height_100");
    } else {
      menu.classList.add("height_100");
    }
  });
};
menu_button_function();
