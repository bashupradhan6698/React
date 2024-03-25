import { EditButton, DeleteButton } from "./Buttons";

const Course = () => {
  return (
    <div className="course">
      <h3>MERN</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam
        nihil ea praesentium quas est sit rerum illum molestias? Accusamus!
      </p>
      <EditButton />
      <DeleteButton />
    </div>
  );
};

export default Course;
