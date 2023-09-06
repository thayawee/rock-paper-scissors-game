import { useEffect, useState } from "react";
import Score from "./Score";

type ResultProps = {
  userChoice: string;
  computerChoice: string;
};

const Result = ({ userChoice, computerChoice }: ResultProps) => {
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    switch (userChoice + computerChoice) {
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
        setResult("YOU WIN!");
        break;
      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
        setResult("YOU LOSE!");
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        setResult("DRAW!");
        break;
      case "":
        setResult("");
        break;
    }
  }, [userChoice, computerChoice]);

  return (
    <div className="flex flex-col justify-center items-center gap-[20px]">
      <Score result={result} />
      <p className="font-bold text-[36px] uppercase">{result}</p>
    </div>
  );
};

export default Result;
