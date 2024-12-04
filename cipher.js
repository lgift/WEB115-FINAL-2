// collection of audios (i organized them this time in a folder unlike final 1 :3 :3 :3 sorry)
var backgroundMusic = new Audio('audios/catcafe.mp3')
var buzzer = new Audio('audios/buzzer.mp3')
var angry = new Audio('audios/angry.mp3')
var meow = new Audio('audios/meowmeow.mp3')

backgroundMusic.loop = true
backgroundMusic.volume = 0.6
backgroundMusic.play()

const alphabet = "abcdefghijklmnopqrstuvwxyz"
document.body.style.backgroundColor = "lightpink";

function cipherFunction() {
    let input = document.getElementById('input').value.toLowerCase()
    let direction = document.getElementById('shiftdirection').value
    let shift = parseInt(document.getElementById('shiftnumber').value)
    let crypt = document.getElementById('crypt').value

    // Validaation checks, makes sure theres actually a number there :3 :3 :3 :3 :3 :3 :3 :3 :3 if not jumpscare shows up and KILLS YOU
    if (isNaN(shift)) {
        document.body.style.backgroundImage = "url('images/angry.png')"
        buzzer.play()
        angry.play()
        meow.play()
        
        setTimeout(() => {
            alert("NO!!! NO!!! INPUT A NUMBER NOW!!!!")
        }, 0.05)

        setTimeout(() => {
            document.body.style.backgroundImage = ""
        }, 0.02)
        return
    }

    // If the user chooses to decrypt, the direction flips so that it can reverse shift the message aka decoding it
    // otherwise, the direction continues as normal and the characters shift in the same unchanged direction
    if (crypt === "decrypt") {
        if (direction === "right") {
            direction = "left"
        }
        else {
            direction = "right"
        }
    }

    // If it's a negative number, then the shift will turn into a positive number and flip directions so that it goes the other way :3
    if (shift < 0) {
        shift *= -1
        if (direction === "right") {
            direction = "left"
        }
        else {
            direction = "right"
        }
    }

    // character shifting process EPIC MOMENT!!!!!!!!!!!!

    let result = ""

    // Processes each character, if character isn't in the alphabet, ignore it (so that way i can include epic characters :3)
    for (let i = 0; i < input.length; i++) {
        let character = input[i]

        if (!alphabet.includes(character)) {
            result += character
            continue
        }

    // find its position in the alphabet and calculate its new position depending on its direction
        let position = alphabet.indexOf(character)
        let newPosition

        // just in case some IDIOT puts over 26 and makes it tweak out it wont and it'll wrap around the alphabet
        // and use the remainder as the shift value
        if (shift > 26) {
            shift = shift % 26
        }

        if (direction === "right") {
            newPosition = (position + shift) % 26 // modulo operator of 26 so that the text wraps :3
        }

        else {
            newPosition = ((position - shift) + 26) % 26
        }

        result += alphabet[newPosition]
    }
    
    // display to screen and make loud noises
    massExplosion()
    output = document.getElementById('output')

    output.style.color = 'maroon'
    output.textContent = result
    output.style.fontSize= '48px'
    output.style.fontWeight= 'bold'
}

// function that creates a new copy of these audios every single time so that they annoyingly overlap each other :3
function massExplosion() {
    let BOOMS = new Audio('audios/boom.mp3')
    let YAYS = new Audio('audios/yayay.mp3')
    let HORNS = new Audio('audios/horn.mp3')
    let PARASITE = new Audio('audios/parasite.mp3')

    HORNS.volume = 0.135

    BOOMS.play()
    YAYS.play()
    HORNS.play()
    PARASITE.play()
}