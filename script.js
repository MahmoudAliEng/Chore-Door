// Linking the 3 doors (door1, door2 and door3) images to add some functionality when clicking on them
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'; // link to the 1st opened door
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'; // link to the 2nd opened door
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'; // link to the 3rd opened door

// onclick event handler for door 1
doorImage1.onclick = event => {
    event.target.src = botDoorPath;
    event.target.alt = ' Door 1 is opened now!';
}

// onclick event handler for door 1
doorImage2.onclick = event  => {
    event.target.src = beachDoorPath;
    event.target.alt = ' Door 2 is opened now!';
}

// onclick event handler for door 1
doorImage3.onclick = event  => {
    event.target.src = spaceDoorPath;
    event.target.alt = ' Door 3 is opened now!';
}
