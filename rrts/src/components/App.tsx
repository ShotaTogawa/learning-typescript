import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  render() {
    return <div>Hi there</div>;
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

// export defaultを使わない
export const App = connect(mapStateToProps, { fetchTodo })(_App);
