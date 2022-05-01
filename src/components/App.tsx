import React, { useEffect } from 'react';
import http from './_http';
import AddToDo from './add-todo';
import { useDispatch, useSelector } from 'react-redux';
import { setList } from '../reducers/todos-reducer';
import './App.css';
import ListToDo from './list-todo';
import EditToDo from './edit-todo';

const App: React.FunctionComponent = () => {
  let list = useSelector((state: any) => state.todos.list);
  const current = useSelector((state: any) => state.todos.current);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchList();
  }, []);

  async function fetchList() {
    const res = await http.get('/todos');
    dispatch(setList(res.data));
  }

  async function deleteTodo(item: any) {
    await http.delete(`/todos/delete/${item.id}`);
    await fetchList();
  }
  
  return (
    <div className="app">
      <h3>Pern To Do List</h3>
      <AddToDo
        newToDoAdded={async () => {
          await fetchList();
        }}
      />
      <ListToDo list={list} onDelete={(item: any) => deleteTodo(item)} />
      <EditToDo
        item={current}
        onSaved={async () => {
          await fetchList();
        }}
      />
    </div>
  );
};

export default App;
