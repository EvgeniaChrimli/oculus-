"use strict";
const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabItem.forEach((el) => {
  el.addEventListener("click", open);
});
function open(e) {
  const tabTarget = e.currentTarget;
  const btnDataAtribute = tabTarget.dataset.button;

  tabItem.forEach((itm) => {
    itm.classList.remove("tabs__btn-item-active");
  });

  tabContent.forEach((itm) => {
    itm.classList.remove("tabs__content-item-active");
  });

  tabTarget.classList.add("tabs__btn-item-active");
  document
    .querySelector(`#${btnDataAtribute}`)
    .classList.add("tabs__content-item-active");
}
