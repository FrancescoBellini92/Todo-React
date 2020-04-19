import {connect} from 'react-redux';
import ListPage from '../components/ListPage';
import {getLists, updateList, updateListOnBackend, removeList} from '../actions/index';

function mapStateToProps({lists, error}) {
  return ({
    lists,
    error
  });
}

export const ListPageContainer = connect(mapStateToProps,{getLists, updateList, updateListOnBackend, removeList})(ListPage);