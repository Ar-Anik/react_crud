import { useRef } from "react";
import classes from "../styles/Crud.module.css";

function AddList({ setList }) {
  const nameRef = useRef();
  const semesterRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const semester = event.target.elements.semester.value;

    setList((previus) => {
      const newlist = {
        id: previus.length + 1,
        name,
        semester,
      };
      return previus.concat(newlist);
    });

    nameRef.current.value = "";
    semesterRef.current.value = "";
  };

  return (
    <form className={classes.addForm} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />

      <input
        type="text"
        name="semester"
        placeholder="Enter Semester"
        ref={semesterRef}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddList;
