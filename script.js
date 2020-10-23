let notes = ['C4', 'CS4', 'D4', 'DS4', 'E4', 'F4', 'FS4', 'G4', 'GS4', 'A4', 'AS4', 'B4', 
'C5', 'CS5', 'D5', 'DS5', 'E5', 'F5'];

loadNotes(notes);

let notePressedColor = "gray"
let noteDefaultColor = ""
let currentOctave = 4;

function loadNotes(notes) {
    for(let note of notes) {
        createjs.Sound.registerSound(`audio-files/${note}.wav`, `${note}`);
    }

}

function playNote(note, currentOctave) {
    createjs.Sound.play(`${note + currentOctave}`);
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
    
});