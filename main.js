const userName = document.querySelector("#user-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const btnLogin = document.querySelector("btn-login");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkError([userName, email, password, confirmPassword]);
  checkEmail(email)
  checkLength(userName,3,5)
  checkLength(password,3,5)
  checkPassword(password,confirmPassword)
});

function showError(input, message) {
  const parent = input.parentElement;
  const error = parent.querySelector("span");
  parent.classList.add("error");
  error.innerText = message;
}

function showSuccess(input) {
  const parent = input.parentElement;
  const error = parent.querySelector("span");
  parent.classList.remove("error");
  error.innerText = "";
}

function checkError(listInput) {
  listInput.forEach((input) => {
    let inputValue = input.value.trim();
    if (!inputValue) {
      showError(input, "Không được để trống");
    } else {
      showSuccess(input);
    }
  });
}

function checkEmail(input) {
    let inputValue = input.value.trim();
    const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 
    if(regex.test(inputValue)){
        showSuccess(input)
    } else {
        showError(input,'Email invalid')
    }
}

function checkLength(input,min,max) {
    let inputValue = input.value.trim();
    if(inputValue.length < min) {
        showError(input,`Phải có ít nhất ${min} ký tự`)
    }
    if(inputValue.length > max) {
        showError(input,`Không được quá ${max} ký tự`)
    }
}

function checkPassword(password,cfPassword) {
    if(password.value !== cfPassword.value) {
        showError(cfPassword,'Mật khẩu không trùng khớp')
    }
}
