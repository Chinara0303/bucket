if (localStorage.getItem("basket") == null) {
  localStorage.setItem("basket", JSON.stringify([]));
}


let btnAdd = document.querySelectorAll(".btn-add");
for (let btn of btnAdd) {
  btn.onclick = function (e) {
    e.preventDefault();

    if (JSON.parse(localStorage.getItem("basket")) == null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
    let basket = JSON.parse(localStorage.getItem("basket"));
    let id = this.parentElement.getAttribute("data-id");
    let img=this.parentElement.previousElementSibling.getAttribute('src')
    let name =this.parentElement.firstElementChild.innerText;
    let existProd = basket.find((p) => p.id == id);

    if (existProd === undefined) {
      basket.push({
        id: id,
        name: name,
        count: 1,
        img: img
      });
    } else {
      existProd.count += 1;
    }

    localStorage.setItem("basket", JSON.stringify(basket));
    countBucket();
  }
}

function countBucket() {
  let bucket = JSON.parse(localStorage.getItem('basket'));
  document.getElementById("productCount").innerText = bucket.length
}

countBucket();
