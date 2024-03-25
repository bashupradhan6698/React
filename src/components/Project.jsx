import { EditButton, DeleteButton } from "./Buttons"; /* named import */

let Project = ({ title, description, image }) => {
  // let { title, description, image } = props;
  // console.log(props);

  return (
    <div className="project">
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <EditButton />
      <DeleteButton />
    </div>
  );
};

/* default export */
export default Project;
