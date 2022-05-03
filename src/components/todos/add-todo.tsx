import React, { useState } from 'react';
import http from '../_http';
import './add-todo.css';
import { getErrorMessage } from '../../utils/get-error-message';

interface AddToDoProps {
  newToDoAdded: () => void;
}

const AddToDo: React.FunctionComponent<AddToDoProps> = ({ newToDoAdded }) => {
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e: any) => {
    try {
      e.preventDefault();

      if (description !== '') {
        await http.post('/todos/add', {
          description,
        });

        setDescription('');
        newToDoAdded();

      }
    } catch (err) {
      console.log(getErrorMessage(err));
    }
  };

  return (
    <div className="add-todo">
      <form onSubmit={onSubmitForm}>
        <label htmlFor="description"> Description</label>
        <input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddToDo;
