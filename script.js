// Your script here.
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});
//your code here

const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');
// const msg = new SpeechSynthesisUtterance();
//   let voices = [];
//   const voicesDropdown = document.querySelector('[name="voice"]');
//   const options = document.querySelectorAll('[type="range"], [name="text"]');
//   const speakButton = document.querySelector('#speak');
//   const stopButton = document.querySelector('#stop');

  // speakButton.addEventListener("click", ()=>{
  //   msg.rate = options[0].value;
  //   msg.pitch = options[1].value;
  //   msg.text = options[2].value;
  //   window.speechSynthesis.speak(msg);
  // });
  // stopButton.addEventListener("click", ()=>{
  //   window.speechSynthesis.cancel();
  // });
app.post('/add', (req, res) => {
  const {a,b} = req.body;
  res.status(200).send(a+b);
  // res.sendFile(path.join(__dirname + '/main.html'));
});
module.exports = app;
