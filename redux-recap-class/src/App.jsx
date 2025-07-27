// import Counter from "./components/Counter";
// import Stats from "./components/Stats";
// import { useDispatch, useSelector } from "react-redux";
// import {increment, decrement} from './features/counters/countersSlice'

import Posts from "./components/Posts";
import { useState } from "react";

export default function App() {
  const [showPosts, setShowPosts] = useState(true)
  
  // const counters = useSelector((state) => state.counters);
  // // console.log(counters);
  
  // const dispatch = useDispatch()

  // const handleIncrement = (counterId) => {
  //   // const updatedCounters = counters.map((counter) =>
  //   //   counter.id === counterId
  //   //     ? { ...counter, value: counter.value + 1 }
  //   //     : counter
  //   // );
  //   // setCounters(updatedCounters);

  //   dispatch(increment(counterId))

  // };

  // const handleDecrement = (counterId) => {
  //   // const updatedCounters = counters.map((counter) =>
  //   //   counter.id === counterId
  //   //     ? { ...counter, value: counter.value - 1 }
  //   //     : counter
  //   // );
  //   // setCounters(updatedCounters);

  //   dispatch(decrement(counterId))
  // };

  // const totalCount = counters.reduce((sum, counter) => sum + counter.value, 0);

  return (
    <div className="w-screen h-full p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        RTK Query
      </h1>
      <button
        onClick={() => setShowPosts((prevState) => !prevState)}
        className="bg-slate-900 rounded text-white px-4 py-2"
      >
        Toggle Button
      </button>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        {/* {counters.map((counter) => (
          <div key={counter.id}>
            <Counter
              count={counter.value}
              handleDecrement={() => handleDecrement(counter.id)}
              handleIncrement={() => handleIncrement(counter.id)}
            />
          </div>
        ))}
        <Stats totalCount={totalCount} /> */}
        {showPosts && <Posts />}
      </div>
      
      
    </div>
  );
}
