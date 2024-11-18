const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));


app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1: message1, greet2: message2 });
});


app.get("/hello2", (req, res) => {
  res.render('show', { greet1: "Hello world", greet2: "Bon jour" });
});s


app.get("/icon", (req, res) => {
  res.render('icon', { filename: "./public/Apple_logo_black.svg", alt: "Apple Logo" });
});


app.get("/luck", (req, res) => {
  const num = Math.floor(Math.random() * 6 + 1);
  let luck = '';
  if (num === 1) luck = '大吉';
  else if (num === 2) luck = '中吉';
  else luck = '吉';
  console.log('あなたの運勢は' + luck + 'です');
  res.render('luck', { number: num, luck: luck });
});


app.get("/janken", (req, res) => {
  const hand = req.query.hand; 
  let win = Number(req.query.win); 
  let total = Number(req.query.total); 
  const cpuNum = Math.floor(Math.random() * 3 + 1); 
  const cpuHand = cpuNum === 1 ? 'グー' : cpuNum === 2 ? 'チョキ' : 'パー';

  let judgement = '';
  if (hand === cpuHand) {
    judgement = '引き分け';
  } else if (
    (hand === 'グー' && cpuHand === 'チョキ') ||
    (hand === 'チョキ' && cpuHand === 'パー') ||
    (hand === 'パー' && cpuHand === 'グー')
  ) {
    judgement = '勝ち';
    win += 1;
  } else {
    judgement = '負け';
  }
  total += 1;

  res.render('janken', {
    your: hand,
    cpu: cpuHand,
    judgement,
    win,
    total
  });
});

app.get("/acchimuitehoi", (req, res) => {
  const directions = ["上", "下", "左", "右"];
  const userDirection = req.query.direction; 
  const cpuDirection = directions[Math.floor(Math.random() * 4)]; 

  const result = userDirection === cpuDirection ? "勝ち" : "負け";

  res.render('acchimuitehoi', {
    userDirection,
    cpuDirection,
    result
  });
});


app.get("/rightorleft", (req, res) => {
  const choices = ["右", "左"];
  const userChoice = req.query.choice; 
  const cpuChoice = choices[Math.floor(Math.random() * 2)];

  const result = userChoice === cpuChoice ? "勝ち" : "負け";

  res.render('rightorleft', {
    userChoice,
    cpuChoice,
    result
  });
});


app.listen(8080, () => console.log("Example app listening on port 8080!"));
