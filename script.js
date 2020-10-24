/* Neon Keys 1.3.0 */


let notePressedColor = "gray"
let noteDefaultColor = ""
let currentOctave = 4;

let notes = [  
              'C1', 'CS1', 'D1', 'DS1', 'E1', 'F1', 'FS1', 'G1', 'GS1', 'A1', 'AS1', 'B1',
              'C2', 'CS2', 'D2', 'DS2', 'E2', 'F2', 'FS2', 'G2', 'GS2', 'A2', 'AS2', 'B2', 
              'C3', 'CS3', 'D3', 'DS3', 'E3', 'F3', 'FS3', 'G3', 'GS3', 'A3', 'AS3', 'B3',
              'C4', 'CS4', 'D4', 'DS4', 'E4', 'F4', 'FS4', 'G4', 'GS4', 'A4', 'AS4', 'B4', 
              'C5', 'CS5', 'D5', 'DS5', 'E5', 'F5', 'FS5', 'G5', 'GS5', 'A5', 'AS5', 'B5',
              'C6', 'CS6', 'D6', 'DS6', 'E6', 'F6', 'FS6', 'G6', 'GS6', 'A6', 'AS6', 'B6', 
              'C7', 'CS7', 'D7', 'DS7', 'E7', 'F7', 'FS7', 'G7', 'GS7', 'A7', 'AS7', 'B7',
              'C8'
            ];

let notePressed = {
    C1o: false,
    CS1o: false,
    D1o: false,
    DS1o: false,
    E1o: false,
    F1o: false,
    FS1o: false,
    G1o: false,
    GS1o: false,
    A1o: false,
    AS1o: false,
    B1o: false,
    C2o: false,
    CS2o: false,
    D2o: false,
    DS2o: false,
    E2o: false,
    F2o: false 
}

window.addEventListener('load', (event) => {

    let keys = document.querySelectorAll('.key')
    
    for(let key of keys){
        key.onmousedown = function (event) {
            noteClickedOnScreen(event);
        }
        key.onmouseup = function (event) {

          
            switch(event.target.id) {
                case 'C2':
                    switchPress('C', currentOctave + 1, false);
                    break;
                case 'CS2':
                    switchPress('CS', currentOctave + 1, false);
                    break;
                case 'D2':
                    switchPress('D', currentOctave + 1, false);
                    break;
                case 'DS2':
                    switchPress('DS', currentOctave + 1, false);
                    break;
                case 'E2':
                    switchPress('E', currentOctave + 1, false);
                    break;
                case 'F2':
                    switchPress('F', currentOctave + 1, false);
                    break;
                default:
                    switchPress(event.target.id, currentOctave, false);
                    break;

            }

        }
           
        


    }

});



window.addEventListener('keypress', (event) => {
    console.log(event.code);
    interpretKeytoNote(event.code);
    changeOctave(event.code);
    
    
});



window.addEventListener('keyup', (event) => {

    console.log(event.code);
    toDefaultColor(event.code); 
    switchPressFalse(event.code);
    
});

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

    if(!notePressed[`${note + (currentOctave - 3)}o`]) {
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
    notePressed[`${note + (currentOctave - 3)}o`] = desiredState;
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
            switchPress('F', currentOctave + 1, false);
            break;
    }
}


function interpretKeytoNote(key) {

    switch(key) {
        case 'KeyA':
            playNote('C', currentOctave);
            changeRenderedKeyColor('C', currentOctave, notePressedColor);
            break;
        case 'KeyW':
            playNote('CS', currentOctave);
            changeRenderedKeyColor('CS', currentOctave, notePressedColor);
            break;
        case 'KeyS':
            playNote('D', currentOctave);
            changeRenderedKeyColor('D', currentOctave, notePressedColor);
            break;
        case 'KeyE':
            playNote('DS', currentOctave);
            changeRenderedKeyColor('DS', currentOctave, notePressedColor);
            break;
        case 'KeyD':
            playNote('E', currentOctave);
            changeRenderedKeyColor('E', currentOctave, notePressedColor);
            break;
        case 'KeyF':
            playNote('F', currentOctave);
            changeRenderedKeyColor('F', currentOctave, notePressedColor);
            break;  
        case 'KeyT':
            playNote('FS', currentOctave);
            changeRenderedKeyColor('FS', currentOctave, notePressedColor);
            break;
        case 'KeyG':
            playNote('G', currentOctave);
            changeRenderedKeyColor('G', currentOctave, notePressedColor);
            break;
        case 'KeyY':
            playNote('GS', currentOctave);
            changeRenderedKeyColor('GS', currentOctave, notePressedColor);
            break;
        case 'KeyH':
            playNote('A', currentOctave);
            changeRenderedKeyColor('A', currentOctave, notePressedColor);
            break;
        case 'KeyU':
            playNote('AS', currentOctave);
            changeRenderedKeyColor('AS', currentOctave, notePressedColor);
            break;
        case 'KeyJ':
            playNote('B', currentOctave);
            changeRenderedKeyColor('B', currentOctave, notePressedColor);
            break;
        case 'KeyK':
            playNote('C', currentOctave + 1);
            changeRenderedKeyColor('C', currentOctave + 1, notePressedColor);
            break;
        case 'KeyO':
            playNote('CS', currentOctave + 1);
            changeRenderedKeyColor('CS', currentOctave + 1, notePressedColor);
            break;
        case 'KeyL':
            playNote('D', currentOctave + 1);
            changeRenderedKeyColor('D', currentOctave + 1, notePressedColor);
            break;
        case 'KeyP':
            playNote('DS', currentOctave + 1);
            changeRenderedKeyColor('DS', currentOctave + 1, notePressedColor);
            break;
        case 'Semicolon':
            playNote('E', currentOctave + 1);
            changeRenderedKeyColor('E', currentOctave + 1, notePressedColor);
            break;
        case 'Quote':
            playNote('F', currentOctave + 1);
            changeRenderedKeyColor('F', currentOctave + 1, notePressedColor);
            break;
        
    }
}



function changeRenderedKeyColor(note, octave, color) {
    
    if (octave == currentOctave) {
        document.querySelector(`#${note}`).style.backgroundColor = color;
    } else { 
        document.querySelector(`#${note}2`).style.backgroundColor = color;
    }

}

function toDefaultColor(key) {

    switch(key) {
        case 'KeyA':
            changeRenderedKeyColor('C', currentOctave, noteDefaultColor);
            break;
        case 'KeyW':
            changeRenderedKeyColor('CS', currentOctave, noteDefaultColor);
            break;
        case 'KeyS':
            changeRenderedKeyColor('D', currentOctave, noteDefaultColor);
            break;
        case 'KeyE':
            changeRenderedKeyColor('DS', currentOctave, noteDefaultColor);
            break;
        case 'KeyD':
            changeRenderedKeyColor('E', currentOctave, noteDefaultColor);
            break;
        case 'KeyF':
            changeRenderedKeyColor('F', currentOctave, noteDefaultColor);
            break;  
        case 'KeyT':
            changeRenderedKeyColor('FS', currentOctave, noteDefaultColor);
            break;
        case 'KeyG':
            changeRenderedKeyColor('G', currentOctave, noteDefaultColor);
            break;
        case 'KeyY':
            changeRenderedKeyColor('GS', currentOctave, noteDefaultColor);
            break;
        case 'KeyH':
            changeRenderedKeyColor('A', currentOctave, noteDefaultColor);
            break;
        case 'KeyU':
            changeRenderedKeyColor('AS', currentOctave, noteDefaultColor);
            break;
        case 'KeyJ':
            changeRenderedKeyColor('B', currentOctave, noteDefaultColor);
            break;
        case 'KeyK':
            changeRenderedKeyColor('C', currentOctave + 1, noteDefaultColor);
            break;
        case 'KeyO':
            changeRenderedKeyColor('CS', currentOctave + 1, noteDefaultColor);
            break;
        case 'KeyL':
            changeRenderedKeyColor('D', currentOctave + 1, noteDefaultColor);
            break;
        case 'KeyP':
            changeRenderedKeyColor('DS', currentOctave + 1, noteDefaultColor);
            break;
        case 'Semicolon':
            changeRenderedKeyColor('E', currentOctave + 1, noteDefaultColor);
            break;
        case 'Quote':
            changeRenderedKeyColor('F', currentOctave + 1, noteDefaultColor);
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

function changeOctave(key){
    if(key == 'KeyZ' && currentOctave != 1) {
        currentOctave -= 1;
    } else if (key == 'KeyX' && currentOctave != 7){
        currentOctave += 1;
    }
}


