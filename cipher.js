// collection of audios (i organized them this time in a folder unlike final 1 :3 :3 :3 sorry)
var backgroundMusic = new Audio('audios/catcafe.mp3')
var buzzer = new Audio('audios/buzzer.mp3')
var angry = new Audio('audios/angry.mp3')
var meow = new Audio('audios/meowmeow.mp3')

backgroundMusic.loop = true
backgroundMusic.volume = 0.6
backgroundMusic.play()

alphabet = "abcdefghijklmnopqrstuvwxyz"

function cipherFunction() {
    let input = document.getElementById('input').value.toLowerCase()
    let direction = document.getElementById('shiftdirection').value
    let shift = parseInt(document.getElementById('shiftnumber').value)
    let crypt = document.getElementById('crypt').value

    // validation checks
    if (isNaN(shift)) {
        document.body.style.backgroundImage = "url('images/angry.png')"
        buzzer.play()
        angry.play()
        meow.play()
        
        setTimeout(() => {
            alert("NO!!! NO!!! INPUT A NUMBER NOW!!!!")
        }, 0.00)

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

    // if it's a negative number it'll just go the other way
    if (shift < 0) {
        shift *= -1
        if (direction === "right") {
            direction = "left"
        }
        else {
            direction = "right"
        }
    }

    // character shifting process

    let result = ""

    // Processes each character, if character isn't in the alphabet, ignore it just in case
    for (let i = 0; i < input.length; i++) {
        let character = input[i]

        if (!alphabet.includes(character)) {
            result += character
            continue
        }

    // find its position in the alphabet and calculate its new position depending on its direction
        let position = alphabet.indexOf(character)
        let newPosition

        // in case some IDIOT puts over 26 and makes it tweak out it wont
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

// added so i can annoyingly overlap VICTORY sounds over each other
function massExplosion() {
    let BOOMS = new Audio('audios/boom.mp3')
    let YAYS = new Audio('audios/yayay.mp3')
    let HORNS = new Audio('audios/horn.mp3')
    let PARASITE = new Audio('audios/parasite.mp3')

    HORNS.volume = 0.15

    BOOMS.play()
    YAYS.play()
    HORNS.play()
    PARASITE.play()
}