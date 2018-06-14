var canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 400;
var height = 60;
var width = 7;
var radius = 7;
var context = canvas.getContext('2d');




window.onload = function () {
document.body.appendChild(canvas);
window.requestAnimationFrame(step);
};

 function step() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  player.render();
  computer.render();
  ball.render();
  ball.update();
  
  window.requestAnimationFrame(step);
};


//A function designed to create new objects, is called an object constructor.
function Paddle(x, y) {
  this.x = x;
  this.y = y;
  this.xvel = 0;
  this.yvel = 0;
}

Paddle.prototype.render = function() {
  context.fillStyle = "rgb(255,0,87)";
  context.fillRect(this.x, this.y, width, height);
};

function Player() {
   this.paddle = new Paddle(20, (canvas.height - height)/2);
}

function Computer() {
  this.paddle = new Paddle(canvas.width - (20 + width), (canvas.height - height)/2);
}

Player.prototype.render = function() {
  this.paddle.render();
};

Computer.prototype.render = function() {
  this.paddle.render();
};

var player = new Player();
var computer = new Computer();





function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.xvel = 4;
  this.yvel = 0;
  
}

Ball.prototype.render = function() {
  context.beginPath();
  context.arc(this.x, this.y, radius, 2 * Math.PI, false);
  context.fillStyle = "rgb(255,255,255)";
  context.fill();
};

var ball = new Ball(canvas.width/2, canvas.height/2);


////////////UPDATE//////////////////////


Ball.prototype.update = function() {
  this.x += this.xvel;
  this.y += this.yvel;
};



