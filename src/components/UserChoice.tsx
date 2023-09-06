import { LiaHandRock, LiaHandPaper, LiaHandScissors } from "react-icons/lia";

type UserChoiceProps = {
  userChoice: string;
  handleClick: (value: string) => void;
};

const UserChoice = ({ userChoice, handleClick }: UserChoiceProps) => {
  return (
    <div className="container-user-choice flex flex-col justify-center items-center gap-[60px]">
      {userChoice === "rock" ? (
        <div className="flex justify-center items-center border-[1px] rounded-full w-[190px] h-[190px] bg-white">
          <LiaHandRock className="text-[100px] text-orange-300 bg-white animate-jump-in" />
        </div>
      ) : userChoice === "paper" ? (
        <div className="flex justify-center items-center border-[1px] rounded-full w-[190px] h-[190px] bg-white">
          <LiaHandPaper className="text-[100px] text-orange-300 bg-white animate-jump-in" />
        </div>
      ) : userChoice === "scissors" ? (
        <div className="flex justify-center items-center border-[1px] rounded-full w-[190px] h-[190px] bg-white transform -scale-x-100">
          <LiaHandScissors className="text-[100px] text-orange-300 bg-white animate-jump-in" />
        </div>
      ) : (
        ""
      )}

      <div className="content-user-choice box-border flex justify-center items-center gap-[10px]">
        <div className="flex justify-center items-center border-[1px] border-neutral-600 rounded-full w-[80px] h-[80px]">
          <button onClick={() => handleClick("rock")}>
            <LiaHandRock className="text-[40px] text-orange-300 hover:text-[56px] hover:animate-pulse" />
          </button>
        </div>

        <div className="flex justify-center items-center border-[1px] border-neutral-600 rounded-full w-[80px] h-[80px]">
          <button onClick={() => handleClick("paper")}>
            <LiaHandPaper className="text-[40px] text-orange-300 hover:text-[56px] hover:animate-pulse" />
          </button>
        </div>

        <div className="flex justify-center items-center border-[1px] border-neutral-600 rounded-full w-[80px] h-[80px]">
          <button onClick={() => handleClick("scissors")}>
            <LiaHandScissors className="transform -scale-x-100 text-[40px] text-orange-300 hover:text-[56px] hover:animate-pulse" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserChoice;
