
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('quiz-form');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
 
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('hresultbox');
    const suggestDiv = document.getElementById('suggestbox');
    const scoreDiv = document.getElementById('scorebox');
    
    const answers = {
      q1: form.q1.value,
      q2: form.q2.value,
      q3: form.q3.value,
      q4: form.q4.value,
      q5: form.q5.value
      // Include similar lines for other questions (q2, q3, ...)
    }

    let score = 0;
    let result = ["Facebook","Instagram","Google My Business Profile","Website and Blog","Newsletter","Keep Optimizing content and post content regularly."];
    let imparr = [];
    for (const question in answers) {
      if (answers[question] === 'yes') {
        score += 20;
      }
      if(answers[question] ==='no'){
      let ans = question;
        imparr.push(ans);
    }
  }
    
    let resultText = ``;
    
    switch(score){

      case 20: resultText+="Your business health is poor! talk with smartup to improve health";
      break;
      case 40: resultText+="Your business health is good";
      break;
      case 60: resultText+="Your business health is better";
      break;
      case 80: resultText+="Your business health is best";
      break;
      case 100: resultText+="Your business health is Excellent, But still you need optimization in content.";
      break;

      default: resultText+="Oops! Your business health is very poor";
  
    }
   
    console.log(imparr);
    let notin = [];
    for(let n=0;n<imparr.length;n++){
      let imparrres = imparr[n];
       switch(imparrres){
          
          case 'q1': notin.push(0);
          break;
          case 'q2': notin.push(1);
          break;
          case 'q3': notin.push(2);
          break;
          case 'q4': notin.push(3);
          break;
          case 'q5': notin.push(4);
          break;
          default:notin.push(5);
       }
    }
    
    resultDiv.textContent = resultText;
    scoreDiv.textContent = score+'%';
    for(let k=0;k<notin.length;k++){
      let needs="";
      let notinIndex = notin[k];
      let rlt=result[notinIndex];
      needs=rlt;
      suggestDiv.textContent +='Setup your '+needs+' | ';

    }
    const quizcarddiv = document.getElementById("quizcard");
    quizcarddiv.style.display="none";
    showform();
    readValue();
  });
});

  function showReport(){
   
    const reportCardBox = document.getElementById('reportcardbox');

    reportCardBox.style.display = "block";   

  }
  
  //p5js

  let confetti = [];
  let canvas;
  let backgroundImage;
function preload() {
  // Load the image
  backgroundImage = loadImage('webbackorg.webp');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvasParent');
  background(backgroundImage);
}

function draw() {
  clear();
  for (let i = confetti.length - 1; i >= 0; i--) {
    confetti[i].update();
    confetti[i].display();
    if (confetti[i].isFinished()) {
      confetti.splice(i, 1);
    }
  }
  
}

function mouseMoved() {
  let numConfetti = 1;
  for (let i = 0; i < numConfetti; i++) {
    let size = random(10, 40);
    let color = randomColor();
    let posX = mouseX + random(-20, 20);
    let posY = mouseY + random(-20, 20);
    confetti.push(new Confetti(posX, posY, size, color));
  }
}

function randomColor() {
  return color(random(255), random(255), random(255));
}

class Confetti {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.vx = random(-2, 2);
    this.vy = random(-5, -2);
    this.alpha = 255;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.2; // Gravity effect
    this.alpha -= 3;
  }

  display() {
    noStroke();
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha);
    ellipse(this.x, this.y, this.size);
  }

  isFinished() {
    return this.alpha <= 0;
  }
}

function showquiz(){
  
  const fnm = document.getElementById("firstName");
  const lnm = document.getElementById("lastName");
  const cnm = document.getElementById("cityName");
  const bnm = document.getElementById("businessName");
  const mb = document.getElementById("mobile");
  const eml = document.getElementById("email");
  const regform = document.getElementById("regform");
  const quizshow = document.getElementById("quizcard");

  if(fnm.value!="" && lnm.value!="" && cnm.value!="" && bnm.value!="" && mb.value!="" && eml.value!=""){
  saveValue();
  regform.style.display='none';
  showReport();
 
  }
  else{
    alert("please fill the all details properly");
    
  }

}

function saveValue() {
  const valueToSave= 1;
  localStorage.setItem('savedValue', valueToSave);
  console.log('Value saved to localStorage.');
}

function readValue() {
  const savedValue = localStorage.getItem('savedValue');
  const regformi = document.getElementById("regform");
  const quizshowi = document.getElementById("quizcard");
  if (savedValue == 1) {
    regformi.style.display='none';
    const reportCardBox = document.getElementById('reportcardbox');
    reportCardBox.style.display = "block"; 
    alert("You already taken this quiz");
  
  } else {
    console.log('No value found in localStorage.');
    regformi.style.display='block';
     reportCardBox.style.display = "none";
  }
}
playwel();
function playwel(){
  
   playButton = document.getElementById("firstName");
    const audioUrl = 'ElevenLabs_2023-08-29T11_14_34_Bella_pre_s50_sb75_b_m2.mp3'; // Replace with your raw content URL

    playButton.addEventListener('click', () => {
      const audioPlayer = new Audio(audioUrl);
      audioPlayer.play();
    });
  
}

function showform(){

  const thisregform = document.getElementById("regform");
  thisregform.style.display='block';
  
    
}
