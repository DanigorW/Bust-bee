const content = ["creative", "Unique"];
let currentText = "";
let letters = "";
let index = 0;
let counter = 0;
let typing = () => {
  if (counter === content.length) {
    counter = 0;
  }

  currentText = content[counter];
  letters = currentText.slice(0, ++index);

  document.querySelector(".span").textContent = letters;
  if (letters.length === currentText.length) {
    counter++;
    index = 0;
  }

  setTimeout(typing, 600);
};

typing();
