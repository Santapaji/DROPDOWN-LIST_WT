/** @format */
var menu_item = [];
var list = document.querySelector("#menu");
var submit_btn = document
  .querySelector(".input__submit")
  .addEventListener("click", handelSubmit);

var shortname = document.querySelector(".short__name");
var item_name = document.querySelector(".item_name");
var description = document.querySelector(".desc");
var small_price = document.querySelector(".small_dish");
var large_price = document.querySelector(".large_dish");

var item_deatils = document.querySelector(".item__details");

function handelSubmit() {
  var selected_item = [];
  for (const item of menu_item) {
    if (item.id == list.value) {
      selected_item.push(item);
    }
  }

  shortname.innerHTML = selected_item[0].short_name;
  item_name.innerHTML = selected_item[0].name;
  description.innerHTML = selected_item[0].description;
  small_price.innerHTML = "small price : " + selected_item[0].price_small;
  large_price.innerHTML = "large price : " + selected_item[0].price_large;

  item_deatils.classList.remove("hide");
}
jQuery
  .get("https://davids-restaurant.herokuapp.com/menu_items.json")
  .done((data) => {
    data.menu_items.forEach((element) => {
      //adding each menu item to menu item list
      menu_item.push(element);
    });

    for (const item of menu_item) {
      let option_item = document.createElement("OPTION");
      option_item.value = item.id;
      option_item.textContent = item.name;

      list.appendChild(option_item);
    }
  })
  .fail((error) => console.error(error));
