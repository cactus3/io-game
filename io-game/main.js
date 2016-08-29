    //set up canvas
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

 var map = [];
 onkeydown = onkeyup = function(event){
    event = event || event;
    map[event.keyCode] = event.type == 'keydown';

   if(map[68]){ //a
     H_volocity = -5;
   }
   if(map[83]){ //s
   V_volocity = -5;
  }
  if(map[65]){ //d
    H_volocity = 5;
  } 
  if(map[87]){ //w
    V_volocity = 5;
  } 
};

var ofsetX = 0, ofsetY = 0;
var scroll_x = 0, scroll_y = 0;
var V_volocity = 0, H_volocity = 0;
var mousex = 0; mousey = 0;

      this.interval = setInterval(update, 30);
      update();

function update()
{
 ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width  = window.innerWidth - 34;
    canvas.height = window.innerHeight - 30;

 if(scroll_x > 32){
 scroll_x = 0;}

 if(scroll_y > 32)
 scroll_y = 0;

 if(scroll_x < -32){
 scroll_x = 0;}

 if(scroll_y < -32)
 scroll_y = 0;

 scroll_y += H_volocity;
 scroll_x += V_volocity;

 V_volocity *= 0.90;
 H_volocity *= 0.90;
    
 draw_grid();
}

function draw_grid()
{
 ctx.strokeStyle="#7e7e7e";
 ctx.lineWidth = 3;
 for(var i = 0; i <= 60; i ++)
 {
  ctx.beginPath()
  ctx.moveTo((32 * i) + scroll_y, 0);
  ctx.lineTo((32 * i) + scroll_y, window.innerHeight);
  ctx.stroke();
 }
 for(var i = 0; i <= 40; i ++)
 {
  ctx.beginPath();
  ctx.moveTo(0, (32 * i) + scroll_x);
  ctx.lineTo(window.innerWidth, (32 * i) + scroll_x);
  ctx.stroke();
 }
 ctx.closePath();
}

function draw_ball(x,y,angle)
{
 ctx.beginPath();
 ctx.arc(400 + x, 300 + y, 40, 0, 2 * Math.PI, false);
 ctx.fillStyle = '#00e673';
 ctx.fill();
 ctx.lineWidth = 5;
 ctx.strokeStyle = '#003300';
 ctx.stroke();
 ctx.closePath();
 ctx.beginPath();
 ctx.moveTo(390 + x,260 + y);
 ctx.lineTo(390 + x,230 + y);
 ctx.lineTo(410 + x,230 + y);
 ctx.lineTo(410 + x,260 + y);
 ctx.lineTo(390 + x,260 + y);
 ctx.fillStyle = '#d3d3d3';
 ctx.fill();
 ctx.stroke();
 ctx.closePath(); 
}

function findCoords(event)
{
    mousex = event.clientX;
    mousey = event.clientY;
}

function rotate(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
        return {
        nx: x,
        ny: y
    };
}
