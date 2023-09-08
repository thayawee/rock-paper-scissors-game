import { LiaHandPaper, LiaHandRock, LiaHandScissors } from "react-icons/lia";

type ComputerChoiceProps = {
  computerChoice: string;
};

const ComputerChoice = ({ computerChoice }: ComputerChoiceProps) => {
  return (
    <div className="container-computer-choice">
      {computerChoice === "rock" ? (
        <>
          <div className="flex justify-center items-center border-[1px] rounded-full w-[190px] h-[190px] bg-white">
            <LiaHandRock className="text-[100px] text-sky-300 bg-white animate-jump-in" />
          </div>
          <p className="uppercase font-bold text-center text-[14px] tracking-[2px] text-sky-300 mt-[15px]">
            Computer
          </p>
        </>
      ) : computerChoice === "paper" ? (
        <>
          <div className="flex justify-center items-center border-[1px] rounded-full w-[190px] h-[190px] bg-white">
            <LiaHandPaper className="text-[100px] text-sky-300 bg-white animate-jump-in" />
          </div>
          <p className="uppercase font-bold text-center text-[14px] tracking-[2px] text-sky-300 mt-[15px]">
            Computer
          </p>
        </>
      ) : computerChoice === "scissors" ? (
        <>
          <div className="flex justify-center items-center border-[1px] rounded-full w-[190px] h-[190px] bg-white">
            <LiaHandScissors className="text-[100px] text-sky-300 bg-white animate-jump-in" />
          </div>
          <p className="uppercase font-bold text-center text-[14px] tracking-[2px] text-sky-300 mt-[15px]">
            Computer
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ComputerChoice;
