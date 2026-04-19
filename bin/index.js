#!/usr/bin/env node
import { program } from "commander";
import gameState from "../src/lib/state.js";
import { startTrivia } from "../src/lib/gameLogic.js";

program
  .name("trivia")
  .description("A simple trivia CLI")
  .action(() => startTrivia(gameState));

program.parse(process.argv);