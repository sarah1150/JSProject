(function () {
  let CardDiv = document.getElementsByClassName("container")[0];
  let xhr = new XMLHttpRequest();
  let jsonobj;
  let content = "";
  xhr.open("GET", "../api.json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        jsonobj = xhr.responseText;
        prodcutsList = JSON.parse(jsonobj);
        for (var i = 0; i < prodcutsList.length; i++) {
          content += ` 
         <!--first card-->
         <div class="col-3 p-0">
           <div class="card">                 
             <div class=" m-0">
               <img  src="${prodcutsList[i].lapImg}" />
             </div>
             <div >
               <span>${prodcutsList[i].modelName}</span>
             </div>
            <div class=" ">
            <button id="more" type="submit" 
            onclick="toDetailScreen(${i})"  class="btn  btn-info">More</button>
              
             </div>
           </div>
         </div>
         <!--End first card-->
         `;

          CardDiv.innerHTML = content;
          // document.getElementsByClassName("container")[i].appendChild(CardDiv);
        }
      }
    }
  };
  xhr.send();
})();
function toDetailScreen(any) {
  localStorage.input = any;
  console.log(localStorage.input);
  location.href = "http://127.0.0.1:5500/../product_detail/product_detail.html";
}
