import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrent } from '../reducers/todos-reducer';
import http from './_http';
import './edit-todo.css';

interface EditToDoProps {
  item: any;
  onSaved: () => void;
}
const EditToDo: React.FunctionComponent<EditToDoProps> = ({
  item,
  onSaved,
}) => {
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (item !== null) {
      setDesc(item.description);
    }
  }, [item]);

  async function onSubmit() {
    await http.put(`/todos/edit/${item.id}`, {
      description: desc,
    });
    dispatch(setCurrent(null));
    onSaved();
  }

  if (item === null) return <Fragment />;
  return (
    <div className="modal">
      <div className="modal-content">
        <button
          className="btn-close"
          onClick={() => dispatch(setCurrent(null))}
        >
          X
        </button>
        <div className="entry">
          <label htmlFor="description" >Description</label>
          <input
            id='description'
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button onClick={() => onSubmit()}>Save</button>
          <button onClick={() => dispatch(setCurrent(null))}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditToDo;
