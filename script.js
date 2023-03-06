let number = 1;
let myDivs = document.querySelectorAll("button");
let myLines = document.querySelectorAll(".inside");
let myNums = document.querySelectorAll(".num");

myDivs[0].addEventListener("click", backward);
myDivs[1].addEventListener("click", forward);

function forward() {
  if (number == 4) {
    return 0;
  }
  number++;
  number == 4 && myDivs[1].classList.add("disabled-button");

  if (number != 1 && myDivs[0].classList[1] == "disabled-button") {
    myDivs[0].classList.remove("disabled-button");
    myDivs[0].classList.add("active-button");
  }

  if (number != 4) {
    myDivs[1].classList.add("active-button");
    myDivs[1].classList.remove("disabled-button");
  }
  if (number != 1) {
    myDivs[0].classList.remove("disabled-button");
    myDivs[0].classList.add("active-button");
  }

  switch (number) {
    case 2:
      myLines[0].classList.add("active-inside");
      myNums[1].classList.add("active-border");
      break;
    case 3:
      myLines[1].classList.add("active-inside");
      myNums[2].classList.add("active-border");
      break;
    case 4:
      myLines[2].classList.add("active-inside");
      myNums[3].classList.add("active-border");
      break;

    default:
      break;
  }
}

function backward() {
  if (number == 1) {
    return 0;
  }
  number--;
  number == 1 && myDivs[0].classList.add("disabled-button");
  if (number != 1) {
    myDivs[0].classList.remove("disabled-button");
    myDivs[0].classList.add("active-button");
  }
  if (number != 4) {
    myDivs[1].classList.add("active-button");
    myDivs[1].classList.remove("disabled-button");
  }

  switch (number) {
    case 1:
      myLines[0].classList.remove("active-inside");
      myNums[1].classList.remove("active-border");
      break;
    case 2:
      myLines[1].classList.remove("active-inside");
      myNums[2].classList.remove("active-border");
      break;
    case 3:
      myLines[2].classList.remove("active-inside");
      myNums[3].classList.remove("active-border");
      break;

    default:
      break;
  }
}
