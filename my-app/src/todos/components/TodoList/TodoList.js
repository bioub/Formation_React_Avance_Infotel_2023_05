import { Component, PureComponent } from 'react';

import TodoCount from '../TodoCount/TodoCount';
import TodoItem from '../TodoItem/TodoItem';

export default class TodoList extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   return this.props.items !== nextProps.items;
  // }


  render() {

  console.log('refresh TodoList');
    //    { count: 3, items: [], onDeleteItem: () => {}}
    const { count, items, onDeleteItem } = this.props;
    return (
      <div>
        <div className="TodoList">
          {items.map((it) => (
            <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
          ))}
        </div>
        <TodoCount count={count} />
        {/* createElement(TodoCount, { count: count }) */}
      </div>
    );
  }
}
