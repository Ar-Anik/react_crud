import { useState } from "react";

function EditList({ lst }) {
  const [name, setName] = useState(lst.name);
  const [semester, setSemester] = useState(lst.semester);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSemester = (event) => {
    setSemester(event.target.value);
  };

  return (
    <tr>
      <td>
        <input type="text" name="name" value={name} onChange={handleName} />
      </td>

      <td>
        <input
          type="text"
          name="semester"
          value={semester}
          onChange={handleSemester}
        />
      </td>

      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
}

export default EditList;
