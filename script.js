const circle = document.getElementById('circle')
const container = document.getElementById('container');
const ballSize = 20;
let x = 250;
let y = 250;
let vx = 1;
let vy = 2;
let rotation = 0;
const radius = ball.offsetWidth / 2; // Radius of the ball

function rotateCircle() {
    rotation += 1;
    circle.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(rotateCircle);
}
rotateCircle()

function update(){
        //Update position
        x += vx;
        y += vy;

        //Bounce off the walls
        if (x + radius >= container.offsetWidth || x - radius <= 0) {
            vx *= -1; // Reverse the velocity along x-axis
        }
        if (y + radius >= container.offsetHeight || y - radius <= 0) {
            vy *= -1; // Reverse the velocity along y-axis
        }
//Update the position of the ball
ball.style.left = x + 'px';
ball.style.top = y + 'px';

//Request animation frame to create smooth animation
    requestAnimationFrame(update);
}
update();

//click ball to make it disappear
document.addEventListener('DOMContentLoaded', function() {
    var ball = document.getElementById('ball');
    
    // Add click event listener to the element
    ball.addEventListener('click', function() {
        // Hide the element by setting its display property to 'none'
        ball.style.display = 'none';
    });
});


//toggle ball
document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('container');
    var isVisible = true; // Variable to track visibility state

    // Add click event listener to the element
    container.addEventListener('click', function() {
        if (isVisible) {
            // If visible, hide the element
            ball.style.display = 'none';
            isVisible = false; // Update visibility state
        } else {
            // If hidden, show the element
            ball.style.display = 'block'; // Or any other appropriate display property
            isVisible = true; // Update visibility state
        }
    });
});