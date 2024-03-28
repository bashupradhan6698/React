import Counter from "./Counter";
import Course from "./Course";
import Project from "./Project";
import Todos from "./Todos";

function Home() {
  return (
    <>
      <Counter />
      <hr />
      <h1>Projects</h1>
      <div className="projects">
        {/*passing value in a function in javascript or ina a normal function
      Products(title1)
      Products(title2)
      Products(title3)
      */}
        <Project
          title="One"
          description="desone"
          image="https://picsum.photos/200/300"
        />
        {/* title and description are props rather than attribute */}
        <Project
          title="Two"
          description="destwo"
          image="https://picsum.photos/200/300"
        />
        <Project
          title="Three"
          description="desthree"
          image="https://picsum.photos/200/300"
        />
      </div>
      <hr />
      <h1>Courses</h1>
      <div className="courses">
        <Course />
        <Course />
        <Course />
      </div>

      <hr />

      <Todos />
    </>
  );
}

export default Home;
