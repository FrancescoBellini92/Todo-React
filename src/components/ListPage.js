import React from 'react';
import Lists from './Lists';
import {ListAdderContainer} from '../containers/AdderContainer';

export default function ListPage ({lists, removeList, error}) {
    if (error.hasError) {
        throw new Error(error.errorMessage)
    }
    return (
    <div className="container">
        <ListAdderContainer  />
        <Lists lists={lists} removeList={removeList} />
    </div>
    );
}