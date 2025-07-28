/* hamburgur js logi */

let hamburgurBar = document.querySelector(".hamburgur-container"); // humburgur get

// humburgur show function
const showHamburgur = () => {
  hamburgurBar.style.right = "0px";
};

// humbirgir close function
const closeHambuger = () => {
  hamburgurBar.style.right = "-370px";
};
