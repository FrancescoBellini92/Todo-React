import React from 'react';
import Lists from './Lists';
import {ListAdderContainer} from '../containers/AdderContainer';
import {FooterContainer} from '../containers/FooterContainer';
import { useEffect } from 'react';

export default function ListPage ({lists, getLists, updateList, removeList, error, match}) {
    if (error.hasError) {
        throw new Error(error.errorMessage)
    }
    useEffect(() => {getLists(match.params.name ? match.params.name : null)},[match.params.name]);

    return (
    <div className="container list-container">
        <ListAdderContainer  />
        <Lists lists={lists} updateList={updateList} removeList={removeList} />
        <FooterContainer />
    </div>
    );
}