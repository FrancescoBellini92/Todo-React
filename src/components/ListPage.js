import React from 'react';
import Lists from './Lists';
import { ListAdderContainer } from '../containers/AdderContainer';
import { ListFooter } from '../components/Footer';
import { useEffect } from 'react';

export default function ListPage ({lists, getLists, updateList, updateListOnBackend, removeList, error, match}) {
    
    if (error.hasError) {
        throw new Error(error.errorMessage)
    }

    useEffect(() => {getLists(match.params.name ? match.params.name : null)},[match.params.name]);

    return (
    <div className="container list-container">
        <ListAdderContainer  />
        <Lists lists={lists} updateList={updateList} updateListOnBackend={updateListOnBackend} removeList={removeList} />
        <ListFooter />
    </div>
    );
}