(function () {
  let xhr = new XMLHttpRequest();
  let jsonobj;

  xhr.open("GET", "../api.json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        jsonobj = xhr.responseText;
        prodcutsList = JSON.parse(jsonobj);

        document.getElementsByClassName("productdetail")[0].innerHTML = `
       <div class="col-6 spanDiv">
         <span>${prodcutsList[localStorage.input].modelName}</span>
         <span>${prodcutsList[localStorage.input].Desc}</span>
         <span>${prodcutsList[localStorage.input].price}</span>
         <span>${prodcutsList[localStorage.input].type}</span>
         <span>${prodcutsList[localStorage.input].review}</span>

         <input type="submit" value="BUY" class="buy" onclick="buyButton()" />
       </div>
       <div class="col-4 divImg">
         <img src="${prodcutsList[localStorage.input].lapImg}" />
       </div>

    `;
      }
    }
  };
  xhr.send();
})();

function buyButton() {
  let listArr = JSON.parse(localStorage.getItem("setArr") || "[]");
  if (listArr != null && listArr.length >= 0) {
    listArr.push(localStorage.input);
    localStorage.setItem("setArr", JSON.stringify(listArr));
  } else {
    locStore = [];
    locStore.push(localStorage.input);
    localStorage.setItem("setArr", JSON.stringify(locStore));
  }
  location.href = "http://127.0.0.1:5500/../shopping_list/shopping_list.html";
}
