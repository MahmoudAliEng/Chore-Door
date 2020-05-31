// Linking the 3 doors (door1, door2 and door3) images to add some functionality when clicking on them
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');

// Number of doors in the game
const numClosedDoors = 3;

// Varibials to control which door should be opened
let openDoor1, openDoor2, openDoor3;

// Links to images (doors)
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'; // link to the 1st opened door
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'; // link to the 2nd opened door
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'; // link to the 3rd opened door

// Randomly choose a door to hide the bot image behind it
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0 ){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        if (choreDoor === 1) {
            openDoor2 = botDoorPath;
            openDoor1 = beachDoorPath;
            openDoor3 = spaceDoorPath;
        } else {
            openDoor3 = botDoorPath;
            openDoor1 = beachDoorPath;
            openDoor2 = spaceDoorPath;
        }
    }
}

// onclick event handler for door 1
doorImage1.onclick = event => {
    event.target.src = openDoor1;
    event.target.alt = ' Door 1 is opened now!';
}

// onclick event handler for door 1
doorImage2.onclick = event  => {
    event.target.src = openDoor2;
    event.target.alt = ' Door 2 is opened now!';
}

// onclick event handler for door 1
doorImage3.onclick = event  => {
    event.target.src = openDoor3;
    event.target.alt = ' Door 3 is opened now!';
}

randomChoreDoorGenerator();
