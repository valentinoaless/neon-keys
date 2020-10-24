
let notePressedColor = "gray"
let noteDefaultColor = ""
let currentOctave = 4;

let notes = ['C4', 'CS4', 'D4', 'DS4', 'E4', 'F4', 'FS4', 'G4', 'GS4', 'A4', 'AS4', 'B4', 
'C5', 'CS5', 'D5', 'DS5', 'E5', 'F5'];

let notePressed = {
    C1: false,
    CS1: false,
    D1: false,
    DS1: false,
    E1: false,
    F1: false,
    FS1: false,
    G1: false,
    GS1: false,
    A1: false,
    AS1: false,
    B1: false,
    C2: false,
    CS2: false,
    D2: false,
    DS2: false,
    E2: false,
    F2: false 
}

loadNotes(notes);

function loadNotes(notes) {
    for(let note of notes) {
        createjs.Sound.registerSound(`audio-files/${note}.wav`, `${note}`);
    }

}

/*
when key is up, default val for any notePressed is false.
when key is pressed and note is played, notePressed will now be true
sound only plays when sound is NOT pressed so !notePressed

*/

function playNote(note, currentOctave) {

    if(!notePressed[`${note + (currentOctave - 3)}`]) {
        createjs.Sound.play(`${note + currentOctave}`);
        switchPress(note, currentOctave, true);
    }
    
}

/* 
create a function that takes note name and octave as parameter and turns that 
notePressed on or off depending on what it is passed.
*/

function switchPress(note, currentOctave, desiredState){
    console.log(`key switched to ${desiredState}`);
    notePressed[`${note + (currentOctave - 3)}`] = desiredState;
}

function switchPressFalse(key) {
    switch(key) {
        case 'KeyA':
            switchPress('C', currentOctave, false);
            break;
        case 'KeyW':
            switchPress('CS', currentOctave, false);
            break;
        case 'KeyS':
            switchPress('D', currentOctave, false);
            break;
        case 'KeyE':
            switchPress('DS', currentOctave, false);
            break;
        case 'KeyD':
            switchPress('E', currentOctave, false);
            break;
        case 'KeyF':
            switchPress('F', currentOctave, false);
            break;  
        case 'KeyT':
            switchPress('FS', currentOctave, false);
            break;
        case 'KeyG':
            switchPress('G', currentOctave, false);
            break;
        case 'KeyY':
            switchPress('GS', currentOctave, false);
            break;
        case 'KeyH':
            switchPress('A', currentOctave, false);
            break;
        case 'KeyU':
            switchPress('AS', currentOctave, false);
            break;
        case 'KeyJ':
            switchPress('B', currentOctave, false);
            break;
        case 'KeyK':
            switchPress('C', currentOctave + 1, false);
            break;
        case 'KeyO':
            switchPress('CS', currentOctave + 1, false);
            break;
        case 'KeyL':
            switchPress('D', currentOctave + 1, false);
            break;
        case 'KeyP':
            switchPress('DS', currentOctave + 1, false);
            break;
        case 'Semicolon':
            switchPress('E', currentOctave + 1, false);
            break;
        case 'Quote':
            switchPress('CS', currentOctave + 1, false);
            break;
    }
}


function interpretKeytoNote(key) {

    switch(key) {
        case 'KeyA':
            playNote('C', currentOctave);
            keyTappedNoteColor('C', currentOctave, notePressedColor);
            break;
        case 'KeyW':
            playNote('CS', currentOctave);
            keyTappedNoteColor('CS', currentOctave, notePressedColor);
            break;
        case 'KeyS':
            playNote('D', currentOctave);
            keyTappedNoteColor('D', currentOctave, notePressedColor);
            break;
        case 'KeyE':
            playNote('DS', currentOctave);
            keyTappedNoteColor('DS', currentOctave, notePressedColor);
            break;
        case 'KeyD':
            playNote('E', currentOctave);
            keyTappedNoteColor('E', currentOctave, notePressedColor);
            break;
        case 'KeyF':
            playNote('F', currentOctave);
            keyTappedNoteColor('F', currentOctave, notePressedColor);
            break;  
        case 'KeyT':
            playNote('FS', currentOctave);
            keyTappedNoteColor('FS', currentOctave, notePressedColor);
            break;
        case 'KeyG':
            playNote('G', currentOctave);
            keyTappedNoteColor('G', currentOctave, notePressedColor);
            break;
        case 'KeyY':
            playNote('GS', currentOctave);
            keyTappedNoteColor('GS', currentOctave, notePressedColor);
            break;
        case 'KeyH':
            playNote('A', currentOctave);
            keyTappedNoteColor('A', currentOctave, notePressedColor);
            break;
        case 'KeyU':
            playNote('AS', currentOctave);
            keyTappedNoteColor('AS', currentOctave, notePressedColor);
            break;
        case 'KeyJ':
            playNote('B', currentOctave);
            keyTappedNoteColor('B', currentOctave, notePressedColor);
            break;
        case 'KeyK':
            playNote('C', currentOctave + 1);
            keyTappedNoteColor('C', currentOctave + 1, notePressedColor);
            break;
        case 'KeyO':
            playNote('CS', currentOctave + 1);
            keyTappedNoteColor('CS', currentOctave + 1, notePressedColor);
            break;
        case 'KeyL':
            playNote('D', currentOctave + 1);
            keyTappedNoteColor('D', currentOctave + 1, notePressedColor);
            break;
        case 'KeyP':
            playNote('DS', currentOctave + 1);
            keyTappedNoteColor('DS', currentOctave + 1, notePressedColor);
            break;
        case 'Semicolon':
            playNote('E', currentOctave + 1);
            keyTappedNoteColor('E', currentOctave + 1, notePressedColor);
            break;
        case 'Quote':
            playNote('F', currentOctave + 1);
            keyTappedNoteColor('F', currentOctave + 1, notePressedColor);
            break;
        
    }
}



function keyTappedNoteColor(note, octave, color) {
    
    if (octave == currentOctave) {
        document.querySelector(`#${note}`).style.backgroundColor = color;
    } else { 
        document.querySelector(`#${note}2`).style.backgroundColor = color;
    }

}

function toDefaultColor(key) {

    switch(key) {
        case 'KeyA':
            keyTappedNoteColor('C', currentOctave, noteDefaultColor);
            break;
        case 'KeyW':
            keyTappedNoteColor('CS', currentOctave, noteDefaultColor);
            break;
        case 'KeyS':
            keyTappedNoteColor('D', currentOctave, noteDefaultColor);
            break;
        case 'KeyE':
            keyTappedNoteColor('DS', currentOctave, noteDefaultColor);
            break;
        case 'KeyD':
            keyTappedNoteColor('E', currentOctave, noteDefaultColor);
            break;
        case 'KeyF':
            keyTappedNoteColor('F', currentOctave, noteDefaultColor);
            break;  
        case 'KeyT':
            keyTappedNoteColor('FS', currentOctave, noteDefaultColor);
            break;
        case 'KeyG':
            keyTappedNoteColor('G', currentOctave, noteDefaultColor);
            break;
        case 'KeyY':
            keyTappedNoteColor('GS', currentOctave, noteDefaultColor);
            break;
        case 'KeyH':
            keyTappedNoteColor('A', currentOctave, noteDefaultColor);
            break;
        case 'KeyU':
            keyTappedNoteColor('AS', currentOctave, noteDefaultColor);
            break;
        case 'KeyJ':
            keyTappedNoteColor('B', currentOctave, noteDefaultColor);
            break;
        case 'KeyK':
            keyTappedNoteColor('C', currentOctave + 1, noteDefaultColor);
            break;
        case 'KeyO':
            keyTappedNoteColor('CS', currentOctave + 1, noteDefaultColor);
            break;
        case 'KeyL':
            keyTappedNoteColor('D', currentOctave + 1, noteDefaultColor);
            break;
        case 'KeyP':
            keyTappedNoteColor('DS', currentOctave + 1, noteDefaultColor);
            break;
        case 'Semicolon':
            keyTappedNoteColor('E', currentOctave + 1, noteDefaultColor);
            break;
        case 'Quote':
            keyTappedNoteColor('F', currentOctave + 1, noteDefaultColor);
            break;
    }
}

function noteClickedOnScreen(event) {
    let note = event.target.id;
    switch(note) {
        case 'C':
            playNote('C', currentOctave);
            break;
        case 'CS':
            playNote('CS', currentOctave);
            break;
        case 'D':
            playNote('D', currentOctave);
            break;
        case 'DS':
            playNote('DS', currentOctave);
            break;
        case 'E':
            playNote('E', currentOctave);
            break;
        case 'F':
            playNote('F', currentOctave);
            break;  
        case 'FS':
            playNote('FS', currentOctave);
            break;
        case 'G':
            playNote('G', currentOctave);
            break;
        case 'GS':
            playNote('GS', currentOctave);
            break;
        case 'A':
            playNote('A', currentOctave);
            break;
        case 'AS':
            playNote('AS', currentOctave);
            break;
        case 'B':
            playNote('B', currentOctave);
            break;
        case 'C2':
            playNote('C', currentOctave + 1);
            break;
        case 'CS2':
            playNote('CS', currentOctave + 1);
            break;
        case 'D2':
            playNote('D', currentOctave + 1);
            break;
        case 'DS2':
            playNote('DS', currentOctave + 1);
            break;
        case 'E2':
            playNote('E', currentOctave + 1);
            break;
        case 'F2':
            playNote('F', currentOctave + 1);
            break;
    }


}


window.addEventListener('load', (event) => {

    let keys = document.querySelectorAll('.key')
    
    for(let key of keys){
        key.onmousedown = function (event) {
            noteClickedOnScreen(event);
        }
    }

});


window.addEventListener('keypress', (event) => {
    console.log(event.code);
    interpretKeytoNote(event.code);
    
});



window.addEventListener('keyup', (event) => {

    console.log(event.code);
    toDefaultColor(event.code); 
    switchPressFalse(event.code);
    
});