import { useCallback, useMemo, useState } from "react";
import Button from "./components/Button";
import ShowContent from "./components/ShowContent";
import Title from "./components/Title";

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const increaseby1 = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);
  
  const increaseby5 = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEven = useMemo(() => {
    let i = 0;
    while (i <= 1000000000) i += 1;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <>
      <Title />
      <ShowContent title="Counter 1" count={count1} />
      <Button handleClick={increaseby1}>Increase By 1</Button>
      <hr />
      {isEven ? "Counter 1 is Even" : "Counter 1 is Odd"}
      <ShowContent title="Counter 2" count={count2} />
      <Button handleClick={increaseby5}>Increase By 5</Button>
    </>
  );
}

export default App;
