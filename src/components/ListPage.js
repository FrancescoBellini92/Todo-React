import React from 'react';
import List from './List';
import { ListHeader } from './Header';
import { ListAdderContainer } from '../containers/AdderContainer';
import { ListFooter } from '../components/Footer';
import { useEffect } from 'react';

export default function ListPage ({lists, getLists, updateList, updateListOnBackend, removeList, error, match}) {
    
    if (error.hasError) {
        throw new Error(error.errorMessage)
    }
 
    function Lists () {
        return (
            <ul className="list-group mb-5 pb-5">
                {lists.map((list) => <List key={list.id} list={list} updateListOnBackend={() => updateListOnBackend(list.id, list.name)} removeList= {() =>removeList(list.id)} name={list.name} id={list.id}/>)}
            </ul>
        );
    }

    useEffect(() => {getLists(match.params.name ? match.params.name : null)},[match.params.name]);

    return (
        <>
            <ListHeader />
            <div className="container list-container">
                <ListAdderContainer  />
                <Lists lists={lists} updateList={updateList} updateListOnBackend={updateListOnBackend} removeList={removeList} />
                <ListFooter />
            </div>
        </>
    );
}