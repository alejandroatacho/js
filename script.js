const readline = require('readline');

function game() {
    const rock = 0
    const paper = 1
    const scissor = 2
    let game_counter_winner = 0
    let game_counter_computer = 0
    let generator = Math.floor(Math.random() * 3) // generate numbers between 0 and 2 inclusive
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Rock, Paper or Scissor?", function(user_input) {
        rl.close();

        if (user_input === null) {
            return; // Exit the function if the user cancels
        }

        while (game_counter_winner < 3 && game_counter_computer < 3) { // check if either game_counter_winner or game_counter_computer is less than 3
            if (generator === rock) {
                console.log("Rock");
            } else if (generator === paper) {
                console.log("Paper");
            } else if (generator === scissor) {
                console.log("Scissor");
            }
            if (user_input === "Rock" && generator === rock) {
                console.log("Draw");
            }
            else if (user_input === "Rock" && generator === paper) {
                console.log("You lose");
                game_counter_computer++
            }
            else if (user_input === "Rock" && generator === scissor) {
                console.log("You win");
                game_counter_winner++
            }
            else if (user_input === "Paper" && generator === rock) {
                console.log("You win");
                game_counter_winner++
            }
            else if (user_input === "Paper" && generator === paper) {
                console.log("Draw");
            }
            else if (user_input === "Paper" && generator === scissor) {
                console.log("You lose");
                game_counter_computer++
            }
            else if (user_input === "Scissor" && generator === rock) {
                console.log("You lose");
                game_counter_computer++
            }
            else if (user_input === "Scissor" && generator === paper) {
                console.log("You win");
                game_counter_winner++
            }
            else if (user_input === "Scissor" && generator === scissor) {
                console.log("Draw");
            }
            else {
                console.log("Invalid input");
            }
            console.log(game_counter_winner, game_counter_computer)
            if (game_counter_winner === 3 || game_counter_computer === 3) { // exit the loop when either game_counter_winner or game_counter_computer reaches 3
                break;
            }
            generator = Math.floor(Math.random()*3); // generate a new random number for the next round
        }
    });
}

game();
