//import {Amplify} from '../node_modules/aws-amplify';
/*import {awsconfig} from './aws-exports';
Amplify.configure(awsconfig);*/

var shop_button = document.getElementById("shop-button");
var pong_button = document.getElementById("pong-button");
var piglife = document.getElementById("piglife");
var playername = document.getElementById("playername");
var team = document.getElementById("team");
var title = document.getElementById("title");
var coins = document.getElementById("coinsnum");
var piggy$ = document.getElementById("piggycashnum");
var playerarea = document.getElementById("playerarea");
var piggygoldflag = document.getElementById("piggygoldflag");
var goto = document.getElementById("goto");
var pigname = '';

/*var playernamevar = localStorage.getItem("username"); //get from DynamoDB
var userType = parseInt(localStorage.getItem("usertype")); //get from DynamoDB
var teamname = localStorage.getItem("teamname"); //get from DynamoDB
var titlename = localStorage.getItem("titlename"); //get from DynamoDB
var coinsnum = localStorage.getItem("coinsnum"); //get from DynamoDB
var piggy$num = localStorage.getItem("piggy$num"); //get from DynamoDB
var pigname = localStorage.getItem("pigname"); //get from DymamoDB*/

//if (userType == 0) {
  playername.style.color = "#ba03fc";
  team.style.color = "#ba03fc";
  title.style.color = "#00b7ff";
  piggy$.style.color = "#00b7ff";
  goto.style.color = "#ba03fc";
  goto.addEventListener("mouseenter", function () {
    goto.style.color = "#00b7ff";
  });
  goto.addEventListener("mouseleave", function () {
    goto.style.color = "#ba03fc";
  });
//}
/*else {
  playername.style.color = "#00b7ff";
  team.style.color = "#00b7ff";
  title.style.color = "#ba03fc";
  piggy$.style.color = "#ba03fc";
  playerarea.style.border = "3px solid #00b7ff";
  piggygoldflag.style.visibility = "visible";
  goto.style.color = "#00b7ff";
  goto.addEventListener("mouseenter", function () {
    goto.style.color = "#ba03fc";
  });
  goto.addEventListener("mouseleave", function () {
    goto.style.color = "#00b7ff";
  });
  if (userType == 1) {
    piggygoldflag.textContent - "PIGGY MEMBER";
  }
  if (userType == 2) {
    piggygoldflag.textContent = "PIGGY FOUNDER";
    coinsnum = "∞";
    piggy$num = "∞";
  }
  if (userType == 3) {
    piggygoldflag.textContent = "PIGGY DESIGNER";
  }
}*/

/*if (teamname !== "") {
  team.textContent = "[" + teamname + "] ";
}*/

/*if(!titlename == 'notitleset') {
  title.textContent = '"' + titlename + '"';
}*/

coins.textContent = numberWithCommas(/*coinsnum*/0);
piggy$.textContent = numberWithCommas(/*piggy$num*/0);

//if (pigname == "") {
  pigname = "<Unnamed>";
//}

goto.textContent += pigname;

//functions

shop_button.onclick = function () {
  window.location.href = "./shop.html";
};

piglife.onclick = function () {
  window.location.reload();
};

pong_button.onclick = function () {
  window.location.href =
    "https://powerpong.s3.us-west-2.amazonaws.com/pong.html";
};

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(- ? \d + )( \d {3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1, $2");
  return x;
}