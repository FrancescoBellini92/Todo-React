import React from 'react';
import List from './List';

export default function Lists (props) {
    return (
        <ul className="list-group mb-5 pb-5">
            {props.lists.map((item) => <List key={item.id} {...props} removeList= {() =>props.removeList(item.id)} name={item.name} id={item.id}/>)}
        </ul>
    );
}