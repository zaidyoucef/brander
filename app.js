function generateName(word) {
  var coolname = [
    " Ninja",
    " Buzz",
    " Gorilla",
    " Vapor",
    " Hype",
    " Monkey",
    " Dude",
    " Labz",
    ".io",
    "ly",
    "fy",
    " Planet",
    " Party",
    " Globe",
    " Team",
    " Trade",
    "Group",
    " Cash",
    " Interactive",
    " Records",
    " Gen",
    " Leads",
    " Centers",
    " Visions",
    " Talent",
    " Intel",
    " Crowd",
    " Partners",
    " Innovation",
    " Digi",
    " Collection",
    " GreenTree",
    " Sure",
    " Viper",
    " BlueLine",
    " Slide",
    " Viking",
    " Gridiron",
    " Brother",
    " Defiant",
    " Century",
    " Revelation",
    " Goldmine",
    " Angle",
    " Blogger",
    " District",
    " Analog",
    " BlackRock",
    " Arctic",
    " Catcher",
    " Helix",
    " Reform",
    " Universe",
    " Value",
  ];
  word = word[0].toUpperCase() + word.substring(1);
  return word + coolname[Math.floor(Math.random() * coolname.length)];
}

let btnGenerate = document.getElementById("isGenerate");
let btnReturn = document.getElementById("isReturn");
let btnTweet = document.getElementById("isTweet");
let heroImag = document.querySelector("#hero img");
let titlehidde = document.querySelector("#hero .hidde");

let nameBusiness;

btnGenerate.addEventListener("click", function (e) {
  e.preventDefault();
  var inputWord = document.getElementById("heroWord");

  if (inputWord.value.trim() != "") {
    inputWord.style.display = "none";
    var word = generateName(inputWord.value);
    nameBusiness = word;
    showGenerate.innerText = word;

    showGenerate.style.display = "block";
    btnReturn.style.display = "inline-flex";
    btnTweet.style.display = "inline-flex";
    heroImag.style.height = "125px";

    showGenerate.innerText = word;

    console.log("Generate name :" + word);
  } else {
    inputWord.style.border = "3px solid #D8335B";
    inputWord.classList.add("startShake");
  }
});

btnReturn.addEventListener("click", function () {
  showGenerate.innerText = "Generate";

  var inputWord = document.getElementById("heroWord");
  inputWord.style.border = "0px solid #D8335B";
  inputWord.value = "";
  inputWord.style.display = "block";

  showGenerate.style.display = "none";
  btnReturn.style.display = "none";
  btnTweet.style.display = "none";
});
