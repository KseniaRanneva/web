
//NAME
const nameInput = document.querySelector("#name-input");
let nameInputValue;     //введенное значение имени

//Событие при вводе имени в поле
nameInput.addEventListener("input", () => {
    nameInputValue = nameInput.value;
})

//Событие при потере фокуса у поля Имя
nameInput.addEventListener("blur", checkInputName);

//Проверка ввода имени
function checkInputName() {
    if (!nameInputValue || nameInputValue.length < 4 || nameInputValue.length > 30) {       //количество символов от 4 до 30
        nameInput.className = "input_error";

        //создание сообщения об ошибке
        let p = document.createElement('p');
        p.textContent = "The name must contain more than 3 characters";
        p.className = "error_message";
        document.querySelector("#name-input-container").append(p);

        return false;
    }
    else {
        nameInput.className = null;
        return true;
    }
}

//Событие при получении фокуса у поля Имя
nameInput.addEventListener("focus", () => {
    document.querySelector("#name-input-container > p").remove();   //удаление сообщения об ошибке
})


//PASSWORD
const passwordInput = document.querySelector("#password-input");
let passwordInputValue;     //введенное значение пароля

//Событие при вводе пароля в поле
passwordInput.addEventListener("input", () => {
    passwordInputValue = passwordInput.value;
})

//Событие при потере фокуса у поля Пароль
passwordInput.addEventListener("blur", checkInputPassword);

//Проверка ввода пароля
function checkInputPassword() {
    if (!passwordInputValue                 //количество символов от 5 до 15, буквы и спецсимволы
        || passwordInputValue.length < 5
        || passwordInputValue.length > 15
        || !/[A-z]/.test(passwordInputValue)
        || !/[!@#$%^&*()_+"№;:?=<>,./-]/.test(passwordInputValue)) {
            passwordInput.className = "input_error";

            //создание сообщения об ошибке
            let p = document.createElement('p');
            p.textContent = "The password must contain 5-15 characters, letters and special characters.";
            p.className = "error_message";
            document.querySelector("#password-input-container").append(p);

            return false;
    }
    else {
        passwordInput.className = null;
        return true;
    }
}

//Событие при получении фокуса у поля Пароль
passwordInput.addEventListener("focus", () => {
    document.querySelector("#password-input-container > p").remove();   //удаление сообщения об ошибке
})


//SUBMIT
const submitInput = document.querySelector("#submit-input");

//Событие при нажатии на кнопку
submitInput.addEventListener("click", () => {
    //удаление сообщений об ошибках
    document.querySelector("#name-input-container > p").remove();
    document.querySelector("#password-input-container > p").remove();
})

//Событие при отправке формы
function submitFunction(event) {
    if (!checkInputName() || !checkInputPassword()) {   //если поля Имя и Пароль заполнены неверно
        event.preventDefault();                         //запрет отправки формы (события по умолчанию)
    }
}

const themeSwitch = document.querySelector("#theme-switch");

//Событие при нажатии на кнопку для смены темы
function changeThemeType() {
    document.body.classList.toggle("dark-theme");
    if (themeSwitch.classList.toggle("dark-theme")) {
        themeSwitch.textContent = "DARK";
    }
    else {
        themeSwitch.textContent = "LIGHT";
    }
}