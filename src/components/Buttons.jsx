export function EditButton() {
  let btnStyle = { backgroundColor: "grey", color: "white" };
  return <button style={btnStyle}>edit</button>;
}

export function DeleteButton() {
  return (
    <button style={{ backgroundColor: "red", color: "white" }}>delete</button>
  );
}

/* named export */
/* export default{
  EditButton,
  DeleteButton
} */
