import React, { useState } from 'react';
import List from './List';
import { NavLink } from 'react-router-dom';
import { FaSearch } from './Icons';
import { ListHeader } from './Header';
import { ListAdderContainer } from '../containers/AdderContainer';
import { Footer } from '../components/Footer';
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

    function ListFooter () {
        const [searchValue, setSearchValue] = useState('');
        return (
            <div className="input-group">
              <input type="search" className="form-control" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Search..." />
              <div className="input-group-append">
                <NavLink  className="btn btn-primary" to={`/search/${searchValue}`} title="Search" aria-label="Search">
                  <FaSearch />
                </NavLink>
              </div>
            </div>
        )
      };

    useEffect(() => {getLists(match.params.name ? match.params.name : null)},[match.params.name]);

    return (
        <>
            <ListHeader />
            <div className="container list-container">
                <ListAdderContainer  />
                <Lists lists={lists} updateList={updateList} updateListOnBackend={updateListOnBackend} removeList={removeList} />
                <Footer>
                    <ListFooter />
                </Footer>
            </div>
        </>
    );
}