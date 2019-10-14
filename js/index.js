
let rndNum = randomNumber(0, 10)
// console.log(rndNum)

// Create a random number
function randomNumber(min, max) {
    let result = Math.floor(Math.random() * (max - min) + min)
    console.log(`Random number is ${result}`)
    return result
}

// Run the guessing game
function guessing_game() {

    let numberToGuess = rndNum;
    let count = 1;
    let guess = prompt('Guess a number between 1-10')

    console.log(guess)

    while ((guess !== numberToGuess) && (count < 3)) {
        guess = prompt('Wrong. Try again')
        count++
        console.log(`Counter is ${count}`)
    }

    if (guess === numberToGuess) {
        alert(`Success the number was ${numberToGuess} in the attemps ${count}`)
    } else {
        alert(`Sorry you failed in the ${count} the number was ${numberToGuess}`)
    }


}

guessing_game()





/*
this is a "workaround" to publish the exercise on github! (our own github)

GITHUB CLASSROOM ISSUE!

- delete .git from project folder
rm -rf .git

- init git again
git init

- create a repo on your github
git add remote origin <repo_name>

*/