import chalk from "chalk";
import { select } from "@inquirer/prompts";
import gameState from "./state.js"; // FIXED: No curly braces

export async function startTrivia(gameState) {
  console.log(chalk.bold.yellow("\nYOU HAVE 30 SECONDS TO FINISH THE QUIZ! STARTING NOW...\n"));

  // THE TIMER: This will force-close the game after 30 seconds
  const gameTimer = setTimeout(() => {
    console.log(chalk.bgRed.white("\n\n TIME IS UP! "));
    console.log(chalk.red("You didn't finish in time."));
    console.log(chalk.blue(`Final Score: ${gameState.stats.wins} wins`));
    process.exit(0); // Ends the program
  }, 30000); 

  for (const item of gameState.questions) {
    const userAnswer = await select({
      message: item.q,
      choices: item.choices.map(c => ({ name: c, value: c }))
    });

    if (userAnswer === item.a) {
      gameState.stats.wins++;
      console.log(chalk.green("✔ Correct!\n"));
    } else {
      gameState.stats.losses++;
      console.log(chalk.red("✖ Wrong!\n"));
    }
  }

  // If the user finishes all questions before 30 seconds, stop the timer!
  clearTimeout(gameTimer);
  
  console.log(chalk.blue.bold(`GAME OVER! Final Score: ${gameState.stats.wins}/${gameState.questions.length}`));
  process.exit(0);
}

// THIS LINE ACTUALLY RUNS THE GAME:
startTrivia(gameState);