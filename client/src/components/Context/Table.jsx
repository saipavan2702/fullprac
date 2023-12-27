import { useState } from "react";

export default function Table() {
  // eslint-disable-next-line no-unused-vars
  const [edit, setEdit] = useState(true);

  const arr = [
    {
      name: "Elijah Walters",
      age: "20",
      sex: "Male",
    },
    {
      name: "Rodhey",
      age: "35",
      sex: "Female",
    },
  ];

  const renderUsers = () => {
    return arr.map((ele, index) => {
      return edit === true ? (
        <tr key={index}>
          <td>
            <input type="text" value={ele.name} />
          </td>
          <td>
            <input type="text" value={ele.age} />
          </td>
          <td>
            <input type="text" value={ele.sex} />
          </td>
        </tr>
      ) : (
        <div>Hi</div>
      );
    });
  };

  const renderHeader = () => {
    return (
      <tr>
        {Object.keys(arr[0]).map((key, index) => (
          <th key={index}>{key}</th>
        ))}
      </tr>
    );
  };
  return (
    <table>
      {renderHeader()}
      <tbody>{renderUsers()}</tbody>
    </table>
  );
}
