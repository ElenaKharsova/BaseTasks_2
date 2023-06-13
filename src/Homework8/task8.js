export function userDate() {
  let userDate = prompt("Please, input the date DD.MM.YYYY");
  let regexp = /(\d){2}\.(\d){2}\.(\d){4}/i;
  if (!userDate) {
    alert("You haven't input the date!");
  } else if (regexp.test(userDate)) {
    const [day, month, year] = userDate.split(".");
    userDate = new Date(`${year}-${month}-${day}`);
    const dayOfWeek = userDate.getDay();
    let fullDayOfWeek;
    switch (dayOfWeek) {
      case 1:
        fullDayOfWeek = "Monday";
        break;
      case 2:
        fullDayOfWeek = "Tuesday";
        break;
      case 3:
        fullDayOfWeek = "Wednesday";
        break;
      case 4:
        fullDayOfWeek = "Thursday";
        break;
      case 5:
        fullDayOfWeek = "Friday";
        break;
      case 6:
        fullDayOfWeek = "Saturday";
        break;
      case 0:
        fullDayOfWeek = "Sunday";
        break;
    }
    console.log(`Today is ${fullDayOfWeek}`);
  } else {
    alert("Incorrect type of the date");
  }
}

export function countDayMinutes() {
  const date = new Date();
  const leftMinutes = date.getHours() * 60 + date.getMinutes();
  console.log(leftMinutes);
}

export function youngestUser(birthdayUser1, birthdayUser2) {
  const [dayUser1, monthUser1, yearUser1] = birthdayUser1.split(".");
  const [dayUser2, monthUser2, yearUser2] = birthdayUser2.split(".");

  let birthUser1 = new Date(`${yearUser1}-${monthUser1}-${dayUser1}`);
  let birthUser2 = new Date(`${yearUser2}-${monthUser2}-${dayUser2}`);
  return birthUser1 - birthUser2 > 0 ? birthdayUser1 : birthdayUser2;
}
