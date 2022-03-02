if (localStorage.getItem("basket") == null) {
  localStorage.setItem("basket", JSON.stringify([]));
}

let basket = [];
let btnAdd = document.querySelectorAll(".btn-add");
for (let btn of btnAdd) {
  btn.onclick = function (e) {
    e.preventDefault();

    if (JSON.parse(localStorage.getItem("basket")) == null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
    let basket = JSON.parse(localStorage.getItem("basket"));
    let id = this.parentElement.getAttribute("data-id");
    let existProd = basket.find((p) => p.id == id);

    if (existProd === undefined) {
      basket.push({
        id: id,
        count: 0,
      });
    } else {
      existProd.count += 1;
    }

    localStorage.setItem("basket", JSON.stringify(basket));
    countBasket();
  }
}

function countBasket() {
  let basket = JSON.parse(localStorage.getItem('basket'));
  document.getElementById("productCount").innerText = basket.length
}

countBasket();
