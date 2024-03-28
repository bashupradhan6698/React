import { Fragment, useState } from "react";

/* fragment <></>
hook: anything that starts with use and functionname
eg: useState, useEffect
 */
let count = 0;

const Counter = () => {
  console.log("re-render");

  // let initialValue = 100;
  const [value, setValue] = useState(0); //useState function internally returns array . for ref see: temp.js
  function increment() {
    count++;
    console.log({ count });
    setValue(value + 1);
  }

  const decrement = () => {
    setValue(value - 1);
  };

  const reset = () => {
    setValue(0);
  };
  // console.log(value);
  return (
    <Fragment>
      <h1>Counter: {count}</h1>
      <h1>Value: {value}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </Fragment>
  );
};

export default Counter;
