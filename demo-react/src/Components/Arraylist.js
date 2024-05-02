import React from "react";

const Arraylist = ({lists}) => {
  return (
    <div>
      <tr key={lists.id}>
        <td>{lists.name}</td>
        <td>{lists.address}</td>
      </tr>
    </div>
  );
};
export default Arraylist;
