function useState(initialValue) {
  let mutatorFunction = () => {
    console.log("fucntion to change the initialValue");
  }
  return [initialValue, mutatorFunction]
}

let [value, setValue] = useState(100)
console.log(value);
setValue()