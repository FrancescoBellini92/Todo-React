import React from 'react';
import List from './list';
import {listAdderContainer as ListAdderContainer} from '../containers/adderContainer';

export default function lists ({lists, removeList, error}) {
    if (error.hasError) {
        throw new Error(error.errorMessage)
    }
   
   return (
       <div className="container">
        <ListAdderContainer />
            <ul className="list-group">
                {lists.map( (item, index) => <List key={item.id} onRemove={ () => { removeList(item.id)}} name={item.name} id={item.id}/>)}
            </ul>
        </div>);
}