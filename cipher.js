alphabet = "abcdefghijklmnopqrstuvwxyz"

function cipherFunction() {
    let input = document.getElementById('input').value.toLowerCase()
    let direction = document.getElementById('shiftdirection').value
    let shift = parseInt(document.getElementById('shiftnumber').value)
    let crypt = document.getElementById('crypt').value

    // validation checks
    if (isNaN(shift)) {
        alert("NO!!! NO!!! INPUT A NUMBER NOW!!!!")
        return
    }

    if (shift < 0) {
        alert("STOP!!! ENTER A POSITIVE NUMBER I CANT TAKE THIS!!!!!")
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

        if (direction === "right") {
            newPosition = (position + shift) % 26 // modulo operator of 26 so that the text wraps :3
        }

        else {
            newPosition = ((position - shift) + 26) % 26
        }

        result += alphabet[newPosition]
    }

    document.getElementById('output').textContent = result
}