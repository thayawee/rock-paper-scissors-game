import { LiaHandPaper, LiaHandRock, LiaHandScissors } from "react-icons/lia";

type ComputerChoiceProps = {
  computerChoice: string;
};

const ComputerChoice = ({ computerChoice }: ComputerChoiceProps) => {
  return (
    <div className="container-computer-choice">
      {computerChoice === "rock" ? (
        <div className="flex justify-center items-center border-[1px] rounded-full w-[200px] h-[200px] bg-white">
          <LiaHandRock className="text-[100px] text-sky-300 bg-white animate-jump-in" />
        </div>
      ) : computerChoice === "paper" ? (
        <div className="flex justify-center items-center border-[1px] rounded-full w-[200px] h-[200px] bg-white">
          <LiaHandPaper className="text-[100px] text-sky-300 bg-white animate-jump-in" />
        </div>
      ) : computerChoice === "scissors" ? (
        <div className="flex justify-center items-center border-[1px] rounded-full w-[200px] h-[200px] bg-white">
          <LiaHandScissors className="text-[100px] text-sky-300 bg-white animate-jump-in" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ComputerChoice;
