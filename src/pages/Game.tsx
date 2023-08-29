import { useState } from "react";
import UserChoice from "../components/UserChoice";
import ComputerChoice from "../components/ComputerChoice";
import Result from "../components/Result";

const Game = () => {
  const [userChoice, setUserChoice] = useState<string>("");
  const [computerChoice, setComputerChoice] = useState<string>("");
  const [newGame, setNewGame] = useState<boolean>(false);

  const choices = ["rock", "paper", "scissors"];

  const handleClick = (value: string) => {
    setUserChoice(value);
    generateComputerChoice();
    setNewGame(true);
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const resetGame = () => {
    setNewGame(false);
    setUserChoice("");
    setComputerChoice("");
  };

  return (
    <div className="container-game relative box-border border-[1px] rounded-[20px] w-[1000px] p-[40px] pt-[90px] m-auto my-[60px]">
      <div className="logo-game absolute z-50 top-[-65px] right-[416px] flex flex-col justify-center items-center leading-[40px] rounded-[20px] w-[160px] p-[10px] animate-jump">
        <p className="font-bold text-[50px] te">ROCK</p>
        <p className="font-bold text-[40px]">PAPER</p>
        <p className="font-bold text-[25px] leading-[25px]">SCISSORS</p>
      </div>

      <div className="content-game flex flex-col justify-center items-center gap-[60px]">
        <Result userChoice={userChoice} computerChoice={computerChoice} />

        <div
          className={
            computerChoice && userChoice
              ? "flex gap-[160px] m-auto mr-[90px]"
              : "flex m-auto"
          }
        >
          <ComputerChoice computerChoice={computerChoice} />
          <UserChoice userChoice={userChoice} handleClick={handleClick} />
        </div>

        {newGame ? (
          <button
            onClick={resetGame}
            className="rounded-[10px] py-[10px] px-[20px] hover:bg-zinc-700 hover:font-bold hover:tracking-[2px] hover:animate-pulse"
          >
            NEW GAME
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Game;
