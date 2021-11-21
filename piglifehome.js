var typc = document.getElementById('typc');
var ctx = typc.getContext('2d');
var typ2 = document.getElementById('typ2');
var signin = document.getElementById('signin');
var signup = document.getElementById('signup');
var bu = document.getElementById('bu');

bu.style.marginLeft = window.innerWidth / 2 - 80 + 'px'
signup.style.marginLeft = window.innerWidth / 2 - 80 + 'px';
signup.onclick = function() {
    window.location.href = 'https://piglife.auth.us-west-2.amazoncognito.com/signup?client_id=29g31plofq2bbrd0m9pr5q0rn&response_type=token&scope=aws.cognito.signin.user.admin&redirect_uri=https://piglife.s3.us-west-2.amazonaws.com/piglife.html';
}
signin.onclick = function() {
    window.location.href = 'https://piglife.auth.us-west-2.amazoncognito.com/login?client_id=29g31plofq2bbrd0m9pr5q0rn&response_type=token&scope=aws.cognito.signin.user.admin&redirect_uri=https://piglife.s3.us-west-2.amazonaws.com/piglife.html';
}

ctx.beginPath();
ctx.fillStyle = '#f740c3';
ctx.rect(70, 100, 6, 20);
ctx.rect(85, 100, 6, 16);
ctx.rect(100, 100, 6, 20);
ctx.rect(115, 100, 6, 16);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#ff75bc';
ctx.moveTo(157, 15);
ctx.lineTo(149, 40);
ctx.lineTo(163, 40);

ctx.moveTo(148, 15);
ctx.lineTo(140, 40);
ctx.lineTo(155, 40);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = '#f740c3';
ctx.moveTo(10, 75);
ctx.lineTo(100, 75);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.ellipse(100, 75, 30, 50, 80, 0, 2 * Math.PI);
ctx.ellipse(150, 50, 23, 23, 80, 0, 2 * Math.PI);
ctx.fillStyle = '#ff75bc';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'rgb(0,0,0)';
ctx.ellipse(155, 55, 5, 10, 80, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.ellipse(144, 43, 1, 1, 80, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();    
ctx.ellipse(159, 42, 1, 1, 80, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.ellipse(152, 55, 1, 1, 80, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.ellipse(159.5, 54.5, 1, 1, 80, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();

typ2.textContent = '\xa0\xa0LVL 12';