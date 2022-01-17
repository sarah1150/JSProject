// For Register Form  (Create Btn)
var save_button = document.getElementById("Save");
save_button.onclick = saveData;

function saveData() {
  var input = document.getElementById("saveUser");
  localStorage.setItem("UserName", input.value);
  localStorage.getItem("UserName");
  var input = document.getElementById("password");
  localStorage.setItem("pass", input.value);
  localStorage.getItem("pass");

  var input = document.getElementById("repassword");
  if (input.value == localStorage.getItem("pass")) {
    localStorage.setItem("repass", input.value);
    localStorage.getItem("repass");
  } else alert("Please ReWite Password");
}

// For Register Form  (Reset Btn)
var delete_button = document.getElementById("deleteData");
delete_button.onclick = DeleteData;

function DeleteData() {
  localStorage.removeItem("UserName");
  localStorage.removeItem("pass");
  localStorage.removeItem("repass");
  location.reload();
}

//For Login Form
var check_button = document.getElementById("check");
check_button.onclick = matchData;

function matchData() {
  var input1 = document.getElementById("saveUser");
  var input2 = document.getElementById("password");
  if (
    input1.value == localStorage.getItem("UserName") &&
    input2.value == localStorage.getItem("pass")
  ) {
    location.href = "http://127.0.0.1:5500/../home_page/home_page.html";
    return localStorage.getItem("UserName");
  } else alert("error");
}

// For LogOut Btn
var logout_button = document.getElementById("LOGOUT");
logout_button.onclick = logoutclick;

function logoutclick() {
  window.localStorage.clear();
  location.href = "http://127.0.0.1:5500/../login/login.html";
}
