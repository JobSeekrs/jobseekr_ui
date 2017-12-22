import React from 'react';

const emailList = (props) => {
  return (
    <tr>
      <td>{props.email.name}</td>
      <td>{props.email.email}</td>
      <td>{props.email.topic}</td>
      <td onClick={props.editEmail}>Edit</td>
      <td>Delete</td>
    </tr>
  );
}

export default emailList;