export function checkDate() {
  const data = prompt("Input date DD.MM.YYYY");
  const regExpDate = /(\d){2}\.(\d){2}\.(\d){4}/i;
  if (regExpDate.test(data)) {
    return true;
  } else {
    alert("You have input incorrect date!");
  }
}

export function checkEmail() {
  const data = prompt("Input email name@domen.xxx");
  const regExpDate = /^(.)+@(.)+\.(\w)+$/i;
  if (regExpDate.test(data)) {
    return true;
  } else {
    alert("You have input incorrect email!");
  }
}

export function checkPhone() {
  const data = prompt("Input phone number +XXXXXXXXXX)");
  const regExpDate = /^\+(\d){5,13}$/i;
  if (regExpDate.test(data)) {
    return true;
  } else {
    alert("You have input incorrect phone number!");
  }
}
