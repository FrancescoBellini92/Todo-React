import React from 'react';
import List from './List';

export default function Lists ({lists, removeList}) {
    return (
        <ul className="list-group">
            {lists.map((item) => <List key={item.id} onRemove={ () => { 
                removeList(item.id)}} name={item.name} id={item.id}/>)}
        </ul>
    );
}