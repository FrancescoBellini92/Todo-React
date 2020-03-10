import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaSearch } from './Icons';
import { ListHeader } from './Header';
import Main from './Main';
import { ListAdderContainer } from '../containers/AdderContainer';
import {BaseList, DecoratedList } from './BaseList';
import List from './List';
import { Footer } from '../components/Footer';

export default function ListPage ({lists, getLists, updateList, updateListOnBackend, removeList, error, match}) {

	if (error.hasError) {
    throw new Error(error.errorMessage)
	}

	function ListFooter () {
		const [searchValue, setSearchValue] = useState('');
		return (
			<div className="input-group">
				<input type="search" className="form-control" aria-label="search input" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Search..." />
				<div className="input-group-append">
					<NavLink  className="btn btn-primary" title="search" to={`/search/${searchValue}`} aria-label="search">
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
			<Main >
			<div className="container">
				<ListAdderContainer  />
				<DecoratedList array={lists}>
					<BaseList>
						{lists.map(list => <List 
							key={list.id} list={list}
							updateList={updateList}
								updateListOnBackend={() => updateListOnBackend(list.id, list.name)} 
								removeList= {() =>removeList(list.id)} 
								name={list.name} 
								id={list.id}/>)
						}
					</BaseList>
				</DecoratedList>
				</div>
				</Main>
				<Footer>
					<ListFooter />
				</Footer>
		</>
	);
}

ListPage.propTypes = {
  lists: PropTypes.array.isRequired,
  getLists: PropTypes.func.isRequired,
  updateList: PropTypes.func.isRequired,
  updateListOnBackend: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired,
  error: PropTypes.shape({
    hasError: PropTypes.bool,
    message: PropTypes.string
  }),
};