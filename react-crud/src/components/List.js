import { useState } from "react";
import AddList from "./AddList";
import EditList from "./EditList";
import classes from "../styles/Crud.module.css";

function Crud() {
  const list = [
    {
      id: 1,
      name: "Aubdur Rob Anik",
      semester: "4-2",
    },
    {
      id: 2,
      name: "Anisul Islam Oni",
      semester: "4-1",
    },
  ];

  const [lists, setLists] = useState(list);
  const [editNumber, setEditNumber] = useState(-1);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const semester = event.target.elements.semester.value;

    const newlst = lists.map((lst) =>
      lst.id === editNumber ? { ...lst, name: name, semester: semester } : lst
    );

    setLists(newlst);
    setEditNumber(-1);
  };

  const handleEdit = (id) => {
    setEditNumber(id);
  };

  const handleDelete = (id) => {
    const newlst = lists.filter((lst) => lst.id !== id);

    setLists(newlst);
  };

  return (
    <div className={classes.crud}>
      <div>
        <AddList setList={setLists} />
        <form onSubmit={handleSubmit}>
          <table>
            {lists.map((lst) =>
              lst.id === editNumber ? (
                <EditList lst={lst} />
              ) : (
                <tr>
                  <td>{lst.name}</td>
                  <td>{lst.semester}</td>
                  <td>
                    <button
                      className={classes.edit}
                      onClick={() => handleEdit(lst.id)}
                    >
                      Edit
                    </button>
                    <button
                      className={classes.delete}
                      onClick={() => handleDelete(lst.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </table>
        </form>
      </div>
    </div>
  );
}

export default Crud;
