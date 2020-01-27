import React from 'react';
import Item from './Item';

export default function list({removeTodo, completeTodo, items}) {
    return (
    <ul className="list-group">
        {items.map( (item, index) => <Item onComplete={() => {completeTodo(item.id)}} 
        onRemove={ () => {removeTodo(item.id)}} key={item.id} item={item}/>)}
    </ul>);
  }
  