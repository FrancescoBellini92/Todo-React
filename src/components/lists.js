import React from 'react';
import List from './List';

export default function Lists ({lists, updateList, removeList}) {
    return (
        <ul className="list-group mb-5 pb-5">
            {lists.map((item) => <List key={item.id} onUpdate={updateList} onRemove= {() =>removeList(item.id)} name={item.name} id={item.id}/>)}
        </ul>
    );
}