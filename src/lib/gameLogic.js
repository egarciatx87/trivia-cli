import chalk from "chalk";
import { select } from "@inquirer/prompts";

export async function startTrivia(gameState) {
  for (const item of gameState.questions) {
    const userAnswer = await select({
      message: item.q,
      choices: item.choices.map(c => ({ name: c, value: c }))
    });

    if (userAnswer === item.a) {
      gameState.stats.wins++;
      console.log(chalk.green("✔ Correct!"));
    } else {
      gameState.stats.losses++;
      console.log(chalk.red("✖ Wrong!"));
    }
  }
  
  console.log(chalk.blue.bold(`\nFinal Score: ${gameState.stats.wins}/${gameState.questions.length}`));
  process.exit(0);
}