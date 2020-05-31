// Linking the first door (door1) image to add some functionality when clicking it
let doorImage1 = document.getElementById('door1');
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'; // link to the opened door
doorImage1.onclick = event => {
    event.target.src = botDoorPath;
}
