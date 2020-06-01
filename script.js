// Linking the 3 doors (door1, door2 and door3) images to add some functionality when clicking on them
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');

// Linking the start game button
const startButton = document.getElementById('start');

// Number of closed doors in the game (dynamic number)
let numClosedDoors = 3;

// To capture the current state of playing
let currentlyPlaying = true;

// Varibials to control which door should be opened
let openDoor1, openDoor2, openDoor3;

// Links to images (doors)
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'; // link to the closed door
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'; // link to the 1st opened door
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'; // link to the 2nd opened door
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'; // link to the 3rd opened door

// To check if a given door is the bot door or not
const isBot = door => door.src === botDoorPath

// To check if a given door is clicked or not (to avoid cheating)
const isClicked = door => !(door.src === closedDoorPath)
    

// Control the closed doors
const playDoor = door => {
    numClosedDoors--;
    if(numClosedDoors === 0) {
        gameOver('win');
    } else 
        if (isBot(door)){
            gameOver();
        }
    
}

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
    // Test if the door was not opened yet
    if(currentlyPlaying && !isClicked(event.target)){
        event.target.src = openDoor1;
        event.target.alt = ' Door 1 is opened now!';
        playDoor(doorImage1);
    }
}

// onclick event handler for door 2
doorImage2.onclick = event  => {
    // Test if the door was not opened yet
    if(currentlyPlaying && !isClicked(event.target)){
        event.target.src = openDoor2;
        event.target.alt = ' Door 2 is opened now!';
        playDoor(doorImage2);
    }
}

// onclick event handler for door 3
doorImage3.onclick = event  => {
    // Test if the door was not opened yet
    if(currentlyPlaying && !isClicked(event.target)){
        event.target.src = openDoor3;
        event.target.alt = ' Door 3 is opened now!';
        playDoor(doorImage3);
    }
}

startButton.onclick = () => {
    if(!currentlyPlaying) startRound();
}

const startRound = () => {
        doorImage1.src = closedDoorPath;
        doorImage2.src = closedDoorPath;
        doorImage3.src = closedDoorPath;
        numClosedDoors = 3;
        startButton.innerHTML = 'Good luck!';
        currentlyPlaying = true;
        randomChoreDoorGenerator();
}

const gameOver = status => {
    
    if(status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = 'Game over! Play again?';
    }
    currentlyPlaying = false;
}

startRound();
