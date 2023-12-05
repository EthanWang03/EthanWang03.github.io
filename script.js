function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        const offset = 120;

        const sectionTop = section.offsetTop - offset;

        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const taskbar = document.querySelector('.taskbar');
    const titlePage = document.querySelector('.title-page');
    const titlePageHeight = titlePage.offsetHeight;

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        if (scrollPosition <= titlePageHeight) {
            taskbar.style.position = 'absolute';
            taskbar.style.top = titlePageHeight + 'px';
        } else {
            taskbar.style.position = 'fixed';
            taskbar.style.top = '0';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollIcon = document.getElementById('arrow-icon');

    scrollIcon.addEventListener('click', function() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});

function Star(x,y,r,color){
    this.x = x;
    this.y = y;
    this.r = r;
    this.rChange = 0.015;
    this.vx = Math.floor(Math.random()*4+1);
    this.vy = Math.floor(Math.random()*4+1);
    this.color = color;
}

Star.prototype = {
    constructor: Star,
    render: function(){
      context.beginPath();
      context.arc(this.x, this.y, this.r, 0, 2*Math.PI, false);
      context.shadowBlur = 8; 
      context.shadowColor = "white";
      context.fillStyle = this.color;
      context.fill();
    },
    update: function(){
      
       if (this.r > 2 || this.r < .8){
           this.rChange = - this.rChange;
       }
       this.r += this.rChange;
    }
}

var canvas = document.getElementById("canvas");
const titlePage = document.querySelector('.title-page');
var context = canvas.getContext("2d");

var C_WIDTH = canvas.width = titlePage.offsetWidth;
var C_HEIGHT = canvas.height = titlePage.offsetHeight;

function randomColor(){
    var arrColors = ["ffffff", "ffecd3" , "bfcfff"];
    return "#"+arrColors[Math.floor((Math.random()*3))];
}
        
var arrStars = [];

for(i = 0; i < 200; i++){
    var randX = Math.floor((Math.random()*C_WIDTH)+1);
    var randY = Math.floor((Math.random()*C_HEIGHT)+1);
    var randR = Math.random() * 1.7 + .5;
    
    var star = new Star(randX, randY, randR, randomColor());
    arrStars.push(star);
}
function update(){
  for(i = 0; i < arrStars.length; i ++){
    arrStars[i].update();
  }
}
function animate(){
  update();
    context.fillStyle = 'rgba(255, 255, 255, .1)';
    context.fillRect(0,0,C_WIDTH,C_HEIGHT);
    context.clearRect(0,0,C_WIDTH,C_HEIGHT);
    for(var i = 0; i < arrStars.length; i++){
      arrStars[i].render();
    }
    requestAnimationFrame(animate);
}

animate();