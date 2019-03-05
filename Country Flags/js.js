let flags = ["Afghanistan.png", "Albania.png", "Algeria.png", "Argentina.png", "Armenia.png", "Australia.png", "Austria.png", "Azerbaijan.png",
  "Bangladesh.png", "Belarus.png", "Belgium.png", "Bolivia.png", "Bosnia-and-Herzegovina.png", "Brazil.png", "Bulgaria.png",
  "Cameroon.png", "Canada.png", "Chile.png", "China.png", "Colombia.png", "Costa-Rica.png", "Croatia.png", "Cuba.png", "Cyprus.png", "Czech-Republic.png",
  "Denmark.png",
  "Egypt.png",
  "Finland.png", "France.png",
  "Georgia.png", "Germany.png", "Greece.png",
  "Hungary.png",
  "Iceland.png", "India.png", "Indonesia.png", "Iran.png", "Iraq.png", "Ireland.png", "Israel.png", "Italy.png",
  "Japan.png",
  "Kazakhstan.png", "Korea-North.png", "Korea-South.png",
  "Macedonia.png", "Mexico.png", "Monaco.png", "Morocco.png",
  "Netherlands.png", "New-Zealand.png", "Nigeria.png", "Norway.png",
  "Poland.png", "Portugal.png",
  "Romania.png", "Russia.png",
  "Saudi-Arabia.png", "Serbia.png", "Singapore.png", "Slovakia.png", "Slovenia.png", "South-Africa.png", "Spain.png", "Sweden.png", "Switzerland.png", "Syria.png",
  "Taiwan.png", "Thailand.png", "Tunisia.png", "Turkey.png",
  "Ukraine.png", "UAE.png", "United-Kingdom.png", "United-States.png", "Uruguay.png",
  "Venezuela.png", "Vietnam.png"
];


let names = ["Afghanistan", "Albania", "Algeria", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bangladesh", "Belarus", "Belgium", "Bolivia", "Bosnia and Herzegovina", "Brazil", "Bulgaria",
  "Cameroon", "Canada", "Chile", "China", "Colombia", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark",
  "Egypt",
  "Finland", "France",
  "Georgia", "Germany", "Greece",
  "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Japan",
  "Kazakhstan", "Korea - North", "Korea - South",
  "Macedonia", "Mexico", "Monaco", "Morocco",
  "Netherlands", "New Zealand", "Nigeria", "Norway",
  "Poland", "Portugal",
  "Romania", "Russia",
  "Saudi Arabia", "Serbia", "Singapore", "Slovakia", "Slovenia", "South Africa", "Spain", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Thailand", "Tunisia", "Turkey",
  "Ukraine", "UAE", "United Kingdom", "United States", "Uruguay",
  "Venezuela", "Vietnam"
];

let dogru;
let puan=0;

function play() {
  let a = Math.floor(Math.random() * 78);
  let e = 0;
  let ans = [];
  while (ans.length < 3 + e) {
    let r = Math.floor(Math.random() * 78);
    if (ans.indexOf(r) === -1) ans.push(r);
  }
  ans.push(a);

  document.getElementById("question").src = "flags/" + flags[a];

  dogru = names[a];
  var arr = []
  while (arr.length < 4) {
    var r = Math.floor(Math.random() * 4);
    if (arr.indexOf(r) === -1 && r != a) arr.push(r);
  }

  document.getElementById("answer1").innerHTML = names[ans[arr[0]]];
  document.getElementById("answer2").innerHTML = names[ans[arr[1]]];
  document.getElementById("answer3").innerHTML = names[ans[arr[2]]];
  document.getElementById("answer4").innerHTML = names[ans[arr[3]]];
}

function choose(ans) {
  let c = ans.innerHTML;
  if (c == dogru) {
    ans.style.backgroundColor = '#37ff00';
    setTimeout(function(){
    ans.style.backgroundColor = ' #e1e8f0';
    document.getElementById('soru').innerHTML = "Correct!";
    document.body.style.backgroundColor = "#37ff00";
    dogru = "";
    puan+=20;
     score();
      play();
    setTimeout(function(){
    document.getElementById('soru').innerHTML = "Which country does this flag  belong to?";
      document.body.style.backgroundColor = "#6ed3cf";
  }, 500);
  }, 500);
  } else {
    document.getElementById('soru').innerHTML = "Wrong!";
    document.body.style.backgroundColor = "#f71313";
    ans.style.backgroundColor = '#f71313';
    setTimeout(function(){
          document.body.style.backgroundColor = "#6ed3cf";
      document.getElementById('soru').innerHTML = "Which country does this flag  belong to?";
      ans.style.backgroundColor = ' #e1e8f0';
      if (puan<=0) {
        puan=0;
        score();
      }else {
        puan-=20;
        score();
      }

  },500);
  }
}

function score(){
  document.getElementById("score").innerHTML = "Puan : " + puan.toString();
}

function attention(){
  document.getElementById("score").innerHTML = "Author info";
  document.getElementById("score").style.borderRadius = "40px";
}

function cycle(){
  score();
}

function runAfterLoad() {
  play();
}
