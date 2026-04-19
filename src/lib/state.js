const gameState = {
  stats: {
    wins: 0,
    losses: 0,
  },
  questions: [
    { q: "What does CLI stand for?", choices: ["Command Line Interface", "Code Line Index"], a: "Command Line Interface" },
    { q: "Is JavaScript single-threaded?", choices: ["Yes", "No"], a: "Yes" },
    { q: "Which tool 'colors' terminal text?", choices: ["Chalk", "Inquirer"], a: "Chalk" }
  ]
};

export default gameState;