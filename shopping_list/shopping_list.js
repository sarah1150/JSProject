(function () {
  let tableElements = document.getElementsByTagName("tbody")[0];
  let priceCalc = 0;
  let xhr = new XMLHttpRequest();
  let jsonobj;
  xhr.open("GET", "../api.json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        jsonobj = xhr.responseText;
        prodcutsList = JSON.parse(jsonobj);
        var storedNames = JSON.parse(localStorage.getItem("setArr"));
        var IntStoredNames = storedNames.map(Number);
        for (var i = 0; i < IntStoredNames.length; i++) {
          tableElements.innerHTML += ` 
            <tr>
                <td><span>${
                  prodcutsList[IntStoredNames[i]].modelName
                }</span></td>
                <td><span>${prodcutsList[IntStoredNames[i]].type}</span></td>
                <td><span>${prodcutsList[IntStoredNames[i]].review}</span></td>
                <td><span>${prodcutsList[IntStoredNames[i]].price}</span></td>
            </tr>
        `;
          priceCalc += Number(prodcutsList[IntStoredNames[i]].price);
          document.getElementsByClassName("total")[0].innerHTML = `
            <td class="calc" style="border: none">
              ${priceCalc}
            </td>
          `;
        }
      }
    }
  };
  xhr.send();
})();

// for (var i = 0; i < IntStoredNames.length; i++) {
//   if (prodcutsList[IntStoredNames[i + 1]].price != null) {
//     var priceCalc1 =
//       prodcutsList[IntStoredNames[i]].price +
//       prodcutsList[IntStoredNames[i + 1]].price;
//   } else var priceCalc2 = prodcutsList[IntStoredNames[i]].price;

//   var priceCalc = priceCalc1 + priceCalc2;
// }
