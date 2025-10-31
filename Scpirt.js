var counter = 0;
document.getElementById("Start").onclick = function () {
  const a = document.getElementsByClassName("con");
  a[0].style.display = "block";
  document.getElementById("Start").style.display = "none";
  document.getElementById("Back").style.display = "none";
  document.getElementById("Question").textContent = `${Repo[0].q}`;
  document.getElementById("c1").textContent = `${Repo[0].answers[0]}`;
  document.getElementById("c2").textContent = `${Repo[0].answers[1]}`;
  document.getElementById("c3").textContent = `${Repo[0].answers[2]}`;
  document.getElementById("c4").textContent = `${Repo[0].answers[3]}`;
};
let score = 0;
const Repo = [
  {
    q: "What is DHCP ?",
    answers: ["IP protocol", "Mac Finder", "Data switch", "Address assigner"],
    correctAnswer: "Address assigner"
  },
  {
    q: "Function of ARP ?",
    answers: ["Find IP", "Route data", "Find MAC", "Switch port"],
    correctAnswer: "Find MAC"
  },
  {
    q: "Router connects what ?",
    answers: ["MACs", "Networks", "Switches", "Devices"],
    correctAnswer: "Networks"
  },
  {
    q: "Switch operates where ?",
    answers: ["Transport layer", "Network layer", "Data link", "Physical layer"],
    correctAnswer: "Data link"
  },
  {
    q: "MAN covers what ?",
    answers: ["Floor", "City", "country", "Room"],
    correctAnswer: "City"
  },
  {
    q: "IP address identifies ?",
    answers: ["Port", "MAC", "Device", "Location"],
    correctAnswer: "Device"
  },
  {
    q: "Switches uses what ?",
    answers: ["port number", "IP address", "Subnet", "MAC address"],
    correctAnswer: "MAC address"
  }
];

const correctAnswers = [
    "Address assigner",
    "Find MAC",
    "Networks",
    "Data link",
    "City",
    "Device",
    "MAC address",
];
let NEXT = document.getElementById("Next");
NEXT.addEventListener("click", NextQuestion);
function NextQuestion() {
    cleanReponses()
    document.getElementById("Back").style.display = "block";
    if (counter < 7) {
        if (counter === 5) {
            document.getElementById("finish").style.display = "block";
            document.getElementById("Next").style.display = "none";
            document.getElementById("Back").style.display = "none";
        }
        counter += 1;
        ShowQuestionTouser();
    }
}
let BACK = document.getElementById("Back");
BACK.addEventListener("click", BackQuestion);
function BackQuestion() {
    
    cleanReponses()
    if (counter == 1) {
        document.getElementById("Back").style.display = "none";
        }
    counter -= 1;
    ShowQuestionTouser();
}
function ShowQuestionTouser() {
  document.getElementById("Question").textContent = `${Repo[counter].q}`;
  document.getElementById("c1").textContent = `${Repo[counter].answers[0]}`;
  document.getElementById("c2").textContent = `${Repo[counter].answers[1]}`;
  document.getElementById("c3").textContent = `${Repo[counter].answers[2]}`;
  document.getElementById("c4").textContent = `${Repo[counter].answers[3]}`;
}

const checanswer = document.getElementsByTagName("button");
for (let i = 0; i < 4; i++) {
    checanswer[i].addEventListener("click", clickedbutton);
    function clickedbutton() {
        stockedanswers[counter] = checanswer[i].textContent;
        cleanReponses()
        checanswer[i].style.color = "Green";
        checanswer[i].style.fontSize = "13px";
        
        console.log(stockedanswers);
    }
}
function cleanReponses() {
    for (let j = 0; j < 4; j++) {
        checanswer[j].style.color = "black";
        checanswer[j].style.fontSize = "12px";
    }
}
document.getElementById("finish").onclick = function () {
    document.getElementById("finish").style.display = "none";
  document.getElementById("btns").style.display = "none";
  for (let i = 0; i < stockedanswers.length; i++) {
    if (stockedanswers[i] === correctAnswers[i]) {
        score += 20;
    }
}
document.getElementById("Question").style.color = "#002630ff";
document.getElementById("Question").textContent = `Your score is :  ${score}`;
};

const stockedanswers = [];



// const questions = [
//   "What is DHCP ?",    
//   "Function of ARP ?",
//   "Router connects what ?",
//   "Switch operates where ?",
//   "MAN covers what ?",
//   "IP address identifies ?",
//   "Switches uses what ?",
// ];

// const a1 = [
//   "IP protocol",    
//   "Find IP",
//   "MACs",
//   "Transport layer",
//   "Floor",
//   "Port",
//   "port number",
// ];
// const a2 = [
//   "Mac Finder",    
//   "Route data",
//   "Networks",
//   "Network layer",
//   "City",
//   "MAC",
//   "IP address",
// ];
// const a3 = [
//   "Data switch",    
//   "Find MAC",
//   "Switches",
//   "Data link",
//   "country",
//   "Device",
//   "Subnet",
// ];
// const a4 = [
//   "Address assigner",    
//   "Switch port",
//   "Devices",
//   "Physical layer",
//   "Room",
//   "Location",
//   "MAC address",
// ];
