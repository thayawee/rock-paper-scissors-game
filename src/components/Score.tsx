import { useEffect, useState } from "react";

type ScoreProps = {
  result: string;
};

const Score = ({ result }: ScoreProps) => {
  const [userScore, setUserScore] = useState<number>(0);

  const score = userScore + 1;

  useEffect(() => {
    switch (result) {
      case "YOU WIN!":
        setUserScore(score);
        break;
      case "":
        setUserScore(0);
        break;
    }
  }, [result]);

  return (
    <div
      className={
        userScore > 0
          ? "flex flex-col justify-center items-center gap-[20px] p-[20px] w-[180px] m-auto border-[1px] border-lime-300 rounded-[20px]"
          : "flex flex-col justify-center items-center gap-[20px] p-[20px] w-[180px] m-auto border-[1px] rounded-[20px]"
      }
    >
      <h1 className="font-bold text-[20px] uppercase">Score</h1>
      <p className="font-bold text-[40px] uppercase">{userScore}</p>
    </div>
  );
};

export default Score;
