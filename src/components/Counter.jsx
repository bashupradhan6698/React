import { Fragment, useState } from "react";
import { render } from "react-dom";

/* fragment <></>
hook: anything that starts with use and functionname
eg: useState, useEffect
 */

export default () => {
  const [value, setValue] = useState(10);
  let count = 1;
  function increment() {
    count++;
    setValue(value + 1);
    console.log({ count });
  }
  console.log("render");

  return (
    <Fragment>
      <h1>Counter: {count}</h1>
      <h1>Value: {value}</h1>
      <button onClick={increment}>Increment</button>
    </Fragment>
  );
};
