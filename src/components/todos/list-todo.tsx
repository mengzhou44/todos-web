import React from 'react';
import './list-todo.css';

import { useDispatch } from 'react-redux';
import { setCurrent } from '../../reducers/todos-reducer';

interface ListToDoProps {
  list: Array<any>;
  onDelete: (item: any) => void;
}

const ListToDo: React.FunctionComponent<ListToDoProps> = ({
  list,
  onDelete,
}) => {
  const dispatch = useDispatch();
  return (
    <table className="list-todo">
      <thead>
        <tr>
          <th>Description</th>
          <th className="align-right">Edit</th>
          <th className="align-right">Delete</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id} className="row">
            <td className="align-left">{item.description}</td>
            <td className="align-right">
              <button onClick={() => dispatch(setCurrent(item))}>Edit</button>
            </td>
            <td className="align-right">
              <button onClick={() => onDelete(item)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListToDo;
